import {
  obtenerDatosDeTorneo,
  /* obtenerCategoriaSubcategoriaDatosDeTorneo, */
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
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    case obtenerDatosDeTorneo: {
      return {
        ...state,
        torneo: accion.datos,
      };
    }
    /* case obtenerCategoriaSubcategoriaDatosDeTorneo: {
      console.log(accion);
      return {
        ...state,
        torneo: {
          ...state.torneo,
          idCategoria: accion.categoriaId,
          idSubcategoria: accion.subcategoriaId,
        },
      };
    } */
    case cargandoAgregarTorneo: {
      return {
        ...state,
      };
    }
    case agregarTorneoExito: {
      return {
        ...state,
        torneos: [...state.torneos, ...accion.datos],
      };
    }
    case agregarTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoAgregarTorneo: {
      return {
        ...state,
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
