import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloTablas from './Tablas_Model';
import ITablas from './Tablas_Interface';
import ICampeonatos from '../Torneos/Torneos_Interface';
import {torneosController} from '../Torneos/Torneos_Controller';
import {TipoZona, Division} from '../../Config/enumeradores';

class TablasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoTablas = await modeloTablas.find();
      responder.sucess(req, res, listadoTablas);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const tabla: ITablas = new modeloTablas(req.body);
      await tabla.save();
      // const datosBody = req.body;
      // if (!datosBody || !datosBody.torneoId || !datosBody.zonaId || !datosBody.equipos) {
      //   responder.error(req, res, '', 'No se ingresaron datos');
      // } else {
      // }
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idTabla = req.params.id;
      const tabla = await modeloTablas.find({_id: idTabla});
      responder.sucess(req, res, tabla);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const tablaBody = req.body;
      if (tablaBody._id) {
        modeloTablas.findById(tablaBody._id).then(async (tabla: any) => {
          if (tabla) {
            // tabla.equipo1 = tablaBody.equipo1;
            // tabla.equipo2 = tablaBody.equipo2;
            // tabla.isEquipo2Eliminado = tablaBody.isEquipo2Eliminado;
            tabla.idCampeonato = tablaBody.idCampeonato;
            tabla.zona = tablaBody.zona;
            // tabla.pGanados = tablaBody.pGanados;
            // tabla.pEmpatados = tablaBody.pEmpatados;
            // tabla.pPerdidos = tablaBody.pPerdidos;
            // tabla.pJugados = tablaBody.pJugados;
            // tabla.golesAFavor = tablaBody.golesAFavor;
            // tabla.golesEnContra = tablaBody.golesEnContra;
            // tabla.difGoles = tablaBody.difGoles;
            tabla.puntos = tablaBody.puntos;
            // tabla.posicionEnTabla = tablaBody.posicionEnTabla;
            tabla.comentarios = tablaBody.comentarios;

            const resultado = await tabla.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Tabla no encontrada');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Tabla no encontrada');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const tablaEliminada = await modeloTablas.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, tablaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async equiposNoEliminados(req: Request, res: Response) {
    try {
      let equiposNoEliminados: any = [];
      const datosBody = req.body;

      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        const campeonato = await torneosController.obtenerTorneo(
          datosBody.idCampeonato,
          datosBody.idCategoria
        );

        if (campeonato && Object.keys(campeonato.idCategoria).length) {
          // Traer la tabla de ese campeonato
          const tablas = await modeloTablas
            .find({idCampeonato: datosBody.idCampeonato})
            .populate('idEquipos');
          if (tablas.length) {
            tablas.forEach((tabla: ITablas) => {
              if (tabla.tipoZona === TipoZona.Eliminatoria) {
                if (campeonato.idSubcategoria.length) {
                  campeonato.idSubcategoria.forEach((item: any) => {
                    if (item._id.toString() === datosBody.idSubcategoria) {
                      if (tabla.idEquipos.length) {
                        tabla.idEquipos.forEach((equipo: any) => {
                          if (!equipo.isEliminado) {
                            console.log(equipo.nombreEquipo);
                            equiposNoEliminados.push(equipo);
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          } else {
            res.status(400).send({message: 'El campeonato ingresado no posee tabla'});
          }

          if (equiposNoEliminados.length) {
            res.status(200).send(equiposNoEliminados);
          } else {
            res.status(200).send([]);
          }
        } else {
          res.status(400).send({message: 'El campeonato ingresado no existe'});
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async crearTabla(datos: any) {
    try {
      let tablaPrimera: any;
      let tablaReserva: any;
      const pr = new Promise(async (resolve: any, reject: any) => {
        if (datos) {
          if (datos.tipoZona === TipoZona.FaseGrupo) {
            const nuevaTablaPrimera: ITablas = new modeloTablas();
            nuevaTablaPrimera.idCampeonato = datos.idCampeonato;
            nuevaTablaPrimera.zona = datos.zona;
            nuevaTablaPrimera.tipoZona = datos.tipoZona;
            nuevaTablaPrimera.division = Division.Primera;

            if (datos.equipos && datos.equipos.length) {
              for await (const equipo of datos.equipos) {
                if (!nuevaTablaPrimera.idEquipos.includes(equipo)) {
                  nuevaTablaPrimera.idEquipos.push(equipo);
                }
              }
            }

            if (datos.comentarios && datos.comentarios.length) {
              for await (const comentario of datos.comentarios) {
                if (!nuevaTablaPrimera.comentarios.includes(comentario)) {
                  nuevaTablaPrimera.comentarios.push(comentario);
                }
              }
            }

            const operacion: any = await nuevaTablaPrimera.save();
            if (operacion) {
              tablaPrimera = operacion._doc;
              //Replico la tabla para reserva
              const nuevaTablaReserva: ITablas = new modeloTablas();
              nuevaTablaReserva.idCampeonato = datos.idCampeonato;
              nuevaTablaReserva.zona = datos.zona;
              nuevaTablaReserva.tipoZona = datos.tipoZona;
              nuevaTablaReserva.division = Division.Reserva;

              if (datos.equipos && datos.equipos.length) {
                for await (const equipo of datos.equipos) {
                  if (!nuevaTablaReserva.idEquipos.includes(equipo)) {
                    nuevaTablaReserva.idEquipos.push(equipo);
                  }
                }
              }

              if (datos.comentarios && datos.comentarios.length) {
                for await (const comentario of datos.comentarios) {
                  if (!nuevaTablaReserva.comentarios.includes(comentario)) {
                    nuevaTablaReserva.comentarios.push(comentario);
                  }
                }
              }

              const resultado: any = await nuevaTablaReserva.save();
              if (resultado) {
                tablaReserva = resultado._doc;
                tablaPrimera.idTabla = tablaPrimera._id;
                // const objetoFinal: any = {...tablaPrimera, ...tablaReserva};
                // responder.sucess(req,res,objetoFinal,'Tablas creadas correctamente')
                resolve(tablaPrimera);
              } else {
                reject(new Error('Ocurrio un error al crear la tabla para reserva'));
              }
            } else {
              reject(new Error('Ocurrio un error al agregar la tabla para primera división'));
            }
          }
        } else {
          reject(new Error('No se ingresaron datos para crear la tabla'));
        }
      });
      return pr;
    } catch (error) {
      return new Promise((reject: any) => {
        reject(error);
      });
    }
  }
}

export const tablasController = new TablasController();
