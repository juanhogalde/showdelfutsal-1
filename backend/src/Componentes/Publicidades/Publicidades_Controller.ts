import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloPublicidades from './Publicidades_Model';
import IPublicidades from './Publicidades_Interface';

class PublicidadesController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoPublicidades = await modeloPublicidades.find();
      responder.sucess(req, res, listadoPublicidades);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const publicidad: IPublicidades = new modeloPublicidades(req.body);
      await publicidad.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idPublicidad = req.params.id;
      const publicidad = await modeloPublicidades.find({_id: idPublicidad});
      responder.sucess(req, res, publicidad);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const publicidad: IPublicidades = new modeloPublicidades(req.body);
      await publicidad.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const publicidadEliminada = await modeloPublicidades.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, publicidadEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const publicidadesController = new PublicidadesController();
