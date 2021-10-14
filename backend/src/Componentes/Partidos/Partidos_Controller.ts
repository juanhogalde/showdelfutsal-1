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
      const partido: IPartidos = new modeloPartidos(req.body);
      await partido.save();
      responder.sucess(req, res);
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
}
export const partidosController = new PartidosController();
