import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloPartidos from './Partidos_Model';
import IPartidos from './Partidos_Interface';

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
              if (
                partidoEncontrado.idZona?.equipos?.includes([
                  req.body.idEquipoLocal,
                  req.body.idEquipoVisitante,
                ])
              ) {
                responder.sucess(req, res, partidoEncontrado, '', 200);
              } else {
                responder.error(
                  req,
                  res,
                  `Algun equipo ingresado no esta incluido en la zona: ${partidoEncontrado.idZona.nombreZona}`,
                  `Algun equipo ingresado no esta incluido en la zona: ${partidoEncontrado.idZona.nombreZona}`,
                  400
                );
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
        if (datosBody.idEquipoLocal === datosBody.idEquipoVisitante) {
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
              responder.error(req, res, error, 'Error al insertar el partido', 500);
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
            partido.idEstadio = partidoBody.idEstadio;
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
}
export const partidosController = new PartidosController();
