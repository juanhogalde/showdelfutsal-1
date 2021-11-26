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
} from './AccionesNoticias';

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: '',
  noticiaSeleccionada: {},
  isObteniendoNoticia: {isMostrar: false, tipo: '', mensaje: ''},
  isNoticiaGurdada: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
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
          mensaje: 'cargando',
          isExito: false,
          isError: false,
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
      console.log(accion.noticia);
      return {
        ...state,
        noticiaSeleccionada: {...accion.noticia},
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
