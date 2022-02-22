import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloPartidos from './Partidos_Model';
import IPartidos from './Partidos_Interface';
import {TipoZona} from '../../Config/enumeradores';

class PartidosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoPartidos = await modeloPartidos.find();
      responder.sucess(req, res, listadoPartidos);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregarResultado(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(req, res, 'Falta id de partido', 'Falta id de partido', 400);
      } else {
        modeloPartidos
          .findById(req.body._id)
          .populate('idZona')
          .then((partidoEncontrado: any) => {
            if (!partidoEncontrado) {
              responder.error(
                req,
                res,
                'No se encontro el partido solicitado',
                'No se encontro el partido solicitado',
                400
              );
            } else {
              if (!partidoEncontrado.idZona?.equipos?.length) {
                responder.error(
                  req,
                  res,
                  'Zona no encontrada o sin equipos',
                  'Zona no encontrada o sin equipos',
                  400
                );
              } else {
                let datosEquipoLocal;
                let datosEquipoVisitante;
                partidoEncontrado.idZona.equipos.forEach((equipo: any) => {
                  if (equipo._id.toString() === req.body.idEquipoLocal.toString()) {
                    datosEquipoLocal = {
                      partidosG: equipo.partidosG,
                      partidosJ: equipo.partidosJ,
                      partidosE: equipo.partidosE,
                      partidosP: equipo.partidosP,
                      puntos: equipo.puntos,
                      golesAFavor: equipo.golesAFavor,
                      golesEnContra: equipo.golesEnContra,
                    };
                  }
                  if (equipo._id.toString() === req.body.idEquipoVisitante.toString()) {
                    datosEquipoVisitante = {
                      partidosG: equipo.partidosG,
                      partidosJ: equipo.partidosJ,
                      partidosE: equipo.partidosE,
                      partidosP: equipo.partidosP,
                      puntos: equipo.puntos,
                      golesAFavor: equipo.golesAFavor,
                      golesEnContra: equipo.golesEnContra,
                    };
                  }
                });
                const respuesta = modelarDatosParaCargarResultadoDePartido(
                  partidoEncontrado,
                  req.body,
                  datosEquipoLocal,
                  datosEquipoVisitante
                );
                respuesta
                  .then((datosParaGuardar: any) => {
                    partidoEncontrado.resultadoVisitante = req.body.resultadoVisitante;
                    partidoEncontrado.resultadoLocal = req.body.resultadoLocal;
                    partidoEncontrado.penalesLocal = req.body.penalesLocal;
                    partidoEncontrado.penalesVisitante = req.body.penalesVisitante;
                    partidoEncontrado
                      .save()
                      .then((partidoActualizado: any) => {
                        let equiposActualizados: object[] = [];
                        partidoEncontrado.idZona.equipos.forEach((equipo: any) => {
                          if (equipo._id.toString() === req.body.idEquipoLocal.toString()) {
                            equiposActualizados.push({
                              _id: equipo._id,
                              partidosG: datosParaGuardar.equipoLocal.partidoG,
                              partidosE: datosParaGuardar.equipoLocal.partidosE,
                              partidosP: datosParaGuardar.equipoLocal.partidosP,
                              partidosJ: datosParaGuardar.equipoLocal.partidosJ,
                              golesAFavor: datosParaGuardar.equipoLocal.golesAFavor,
                              golesEnContra: datosParaGuardar.equipoLocal.golesEnContra,
                              puntos: datosParaGuardar.equipoLocal.puntos,
                              isEliminado: equipo.isEliminado,
                              comentarios: equipo.comentarios,
                            });
                          } else {
                            if (equipo._id.toString() === req.body.idEquipoVisitante.toString()) {
                              equiposActualizados.push({
                                _id: equipo._id,
                                partidosG: datosParaGuardar.equipoVisitante.partidoG,
                                partidosE: datosParaGuardar.equipoVisitante.partidosE,
                                partidosP: datosParaGuardar.equipoVisitante.partidosP,
                                partidosJ: datosParaGuardar.equipoVisitante.partidosJ,
                                golesAFavor: datosParaGuardar.equipoVisitante.golesAFavor,
                                golesEnContra: datosParaGuardar.equipoVisitante.golesEnContra,
                                puntos: datosParaGuardar.equipoVisitante.puntos,
                                isEliminado: equipo.isEliminado,
                                comentarios: equipo.comentarios,
                              });
                            } else {
                              equiposActualizados.push(equipo);
                            }
                          }
                        });
                        partidoEncontrado.idZona.equipos = [...equiposActualizados];
                        partidoEncontrado.idZona
                          .save()
                          .then((zonaActualizada: any) => {
                            partidoActualizado.idZona = zonaActualizada;
                            responder.sucess(req, res, partidoActualizado, '', 200);
                          })
                          .catch((error: any) => {
                            responder.error(
                              req,
                              res,
                              error,
                              'El partido fue actualizado pero los equipos en su zona no',
                              409
                            );
                          });
                      })
                      .catch((error: any) => {
                        responder.error(req, res, error, 'Error interno de servidor', 500);
                      });
                  })
                  .catch((error: any) => {
                    responder.error(req, res, error, error.message, error.status);
                  });
              }
            }
          })
          .catch(error => {
            responder.error(req, res, error, 'Error interno del servidor', 500);
          });
      }
    } catch (error) {
      responder.error(req, res, error, 'Error interno del servidor', 500);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const datosBody = req.body;
      if (
        !req.body.idZona ||
        !req.body.idTorneo ||
        !req.body.idEquipoLocal ||
        !req.body.idEquipoVisitante ||
        !req.body.fechaPorJugar
      ) {
        responder.error(
          req,
          res,
          '',
          `Faltan datos necesarios : ${req.body.idZona ? '' : 'zona,'} ${
            req.body.idTorneo ? '' : 'torneo,'
          }  ${req.body.idEquipoLocal ? '' : 'equipo local,'}  ${
            req.body.idEquipoVisitante ? '' : 'equipo visitante,'
          }  ${req.body.fechaPorJugar ? '' : 'fecha por jugar'}`,
          400
        );
      } else {
        if (datosBody.idEquipoLocal.toString() === datosBody.idEquipoVisitante.toString()) {
          responder.error(
            req,
            res,
            '',
            'No puede crear un enfrentamiento entre el mismo equipo',
            400
          );
        } else {
          const nuevoPartido: IPartidos = new modeloPartidos(req.body);
          nuevoPartido
            .save()
            .then((resultado: any) => {
              responder.sucess(req, res, resultado, 'Partido insertado correctamente');
            })
            .catch(error => {
              if (error.errors) {
                responder.error(
                  req,
                  res,
                  error.errors['validate'],
                  error.errors['validate'].message,
                  error.errors['validate'].value
                );
              } else {
                responder.error(req, res, '', 'Error al insertar el partido', 500);
              }
            });
        }
      }
    } catch (error) {
      responder.error(req, res, error, 'Error interno del servidor', 500);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idPartido = req.params.id;
      const partido = await modeloPartidos.find({_id: idPartido});
      responder.sucess(req, res, partido);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const partidoBody = req.body;
      if (partidoBody._id) {
        modeloPartidos.findById(partidoBody._id).then(async (partido: any) => {
          if (partido) {
            partido.equipoLocal = partidoBody.equipoLocal;
            partido.equipoVisitante = partidoBody.equipoVisitante;
            partido.resultadoLocal = partidoBody.resultadoLocal;
            partido.resultadoVisitante = partidoBody.resultadoVisitante;
            partido.penalesLocal = partidoBody.penalesLocal;
            partido.penalesVisitante = partidoBody.penalesVisitante;
            partido.fechaPartido = partidoBody.fechaPartido;
            partido.estadio = partidoBody.estadio;
            partido.posicionFixture = partidoBody.posicionFixture;
            partido.comentarios = partidoBody.comentarios;
            partido.campeonato = partidoBody.campeonato;
            partido.idTabla = partidoBody.idTabla;

            const resultado = await partido.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Partido no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Partido no encontrado');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const partidoEliminada = await modeloPartidos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, partidoEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerPartidos() {
    var dia = 1000 * 60 * 60 * 24;
    var partidosARetornar: any = [];
    var fechaActual: Date = new Date();
    var fechaActualParse: any = new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      fechaActual.getDay()
    );

    const partidos = await modeloPartidos.find({});
    if (partidos && partidos.length) {
      for await (const partido of partidos) {
        let fechaPartido: Date = new Date(partido.fechaPartido);
        let fechaPartidoParse: any = new Date(
          fechaPartido.getFullYear(),
          fechaPartido.getMonth(),
          fechaPartido.getDay()
        );

        let diferenciaEntreFechasAnterior = (fechaPartidoParse - fechaActualParse) / dia;
        if (diferenciaEntreFechasAnterior > 0 && diferenciaEntreFechasAnterior <= 30) {
          partidosARetornar.push(partido);
        }

        let diferenciaEntreFechasPosterior = (fechaActualParse - fechaPartidoParse) / dia;
        if (diferenciaEntreFechasPosterior >= 90) {
          partidosARetornar.push(partido);
        }
      }
    }

    return partidosARetornar;
  }

  public async obtenerPartidosPorIdZona(req: Request, res: Response) {
    try {
      let idZona = req.params.idZona;
      if (idZona) {
        const partidos = await modeloPartidos.find({idZona: idZona});
        if (partidos && partidos.length) {
          responder.sucess(req, res, partidos);
        } else {
          responder.error(req, res, '', 'No se encontró ningun partido', 400);
        }
      } else {
        responder.error(req, res, '', 'No se encontró el id de la zona', 400);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminarPartidosPorIdZona(req: Request, res: Response) {
    try {
      let idZona = req.params.idZona;
      if (idZona) {
        const partidos = await modeloPartidos.find({idZona: idZona});

        if (partidos && partidos.length) {
          for await (const partido of partidos) {
            await modeloPartidos.findByIdAndDelete(partido._id);
          }
        } else {
          responder.error(req, res, 400, 'No se encontraron partidos para eliminar');
        }
        responder.sucess(req, res, partidos, 'Partidos eliminados correctamente');
      } else {
        responder.error(req, res, '', 'No se encontró el id de la zona', 400);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const partidosController = new PartidosController();

const modelarDatosParaCargarResultadoDePartido = (
  partido: any,
  nuevosDatos: any,
  equipoLocal: any,
  equipoVisitante: any
) => {
  try {
    const equipoLocalDiferentes =
      partido.idEquipoLocal?.toString() !== nuevosDatos.idEquipoLocal?.toString();
    const equipoVisitanteDiferentes =
      partido.idEquipoVisitante.toString() !== nuevosDatos.idEquipoVisitante.toString();
    const promesa = new Promise(async (resolve: any, reject: any) => {
      if (
        equipoLocalDiferentes ||
        equipoVisitanteDiferentes ||
        !(nuevosDatos.resultadoLocal || nuevosDatos.resultadoLocal === 0) ||
        !(nuevosDatos.resultadoVisitante || nuevosDatos.resultadoVisitante === 0)
      ) {
        reject({
          error: 'Error controlado por modelarDatosParaCargarResultadoDePartido',
          message: `Datos incorrectos:${
            equipoLocalDiferentes ? '(Equipo local falta o es diferente al del partido)' : ''
          } ${
            equipoVisitanteDiferentes
              ? '(Equipo visitante falta o es diferente al del partido)'
              : ''
          } ${
            !(nuevosDatos.resultadoLocal || nuevosDatos.resultadoLocal === 0)
              ? '(falta resultado local)'
              : ''
          } ${
            !(nuevosDatos.resultadoVisitante || nuevosDatos.resultadoVisitante === 0)
              ? '(falta resultado visitante)'
              : ''
          }`,
          status: 400,
        });
      } else {
        if (!equipoLocal || !equipoVisitante) {
          reject({
            error: 'Error controlado por modelarDatosParaCargarResultadoDePartido',
            message: 'Error interno del servidor',
            status: 500,
          });
        } else {
          if (
            parseInt(nuevosDatos.penalesLocal) >= 0 &&
            parseInt(nuevosDatos.penalesVisitante) >= 0 &&
            parseInt(nuevosDatos.penalesLocal) !== parseInt(nuevosDatos.penalesVisitante)
          ) {
            if (partido.idZona.tipoZona === TipoZona.FaseGrupo) {
              if (parseInt(nuevosDatos.penalesLocal) > parseInt(nuevosDatos.penalesVisitante)) {
                resolve(
                  modelEquipoFaseGrupo('ganoLocal', equipoLocal, equipoVisitante, nuevosDatos)
                );
              } else {
                resolve(
                  modelEquipoFaseGrupo('ganoVisitante', equipoLocal, equipoVisitante, nuevosDatos)
                );
              }
            } else {
              reject({
                error: 'Error controlado por modelarDatosParaCargarResultadoDePartido',
                message:
                  'Aun no esta implementado cargar resultados para zonas de tipo Eliminatoria ni EliminatoriaConDG',
                status: 418,
              });
            }
            // resolve(
            //   parseInt(nuevosDatos.penalesLocal) > parseInt(nuevosDatos.penalesVisitante)
            //     ? 'gano local'
            //     : 'gano visitante'
            // );
          } else {
            if (nuevosDatos.resultadoLocal === nuevosDatos.resultadoVisitante) {
              resolve(modelEquipoFaseGrupo('empate', equipoLocal, equipoVisitante, nuevosDatos));
            } else {
              if (nuevosDatos.resultadoLocal > nuevosDatos.resultadoVisitante) {
                // resolve('Gano local');
                resolve(
                  modelEquipoFaseGrupo('ganoLocal', equipoLocal, equipoVisitante, nuevosDatos)
                );
              } else {
                // resolve('Gano visitante');
                resolve(
                  modelEquipoFaseGrupo('ganoVisitante', equipoLocal, equipoVisitante, nuevosDatos)
                );
              }
            }
          }
        }
      }
    });
    return promesa;
  } catch (error: any) {
    return error;
  }
};
const modelEquipoFaseGrupo = (
  resultado: string,
  equipoLocal: any,
  equipoVisitante: any,
  nuevosDatos: any
) => {
  switch (resultado) {
    case 'ganoLocal':
      return {
        equipoLocal: {
          ...equipoLocal,
          partidosG: equipoLocal.partidosG + 1,
          partidosJ: equipoLocal.partidosJ + 1,
          puntos: equipoLocal.puntos + 3,
          golesAFavor: equipoLocal.golesAFavor + nuevosDatos.resultadoLocal,
          golesEnContra: equipoLocal.golesEnContra + nuevosDatos.resultadoVisitante,
        },
        equipoVisitante: {
          ...equipoVisitante,
          partidosP: equipoVisitante.partidosP + 1,
          partidosJ: equipoVisitante.partidosJ + 1,
          golesAFavor: equipoVisitante.golesAFavor + nuevosDatos.resultadoVisitante,
          golesEnContra: equipoVisitante.golesEnContra + nuevosDatos.resultadoLocal,
        },
      };

    case 'ganoVisitante':
      return {
        equipoLocal: {
          ...equipoLocal,
          partidosJ: equipoLocal.partidosJ + 1,
          partidosP: equipoLocal.partidosP + 1,
          golesAFavor: equipoLocal.golesAFavor + nuevosDatos.resultadoLocal,
          golesEnContra: equipoLocal.golesEnContra + nuevosDatos.resultadoVisitante,
        },
        equipoVisitante: {
          ...equipoVisitante,
          partidosG: equipoVisitante.partidosG + 1,
          partidosJ: equipoVisitante.partidosJ + 1,
          puntos: equipoVisitante.puntos + 3,
          golesAFavor: equipoVisitante.golesAFavor + nuevosDatos.resultadoVisitante,
          golesEnContra: equipoVisitante.golesEnContra + nuevosDatos.resultadoLocal,
        },
      };
    default:
      return {
        equipoLocal: {
          ...equipoLocal,
          partidosJ: equipoLocal.partidosJ + 1,
          puntos: equipoLocal.puntos + 1,
          golesAFavor: equipoLocal.golesAFavor + nuevosDatos.resultadoLocal,
          golesEnContra: equipoLocal.golesEnContra + nuevosDatos.resultadoVisitante,
        },
        equipoVisitante: {
          ...equipoVisitante,
          partidosJ: equipoVisitante.partidosJ + 1,
          puntos: equipoVisitante.puntos + 1,
          golesAFavor: equipoVisitante.golesAFavor + nuevosDatos.resultadoVisitante,
          golesEnContra: equipoVisitante.golesEnContra + nuevosDatos.resultadoLocal,
        },
      };
  }
};
