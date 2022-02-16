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

  public async obtenerEquiposPorZona(req: Request, res: Response) {
    try {
      let idEquipo = req.params.idZona;
      if (!req.body.idZona) {
        responder.error(req, res, '', 'Falta id de zona', 400);
      } else {
        const zona = await modeloZonas.findOne({_id: req.body.idZona});
        if (!zona) {
          responder.error(req, res, '', 'No se encontro la zona', 400);
        } else {
          //responder.sucess(req, res, zona.equipos);
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(req, res, 'Falta id de zona', 'Falta id de zona', 400);
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
  public async eliminarPorSubcategoria(req: Request, res: Response) {
    try {
      if (!req.body.idSubcategoria || !req.body.idTorneo) {
        responder.error(
          req,
          res,
          `Falta id subcategoria o id de torneo`,
          'Falta id subcategoria o id de torneo',
          400
        );
      } else {
        modeloZonas
          .deleteMany({
            $and: [{idSubcategoria: req.body.idSubcategoria}, {idTorneo: req.body.idTorneo}],
          })
          .then(ZonasEliminadas => {
            responder.sucess(
              req,
              res,
              ZonasEliminadas.deletedCount,
              `${ZonasEliminadas?.deletedCount} Zonas eliminadas con exito de la subCategoria`,
              200
            );
          })
          .catch((error: any) => {
            responder.error(req, res, error, 'Error interno del servidor', 500);
          });
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async agregarEquipos(req: Request, res: Response) {
    try {
      if (!req.body._id || !req.body.nuevosEquipos?.length) {
        responder.error(
          req,
          res,
          '',
          `Faltan datos requeridos: ${!req.body._id ? 'id zona ,' : ''} ${
            !req.body.nuevosEquipos?.length ? 'nuevosEquipos ' : ''
          }`,
          400
        );
      } else {
        modeloZonas
          .findById(req.body._id)
          .then((zonaEncontrada: any) => {
            if (!zonaEncontrada) {
              responder.error(
                req,
                res,
                'No se encontro la zona solicitada',
                'No se encontro la zona solicitada',
                400
              );
            } else {
              const idEquipos = zonaEncontrada.equipos.map((equipo: any) => {
                return equipo._id.toString();
              });
              let equiposAInsertar: string[] = [];
              req.body.nuevosEquipos.forEach((idEquipo: string) => {
                if (!idEquipos.includes(idEquipo) && !equiposAInsertar.includes(idEquipo)) {
                  equiposAInsertar.push(idEquipo);
                }
              });
              if (!equiposAInsertar.length) {
                responder.error(
                  req,
                  res,
                  'No se ingresaron nuevos equipos o ya existen en esta zona',
                  'No se ingresaron nuevos equipos o ya existen en esta zona',
                  400
                );
              } else {
                zonaEncontrada.equipos.push(...equiposAInsertar);
                zonaEncontrada
                  .save()
                  .then((zonaActualizada: any) => {
                    responder.sucess(req, res, zonaActualizada, '', 200);
                  })
                  .catch((error: any) => {
                    responder.error(req, res, error);
                  });
              }
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

export const zonasController = new ZonasController();
