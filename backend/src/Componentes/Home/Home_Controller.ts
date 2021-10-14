import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloHomes from './Home_Model';
import IHomes from './Home_Interface';

class HomesController {
  public async obtenerDatosIniciales(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerVivo(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerRadio(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerPartidos(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerDestacadas(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleriasImagenes(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleriasVideo(req: Request, res: Response) {
    try {
      const listadoHomes = await modeloHomes.find();
      responder.sucess(req, res, listadoHomes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const homesController = new HomesController();
