import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloEquipos from './Equipos_Model';
import IEquipos from './Equipos_Interface';

class EquiposController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoEquipos = await modeloEquipos.find();
      responder.sucess(req, res, listadoEquipos);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const equipo: IEquipos = new modeloEquipos(req.body);
      await equipo.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idEquipo = req.params.id;
      const equipo = await modeloEquipos.find({_id: idEquipo});
      responder.sucess(req, res, equipo);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const equipo: IEquipos = new modeloEquipos(req.body);
      await equipo.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const equipoEliminada = await modeloEquipos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, equipoEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const equiposController = new EquiposController();
