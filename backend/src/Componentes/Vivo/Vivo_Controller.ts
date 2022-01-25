import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloVivo from './Vivo_Model';
import IVivo from './Vivo_Interface';
class VivoController {
  public async listar(req: Request, res: Response) {
    try {
      let vivo: any = await modeloVivo.find();

      if (vivo) {
        responder.sucess(req, res, vivo);
      } else {
        responder.sucess(req, res, [], 'No hay vivo para mostrar');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregarVivo(req: Request, res: Response) {
    try {
      if (!req.body) {
        throw new Error('No se ingresaron datos');
      } else {
        let fecha = new Date();
        const vivo: IVivo = new modeloVivo({...req.body, fechaCreacion: fecha});
        await vivo.save();
        responder.sucess(req, res, vivo);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async editarVivo(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        throw new Error('No se encontro id');
      } else {
        const vivoBody = req.body;
        modeloVivo.findById(req.body._id).then(async (vivo: any) => {
          if (vivo) {
            vivo.nombreVivo = vivoBody.nombreVivo;
            vivo.urlVivo = vivoBody.urlVivo;
            vivo.urlChat = vivoBody.urlChat;
            vivo.isActivo = vivoBody.isActivo;
            vivo.fechaCreacion = vivoBody.fechaCreacion;
            vivo.fechaModificacion = new Date();
            const resultado = await vivo.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Publicidad no encontrada');
            responder.error(req, res, error);
          }
        });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminarVivo(req: Request, res: Response) {
    try {
      if (req.body._id) {
        const id = req.body._id;

        const vivoEliminado = await modeloVivo.findOneAndDelete({_id: id}, {new: true});
        responder.sucess(req, res, vivoEliminado);
      } else {
        throw new Error('No se encontro id');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const VivoVideoController = new VivoController();
