import {
  cargandoBuscarNoticias,
  buscarNoticiaExito,
  buscarNoticiaError,
  volverProdefectoNoticiasBusqueda,
  guardarNoticiaSeleccionada,
  cargandoAgregarNoticia,
  agregarNoticiaExito,
  agregarNoticiaError,
  cargandoGuardarNoticia,
  guardarNoticiaExito,
  guardarNoticiaError,
} from './AccionesNoticias';

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: '',
  noticiaSeleccionada: {},
  isObteniendoNoticia: {isMostrar: false, tipo: '', mensaje: ''},
  isImagenNoticiaNueva: {isMostrar: false, tipo: '', mensaje: '', imagen: ''},
  isNoticiaGurdada: {isMostrar: false, tipo: '', mensaje: ''},
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
    case cargandoAgregarNoticia: {
      return {
        ...state,
        isImagenNoticiaNueva: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: 'cargando',
          imagen: '',
          isGurdadoExitoso: false,
        },
      };
    }
    case agregarNoticiaExito: {
      return {
        ...state,
        isImagenNoticiaNueva: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: 'cargando',
          imagen: accion.respuesta.value,
          isGurdadoExitoso: true,
        },
      };
    }
    case agregarNoticiaError: {
      return {
        ...state,
        isImagenNoticiaNueva: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          imagen: '',
          isGurdadoExitoso: false,
        },
      };
    }
    case cargandoGuardarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando', isExito: false},
      };
    }
    case guardarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {isMostrar: false, tipo: '', mensaje: '', isExito: true},
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
        },
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
