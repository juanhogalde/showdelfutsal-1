import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloImagenes from './Imagenes_Model';
import IImagenes from './Imagenes_Interface';

class ImagenesController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoImagenes = await modeloImagenes.find();
      responder.sucess(req, res, listadoImagenes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const imagen: IImagenes = new modeloImagenes(req.body);
      await imagen.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idImagen = req.params.id;
      const imagen = await modeloImagenes.find({_id: idImagen});
      responder.sucess(req, res, imagen);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const imagen: IImagenes = new modeloImagenes(req.body);
      await imagen.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const imagenEliminada = await modeloImagenes.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, imagenEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const imagenesController = new ImagenesController();
