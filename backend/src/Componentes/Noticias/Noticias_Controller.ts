import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloNoticias from './Noticias_Model';
import INoticias from './Noticias_Interface';

class NoticiasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoNoticias = await modeloNoticias.find();
      responder.sucess(req, res, listadoNoticias);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async listardestacadas(req: Request, res: Response) {
    try {
      const listadoNoticias = await modeloNoticias.find({isDestacada: true});
      responder.sucess(req, res, listadoNoticias);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const noticia: INoticias = new modeloNoticias(req.body);
      await noticia.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idNoticia = req.params.id;
      const noticia = await modeloNoticias.find({_id: idNoticia});
      responder.sucess(req, res, noticia);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const noticia: INoticias = new modeloNoticias(req.body);
      await noticia.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const noticiaEliminada = await modeloNoticias.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, noticiaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const noticiasController = new NoticiasController();
