import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloPublicidades from './Publicidades_Model';
import IPublicidades from './Publicidades_Interface';
import {medidasPublicidadController} from '../MedidasPublicidad/MedidasPublicidad_Controller';
import {imagenesController} from '../Imagenes/Imagenes_Controller';

import fs from 'fs';
import path from 'path';
class PublicidadesController {
  public async listar(req: Request, res: Response) {
    try {
      modeloPublicidades
        .find({})
        .populate('idImagen')
        .populate('idMedidas')
        .then((publicidades: any[]) => {
          responder.sucess(req, res, publicidades);
        });
      // const listadoPublicidades = await modeloPublicidades.find();
      // responder.sucess(req, res, listadoPublicidades);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      var fechaActual = new Date();

      const publicidad: IPublicidades = new modeloPublicidades({
        nombrePublicidad: req.body.nombrePublicidad,
        idMedidas: req.body.idMedidas,
        idImagen: req.body.idImagen,
        fecha: fechaActual,
      });
      publicidad.populate('idImagen');
      publicidad.populate('idMedidas');
      const resultado = await publicidad.save();
      responder.sucess(req, res, resultado);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idPublicidad = req.params.id;
      const publicidad = await modeloPublicidades.find({_id: idPublicidad});
      responder.sucess(req, res, publicidad);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(req, res, 'Falta id de publicidad', 'Falta id de publicidad', 400);
      } else {
        await modeloPublicidades.findById(req.body._id).then(async (publicidad: any) => {
          if (!publicidad) {
            responder.error(req, res, 'Publicidad no encontrada', 'Publicidad no encontrada', 400);
          } else {
            publicidad.nombrePublicidad = req.body.nombrePublicidad;
            publicidad.isActiva = req.body.isActiva;
            publicidad.idMedidas = req.body.idMedidas;
            publicidad.idImagen = req.body.idImagen;
            await publicidad
              .save()
              .then((publicidadEditada: any) => {
                responder.sucess(req, res, publicidadEditada);
              })
              .catch((error: any) => {
                responder.error(req, res, error, 'No se pudo guardar la publicidad', 400);
              });
          }
        });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(
          req,
          res,
          'No se envio el id de la publicidad',
          'No se envio el id de la publicidad',
          400
        );
      }
      const publicidadAEliminar = await modeloPublicidades.findById(req.body._id);

      if (!publicidadAEliminar) {
        responder.error(
          req,
          res,
          'No se encontro la publicidad solicitada',
          'No se encontro la publicidad solicitada',
          400
        );
      } else {
        publicidadAEliminar
          .delete()
          .then(async () => {
            await imagenesController.eliminarImagenPorId(
              publicidadAEliminar.idImagen[0].toString()
            );
            medidasPublicidadController
              .activarMedidasPublicidad(publicidadAEliminar.idMedidas[0])
              .then(() => {
                responder.sucess(
                  req,
                  res,
                  {idPublicidad: req.body._id, idMedida: publicidadAEliminar.idMedidas[0]},
                  'publicidad Eliminada',
                  200
                );
              })
              .catch((error: any) => {
                responder.error(
                  req,
                  res,
                  error,
                  'La publicidad fue eliminada pero no se pudo activar su medida',
                  202
                );
              });
          })
          .catch((error: any) => {
            responder.error(req, res, error, 'Error interno del servidor', 500);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async desactivarPublicidad(req: Request, res: Response) {
    try {
      const datosBody = req.body;
      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        const publicidad = await modeloPublicidades.findById(datosBody.idPublicidad);
        if (publicidad) {
          let DNS = process.env.DNS_FRONT;
          if (publicidad.ancho <= 245 && publicidad.alto <= 245) {
            // publicidad.direccion = path.join(DNS, 'archivos/publicidadCorta.jpg');
            publicidad.direccion = `${DNS}/archivos/publicidadCorta.jpg`;
          } else if (publicidad.ancho <= 1136 && publicidad.alto <= 99) {
            // publicidad.direccion = path.join(DNS, 'archivos/publicidadLarga.jpg');
            publicidad.direccion = `${DNS}/archivos/publicidadLarga.jpg`;
          }
          const resultado = await publicidad.save();
          if (resultado) {
            responder.sucess(req, res, resultado);
          } else {
            responder.error(req, res, 'Error al desactivar la publicidad');
          }
        } else {
          responder.error(req, res, 'La publicidad ingresada no existe');
        }
      }
    } catch (error) {
      responder.error(req, res);
    }
  }
}
export const publicidadesController = new PublicidadesController();
