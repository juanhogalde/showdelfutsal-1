import {
  agregarPartidoCargando,
  agregarPartidoExito,
  agregarPartidoError,
  agregarPartidoDefault,
  eliminarPartidoConsultar,
  eliminarPartidoCargando,
  eliminarPartidoExito,
  eliminarPartidoError,
  eliminarPartidoDefault,
  actulizarListaDeEnfrentamientos,
  obtenerPartidosDeZonaCargando,
  obtenerPartidosDeZonaExito,
  obtenerPartidosDeZonaError,
  obtenerPartidosDeZonaDefault,
} from './AccionPartidos';
/* import {urlEscudos} from '../../Entorno'; */

const partidosPorDefecto = {
  /* partidos: [
    {
      equipoLocal: {
        nombreClub: 'Huarpes',
        escudo: urlEscudos + 'huarpes.png',
      },
      equipoVisitante: {
        nombreClub: 'Hualilán',
        escudo: urlEscudos + 'hualilan.png',
      },
      resultadoLocal: 2,
      resultadoVisitante: 0,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'S.E.C',
        escudo: urlEscudos + 'sindicatoempleadosdecomercio.png',
      },
      equipoVisitante: {
        nombreClub: 'Krause',
        escudo: urlEscudos + 'krause.png',
      },
      resultadoLocal: 3,
      resultadoVisitante: 1,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Coop. Caucete',
        escudo: urlEscudos + 'cooperativacaucete.png',
      },
      equipoVisitante: {
        nombreClub: 'La Gloria',
        escudo: urlEscudos + 'lagloria.png',
      },
      resultadoLocal: 1,
      resultadoVisitante: 4,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Krause',
        escudo: urlEscudos + 'krause.png',
      },
      equipoVisitante: {
        nombreClub: 'Huarpes',
        escudo: urlEscudos + 'huarpes.png',
      },
      resultadoLocal: 6,
      resultadoVisitante: 3,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 2',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
  ],  */
  partidos: [],
  partido: {},
  isAgregarPartido: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
  },
  isEliminarPartido: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    id: '',
  },
  isObtenerPartidos: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    id: '',
  },
  isPartido: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
};
const storePartidos = (state = partidosPorDefecto, accion) => {
  switch (accion.type) {
    case agregarPartidoCargando: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Agregando Partido...',
        },
      };
    }
    case agregarPartidoExito: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'success',
          isMostrar: true,
          mensaje: 'Partido Agregado...',
        },
        partidos: [...state.partidos, accion.datos],
      };
    }
    case agregarPartidoError: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, en este momento no podemos agregar éste partido...',
        },
      };
    }
    case agregarPartidoDefault: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
      };
    }
    case eliminarPartidoConsultar: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'warning',
          isMostrar: true,
          mensaje: '¿Desea eliminar este enfrentamiento?',
          id: accion.partidoId,
        },
      };
    }
    case eliminarPartidoCargando: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Eliminando enfrentamiento...',
          id: state.isEliminarPartido.partidoId,
        },
      };
    }
    case eliminarPartidoExito: {
      let auxPartidos = state.partidos.filter(partido => partido._id !== accion.id);
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'success',
          isMostrar: true,
          mensaje: 'Enfrentamiento eliminado',
          id: '',
        },
        partidos: auxPartidos,
      };
    }
    case eliminarPartidoError: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, en este momento no podemos eliminar este enfrentamiento...',
          id: '',
        },
      };
    }
    case eliminarPartidoDefault: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          id: '',
        },
      };
    }
    case actulizarListaDeEnfrentamientos: {
      return {
        ...state,
      };
    }
    case obtenerPartidosDeZonaCargando: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Obteniendo partidos de zona...',
        },
      };
    }
    case obtenerPartidosDeZonaExito: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
        partidos: accion.datos,
      };
    }
    case obtenerPartidosDeZonaError: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, no pudimos obtener partidos de zona.',
        },
      };
    }
    case obtenerPartidosDeZonaDefault: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
        partidos: [],
      };
    }
    default:
      return state;
  }
};
export default storePartidos;
