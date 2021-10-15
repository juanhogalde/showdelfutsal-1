import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloUsuarios from './Usuarios_Model';
import IUsuarios from './Usuarios_Interface';

class UsuariosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoUsuarios = await modeloUsuarios.find();
      responder.sucess(req, res, listadoUsuarios);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const usuario: IUsuarios = new modeloUsuarios(req.body);
      await usuario.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      //responder.sucess(req, res, usuario); //devolver sin pass el token
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const usuario: IUsuarios = new modeloUsuarios(req.body);
      await usuario.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const usuarioEliminada = await modeloUsuarios.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, usuarioEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const usuariosController = new UsuariosController();
