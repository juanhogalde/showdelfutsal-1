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
  controlModalGenericoEditorEnfrentamiento,
  cargarZonasParaEditorEnfrentamiento,
} from './AccionPartidos';
/* import {urlEscudos} from '../../Entorno'; */

const partidosPorDefecto = {
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
  isCargandoEditorEnfrentamiento: true,
  errrorEditorEnfrentamiento: null,
  datosEditorEnfrentamiento: null,
  modalEditorEnfrentamiento: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    datos: null,
  },
};
const storePartidos = (state = partidosPorDefecto, accion) => {
  switch (accion.type) {
    case controlModalGenericoEditorEnfrentamiento: {
      return {
        ...state,
        modalEditorEnfrentamiento: {
          tipo: accion.modal.tipo,
          isMostrar: accion.modal.isMostrar,
          mensaje: accion.modal.mensaje,
          datos: accion.modal.datos,
        },
      };
    }
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
    //Restructurando
    case cargarZonasParaEditorEnfrentamiento: {
      return {
        ...state,
        zonas: accion.payload,
        modalEditorEnfrentamiento: {
          tipo: '',
          mensaje: '',
          datos: '',
          isMostrar: false,
        },
      };
    }
    default:
      return state;
  }
};
export default storePartidos;
