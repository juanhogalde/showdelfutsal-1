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

  public async editar(req: Request, res: Response) {
    try {
      const medidasBody = req.body;
      if (medidasBody._id) {
        modeloMedidasPublicidad.findById(medidasBody._id).then(async (medidasPublicidad: any) => {
          if (medidasPublicidad) {
            medidasPublicidad.disponible = false;
            const resultado = await medidasPublicidad.save();
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Medida No encontrada');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('No se envio medida');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const medidasPublicidadController = new MedidasPublicidadController();
