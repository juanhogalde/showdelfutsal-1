import {
  controlModalNuevoTorneo,
  agregarTorneoExito,
  agregarTorneoError,
  editarTorneoExito,
  editarTorneoError,
  consultarPorEliminarTorneo,
  cargandoEliminarTorneo,
  eliminarTorneoExito,
  actualizarListaDeTorneos,
  eliminarTorneoError,
  volverPorDefectoEliminarTorneo,
  cargandoListarTorneo,
  listarTorneoExito,
  listarTorneoError,
  volverPorDefectoListarTorneo,
  volverPorDefectoUnTorneo,
  recuperarTorneo,
  cargandoCrearZonaTorneo,
  controlModalZonas,
  crearZonaTorneoExito,
  crearZonaTorneoError,
  crearZonaTorneoDefault,
  actualizarListaDeTorneosCrearZona,
  cargandoObtenerDatosDeTorneoParaEdicion,
  obtenerDatosDeTorneoParaEdicionExito,
  obtenerDatosDeTorneoParaEdicionError,
  obtenerDatosDeTorneoParaEdicionDefault,
  ultimaUbicacionEditarTorneo,
  eliminarZonaExito,
  eliminarZonaError,
  volverPorDefectoEliminarZona,
  consultarEliminarZonasDeTorneo,
  eliminarZonasDeTorneoCargando,
  eliminarZonasDeTorneoExito,
  eliminarZonasDeTorneoError,
  actualizarListaDeTorneosEliminarZonas,
  eliminarZonasDeTorneoDefault,
  agregarEquiposZonaTorneoCargando,
  agregarEquiposZonaTorneoExito,
  actualizarListaTorneosAgregarEquiposZona,
  agregarEquiposZonaTorneoError,
  agregarEquiposZonaTorneoDefault,
  estadoComponenteAgregarEquipo,
  controlModalGenericoAgregarEquipos,
  eliminarEquipoDeZonaExito,
  actualizarListaTorneosEliminarEquiposZona,
  eliminarEquipoDeZonaError,
  eliminarEquipoDeZonaDefault,
  eliminarEquipoDeZonaConsulta,
  cargandoObtenerZonaAgregarEquipos,
  ZonaAgregarEquiposExito,
  ZonaAgregarEquiposError,
} from './AccionesTorneos';

const torneoPorDefecto = {
  torneos: [],
  torneo: {},
  isModalNuevoTorneo: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
    datosAdicionales: null,
  },
  isEliminarTorneo: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
    id: '',
  },

  isObtenerDatosEditarTorneo: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isUltimaUbicacionEditarTorneo: false,
  modalZonas: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
    datos: null,
  },

  isEliminarZonasDeTorneo: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
    subcategoria: '',
  },
  isAgregarEquiposZona: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
  },
  isEliminarEquipoZona: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
  },
  isCargandoZonaAgregarEquipos: true,
  errorZonaAgregarEquipos: null,
  entidadZonaAgregarEquipos: null,
  modalGenericoAgregarEquipos: {
    mensaje: '',
    tipo: '',
    isMostrar: false,
  },
  isVerificarAgregarEquipo: false,
  torneoEditar: null,
  isCargandoTorneoEditar: true,
  isErrorTorneoEditar: null,
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    case controlModalNuevoTorneo: {
      return {
        ...state,
        isModalNuevoTorneo: {
          tipo: accion.datos.tipo,
          mensaje: accion.datos.mensaje,
          isMostrar: accion.datos.isMostrar,
          datosAdicionales: accion.datos.datosAdicionales,
        },
      };
    }
    case agregarTorneoExito: {
      return {
        ...state,
        isModalNuevoTorneo: {
          tipo: 'success',
          mensaje: 'Torneo cargado con exito.',
          isMostrar: true,
          datosAdicionales: accion.datos._id,
        },
        torneos: [...state.torneos, accion.datos],
      };
    }
    case agregarTorneoError: {
      return {
        ...state,
        isModalNuevoTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar su torneo.',
          isMostrar: true,
          datosAdicionales: null,
        },
        torneo: {},
      };
    }
    case editarTorneoExito: {
      let listaTorneoEditado = state.torneos.map(torneo => {
        if (torneo._id === accion.datos._id) {
          return accion.datos;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        torneos: listaTorneoEditado,
        torneoEditar: accion.datos,
        isModalNuevoTorneo: {
          tipo: 'success',
          mensaje: 'Torneo editado con exito.',
          isMostrar: true,
          datosAdicionales: accion.datos._id,
        },
      };
    }
    case editarTorneoError: {
      return {
        ...state,
        isModalNuevoTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos editar su torneo.',
          isMostrar: true,
          datosAdicionales: null,
        },
      };
    }

    case consultarPorEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'warning',
          mensaje: '??Desea eliminar este torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          id: accion.datos,
        },
      };
    }
    case cargandoEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'cargando',
          mensaje: 'Eliminando torneo...',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          id: state.isEliminarTorneo.id,
        },
      };
    }
    case eliminarTorneoExito: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo eliminado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          id: state.isEliminarTorneo.id,
        },
      };
    }
    case actualizarListaDeTorneos: {
      let auxTorneos = [];
      if (state.isEliminarTorneo.id) {
        auxTorneos = state.torneos.filter(torneo => torneo._id !== state.isEliminarTorneo.id);
      }

      return {
        ...state,
        torneos: auxTorneos,
        isEliminarTorneo: {
          tipo: '',
          mensaje: ' ',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          datos: '',
        },
      };
    }
    case eliminarTorneoError: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no se pudo eliminar el torneo.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          datos: '',
        },
      };
    }
    case volverPorDefectoEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          id: '',
        },
      };
    }
    case cargandoListarTorneo: {
      return {
        ...state,
      };
    }
    case listarTorneoExito: {
      return {
        ...state,
        torneos: [...state.torneos, ...accion.datos],
      };
    }
    case listarTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoListarTorneo: {
      return {
        ...state,
      };
    }
    case volverPorDefectoUnTorneo: {
      return {
        ...state,
        torneo: {},
      };
    }
    case recuperarTorneo: {
      return {
        ...state,
      };
    }
    case cargandoCrearZonaTorneo: {
      return {
        ...state,
        modalZonas: {
          tipo: 'cargando',
          mensaje: 'Agregando Zona.',
          isMostrar: true,
        },
      };
    }
    case controlModalZonas: {
      return {
        ...state,
        modalZonas: {
          tipo: accion.payload.tipo,
          mensaje: accion.payload.mensaje,
          isMostrar: accion.payload.isMostrar,
          datos: accion.payload.datos,
        },
      };
    }
    case crearZonaTorneoExito: {
      return {
        ...state,
        modalZonas: {
          tipo: 'success',
          mensaje: 'Zona Creada.',
          isMostrar: true,
          datos: {zona: accion.datos, tipo: 'crear'},
        },
      };
    }
    case crearZonaTorneoError: {
      return {
        ...state,
        modalZonas: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en ??ste momento no podemos agregar Zona.',
          isMostrar: true,
          datos: null,
        },
      };
    }
    case crearZonaTorneoDefault: {
      return {
        ...state,
        modalZonas: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
          datos: null,
        },
      };
    }
    case actualizarListaDeTorneosCrearZona: {
      let auxTorneos = state.torneos.map(torneoDeArray => {
        if (torneoDeArray._id === state.torneo._id) {
          return state.torneo;
        } else {
          return torneoDeArray;
        }
      });
      return {
        ...state,
        isAgregarZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
        torneos: auxTorneos,
      };
    }
    case cargandoObtenerDatosDeTorneoParaEdicion: {
      return {
        ...state,
        isCargandoTorneoEditar: true,
        torneoEditar: null,
        isErrorTorneoEditar: null,
      };
    }
    case obtenerDatosDeTorneoParaEdicionExito: {
      return {
        ...state,
        torneoEditar: {...accion.datos},
        isErrorTorneoEditar: null,
        isCargandoTorneoEditar: false,
      };
    }
    case obtenerDatosDeTorneoParaEdicionError: {
      return {
        ...state,

        ...state,
        isErrorTorneoEditar: accion.error,
        torneoEditar: null,
        isCargandoTorneoEditar: false,
      };
    }
    case obtenerDatosDeTorneoParaEdicionDefault: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case ultimaUbicacionEditarTorneo: {
      return {
        ...state,
        isUltimaUbicacionEditarTorneo: accion.datos,
      };
    }

    case eliminarZonaExito: {
      return {
        ...state,
      };
    }
    case eliminarZonaError: {
      return {
        ...state,
      };
    }

    case volverPorDefectoEliminarZona: {
      return {
        ...state,
      };
    }
    case consultarEliminarZonasDeTorneo: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'warning',
          mensaje: '??Desea eliminar todas las zonas de ??sta subcategor??a?',
          isMostrar: true,
          subcategoria: accion.idSubcategoria,
        },
      };
    }
    case eliminarZonasDeTorneoCargando: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'cargando',
          mensaje: 'Eliminando Zonas...',
          isMostrar: true,
          subcategoria: state.isEliminarZonasDeTorneo.subcategoria,
        },
      };
    }
    case eliminarZonasDeTorneoExito: {
      let auxZonas = state.torneo.zonas.filter(
        zona => zona.idSubcategoria.keySubcategoria !== accion.subcategoria
      );

      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'success',
          mensaje: 'Zonas Eliminadas.',
          isMostrar: true,
        },
        torneo: {
          ...state.torneo,
          zonas: auxZonas,
        },
      };
    }
    case eliminarZonasDeTorneoError: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos eliminar zonas.',
          isMostrar: true,
        },
      };
    }
    case actualizarListaDeTorneosEliminarZonas: {
      let auxTorneos = state.torneos.map(torneo => {
        if (torneo._id === state.torneo._id) {
          return state.torneo;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        torneos: auxTorneos,
        isEliminarZonasDeTorneo: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
          subcategoria: '',
        },
      };
    }
    case eliminarZonasDeTorneoDefault: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
      };
    }
    case agregarEquiposZonaTorneoCargando: {
      return {
        ...state,
        isAgregarEquiposZona: {
          tipo: 'cargando',
          mensaje: 'Agregando equipos...',
          isMostrar: true,
        },
      };
    }

    case actualizarListaTorneosAgregarEquiposZona: {
      let auxTorneos = state.torneos.map(torneo => {
        if (torneo._id === state.torneo._id) {
          return state.torneo;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        isAgregarEquiposZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
        torneos: auxTorneos,
      };
    }

    case agregarEquiposZonaTorneoDefault: {
      return {
        ...state,
        isAgregarEquiposZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
      };
    }
    case estadoComponenteAgregarEquipo: {
      return {
        ...state,
        isVerificarAgregarEquipo: accion.data,
      };
    }
    case eliminarEquipoDeZonaConsulta: {
      return {
        ...state,
        isEliminarEquipoZona: {
          tipo: 'warning',
          mensaje: '??Desea eliminar equipo de la zona?',
          isMostrar: true,
          idEquipo: accion.idEquipo,
          isNuevo: accion.isNuevo,
        },
      };
    }

    case actualizarListaTorneosEliminarEquiposZona: {
      let auxTorneos = state.torneos.map(torneo => {
        if (torneo._id === state.torneo._id) {
          return state.torneo;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        isEliminarEquipoZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
        torneos: auxTorneos,
      };
    }

    case eliminarEquipoDeZonaDefault: {
      return {
        ...state,
        isEliminarEquipoZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
      };
    }
    case cargandoObtenerZonaAgregarEquipos: {
      return {
        ...state,
        isCargandoZonaAgregarEquipos: true,
        errorZonaAgregarEquipos: null,
        entidadZonaAgregarEquipos: null,
      };
    }
    case ZonaAgregarEquiposExito: {
      const equiposYaAgregados = accion.zona.equipos.map(equipo => {
        return equipo.nombreClub;
      });

      const equiposObtenidos = accion.zona.equiposDisponibles.map((equipo, index) => {
        return {
          label: equipo.nombreClub,
          value: equipo._id,
          data: equipo,
        };
      });

      return {
        ...state,
        errorZonaAgregarEquipos: null,
        entidadZonaAgregarEquipos: {
          ...accion.zona,
          equiposDisponibles: equiposObtenidos.filter(
            equipo => !equiposYaAgregados.includes(equipo.label)
          ),
        },
        isCargandoZonaAgregarEquipos: false,
      };
    }
    case ZonaAgregarEquiposError: {
      return {
        ...state,
        errorZonaAgregarEquipos: accion.mensajeError ? accion.mensajeError : 'Error desconocido',
        entidadZonaAgregarEquipos: null,
        isCargandoZonaAgregarEquipos: false,
      };
    }
    case controlModalGenericoAgregarEquipos: {
      return {
        ...state,
        modalGenericoAgregarEquipos: {
          ...accion.datos,
          tipo: accion.datos.tipo,
          mensaje: accion.datos.mensaje,
          isMostrar: accion.datos.isMostrar,
        },
      };
    }
    case agregarEquiposZonaTorneoExito: {
      const equiposYaAgregados = accion.equipos.map(equipo => {
        return equipo._id;
      });
      return {
        ...state,
        modalGenericoAgregarEquipos: {
          tipo: 'success',
          mensaje: 'Equipos Agregados...',
          isMostrar: true,
          agregandoEquipos: true,
        },
        entidadZonaAgregarEquipos: {
          ...state.entidadZonaAgregarEquipos,
          equiposDisponibles: state.entidadZonaAgregarEquipos.equiposDisponibles.filter(
            equipo => !equiposYaAgregados.includes(equipo.value)
          ),
          equipos: accion.equipos,
        },
      };
    }
    case eliminarEquipoDeZonaExito: {
      return {
        ...state,
        entidadZonaAgregarEquipos: {
          ...state.entidadZonaAgregarEquipos,
          equipos: state.entidadZonaAgregarEquipos.equipos.filter(
            equipo => equipo._id !== accion.equipo._id
          ),
          equiposDisponibles: [
            ...state.entidadZonaAgregarEquipos.equiposDisponibles,
            {
              label: accion.equipo.nombreClub,
              value: accion.equipo._id,
              data: accion.equipo,
            },
          ],
        },
        modalGenericoAgregarEquipos: {
          tipo: 'succes',
          mensaje: 'Equipo eliminado con exito',
          isMostrar: true,
        },
      };
    }
    case agregarEquiposZonaTorneoError: {
      return {
        ...state,
        modalGenericoAgregarEquipos: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar equipos...',
          isMostrar: true,
        },
      };
    }
    case eliminarEquipoDeZonaError: {
      return {
        ...state,
        modalGenericoAgregarEquipos: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos eliminar este equipo...',
          isMostrar: true,
        },
      };
    }

    default:
      return state;
  }
};
export default storeTorneos;
