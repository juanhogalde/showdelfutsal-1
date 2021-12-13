import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloGaleria from './Galeria_Model';
import IGaleria from './Galeria_Interface';
import {imagenesController} from '../Imagenes/Imagenes_Controller';
import path from 'path';
import fs from 'fs';
// import { comprimirImagen } from '../../Middlewares/imagemin';

class GaleriaController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoImagenes = await imagenesController.obtenerImagenesGaleria();
      if(listadoImagenes && listadoImagenes.length){
      responder.sucess(req, res, listadoImagenes);
      }else{
      responder.sucess(req, res, [], 'No hay galerías para mostrar');
      }
      // console.log(listadoImagenes);return false;
      // modeloGaleria
      //   .find({})
      //   .populate('imagenesId')
      //   .then((galerias: any) => {
      //     if (galerias && galerias.length) {
      //       responder.sucess(req, res, galerias);
      //     } else {
      //       responder.sucess(req, res, [], 'No hay galerías para mostrar');
      //     }
      //   })
      //   .catch((error: any) => {
      //     console.log(error);
      //     responder.error(req, res, error);
      //   });
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  // public async insertarImagenes(files: any, idGaleria?: string) {
  //   try {
  //     let datosAEnviar = {fuente: '', isGaleria: false};
  //     let pathFile: string = '';
  //     let arrayInsercionesImagenes: Array<any> = [];
  //     let arrayIdImagenes = [];
  //     let arrayDePath = [];
  //     const pr = new Promise(async (resolve: any, reject: any) => {
  //       if (files) {
  //         if (files.length) {
  //           for await (const archivo of files) {
  //             //TODO: Ir cargando cada imagen en la coleccion imagenes
  //             pathFile = archivo.path;

  //             datosAEnviar.fuente = pathFile
  //               .replace('public', '')
  //               .replace('\\', '/')
  //               .replace('\\', '/');
  //             datosAEnviar.isGaleria = true;
  //             const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
  //             if (resultado) {
  //               arrayInsercionesImagenes.push(resultado);
  //               arrayIdImagenes.push(resultado._id);
  //               arrayDePath.push(resultado.fuente);
  //             }
  //           }
  //         } else {
  //           pathFile = files.path;
  //           datosAEnviar.fuente = pathFile
  //             .replace('public', '')
  //             .replace('\\', '/')
  //             .replace('\\', '/');
  //           datosAEnviar.isGaleria = true;
  //           const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
  //           if (resultado) {
  //             arrayInsercionesImagenes.push(resultado);
  //             arrayIdImagenes.push(resultado._id);
  //             arrayDePath.push(resultado.fuente);
  //           }
  //         }
  //         resolve(arrayInsercionesImagenes);
  //       } else {
  //         reject(new Error('No se ingresaron archivos'));
  //       }
  //     });
  //     return pr;
  //   } catch (error) {
  //     return new Promise((reject: any) => {
  //       reject(error);
  //     });
  //   }
  // }

  public async agregar(req: Request, res: Response) {
    try {
      let datosARetornar = {tituloGaleria: '', _id: '', imagenesId: <any>[]};
      let datosAEnviar = {fuente: '', isGaleria: false,galeriaId:''};
      let pathFile: string = '';
      let arrayInsercionesImagenes = [];
      let arrayIdImagenes = [];
      let arrayDePath: Array<string> = [];
      const datosBody = req.body;
      if (!datosBody) {
        throw new Error('No se ingresaron datos');
      }

      if (!datosBody.archivos && !datosBody.archivos.length) {
        throw new Error('No hay archivos para cargar');
      }

      let nuevaGaleria: IGaleria = new modeloGaleria();
      if (datosBody.archivos.length) {
        datosAEnviar.galeriaId = nuevaGaleria._id;
        for await (const archivo of datosBody.archivos) {
          //TODO: Ir cargando cada imagen en la coleccion imagenes
          pathFile = archivo.path;

          datosAEnviar.fuente = pathFile
            .replace('public', '')
            .replace('\\', '/')
            .replace('\\', '/');
          datosAEnviar.isGaleria = true;
          const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
          if (resultado) {
            arrayInsercionesImagenes.push(resultado);
            arrayIdImagenes.push(resultado._id);
            // arrayDePath.push(resultado.fuente);
          }
        }
      } else {
        pathFile = datosBody.archivos.path;
        datosAEnviar.fuente = pathFile.replace('public', '').replace('\\', '/').replace('\\', '/');
        datosAEnviar.isGaleria = true;
        const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
        if (resultado) {
          arrayInsercionesImagenes.push(resultado);
          arrayIdImagenes.push(resultado._id);
          // arrayDePath.push(resultado.fuente);
        }
      }

      // console.log(arrayImagenes);
      // return false;
      if (arrayInsercionesImagenes.length) {
        // const nuevaGaleria: IGaleria = new modeloGaleria();
        nuevaGaleria.tituloGaleria = datosBody.descripcion;
        nuevaGaleria.imagenesId = [...arrayIdImagenes];
        nuevaGaleria.fechaCarga = new Date();

        const resultadoOperacion: any = await nuevaGaleria.save();

        if (resultadoOperacion) {
          datosARetornar.tituloGaleria = resultadoOperacion.tituloGaleria;
          datosARetornar._id = resultadoOperacion._id;
          datosARetornar.imagenesId = [...arrayInsercionesImagenes];

          responder.sucess(req, res, datosARetornar);
        } else {
          console.log(resultadoOperacion);
          responder.error(req, res, new Error('Error al insertar la galería'));
        }
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
      if (!req.params.id) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        modeloGaleria
          .findById(req.params.id)
          .populate('imagenesId')
          .then((galeria: any) => {
            if (galeria) {
              responder.sucess(req, res, galeria);
            } else {
              responder.error(req, res, 'No se encontraron resultados');
            }
          })
          .catch((error: any) => {
            console.log(error);
            responder.error(req, res);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      let datosARetornar = {tituloGaleria: '', _id: '', imagenesId: <any>[]};
      let datosAEnviar = {fuente: '', isGaleria: false, galeriaId:''};
      let pathFile: string = '';
      let arrayInsercionesImagenes: Array<string> = [];
      let arrayIdImagenes: Array<string> = [];
      const datosBody = req.body;
      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        modeloGaleria
          .findById(datosBody._id)
          .populate('imagenesId')
          .then(async (galeria: any) => {
            if (galeria) {
              datosAEnviar.galeriaId = galeria._id;
              if (datosBody.archivos && datosBody.archivos.length) {
                console.log('ENTRO POR EL IF')
                for await (const archivo of datosBody.archivos) {
                  //TODO: Ir cargando cada imagen en la coleccion imagenes
                  pathFile = archivo.path;
        
                  datosAEnviar.fuente = pathFile
                    .replace('public', '')
                    .replace('\\', '/')
                    .replace('\\', '/');
                  // datosAEnviar.isGaleria = true;
                  const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
                  if (resultado) {
                    arrayInsercionesImagenes.push(resultado);
                    arrayIdImagenes.push(resultado._id);
                    // arrayDePath.push(resultado.fuente);
                  }
                }
              } else {
                console.log('ENTRO POR EL ELSE')
                pathFile = datosBody.archivos.path;
                datosAEnviar.fuente = pathFile.replace('public', '').replace('\\', '/').replace('\\', '/');
                datosAEnviar.isGaleria = true;
                const resultado: any = await imagenesController.insertarImagen(datosAEnviar);
                if (resultado) {
                  arrayInsercionesImagenes.push(resultado);
                  arrayIdImagenes.push(resultado._id);
                  // arrayDePath.push(resultado.fuente);
                }
              }

              galeria.tituloGaleria = datosBody.tituloGaleria;
              galeria.fechaModificacion = new Date();

              const resultado = await galeria.save();
              if(resultado){
                responder.sucess(req,res,resultado,'Galeria actualizada');
              }else{
                console.log(resultado);
                responder.error(req,res,'','Ocurrio un error al intentar actualizar la galería',500)
              }

              galeria.tituloGaleria = datosBody.tituloGaleria;
              galeria.fechaModificacion = new Date();
              const resultadoActualizar = await galeria.save();
              if (resultadoActualizar) {
                const imagenesGaleria = await imagenesController.listarImagenesGaleria(galeria._id);
                console.log(imagenesGaleria);
                return false;
              }

              // else {
              //   responder.error(req, res, '', 'No se ingresaron archivos para agregar');
              // }
            } else {
              responder.error(req, res, '', 'Galería no encontrada', 400);
            }
          })
          .catch((error: any) => {
            console.log(error);
            responder.error(req, res);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      const datosBody: any = req.body;
      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      }

      modeloGaleria
        .findByIdAndDelete(datosBody._id)
        .then(async (galeria: any) => {
          if (galeria) {
            if (galeria.imagenesId && galeria.imagenesId.length) {
              for await (const item of galeria.imagenesId) {
                const imagenEliminadaBD: any = await imagenesController.eliminarImagen(item);
                if (imagenEliminadaBD && imagenEliminadaBD.fuente) {
                  let pathArchivoEliminar: string = path.join(
                    __dirname,
                    '../../../public',
                    imagenEliminadaBD.fuente
                  );
                  fs.unlinkSync(pathArchivoEliminar);
                }
              }
              responder.sucess(req, res, '', 'Galería eliminada');
            }
          } else {
            responder.error(req, res, 'Galería no encontrada');
          }
        })
        .catch((error: any) => {
          console.log(error);
          responder.error(req, res);
        });
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
