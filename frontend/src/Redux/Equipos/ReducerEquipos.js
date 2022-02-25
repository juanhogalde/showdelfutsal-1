import {
  listarEquiposCargando,
  listarEquiposExito,
  listarEquiposError,
  equiposPorSubcategoriaCargando,
  equiposPorSubcategoriaExito,
  equiposPorSubcategoriaError,
  equiposPorSubcategoriaDefault,
  obtenerEquiposDeZonaCargando,
  obtenerEquiposDeZonaExito,
  obtenerEquiposDeZonaError,
  obtenerEquiposDeZonaDefault,
} from './AccionesEquipos';
const equiposPorDefecto = {
  equipos: [],
  enfrentamientos: [],
  equipo: {},
  isListarEquipos: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
  },
  isObtenerEquiposDeZona: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
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
    case equiposPorSubcategoriaCargando: {
      return {
        ...state,
        isListarEquipos: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Obteniendo Equipos',
        },
      };
    }
    case equiposPorSubcategoriaExito: {
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
    case equiposPorSubcategoriaError: {
      return {
        ...state,
        isListarEquipos: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos en éste momento, no podemos agregar equipos.',
        },
      };
    }
    case equiposPorSubcategoriaDefault: {
      return {
        ...state,
        isListarEquipos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
        equipos: [],
      };
    }
    case obtenerEquiposDeZonaCargando: {
      return {
        ...state,
        isObtenerEquiposDeZona: {
          tipo: 'cargando',
          mensaje: 'Obteniendo datos de enfrentamiento...',
          isMostrar: true,
        },
      };
    }
    case obtenerEquiposDeZonaExito: {
      return {
        ...state,
        isObtenerEquiposDeZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
        equipos: accion.data,
      };
    }
    case obtenerEquiposDeZonaError: {
      return {
        ...state,
        isObtenerEquiposDeZona: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no obtuvimos equipos de zona.',
          isMostrar: true,
        },
      };
    }
    case obtenerEquiposDeZonaDefault: {
      return {
        ...state,
        isObtenerEquiposDeZona: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
        equipos: [],
      };
    }
    default:
      return state;
  }
};
export default storeEquipos;
