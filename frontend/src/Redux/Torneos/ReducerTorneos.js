import {
  cargandoAgregarTorneo,
  agregarTorneoExito,
  agregarTorneoError,
  volverPorDefectoAgregarTorneo,
  consultarPorEditarTorneo,
  cargandoEditarTorneo,
  editarTorneoExito,
  editarTorneoError,
  volverPorDefectoEditarTorneo,
  cargarDatosDeTorneoParaEdicion,
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
  crearZonaTorneoExito,
  consultarPoragregarCategoriaSubcategoriaTorneo,
  cargandoAgregarCategoriaSubcategoria,
  agregarCategoriaSubcategoriaTorneoExito,
  agregarCategoriaSubcategoriaTorneoError,
  volverPorDefectoAgregarCategoriaSubcategoriaTorneo,
  actualizarListaDeTorneosConSubcategoria,
  cargandoObtenerDatosDeTorneoParaEdicion,
  obtenerDatosDeTorneoParaEdicionExito,
  obtenerDatosDeTorneoParaEdicionError,
  obtenerDatosDeTorneoParaEdicionDefault,
  ultimaUbicacionEditarTorneo,
} from './AccionesTorneos';

const torneoPorDefecto = {
  torneos: [],
  torneo: {},
  isAgregarTorneo: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
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
  isEditarTorneo: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isAgregarCategoriaSubcategoria: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
    categoria: '',
    subcategoria: '',
  },
  isObtenerDatosEditarTorneo: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isUltimaUbicacionEditarTorneo: false,
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoAgregarTorneo: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'cargando',
          mensaje: 'Agregando Torneo.',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case agregarTorneoExito: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo cargado con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        torneos: [...state.torneos, accion.datos],
        torneo: accion.datos,
      };
    }
    case agregarTorneoError: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar su torneo.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
        torneo: {},
      };
    }
    case volverPorDefectoAgregarTorneo: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case consultarPorEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'warning',
          mensaje: '¿Desea editar el torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case cargandoEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'cargando',
          mensaje: 'Editando torneo...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          categoria: state.isEditarTorneo.categoria,
          subcategoria: state.isEditarTorneo.subcategoria,
        },
      };
    }
    case editarTorneoExito: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo Editado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          categoria: state.isEditarTorneo.categoria,
          subcategoria: state.isEditarTorneo.subcategoria,
        },
        torneo: accion.datos,
      };
    }
    case editarTorneoError: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no se pudo editar el torneo.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case volverPorDefectoEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case cargarDatosDeTorneoParaEdicion: {
      let auxDatosDeTorneo = state.torneos.filter(torneo => torneo._id === accion.datos);
      return {
        ...state,
        torneo: auxDatosDeTorneo[0],
      };
    }
    case consultarPorEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'warning',
          mensaje: '¿Desea eliminar este torneo?',
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
      if (state.isEditarTorneo.isExito) {
        auxTorneos = state.torneos.map(torneoDeArray => {
          if (torneoDeArray._id === state.torneo._id) {
            return state.torneo;
          } else {
            return torneoDeArray;
          }
        });
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
        isEditarTorneo: {
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
      console.log(accion.id);
      let auxTorneo = state.torneos.find(torneo => torneo._id === accion.id);
      console.log(auxTorneo);
      return {
        ...state,
      };
    }
    case consultarPoragregarCategoriaSubcategoriaTorneo: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'warning',
          mensaje: '¿Desea agregar categoría y subcategría al torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: accion.idCategoria,
          subcategoria: accion.idSubcategoria,
        },
      };
    }
    case cargandoAgregarCategoriaSubcategoria: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'cargando',
          mensaje: 'Agregando categoría y subcategoría al torneo...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          categoria: state.isAgregarCategoriaSubcategoria.categoria,
          subcategoria: state.isAgregarCategoriaSubcategoria.subcategoria,
        },
      };
    }
    case agregarCategoriaSubcategoriaTorneoExito: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'success',
          mensaje: 'Torneo Editado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          categoria: state.isAgregarCategoriaSubcategoria.categoria,
          subcategoria: state.isAgregarCategoriaSubcategoria.subcategoria,
        },
        torneo: accion.datos,
      };
    }
    case agregarCategoriaSubcategoriaTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoAgregarCategoriaSubcategoriaTorneo: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case actualizarListaDeTorneosConSubcategoria: {
      let auxTorneos = state.torneos.map(torneoDeArray => {
        if (torneoDeArray._id === state.torneo._id) {
          return state.torneo;
        } else return torneoDeArray;
      });
      return {
        ...state,
        torneos: auxTorneos,
        isAgregarCategoriaSubcategoria: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case crearZonaTorneoExito: {
      let auxDatosDeTorneo = {};
      Object.assign(auxDatosDeTorneo, state.torneo);
      console.log(auxDatosDeTorneo);

      if (auxDatosDeTorneo.zonas) {
        auxDatosDeTorneo.zonas.push(accion.datos);
      } else {
        auxDatosDeTorneo = {
          ...auxDatosDeTorneo,
          zonas: [],
        };
        auxDatosDeTorneo.zonas.push(accion.datos);
      }
      return {
        ...state,
        torneo: auxDatosDeTorneo,
        isEditarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo Editado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
        },
      };
    }
    case cargandoObtenerDatosDeTorneoParaEdicion: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'cargando',
          mensaje: 'Obteniendo datos para editar torneo.',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case obtenerDatosDeTorneoParaEdicionExito: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'success',
          mensaje: 'Datos de torneo listos para editar.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        torneo: accion.datos,
      };
    }
    case obtenerDatosDeTorneoParaEdicionError: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos editar éste torneo.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
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
    default:
      return state;
  }
};
export default storeTorneos;
