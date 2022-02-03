import modeloZonas from './Zonas_Model';
import IZona from './Zonas_Interface';
import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';

class ZonasController {
  public async agregar(req: Request, res: Response) {
    try {
      if (!req.body.idSubcategoria || !req.body.idCategoria || !req.body.idTorneo) {
        responder.error(
          req,
          res,
          '',
          `Faltan datos requeridos ${!req.body.idSubcategoria ? 'idSubcategoria ' : ''}${
            !req.body.idCategoria ? 'idCategoria ' : ''
          },${!req.body.idTorneo ? 'id de torneo ' : ''}`,
          400
        );
      } else {
        const nuevaZona: IZona = new modeloZonas(req.body);
        nuevaZona
          .save()
          .then((resultado: any) => {
            responder.sucess(req, res, {
              _id: resultado._id,
              tipoZona: resultado.tipoZona,
              keyCategoria: resultado.idSubcategoria.keyCategoria,
              keySubcategoria: resultado.idSubcategoria.keySubcategoria,
              equipos: resultado.equipos,
              idSubcategoria: resultado.idSubcategoria,
              idCategoria: resultado.idCategoria,
              nombreZona: resultado.nombreZona,
            }),
              'zona agregada',
              200;
          })
          .catch((error: any) => {
            responder.error(req, res, error);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async listar(req: Request, res: Response) {
    try {
      if (!req.body.idTorneo) {
        responder.error(req, res, '', `Falta id de torneo`, 400);
      } else {
        modeloZonas
          .find({idTorneo: req.body.idTorneo})
          .populate('idSubcategoria')
          .then((zonas: any) => {
            responder.sucess(req, res, zonas);
          })
          .catch((error: any) => {
            responder.error(req, res, error);
          });
        // responder.sucess(req, res, );
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async eliminar(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(req, res, 'Falta id de torneo', 'Falta id de torneo', 400);
      } else {
        const zonaEncontrada = await modeloZonas.find({_id: req.body._id});
        if (!zonaEncontrada) {
          responder.error(
            req,
            res,
            'No se encontro la zona con ese Id',
            'No se encontro la zona con ese Id',
            400
          );
        } else {
          modeloZonas
            .deleteOne({_id: req.body._id})
            .then(() => {
              responder.sucess(req, res, '', 'Zona eliminada con exito', 200);
            })
            .catch((error: any) => {
              responder.error(req, res, error, 'Error interno del servidor', 500);
            });
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async crearZona(data: any) {
    try {
      const pr = new Promise((resolve: any, reject: any) => {
        modeloZonas
          .findOne({nombreZona: data.nombreZona})
          .then(async (zona: any) => {
            if (zona) {
              zona.nombreZona = data.nombreZona;
              zona.tipoZona = data.tipoZona;
              zona.idSubcategoria = data.idSubcategoria;
              zona.idCategoria = data.idCategoria;

              if (data.equipos && data.equipos.length) {
                for await (const equipo of data.equipos) {
                  if (!zona.equipos.includes(equipo)) {
                    zona.equipos.push(equipo);
                  }
                }
              }

              // console.log(zona);
              const resultado: any = await zona.save();
              if (resultado) {
                // resultado.idZona = resultado._id;
                // console.log(resultado);
                resolve(resultado);
              } else {
                reject(new Error('Error al insertar la zona'));
              }
            } else {
              const nuevaZona: IZona = new modeloZonas(data);
              resolve(nuevaZona.save());
            }
          })
          .catch((error: any) => {
            reject(error);
          });
      });
      return pr;
    } catch (error) {
      return new Promise((reject: any) => {
        reject(error);
      });
    }
  }
}

export const zonasController = new ZonasController();
