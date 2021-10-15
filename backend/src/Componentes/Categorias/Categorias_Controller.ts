import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloCategorias from './Categorias_Model';
import ICategorias from './Categorias_Interface';

class CategoriasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoCategorias = await modeloCategorias.find();
      responder.sucess(req, res, listadoCategorias);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const categoria: ICategorias = new modeloCategorias(req.body);
      await categoria.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idCategoria = req.params.id;
      const categoria = await modeloCategorias.find({_id: idCategoria});
      responder.sucess(req, res, categoria);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const categoriaBody = req.body;
      if (categoriaBody._id) {
        modeloCategorias.findById(categoriaBody._id).then(async (categoria: any) => {
          if (categoria) {
            categoria.nombreCategoria = categoriaBody.nombreCategoria;
            categoria.keyCategoria = categoriaBody.keyCategoria;
            categoria.idSubcategorias = categoriaBody.idSubacategorias;

            const resultado = await categoria.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Categoría no encontrada');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Categoría no encontrada');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const categoriaEliminada = await modeloCategorias.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, categoriaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const categoriasController = new CategoriasController();
