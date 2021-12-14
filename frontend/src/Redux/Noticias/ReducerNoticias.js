import {
  cargandoBuscarNoticias,
  buscarNoticiaExito,
  buscarNoticiaError,
  volverProdefectoNoticiasBusqueda,
  guardarNoticiaSeleccionada,
  cargandoGuardarNoticia,
  guardarNoticiaExito,
  guardarNoticiaError,
  volverPorDefecto,
  listarNoticiaExito,
  listarNoticiaError,
  guardarNoticiaMiniaturaSeleccionada,
  cargandoEditarNoticia,
  edicionNoticiaExito,
  edicionNoticiaError,
} from './AccionesNoticias';

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: '',
  noticiaSeleccionada: {},
  isObteniendoNoticia: {isMostrar: false, tipo: '', mensaje: ''},
  isNoticiaGurdada: {
    isMostrar: false,
    tipo: '',
    mensaje: '',
    isExito: false,
    isError: false,
    isEditada: false,
  },
};
const storeNoticias = (state = noticiaPorDefecto, accion) => {
  switch (accion.type) {
    //Buscar Noticia
    case cargandoBuscarNoticias: {
      return {
        ...state,
        isObteniendoNoticia: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
      };
    }
    case guardarNoticiaSeleccionada: {
      return {
        ...state,
        noticiaSeleccionada: accion.noticia,
      };
    }
    case buscarNoticiaExito: {
      return {
        ...state,
        noticiaDeBusqueda:
          typeof accion.noticia.value !== 'string'
            ? accion.noticia.value
            : [{titulo: 'sin resultado'}],
        isObteniendoNoticia: {isMostrar: false, tipo: '', mensaje: ''},
      };
    }
    case buscarNoticiaError: {
      return {
        ...state,
        isObteniendoNoticia: {isMostrar: true, tipo: 'error', mensaje: accion.error.message},
      };
    }
    case volverProdefectoNoticiasBusqueda: {
      return {
        ...state,
        noticiaDeBusqueda: '',
      };
    }
    case cargandoGuardarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: accion.mensaje,
          isExito: false,
          isError: false,
          isEditada: false,
        },
      };
    }
    case guardarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Noticia Guardada',
          isExito: true,
          isError: false,
          isEditada: false,
        },
        noticias: [...state.noticias, accion.respuesta.value],
      };
    }
    case guardarNoticiaError: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
        },
      };
    }
    case volverPorDefecto: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
        },
      };
    }
    case listarNoticiaExito: {
      return {
        ...state,
        noticias: [...state.noticias, ...accion.respuesta],
      };
    }
    case listarNoticiaError: {
      return {
        ...state,
      };
    }
    case guardarNoticiaMiniaturaSeleccionada: {
      return {
        ...state,
        noticiaSeleccionada: {...accion.noticia},
      };
    }
    case cargandoEditarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: accion.mensaje,
          isExito: false,
          isError: false,
          isEditada: false,
        },
      };
    }
    case edicionNoticiaExito: {
      let index = state.noticias.findIndex(element => element._id === accion.noticia.value._id);
      let copia = [...state.noticias];
      copia[index] = accion.noticia.value;
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Noticia editada',
          isExito: false,
          isError: false,
          isEditada: true,
        },
        noticias: copia,
      };
    }
    case edicionNoticiaError: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
        },
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
