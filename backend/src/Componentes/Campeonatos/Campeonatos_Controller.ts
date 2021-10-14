import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloCampeonatos from './Campeonatos_Model';
import ICampeonatos from './Campeonatos_Interface';

class CampeonatosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoCampeonatos = await modeloCampeonatos.find();
      responder.sucess(req, res, listadoCampeonatos);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const campeonato: ICampeonatos = new modeloCampeonatos(req.body);
      await campeonato.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idCampeonato = req.params.id;
      const campeonato = await modeloCampeonatos.find({_id: idCampeonato});
      responder.sucess(req, res, campeonato);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const campeonato: ICampeonatos = new modeloCampeonatos(req.body);
      await campeonato.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const campeonatoEliminada = await modeloCampeonatos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, campeonatoEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const campeonatosController = new CampeonatosController();
