import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloEquipos from './Equipos_Model';
import IEquipos from './Equipos_Interface';
import fs from 'fs';
import path from 'path';

class EquiposController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoEquipos = await modeloEquipos.find();
      responder.sucess(req, res, listadoEquipos);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const datosBody = req.body;
      if (!datosBody) {
        responder.error(req, res, 'No se ingresaron datos');
      } else {
        let nameFile = '';
        if (datosBody.escudo) {
          let pathFile = datosBody.escudo.path.split('\\');
          nameFile = pathFile[1];
        }

        const equipo: IEquipos = new modeloEquipos();
        equipo.nombreClub = datosBody.nombreClub;
        equipo.escudo = `${process.env.DNS_FRONT}/imagenes/${nameFile}`;
        equipo.idCategorias = datosBody.idCategorias;
        equipo.idSubcategorias = datosBody.idSubcategorias;

        const resultado = await equipo.save();
        if (resultado) {
          responder.sucess(req, res, resultado);
        } else {
          responder.error(req, res, 'Error al agregar el equipo');
        }
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idEquipo = req.params.id;
      const equipo = await modeloEquipos.findById(idEquipo);
      if (equipo) {
        responder.sucess(req, res, equipo);
      } else {
        responder.error(req, res, equipo, 'Equipo no encontrado', 400);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const equipoBody = req.body;
      console.log(equipoBody);
      if (equipoBody._id) {
        modeloEquipos.findById(equipoBody._id).then(async (equipo: any) => {
          if (equipo) {
            let nameNewFile: string = '';
            let oldFile: string = '';
            if (equipo.escudo) {
              oldFile = equipo.escudo.split('/');
              // console.log(path.join(__dirname, '../../../imagenes', oldFile[4]));
              let archivoEncontrado = fs.readFileSync(
                path.join(__dirname, '../../../imagenes', oldFile[4])
              );
              if (archivoEncontrado) {
                fs.unlinkSync(archivoEncontrado);
              }

              let pathFile = equipoBody.escudo.path.split('\\');
              let nameNewFile = pathFile[1];
            }

            equipo.nombreClub = equipoBody.nombreClub;
            equipo.escudo = nameNewFile;
            equipo.idCategorias = equipoBody.idCategorias;
            equipo.idSubcategorias = equipoBody.idSubcategorias;

            const resultado = await equipo.save({new: true});

            if (resultado) {
              responder.sucess(req, res, resultado);
            } else {
              let error = new Error('Error al actualizar el equipo');
              responder.error(req, res, error);
            }
          } else {
            let error = new Error('Equipo no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Equipo no encontrado');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const equipoEliminada = await modeloEquipos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, equipoEliminada);
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const equiposController = new EquiposController();
