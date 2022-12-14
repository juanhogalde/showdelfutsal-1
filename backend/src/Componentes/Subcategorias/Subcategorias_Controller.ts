import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloSubcategorias from './Subcategorias_Model';
import ISubcategorias from './Subcategorias_Interface';
import {keySubcategoria} from '../../Config/enumeradores';

class SubcategoriasController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoSubcategorias = await modeloSubcategorias.find();
      responder.sucess(req, res, listadoSubcategorias);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const subcategoria: ISubcategorias = new modeloSubcategorias(req.body);
      await subcategoria.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificarSubcategoriaTorneo(data: any) {
    try {
      const pr = new Promise((resolve: any, reject: any) => {
        modeloSubcategorias.findById(data.idSubcategoria).then((subCategoria: any) => {
          if (subCategoria) {
            subCategoria.idCategoria = data.idCategoria;
            subCategoria.nombreSubcategoria = keySubcategoria[data.keySubcategoria];
            subCategoria.keySubcategoria = data.keySubcategoria;

            resolve(subCategoria.save());
          } else {
            reject(new Error('La subcategoria ingresada no existe'));
          }
        });
      });
      return pr;
    } catch (error) {
      return new Promise<any>(reject => {
        reject(error);
      });
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idSubcategoria = req.params.id;
      const subcategoria = await modeloSubcategorias.find({_id: idSubcategoria});
      responder.sucess(req, res, subcategoria);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const subcategoria: ISubcategorias = new modeloSubcategorias(req.body);
      await subcategoria.save();
      responder.sucess(req, res);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const subcategoriaEliminada = await modeloSubcategorias.findOneAndDelete(
        {_id: id},
        {new: true}
      );
      responder.sucess(req, res, subcategoriaEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const subcategoriasController = new SubcategoriasController();
