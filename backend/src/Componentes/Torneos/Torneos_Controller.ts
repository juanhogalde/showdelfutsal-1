import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloTorneos from './Torneos_Model';
import ITorneos from './Torneos_Interface';
import {zonasController} from '../Zonas/Zonas_Controller';
import {subcategoriasController} from '../Subcategorias/Subcategorias_Controller';
class TorneosController {
  public async listar(req: Request, res: Response) {
    try {
      const listadoCampeonatos = await modeloTorneos.find();
      responder.sucess(req, res, listadoCampeonatos);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async agregar(req: Request, res: Response) {
    try {
      const torneo: ITorneos = new modeloTorneos(req.body);
      const resultado = await torneo.save();
      responder.sucess(req, res, resultado);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async obtener(req: Request, res: Response) {
    try {
      let idTorneo = req.params.id;
      const torneo = await modeloTorneos.find({_id: idTorneo});
      responder.sucess(req, res, torneo);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async modificar(req: Request, res: Response) {
    try {
      const torneoBody = req.body;
      if (torneoBody._id) {
        modeloTorneos.findById(torneoBody._id).then(async (torneo: any) => {
          if (torneo) {
            torneo.tituloTorneo = torneoBody.tituloTorneo;
            torneo.fechaInicio = torneoBody.fechaInicio;
            torneo.fechaFin = torneoBody.fechaFin;

            if (torneoBody.idCategoria) {
              torneo.idCategoria.push(torneoBody.idCategoria);
            }

            if (torneoBody.idSubcategoria) {
              const datos = {
                idCategoria: torneoBody.idCategoria,
                idSubcategoria: torneoBody.idSubcategoria,
                keySubcategoria: torneoBody.keySubcategoria,
              };
              await subcategoriasController.modificarSubcategoriaTorneo(datos);
            }

            if (torneoBody.nombreZona) {
              const datos = {
                nombreZona: torneoBody.nombreZona,
                tipoZona: torneoBody.tipoZona,
                idSubcategoria: torneoBody.idSubcategoria,
              };
              await zonasController.crearZona(datos);
            }

            if (torneoBody.idEquipoLocal && torneoBody.idEquipoVisitante) {
              const datos = {};
            }
            // campeonato.idCategoria = campeonatoBody.idCategoria;
            // campeonato.idSubcategoria = campeonatoBody.idSubcategoria;

            const resultado = await torneo.save({new: true});
            responder.sucess(req, res, resultado);
          } else {
            let error = new Error('Torneo no encontrado');
            responder.error(req, res, error);
          }
        });
      } else {
        let error = new Error('Torneo no encontrado');
        responder.error(req, res, error);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  public async eliminar(req: Request, res: Response) {
    try {
      let id = req.body.id;
      const torneoEliminado = await modeloTorneos.findOneAndDelete({_id: id}, {new: true});
      responder.sucess(req, res, torneoEliminado);
    } catch (error) {
      responder.error(req, res, error);
    }
  }

  // public obtenerCampeonato(idCampeonato: string, idCategoria: string) {
  //   return modeloTorneos
  //     .findOne({idCampeonato: idCampeonato, idCategoria: idCategoria})
  //     .populate('idCategoria')
  //     .populate('idSubcategoria');
  // }
}
export const torneosController = new TorneosController();
