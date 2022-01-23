import {Request, Response} from 'express';
import responder from '../../Middlewares/responder';
import modeloTorneos from './Torneos_Model';
import ITorneos from './Torneos_Interface';
import {zonasController} from '../Zonas/Zonas_Controller';
import {subcategoriasController} from '../Subcategorias/Subcategorias_Controller';
import {partidosController} from '../Partidos/Partidos_Controller';
import {tablasController} from '../Tablas/Tablas_Controller';
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
      let objetoResponse = {
        torneoCreado: {},
        partidoCreado: {},
        zonaCreada: {},
        tablaCreada: {},
        fixtureCreado: {},
      };
      let creacionTabla: any;
      const torneoBody = req.body;
      if (torneoBody._id) {
        modeloTorneos.findById(torneoBody._id).then(async (torneo: any) => {
          if (torneo) {
            torneo.tituloTorneo = torneoBody.tituloTorneo;
            torneo.fechaInicio = torneoBody.fechaInicio;
            torneo.fechaFin = torneoBody.fechaFin;

            if (torneoBody.nuevaCategoria) {
              if (torneo.idCategoria.length) {
                if (!torneo.idCategoria.includes(torneoBody.nuevaCategoria)) {
                  torneo.idCategoria.push(torneoBody.nuevaCategoria);
                }
              } else {
                torneo.idCategoria.push(torneoBody.nuevaCategoria);
              }
            }

            if (torneoBody.nuevaSubcategoria) {
              if (torneo.idSubcategoria.length) {
                if (!torneo.idSubcategoria.includes(torneoBody.nuevaSubcategoria)) {
                  torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
                }
              } else {
                torneo.idSubcategoria.push(torneoBody.nuevaSubcategoria);
              }

              // const datos = {
              //   idCategoria: torneoBody.nuevaCategoria,
              //   idSubcategoria: torneoBody.nuevaSubcategoria,
              //   keySubcategoria: torneoBody.keySubcategoria,
              // };
              // const subcateg = await subcategoriasController.modificarSubcategoriaTorneo(datos);
              // if (subcateg) {
              //   resultadoOperacion.idSubcategoria = true;
              // }
            }

            if (torneoBody.nombreZona || torneoBody.tipoZona) {
              const datos = {
                nombreZona: torneoBody.nombreZona,
                tipoZona: torneoBody.tipoZona,
                idSubcategoria: torneoBody.nuevaSubcategoria,
                idCategoria: torneoBody.nuevaSubcategoria,
                equipos: torneoBody.equipos,
              };

              const zona: any = await zonasController.crearZona(datos);
              if (zona) {
                objetoResponse.zonaCreada = zona._doc;

                let datosCrearTabla = {
                  tipoZona: torneoBody.tipoZona,
                  zona: zona._id,
                  idCampeonato: torneoBody._id,
                  equipos: torneoBody.equipos,
                };

                creacionTabla = await tablasController.crearTabla(datosCrearTabla);
                if (creacionTabla) {
                  objetoResponse.tablaCreada = creacionTabla;
                }
              }
            }

            // TODO: Guardo el enfrentamiento -- Creo que se debería guardar por separado, con el id de campeonato
            if (torneoBody.idEquipoLocal && torneoBody.idEquipoVisitante) {
              if (torneoBody.idEquipoLocal !== torneoBody.idEquipoVisitante) {
                const datos = {
                  fechaPorJugar: '',
                  horaEnfrentamiento: '',
                  fechaEnfrentamiento: '',
                  idEstadio: '',
                  idEquipoLocal: '',
                  idEquipoVisitante: '',
                  idPartido: '',
                };

                datos.idEquipoLocal = torneoBody.idEquipoLocal;
                datos.idEquipoVisitante = torneoBody.idEquipoVisitante;

                if (torneoBody.idPartido) {
                  datos.idPartido = torneoBody.idPartido;
                }

                if (torneoBody.fechaEnfrentamiento) {
                  datos.fechaEnfrentamiento = torneoBody.fechaEnfrentamiento;
                }

                if (torneoBody.horaEnfrentamiento) {
                  datos.horaEnfrentamiento = torneoBody.horaEnfrentamiento;
                }

                if (torneoBody.idEstadio) {
                  datos.idEstadio = torneoBody.idEstadio;
                }

                if (torneoBody.fechaPorJugar) {
                  datos.fechaPorJugar = torneoBody.fechaPorJugar;
                }

                const partido = await partidosController.guardarEnfrentamiento(datos);
                if (partido) {
                  objetoResponse.partidoCreado = partido;
                }

                // const resultado = await torneo.save({new: true});
                // if (resultado) {
                //   // resultadoOperacion.torneo = true;
                //   responder.sucess(req, res, resultado);
                // } else {
                //   responder.error(req, res);
                // }
              } else {
                let error = new Error('No se puede crear un enfrentamiento entre un mismo equipo');
                responder.error(req, res, error);
              }
            }

            const op = await torneo.save();
            if (op) {
              objetoResponse.torneoCreado = op._doc;
              responder.sucess(req, res, objetoResponse);
              // let datosTorneo: any = op._doc;
              // if (creacionTabla) {
              //   let objetoFinal: any = {...datosTorneo, ...creacionTabla};
              //   responder.sucess(req, res, objetoFinal);
              // } else {
              //   responder.sucess(req, res, op);
              // }
            } else {
              responder.error(req, res, '', 'Error al actualizar el torneo', 500);
            }
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

  public obtenerTorneo(idTorneo: string, idCategoria: string) {
    return modeloTorneos
      .findOne({_id: idTorneo, idCategoria: idCategoria})
      .populate('idCategoria')
      .populate('idSubcategoria');
  }
}
export const torneosController = new TorneosController();
