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

/*

Que espera el front como modelo de galeria
[
{
fuente:string, // para video el id y para imagen el path
descripcion:string
}
]

que espera el front como modelo de partidos
partido: {
_id: ObjectId,
equipoA: {
	nombreClub: string,
	escudo:  string (ruta a una imagen),
	resultado:int,
	penales: int,
}
}


 */
