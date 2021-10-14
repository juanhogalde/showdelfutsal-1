import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloZonas from './Zonas_Model';
import IZonas from './Zonas_Interface';

class ZonasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoZonas = await modeloZonas.find();
      responder.sucess(req, res, listadoZonas);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const zona: IZonas = new modeloZonas(req.body);
      await zona.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idZona = req.params.id;
      const zona = await modeloZonas.find({_id: idZona});
      responder.sucess(req, res, zona);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const zona: IZonas = new modeloZonas(req.body);
      await zona.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const zonaEliminada = await modeloZonas.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, zonaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const zonasController = new ZonasController();
