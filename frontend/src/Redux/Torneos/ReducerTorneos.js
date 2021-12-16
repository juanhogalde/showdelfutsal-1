import {
  cargandoAgregarTorneo,
  agregarTorneoExito,
  agregarTorneoError,
  volverPorDefectoAgregarTorneo,
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
    default:
      return state;
  }
};
export default storeTorneos;
