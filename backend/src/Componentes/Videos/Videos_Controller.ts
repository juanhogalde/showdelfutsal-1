import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloVideos from './Videos_Model';
import IVideos from './Videos_Interface';
// import { comprimirImagen } from '../../Middlewares/imagemin';

class VideosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoImagenes = await modeloVideos.find();
      responder.sucess(req, res, listadoImagenes);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      if (req.body.videos.length) {
        let videosAgregados: Array<any> = [];
        req.body.videos.forEach(async (archivo: any) => {
          const video: IVideos = new modeloVideos({
            ...archivo,
            idGaleria: req.body.idGaleria,
          });
          videosAgregados.push(video);
          await video.save();
        });
        responder.sucess(req, res);
      } else {
        responder.error(req, res, 'sin datos');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  // public async cargarImagenPrueba(req: Request, res: Response) {
  //   try {
  //     if (!req.body) {
  //       responder.error(req, res, 'No se ingresaron datos');
  //     } else {
  //       let path: string = req.body.archivos.path.split('\\');
  //       let pathFileAComprimir: string = `${path[0]}/${path[1]}/${path[2]}`;
  //       let resultado: any = await comprimirImagen(pathFileAComprimir);

  //       if (resultado) {
  //         const imagen: IImagenes = new modeloVideos({
  //           ...req.body,
  //           fuente: resultado.path_out_new,
  //         });
  //         await imagen.save();
  //         responder.sucess(req, res, imagen);
  //       } else {
  //         responder.error(req, res, new Error('Ocurrió un error al insertar la imagen'));
  //       }
  //     }
  //   } catch (error) {
  //     responder.error(req, res, error);
  //   }
  // }

  public async obtener(req: Request, res: Response) {
    try {
      let idImagen = req.params.id;
      const imagen = await modeloVideos.find({_id: idImagen});
      responder.sucess(req, res, imagen);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const imagenBody = req.body;
      if (imagenBody._id) {
        modeloVideos.findById(imagenBody._id).then(async (imagen: any) => {
          if (imagen) {
            imagen.fuente = imagenBody.fuente;
            imagen.alto = imagenBody.alto;
            imagen.ancho = imagenBody.ancho;
            imagen.descripcion = imagenBody.descripcion;
            imagen.galeria = imagenBody.galeria;
            imagen.fechaCarga = imagenBody.fechaCarga;

            const resultado = await imagen.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Imagen no encontrada');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Imagen no encontrada');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const imagenEliminada = await modeloVideos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, imagenEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleria(nombreGaleria: string) {
    return modeloVideos.find({galeria: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(3);
  }

  public async obtenerGaleriaVideo(nombreGaleria: string) {
    return modeloVideos.find({galeriaVideo: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(2);
  }
  public async obtenerVideosGaleriaPorId(galeriaId: string) {
    return modeloVideos.find(
      {$and: [{idGaleria: {$exists: true}}, {idGaleria: galeriaId}]},
      {idGaleria: 0}
    );
  }
}
export const videosController = new VideosController();
