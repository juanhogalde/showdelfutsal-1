import modeloZonas from './Zonas_Model';
import IZona from './Zonas_Interface';
import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';

class ZonasController {
  public async agregar(req: Request, res: Response) {
    console.log(req.body);
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
            responder.sucess(req, res, resultado);
          })
          .catch((error: any) => {
            console.error(error);
            responder.error(req, res, error);
          });
      }
    } catch (error) {
      console.error(error);
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
            console.log(error);
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
