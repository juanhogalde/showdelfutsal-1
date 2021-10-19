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

  public async agregar(req: Request, res: Response) {
    try {
      const partido: IPartidos = new modeloPartidos(req.body);
      await partido.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
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
