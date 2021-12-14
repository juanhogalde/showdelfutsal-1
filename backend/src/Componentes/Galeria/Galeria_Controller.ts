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
      let datosARetornar: Array<any> = [];
      let galerias: any = await modeloGaleria.find();

      if (galerias && galerias.length) {
        for await (const item of galerias) {
          const imagenes = await imagenesController.obtenerImagenesGaleriaPorId(item._id);
          let galeria = {
            _id: item._id,
            tituloGaleria: item.tituloGaleria,
            fechaCarga: item.fechaCarga,
            fechaModificacion: item.fechaModificacion,
            imagenesId: imagenes.length ? [...imagenes] : [],
          };
          datosARetornar.push(galeria);
        }

        responder.sucess(req, res, datosARetornar);
      } else {
        responder.sucess(req, res, [], 'No hay galerías para mostrar');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      let datosARetornar = {tituloGaleria: '', _id: '', imagenesId: <any>[]};
      let datosAEnviar = {fuente: '', isGaleria: false, galeriaId: ''};
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
        }
      }

      if (arrayInsercionesImagenes.length) {
        // const nuevaGaleria: IGaleria = new modeloGaleria();
        nuevaGaleria.tituloGaleria = datosBody.descripcion;
        // nuevaGaleria.imagenesId = [...arrayIdImagenes];
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

  public async obtener(req: Request, res: Response) {
    try {
      if (!req.params.id) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        let datosARetornar = {
          _id: '',
          imagenesId: <any>[],
          tituloGaleria: '',
          fechaCarga: '',
          fechaModificacion: '',
        };
        const galeria: any = await modeloGaleria.findById(req.params.id);
        if (galeria) {
          datosARetornar._id = galeria._id;
          datosARetornar.tituloGaleria = galeria.tituloGaleria;
          datosARetornar.fechaCarga = galeria.fechaCarga;
          datosARetornar.fechaModificacion = galeria.fechaModificacion;

          const listadoImagenes = await imagenesController.obtenerGaleriaPorId(req.params.id);
          if (listadoImagenes && listadoImagenes.length) {
            for await (const item of listadoImagenes) {
              datosARetornar.imagenesId.push(item);
            }

            responder.sucess(req, res, datosARetornar);
          } else {
            responder.sucess(req, res, [], 'No hay galerías para mostrar');
          }
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      console.log(req.body);
      let datosARetornar = {tituloGaleria: '', _id: '', imagenesId: <any>[]};
      let datosAEnviar = {fuente: '', isGaleria: false, galeriaId: ''};
      let pathFile: string = '';
      let arrayInsercionesImagenes: Array<string> = [];
      let arrayIdImagenes: Array<string> = [];
      const datosBody = req.body;
      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        modeloGaleria
          .findById(datosBody._id)
          .then(async (galeria: any) => {
            if (galeria) {
              datosAEnviar.galeriaId = galeria._id;
              if (datosBody.archivos) {
                if (datosBody.archivos.length) {
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
                  pathFile = datosBody.archivos.path;
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
              }

              galeria.tituloGaleria = datosBody.tituloGaleria;
              galeria.fechaModificacion = new Date();

              const resultado = await galeria.save();
              if (resultado) {
                const imagenes = await imagenesController.obtenerImagenesGaleriaPorId(galeria._id);
                let dato = {
                  _id: resultado._id,
                  tituloGaleria: resultado.tituloGaleria,
                  fechaCarga: resultado.fechaCarga,
                  fechaModificacion: resultado.fechaModificacion,
                  imagenesId: imagenes.length ? [...imagenes] : [],
                };
                responder.sucess(req, res, dato, 'Galeria actualizada');
              } else {
                console.log(resultado);
                responder.error(
                  req,
                  res,
                  '',
                  'Ocurrio un error al intentar actualizar la galería',
                  500
                );
              }

              galeria.tituloGaleria = datosBody.tituloGaleria;
              galeria.fechaModificacion = new Date();
              const resultadoActualizar = await galeria.save();
              if (resultadoActualizar) {
                const imagenesGaleria = await imagenesController.listarImagenesGaleria(galeria._id);
                console.log(imagenesGaleria);
                return false;
              }
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
            const listadoImagenes = await imagenesController.obtenerGaleriaPorId(datosBody._id);
            if (listadoImagenes && listadoImagenes.length) {
              for await (const item of listadoImagenes) {
                const imagenEliminadaBD: any = await imagenesController.eliminarImagen(item._id);
                if (imagenEliminadaBD && imagenEliminadaBD.fuente) {
                  let pathArchivoEliminar: string = path.join(
                    __dirname,
                    '../../../public',
                    imagenEliminadaBD.fuente
                  );
                  if (fs.existsSync(pathArchivoEliminar)) {
                    fs.unlinkSync(pathArchivoEliminar);
                  }
                }
              }
            }
            responder.sucess(req, res, '', 'Galería eliminada');
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
