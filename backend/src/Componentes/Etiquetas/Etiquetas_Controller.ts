import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloEtiquetas from './Etiquetas_Model';
import IEtiquetas from './Etiquetas_Interface';

class EtiquetasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoEtiquetas = await modeloEtiquetas.find();
      responder.sucess(req, res, listadoEtiquetas);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const etiqueta: IEtiquetas = new modeloEtiquetas(req.body);
      await etiqueta.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idEtiqueta = req.params.id;
      const etiqueta = await modeloEtiquetas.find({_id: idEtiqueta});
      responder.sucess(req, res, etiqueta);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const etiqueta: IEtiquetas = new modeloEtiquetas(req.body);
      await etiqueta.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const etiquetaEliminada = await modeloEtiquetas.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, etiquetaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const etiquetasController = new EtiquetasController();
