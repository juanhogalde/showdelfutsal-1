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
  cargandoEliminarNoticia,
  eliminarNoticiaExito,
  eliminarNoticiaError,
  actualizarListaNoticias,
  cargandoDestacarNoticia,
  desestacarNoticiaExito,
  desestacarNoticiaError,
  destacarNoticiaExito,
  destacarNoticiaError,
  cargandoObtenerNoticiaSeleccionada,
  obtenerNoticiaSeleccionadaExito,
  obtenerNoticiaSeleccionadaError,
} from './AccionesNoticias';

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: '',
  noticiaSeleccionada: null,
  noticiaSeleccionadaError: null,
  isObteniendoNoticia: {isMostrar: false, tipo: '', mensaje: ''},
  noticiaEliminada: {},
  isNoticiaGurdada: {
    isMostrar: false,
    tipo: '',
    mensaje: '',
    isExito: false,
    isError: false,
    isEditada: false,
    isEliminado: false,
  },
  cargandoNoticiaDesarrollada: true,
  noticiaDesarrolada: null,
  noticiaDesarrolladaError: null,
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
          isEliminado: false,
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
          isEliminado: false,
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
          isEliminado: false,
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
          isEliminado: false,
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
      const noticiaSeleccionada = state.noticias.find(noticia => noticia._id === accion.id);
      if (noticiaSeleccionada) {
        return {
          ...state,
          noticiaSeleccionada: noticiaSeleccionada,
          noticiaSeleccionadaError: null,
        };
      } else {
        return {
          ...state,
          noticiaSeleccionada: null,
          noticiaSeleccionadaError: 'No se encontro la noticia solicitada',
        };
      }
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
          isEliminado: false,
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
          isEliminado: false,
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
          isEliminado: false,
        },
      };
    }
    case cargandoEliminarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: 'Eliminando',
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case eliminarNoticiaExito: {
      return {
        ...state,
        noticiaEliminada: accion.noticia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Noticia eliminada',
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: true,
        },
      };
    }
    case eliminarNoticiaError: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case actualizarListaNoticias: {
      let copia = state.noticias.filter(element => element._id !== accion.id);
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case cargandoDestacarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: accion.mensaje,
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
          isDestacada: false,
        },
      };
    }
    case desestacarNoticiaExito: {
      let index = state.noticias.findIndex(element => element._id === accion.noticia._id);
      let copia = [...state.noticias];
      copia[index] = accion.noticia;
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case desestacarNoticiaError: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case destacarNoticiaExito: {
      let index = state.noticias.findIndex(element => element._id === accion.noticia._id);
      let copia = [...state.noticias];
      copia[index] = accion.noticia;
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case destacarNoticiaError: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case cargandoObtenerNoticiaSeleccionada: {
      return {
        ...state,
        cargandoNoticiaDesarrollada: true,
        noticiaDesarrolada: null,
        noticiaDesarrolladaError: null,
      };
    }
    case obtenerNoticiaSeleccionadaExito: {
      return {
        ...state,
        noticiaDesarrolada: accion.noticia,
        noticiaDesarrolladaError: null,
        cargandoNoticiaDesarrollada: false,
      };
    }
    case obtenerNoticiaSeleccionadaError: {
      return {
        ...state,
        noticiaDesarrolladaError: accion.error,
        noticiaDesarrolada: null,
        cargandoNoticiaDesarrollada: false,
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
