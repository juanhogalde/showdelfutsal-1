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
      const listadoCampeonatos = await modeloTorneos.find().populate('idSubcategoria');
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
  public async quitarSubcategoria(req: Request, res: Response) {
    try {
      if (!req.body._id) {
        responder.error(req, res, 'Falta id de torneo', 'Falta id de torneo', 400);
      } else {
        modeloTorneos
          .findById(req.body._id)
          .then(torneo => {
            if (!torneo) {
              responder.error(req, res, 'No se encontro torneo', 'No se encontro torneo', 400);
            } else {
              if (!torneo.idSubcategoria?.includes(req.body.idSubcategoria)) {
                responder.error(
                  req,
                  res,
                  'Subcategoria no esta incluida en el torneo',
                  'Subcategoria no esta incluida en el torneo',
                  400
                );
              } else {
                torneo.idSubcategoria.splice(
                  torneo.idSubcategoria.indexOf(req.body.idSubcategoria),
                  1
                );
                torneo
                  .save()
                  .then((torneoActualizado: any) => {
                    responder.sucess(req, res, torneoActualizado);
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
                } else {
                  let error = new Error('No se puede crear la Tabla');
                  responder.error(req, res, error, 'No se puede crear la Tabla', 500);
                }
              } else {
                let error = new Error('No se puede crear la zona');
                responder.error(req, res, error, 'No se puede crear la zona', 500);
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
              } else {
                let error = new Error('No se puede crear un enfrentamiento entre un mismo equipo');
                responder.error(req, res, error);
              }
            }

            const op = await torneo.save();
            if (op) {
              responder.sucess(req, res, op._doc);
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
  public async cargarSubcategoria(req: Request, res: Response) {
    try {
      const torneoBody = req.body;
      if (torneoBody._id) {
        modeloTorneos.findById(torneoBody._id).then(async (torneo: any) => {
          if (torneo) {
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
            }
            const op = await torneo.save();
            if (op) {
              responder.sucess(req, res, op._doc);
            } else {
              responder.error(req, res, '', 'Error al actualizar el torneo', 500);
            }
          } else {
            responder.error(req, res, '', 'Torneo no encontrado', 400);
          }
        });
      } else {
        responder.error(req, res, '', 'Falta Id de torneo', 400);
      }
    } catch (error) {
      responder.error(req, res, error);
    }
  }
  public async cargarZona(req: Request, res: Response) {
    try {
      const torneoBody = req.body;
      if (torneoBody._id) {
        modeloTorneos.findById(torneoBody._id).then(async (torneo: any) => {
          if (torneo) {
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
                torneo.zona = zona._doc;
                let datosCrearTabla = {
                  tipoZona: torneoBody.tipoZona,
                  zona: zona._id,
                  idCampeonato: torneoBody._id,
                  equipos: torneoBody.equipos,
                };
                const creacionTabla: any = await tablasController.crearTabla(datosCrearTabla);
                if (creacionTabla) {
                  torneo.zona = creacionTabla._doc;
                  responder.sucess(req, res, torneo);
                } else {
                  responder.error(req, res, '', 'No se puede crear la Tabla', 500);
                }
              } else {
                responder.error(req, res, '', 'No se puede crear la zona', 500);
              }
            } else {
              responder.error(req, res, '', 'faltan datos de zona', 400);
            }
            const op = await torneo.save();
          } else {
            responder.error(req, res, '', 'Torneo no encontrado', 400);
          }
        });
      } else {
        responder.error(req, res, '', 'Falta Id de torneo', 400);
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
