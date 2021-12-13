import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloImagenes from './Imagenes_Model';
import IImagenes from './Imagenes_Interface';
import {resolve} from 'path';
// import { comprimirImagen } from '../../Middlewares/imagemin';

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
      if (req.body.archivos.length) {
        let arregloDePath: Array<any> = [];
        req.body.archivos.forEach(async (archivo: any) => {
          let path: string = archivo.path;
          let imagen: IImagenes = new modeloImagenes({
            ...archivo,
            fuente: path.replace('public', '').replace('\\', '/').replace('\\', '/'),
            galeria: true,
            descripcion: req.body.descripcion,
          });
          arregloDePath.push(imagen);
          
          await imagen.save();
        });
        responder.sucess(req, res, arregloDePath);
      } else {
        let path: string = req.body.archivos.path;
        // console.log('PATH');
        // console.log(path);
        const imagen: IImagenes = new modeloImagenes({
          ...req.body,
          fuente: path.replace('public', '').replace('\\', '/').replace('\\', '/'),
        });
        // console.log('imagen');
        // console.log(imagen);
        await imagen.save();
        responder.sucess(req, res, imagen);
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
  //         const imagen: IImagenes = new modeloImagenes({
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
      const imagen = await modeloImagenes.find({_id: idImagen});
      responder.sucess(req, res, imagen);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const imagenBody = req.body;
      if (imagenBody._id) {
        modeloImagenes.findById(imagenBody._id).then(async (imagen: any) => {
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
      const imagenEliminada = await modeloImagenes.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, imagenEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminarImagen(idImagen: any) {
    try {
      console.log('eliminando imagen...');
      const pr = new Promise(async (resolve: any, reject: any) => {
        const imagen = await modeloImagenes.findOneAndDelete({_id: idImagen}, {new: true});
        // responder.sucess(req, res, imagenEliminada);
        if (imagen) {
          resolve(imagen);
        } else {
          reject(new Error('No se encontro imagen'));
        }
      });
      return pr;
    } catch (error) {
      return error;
      // throw new Error(`Error: ${error}`);
      // responder.error(req, res, error);
    }
  }

  public async obtenerGaleria(nombreGaleria: string) {
    return modeloImagenes.find({galeria: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(3);
  }

  public async obtenerGaleriaVideo(nombreGaleria: string) {
    return modeloImagenes.find({galeriaVideo: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(2);
  }

  public async insertarImagen(imagen: any) {
    try {
      let imagenNew: IImagenes = new modeloImagenes();
      imagenNew.fuente = imagen.fuente;
      imagenNew.isGaleria = imagen.isGaleria;
      if(imagen.galeriaId){
        imagenNew.galeriaId = imagen.galeriaId;
      }
      imagenNew.fechaCarga = new Date();

      const resultado = await imagenNew.save();
      return resultado;
    } catch (error) {
      return error;
    }
  }

  public async listarImagenesGaleria(idGaleria: string) {
    try {
      let arrayImagenes = <any>[];
      const pr = new Promise(async (resolve: any, reject: any) => {
        const imagenes = await modeloImagenes.find({
          $and: [{galeriaId: idGaleria, isGaleria: true}],
        });
        if (imagenes && imagenes.length) {
          for await (const imagen of imagenes) {
            arrayImagenes.push(imagen);
          }
          resolve(arrayImagenes);
        } else {
          reject(new Error('La galería no posee imagenes'));
        }
      });
      return pr;
    } catch (error) {
      return new Promise((reject: any) => {
        reject(error);
      });
    }
  }
  
  public async obtenerImagenesGaleria(){
    return modeloImagenes.find({galeriaId:{$exists:true}}).populate('galeriaId');
  }
}
export const imagenesController = new ImagenesController();
