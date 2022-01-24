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

  public async guardarEnfrentamiento(datos: any) {
    try {
      const pr = new Promise((resolve: any, reject: any) => {
        if (datos.idPartido) {
          modeloPartidos
            .findById(datos.idPartido)
            .then((partido: any) => {
              if (partido) {
                partido.equipoLocal = datos.idEquipoLocal;
                partido.equipoVisitante = datos.idEquipoVisitante;
                partido.fechaPorJugar = datos.fechaPorJugar;
                partido.fechaPartido = datos.fechaEnfrentamiento ? datos.fechaEnfrentamiento : '';
                partido.horaPartido = datos.horaEnfrentamiento ? datos.horaEnfrentamiento : '';

                if (datos.idEstadio) {
                  partido.idEstadio = datos.idEstadio;
                }
                // partido.idEstadio = datos.idEstadio ? datos.idEstadio : '';

                resolve(partido.save()._doc);
              } else {
                reject(new Error('Enfrentamiento inexistente'));
              }
            })
            .catch((error: any) => {
              reject(error);
            });
        } else {
          const nuevoEnfrentamiento: IPartidos = new modeloPartidos();
          nuevoEnfrentamiento.equipoLocal = datos.idEquipoLocal;
          nuevoEnfrentamiento.equipoVisitante = datos.idEquipoVisitante;
          nuevoEnfrentamiento.fechaPartido = datos.fechaEnfrentamiento
            ? datos.fechaEnfrentamiento
            : '';
          nuevoEnfrentamiento.horaPartido = datos.horaEnfrentamiento
            ? datos.horaEnfrentamiento
            : '';
          if (datos.idEstadio) {
            nuevoEnfrentamiento.idEstadio = datos.idEstadio;
          }

          resolve(nuevoEnfrentamiento.save());
        }
      });
      return pr;
    } catch (error) {
      return new Promise<any>(reject => {
        reject(error);
      });
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const datosBody = req.body;
      if (
        !datosBody ||
        !datosBody.idEquipoLocal ||
        !datosBody.idEquipoVisitante ||
        !datosBody.fechaPorJugar
      ) {
        responder.error(req, res, '', 'No se ingresaron datos', 400);
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
          const nuevoPartido: IPartidos = new modeloPartidos();
          nuevoPartido.equipoLocal = datosBody.idEquipoLocal;
          nuevoPartido.equipoVisitante = datosBody.idEquipoVisitante;
          nuevoPartido.fechaPorJugar = datosBody.fechaPorJugar;
          nuevoPartido.fechaPartido = datosBody.fechaPartido;
          nuevoPartido.horaPartido = datosBody.horaPartido;
          if (datosBody.idEstadio) {
            nuevoPartido.idEstadio = datosBody.idEstadio;
          }

          const op = await nuevoPartido.save();
          if (op) {
            responder.sucess(req, res, op, 'Partido insertado correctamente');
          } else {
            console.log(op);
            responder.error(req, res, '', 'Error al insertar el partido', 500);
          }
        }
      }
    } catch (error) {
      console.log(error);
      responder.error(req, res);
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
