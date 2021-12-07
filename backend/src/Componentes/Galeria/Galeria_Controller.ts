import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloGaleria from './Galeria_Model';
import IGaleria from './Galeria_Interface';
import {imagenesController} from '../Imagenes/Imagenes_Controller';
// import { comprimirImagen } from '../../Middlewares/imagemin';

class GaleriaController {
  public async listar(req: Request, res: Response) {
    try {
      modeloGaleria
        .find({})
        .then((galerias: any[]) => {
          if (galerias.length) {
            responder.sucess(req, res, galerias);
          } else {
            responder.sucess(req, res, [], 'No hay galerías para mostrar');
          }
        })
        .catch((error: any) => {
          console.log(error);
          responder.error(req, res, error);
        });
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      let datosAEnviar = {fuente: '', isGaleria: false};
      let pathFile: string = '';
      const datosBody = req.body;
      if (!datosBody) {
        throw new Error('No se ingresaron datos');
      }

      if (!datosBody.archivos && !datosBody.archivos.length) {
        throw new Error('No hay archivos para cargar');
      }

      for await (const archivo of datosBody.archivos) {
        //TODO: Ir cargando cada imagen en la coleccion imagenes
        pathFile = archivo.path;
        // if (archivo.path && archivo.path.includes('\\')) {
        //   pathFile = archivo.path.split('\\');
        // } else {
        //   pathFile = archivo.path.split('/');
        // }

        console.log(pathFile);
        datosAEnviar.fuente = pathFile.replace('public', '').replace('\\', '/').replace('\\', '/');
        datosAEnviar.isGaleria = true;
        const resultado = await imagenesController.insertarImagen(datosAEnviar);
        console.log(resultado);
        return false;
      }
      // console.log(datosBody);
      return false;
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
  //         const imagen: IImagenes = new modeloGaleria({
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
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerGaleria(nombreGaleria: string) {
    // return modeloGaleria.find({galeria: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(3);
  }

  public async obtenerGaleriaVideo(nombreGaleria: string) {
    // return modeloGaleria.find({galeriaVideo: nombreGaleria}).sort({fechaCarga: 'desc'}).limit(2);
  }
}
export const galeriaController = new GaleriaController();
