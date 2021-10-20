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

  public obtenerNoticiasDestacadas() {
    return modeloNoticias.find({isDestacada: true}).populate('idCategoria').sort({fecha: 'desc'});
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
      const noticiaBody = req.body;
      if (noticiaBody._id) {
        modeloNoticias.findById(noticiaBody._id).then(async (noticia: any) => {
          if (noticia) {
            noticia.fecha = noticiaBody.fecha;
            noticia.titulo = noticiaBody.titulo;
            noticia.copete = noticiaBody.copete;
            noticia.cuerpo = noticiaBody.cuerpo;
            noticia.idEtiquetas = noticiaBody.idEtiquetas;
            noticia.idCategoria = noticiaBody.idCategoria;
            noticia.idSubcategoria = noticiaBody.idSubcategoria;
            noticia.keyCategoria = noticiaBody.keyCategoria;
            noticia.keySubcategoria = noticiaBody.keySubcategoria;
            noticia.isDestacada = noticiaBody.isDestacada;
            noticia.autor = noticiaBody.autor;
            noticia.idImagen = noticiaBody.idImagen;

            const resultado = await noticia.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Noticia no encontrada');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Noticia no encontrada');
        responder.error(req, res, error);
      }
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

  public async importarNoticias(datos: any, req: Request, res: Response) {
    try {
      let cantNoticiasGuardadas: number = 0;
      const totalDatos: number = datos.length;
      // let resultado: any = {error: false, msjeError: '', exito: false, totalDatosGuardados: 0};

      if (datos.length) {
        const buscarNoticias = await modeloNoticias.find({});
        if (!buscarNoticias.length) {
          for await (const item of datos) {
            const nuevaNoticia: INoticias = new modeloNoticias();

            nuevaNoticia.fecha = item.post_date ? item.post_date : new Date();
            nuevaNoticia.urlNoticia = item.post_name
              ? `http://elshowdelfutsal.com/noticias/${item.post_name}`
              : '';
            nuevaNoticia.titulo = item.post_title ? item.post_title : 'Noticia sin titulo';
            nuevaNoticia.cuerpo = item.post_content ? item.post_content : '';
            nuevaNoticia.autor = 'Editorial El Show del Futsal';

            const resultado = await nuevaNoticia.save();
            if (resultado) {
              cantNoticiasGuardadas++;
            }
          }

          console.log(
            `Se insertaron ${cantNoticiasGuardadas} noticias de un total de ${totalDatos} noticias.`
          );
          responder.sucess(req, res);
        } else {
          responder.sucess(req, res, 'Ya se cargaron las noticias');
        }
      } else {
        responder.error(req, res, 'No existen datos para importar');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const noticiasController = new NoticiasController();
