import {listarEquiposCargando, listarEquiposExito, listarEquiposError} from './AccionesEquipos';
const equiposPorDefecto = {
  equipos: [],
  equipo: {},
};

const storeEquipos = (state = equiposPorDefecto, accion) => {
  switch (accion.type) {
    case listarEquiposCargando: {
      return {
        ...state,
      };
    }
    case listarEquiposExito: {
      return {
        ...state,
      };
    }
    case listarEquiposError: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storeEquipos;
