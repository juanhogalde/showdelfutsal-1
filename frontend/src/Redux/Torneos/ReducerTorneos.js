import {
  /* obtenerDatosDeTorneo, */
  obtenerCategoriaSubcategoriaDatosDeTorneo,
  cargandoAgregarTorneo,
  agregarTorneoExito,
  agregarTorneoError,
  volverPorDefectoAgregarTorneo,
  cargandoEditarTorneo,
  editarTorneoExito,
  editarTorneoError,
  volverPorDefectoEditarTorneo,
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
    isConsulta: true,
    isCargando: false,
    isExito: false,
    isError: false,
    id: '',
  },
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    /* case obtenerDatosDeTorneo: {
      return {
        ...state,
        torneo: accion.datos,
      };
    } */
    case obtenerCategoriaSubcategoriaDatosDeTorneo: {
      console.log(accion);
      return {
        ...state,
        torneo: {
          ...state.torneo,
          idCategoria: accion.categoriaId,
          idSubcategoria: accion.subcategoriaId,
        },
      };
    }
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
    case cargandoEditarTorneo: {
      return {
        ...state,
      };
    }
    case editarTorneoExito: {
      return {
        ...state,
      };
    }
    case editarTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoEditarTorneo: {
      return {
        ...state,
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
      let auxTorneos = state.torneos.filter(torneo => torneo._id !== state.isEliminarTorneo.id);
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
    default:
      return state;
  }
};
export default storeTorneos;
