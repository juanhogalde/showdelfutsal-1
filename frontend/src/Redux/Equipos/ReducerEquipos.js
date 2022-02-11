import {listarEquiposCargando, listarEquiposExito, listarEquiposError} from './AccionesEquipos';
const equiposPorDefecto = {
  equipos: [],
  equipo: {},
  isListarEquipos: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
  },
};

const storeEquipos = (state = equiposPorDefecto, accion) => {
  switch (accion.type) {
    case listarEquiposCargando: {
      return {
        ...state,
        isListarEquipos: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Obteniendo Equipos',
        },
      };
    }
    case listarEquiposExito: {
      return {
        ...state,
        isListarEquipos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
        equipos: accion.datos,
      };
    }
    case listarEquiposError: {
      return {
        ...state,
        isListarEquipos: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos en éste momento, no podemos agregar equipos.',
        },
      };
    }
    default:
      return state;
  }
};
export default storeEquipos;
