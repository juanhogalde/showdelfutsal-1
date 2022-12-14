import {Request, response, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloNoticias from './Noticias_Model';
import INoticias from './Noticias_Interface';
import mongoose from 'mongoose';
import {keyCategoria} from '../../Config/enumeradores';

class NoticiasController {
  public async listar(req: Request, res: Response) {
    try {
      modeloNoticias
        .find({})
        .populate('idImagen')
        .sort({fecha: 'desc'})
        .then((noticias: any[]) => {
          responder.sucess(req, res, noticias);
        })
        .catch((error: any[]) => {
          responder.error(req, res, error);
        });
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async buscar(req: Request, res: Response) {
    try {
      const tituloBody = req.body.titulo;

      if (tituloBody) {
        const listadoNoticias = await modeloNoticias
          .find({
            titulo: {$regex: `${tituloBody}`, $options: 'i'},
          })
          .populate('idImagen');

        if (listadoNoticias.length) {
          responder.sucess(req, res, listadoNoticias);
        } else {
          responder.sucess(req, res, 'No existen coincidencias con el título ingresado.');
        }
      } else {
        responder.error(req, res, 'No se ingresaron datos');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async listardestacadas(req: Request, res: Response) {
    try {
      var contNoticiaMasc: number = 0;
      var contNoticiaFem: number = 0;
      var contNoticiaInf: number = 0;
      var objetoFinal = {
        noticias: <any>[],
      };

      const filtrosBody = req.body;
      let filtrosBD: any = {isDestacada: true};

      if (filtrosBody) {
        if (filtrosBody.idCategoria) {
          let _id = new mongoose.Types.ObjectId(filtrosBody.idCategoria);
          filtrosBD.idCategoria = _id;
        }

        if (filtrosBody.fecha) {
          filtrosBD.fecha = {$gte: new Date(filtrosBody.fecha)};
        }
      }

      // { $and: [{isDestacada: true}, {fecha: {$gt: new Date(filtrosBody.fecha)}}]}
      const listadoNoticias = await modeloNoticias.find(filtrosBD);

      if (listadoNoticias.length) {
        for await (const noticia of listadoNoticias) {
          if (noticia.keyCategoria) {
            if (noticia.keyCategoria === keyCategoria.Masculino) {
              contNoticiaMasc++;
              if (contNoticiaMasc !== 3) {
                objetoFinal.noticias.push(noticia);
              }
            } else if (noticia.keyCategoria === keyCategoria.Femenino) {
              contNoticiaFem++;
              if (contNoticiaFem !== 3) {
                objetoFinal.noticias.push(noticia);
              }
            } else if (noticia.keyCategoria === keyCategoria.Otras_Competiciones) {
              contNoticiaInf++;
              if (contNoticiaInf !== 3) {
                objetoFinal.noticias.push(noticia);
              }
            }
          } else {
            objetoFinal.noticias.push(noticia);
          }
        }

        responder.sucess(req, res, objetoFinal);
      } else {
        responder.sucess(req, res, 'No hay noticias destacadas');
      }
      // responder.sucess(req, res, listadoNoticias);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public obtenerNoticiasDestacadas() {
    return modeloNoticias.find({isDestacada: true}).populate('idCategoria').sort({fecha: 'desc'});
  }

  public async agregar(req: Request, res: Response) {
    try {
      req.body._id = req.body?.titulo
        .replace(/ /g, '_')
        .toLowerCase()
        .slice(0, 20)
        .concat(`_${Date.now().toString()}`);
      const noticia: INoticias = new modeloNoticias(req.body);
      await noticia.save();
      modeloNoticias
        .findById(noticia._id)
        .populate('idImagen')
        .then((noticiaImg: any) => {
          responder.sucess(req, res, noticiaImg);
        })
        .catch((error: any) => {
          responder.error(req, res, error);
        });
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idNoticia = req.params.id;
      if (!req.params.id) {
        responder.error(req, res, 'Falta id de la noticia', 'Falta id de la noticia', 400);
      } else {
        modeloNoticias
          .findById({_id: idNoticia})
          .populate('idImagen')
          .then((noticia: any) => {
            if (!noticia) {
              responder.error(
                req,
                res,
                'No se encontro la noticia que buscas',
                'No se encontro la noticia que buscas',
                400
              );
            } else {
              responder.sucess(req, res, noticia, '', 200);
            }
          })
          .catch((error: any) => {
            responder.error(req, res, error);
          });
      }
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
            // noticia.idEtiquetas = noticiaBody.idEtiquetas;
            noticia.idCategoria = noticiaBody.idCategoria;
            noticia.idSubcategoria = noticiaBody.idSubcategoria;
            noticia.keyCategoria = noticiaBody.keyCategoria;
            noticia.keySubcategoria = noticiaBody.keySubcategoria;
            noticia.isDestacada = noticiaBody.isDestacada;
            // noticia.autor = noticiaBody.autor;
            noticia.idImagen = noticiaBody.idImagen;

            const resultado = await noticia.save({new: true});
            modeloNoticias
              .findById(resultado._id)
              .populate('idImagen')
              .then((noticia: any) => {
                responder.sucess(req, res, noticia);
              })
              .catch((error: any) => {
                responder.error(req, res, error);
              });
            // responder.sucess(req, res, resultado);
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

  public async destacar(req: Request, res: Response) {
    try {
      let cont: number = 0;
      if (!req.body.data) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        for await (const idNoticia of req.body.data) {
          const noticia = await modeloNoticias
            .findById(idNoticia)
            .then((value: any) => {
              return value;
            })
            .catch((error: any) => {
              responder.error(req, res);
            });

          if (noticia) {
            noticia.isDestacada = true;
            const resultado = await noticia.save();
            if (resultado) {
              cont++;
            }
          }
        }

        if (cont) {
          responder.sucess(req, res, `Se actualizaron ${cont} noticia/s.`);
        } else {
          responder.error(req, res, 'No se pudieron actualizar las noticias ingresadas.');
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async destacarNoticia(req: Request, res: Response) {
    try {
      const noticiaBody = req.body;
      if (!noticiaBody._id) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        modeloNoticias.findById(noticiaBody._id).then(async (noticia: any) => {
          if (noticia) {
            noticia.isDestacada = true;
            const resultado = await noticia.save({new: true});
            modeloNoticias
              .findById(resultado._id)
              .populate('idImagen')
              .then((noticia: any) => {
                responder.sucess(req, res, noticia);
              })
              .catch((error: any) => {
                responder.error(req, res, error);
              });
          }
        });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async desestacarNoticia(req: Request, res: Response) {
    try {
      const noticiaBody = req.body;
      if (!noticiaBody._id) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        modeloNoticias.findById(noticiaBody._id).then(async (noticia: any) => {
          if (noticia) {
            noticia.isDestacada = false;
            const resultado = await noticia.save({new: true});
            modeloNoticias
              .findById(resultado._id)
              .populate('idImagen')
              .then((noticia: any) => {
                responder.sucess(req, res, noticia);
              })
              .catch((error: any) => {
                responder.error(req, res, error);
              });
          }
        });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async filtrar(req: Request, res: Response) {
    try {
      const filtrosBody = req.body;

      let filtrosBD: any = {};
      if (filtrosBody) {
        if (filtrosBody.idCategoria) {
          let _id = new mongoose.Types.ObjectId(filtrosBody.idCategoria);
          filtrosBD.idCategoria = _id;
        }

        if (filtrosBody.fecha) {
          filtrosBD.fecha = {$gte: new Date(filtrosBody.fecha)};
        }

        if (filtrosBody.isDestacada) {
          filtrosBD.isDestacada = filtrosBody.isDestacada;
        }

        // const opcionesPaginado = {
        //   limit: parseInt(filtrosBody.limite, 10) || 20,
        //   page: parseInt(filtrosBody.page, 10) || 1,
        // };

        // const datos = await modeloNoticias.paginate(filtrosBD, opcionesPaginado);
        const datos = await modeloNoticias.find(filtrosBD);
        if (datos.length) {
          responder.sucess(req, res, datos);
        } else {
          responder.sucess(req, res, 'No existen datos para los filtros ingresados');
        }
      } else {
        responder.error(req, res, 'No se ingresaron filtros');
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async importarNoticias(datos: any, req: Request, res: Response) {
    try {
      let cantNoticiasGuardadas: number = 0;
      const totalDatos: number = datos.length;

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
  public async obtenerPorSubcategoria(req: Request, res: Response) {
    try {
      let idNoticia = req.params.id;
      if (!req.params.id) {
        responder.error(req, res, 'Falta id de subcategoria', 'Falta id de subcategoria', 400);
      } else {
        modeloNoticias
          .find({idSubcategoria: req.params.id})
          .sort({fecha: 1})
          .limit(3)
          .populate('idImagen')
          .then((noticia: any) => {
            if (!noticia) {
              responder.error(
                req,
                res,
                'No se encontro la noticia que buscas',
                'No se encontro la noticia que buscas',
                400
              );
            } else {
              responder.sucess(req, res, noticia, '', 200);
            }
          })
          .catch((error: any) => {
            responder.error(req, res, error);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const noticiasController = new NoticiasController();
