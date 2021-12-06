import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloMedidasPublicidad from './MedidasPublicidad_Model';
import IMedidasPublicidad from './MedidasPublicidad_Interface';
class MedidasPublicidadController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoMedidasPublicidad = await modeloMedidasPublicidad.find();
      responder.sucess(req, res, listadoMedidasPublicidad);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const medidasPublicidades: IMedidasPublicidad = new modeloMedidasPublicidad(req.body);
      await medidasPublicidades.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const medidasPublicidadController = new MedidasPublicidadController();
