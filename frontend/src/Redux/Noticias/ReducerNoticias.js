import {
  cargandoBuscarNoticias,
  buscarNoticiaExito,
  buscarNoticiaError,
  volverProdefectoNoticiasBusqueda,
  guardarNoticiaSeleccionada,
} from './AccionesNoticias';

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: '',
  noticiaSeleccionada: {},
  isCargando: {isMostrar: false, tipo: '', mensaje: ''},
  isError: {isMostrar: false, tipo: '', mensaje: ''},
};
const storeNoticias = (state = noticiaPorDefecto, accion) => {
  switch (accion.type) {
    //Buscar Noticia
    case cargandoBuscarNoticias: {
      return {
        ...state,
        isCargando: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: 'cargando',
        },
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
        isCargando: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
        },
      };
    }
    case buscarNoticiaError: {
      return {
        ...state,
        isError: {
          isMostrar: true,
          tipo: 'error',
          mensaje: accion.error.message,
        },
        isCargando: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
        },
      };
    }
    case volverProdefectoNoticiasBusqueda: {
      return {
        ...state,
        noticiaDeBusqueda: '',
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
