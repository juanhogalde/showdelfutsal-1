import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloImagenes from './Imagenes_Model';
import IImagenes from './Imagenes_Interface';
import path from 'path';
import fs from 'fs';

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
        for await (const archivo of req.body.archivos) {
          let path: string = archivo.path.replace(/(\\)/g, '/');

          let imagen: IImagenes = new modeloImagenes({
            ...archivo,
            _id: path.split('/')[2],
            fuente: path.replace('public', ''),
            descripcion: req.body.descripcion,
          });

          await imagen
            .save()
            .then((imagenAgregada: any) => {
              arregloDePath.push(imagenAgregada);
            })
            .catch(error => {
              responder.error(
                req,
                res,
                'No se pudo agregar la imagen',
                'No se pudo agregar la imagen',
                400
              );
            });
        }
        // req.body.archivos.forEach(async (archivo: any) => {
        //   let path: string = archivo.path;
        //   let imagen: IImagenes = new modeloImagenes({
        //     ...archivo,
        //     _id: path.split('/')[2].toString(),
        //     fuente: path.replace('public', '').replace('\\', '/').replace('\\', '/'),
        //     galeria: true,
        //     descripcion: req.body.descripcion,
        //   });
        //   arregloDePath.push(imagen);
        //   await imagen.save();
        // });
        responder.sucess(req, res, arregloDePath);
      } else {
        responder.error(
          req,
          res,
          'No se enviaron los archivos',
          'No se enviaron los archivos',
          400
        );
      }
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
      const imagenBody = req.body;
      if (imagenBody._id) {
        modeloImagenes.findById(imagenBody._id).then(async (imagen: any) => {
          if (imagen) {
            imagen._id = imagenBody._id;
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
      const imagenEliminada: any = await modeloImagenes.findOneAndDelete({_id: id}, {new: true});
      if (imagenEliminada && imagenEliminada.fuente) {
        let pathFile: string = path.join(__dirname, '../../../public', imagenEliminada.fuente);
        if (fs.existsSync(pathFile)) {
          fs.unlinkSync(pathFile);
        }
      }

      responder.sucess(req, res, '', 'Imagen eliminada');
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async eliminarImagenPorId(idImagen: string) {
    try {
      await modeloImagenes
        .findById(idImagen)
        .then(async (ImagenAEliminar: any) => {
          const resultado = await ImagenAEliminar.delete();
          fs.unlinkSync(path.join('./public/imagenes/', idImagen));
          return resultado;
        })
        .catch((error: any) => {
          return error;
        });
    } catch (error) {
      return error;
    }
  }

  public async eliminarImagen(idImagen: any) {
    try {
      const pr = new Promise(async (resolve: any, reject: any) => {
        const imagen = await modeloImagenes.findOneAndDelete({_id: idImagen}, {new: true});

        // responder.sucess(req, res, imagenEliminada);
        if (imagen) {
          if (imagen.fuente) {
            let pathFile: string = path.join(__dirname, '../../../public', imagen.fuente);
            if (fs.existsSync(pathFile)) {
              fs.unlinkSync(pathFile);
            }
          }
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
      let imagenNew: IImagenes = new modeloImagenes({_id: imagen.fuente.split('/')[2].toString()});
      imagenNew.fuente = imagen.fuente;
      imagenNew.isGaleria = imagen.isGaleria;
      imagenNew.galeriaId = imagen.galeriaId;
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

  public async obtenerImagenesGaleria() {
    return modeloImagenes.find({galeriaId: {$exists: true}}).populate('galeriaId');
  }
  public async obtenerImagenesGaleriaPorId(galeriaId: string) {
    return modeloImagenes.find(
      {$and: [{galeriaId: {$exists: true}}, {galeriaId: galeriaId}]},
      {galeriaId: 0}
    );
  }
  public async obtenerGaleriaPorId(id: string) {
    return modeloImagenes.find({galeriaId: id});
  }
}
export const imagenesController = new ImagenesController();
