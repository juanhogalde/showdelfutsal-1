import {
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
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoAgregarTorneo: {
      return {
        ...state,
      };
    }
    case agregarTorneoExito: {
      return {
        ...state,
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
