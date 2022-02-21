import {Request, Response} from 'express';
import mongoose from 'mongoose';
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
          nameFile = pathFile[2];
        }

        const equipo: IEquipos = new modeloEquipos();
        equipo.nombreClub = datosBody.nombreClub;
        equipo.escudo = `${process.env.DNS_FRONT}/escudos/${nameFile}`;
        // equipo.idCategorias = datosBody.idCategorias;
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

  public async obtenerPorKeySubCategoria(req: Request, res: Response) {
    try {
      let keySubcategoria = parseInt(req.params.keySubcategoria);
      if (!keySubcategoria) {
        responder.error(req, res, '', 'Falta id de subcategoria', 400);
      }

      const equipos = await modeloEquipos.find({
        keySubcategorias: keySubcategoria,
      });

      if (equipos.length) {
        responder.sucess(req, res, equipos);
      } else {
        responder.error(
          req,
          res,
          equipos,
          'El id de subcategoría no posee equipos relacionados o tiene error',
          400
        );
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtenerPorIdSubCategoria(req: Request, res: Response) {
    try {
      let idSubcategoria = req.params.idSubCategoria;
      if (!idSubcategoria) {
        responder.error(req, res, '', 'Falta id de subcategoria', 400);
      }

      const equipos = await modeloEquipos.find({
        idSubcategorias: idSubcategoria,
      });
      if (equipos.length) {
        responder.sucess(req, res, equipos);
      } else {
        responder.error(
          req,
          res,
          equipos,
          'El id de subcategoría no posee equipos relacionados o tiene error',
          400
        );
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const equipoBody = req.body;
      if (equipoBody._id) {
        modeloEquipos.findById(equipoBody._id).then(async (equipo: any) => {
          if (equipo) {
            let nameNewFile: string = '';
            let oldFile: string = '';
            if (equipo.escudo && equipoBody.escudo) {
              oldFile = equipo.escudo.split('/');

              let archivoEncontrado = fs.readFileSync(
                path.join(__dirname, '../../../public/imagenes', oldFile[4])
              );

              if (archivoEncontrado) {
                fs.unlinkSync(path.join(__dirname, '../../../public/imagenes', oldFile[4]));
              }

              let pathFile = equipoBody.escudo.path.split('\\');
              nameNewFile = `${process.env.DNS_FRONT}/imagenes/${pathFile[2]}`;
              equipo.escudo = nameNewFile;
            }

            equipo.nombreClub = equipoBody.nombreClub;
            if (equipoBody.idCategorias && equipoBody.idCategorias.length) {
              equipo.idCategorias = equipoBody.idCategorias;
            }

            if (equipoBody.idSubcategorias && equipoBody.idSubcategorias.length) {
              equipo.idSubcategorias = equipoBody.idSubcategorias;
            }

            const resultado = await equipo.save();

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
      if (!id) {
        responder.error(req, res, 'No se ingresaron datos');
      }

      const equipo: any = await modeloEquipos.findById(id);

      if (!equipo) {
        throw new Error('Equipo no encontrado');
        // responder.error(req, res, equipo, 'Equipo no encontrado', 400);
      }

      if (equipo.escudo) {
        let nameEscudo = equipo.escudo.split('/');

        let archivoEncontrado = fs.readFileSync(
          path.join(__dirname, '../../../public/imagenes', nameEscudo[4])
        );

        if (archivoEncontrado) {
          fs.unlinkSync(path.join(__dirname, '../../../public/imagenes', nameEscudo[4]));
        }
      }

      const resultado = await modeloEquipos.findByIdAndDelete(id);
      if (!resultado) {
        console.log(resultado);
        throw new Error('Error al intentar eliminar el equipo');
        // responder.error(req, res, equipo, 'Error al intentar eliminar el equipo', 500);
      }

      responder.sucess(req, res, resultado, 'Equipo eliminado correctamente');
    } catch (error) {
      responder.error(req, res, error);
    }
  }
}
export const equiposController = new EquiposController();
