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
  cargandoEliminarTorneo,
  eliminarTorneoExito,
  eliminarTorneoError,
  volverPorDefectoEliminarTorneo,
  cargandoListarTorneo,
  listarTorneoExito,
  listarTorneoError,
  volverPorDefectoListarTorneo,
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
    case cargandoEliminarTorneo: {
      return {
        ...state,
      };
    }
    case eliminarTorneoExito: {
      return {
        ...state,
      };
    }
    case eliminarTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoEliminarTorneo: {
      return {
        ...state,
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
    default:
      return state;
  }
};
export default storeTorneos;
