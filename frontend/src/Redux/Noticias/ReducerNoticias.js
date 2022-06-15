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
  cargandoDestacarNoticia,
  desestacarNoticiaExito,
  desestacarNoticiaError,
  destacarNoticiaExito,
  destacarNoticiaError,
  cargandoObtenerNoticiaSeleccionada,
  volverPorDefectoNoticiasDesarrollada,
  obtenerNoticiaSeleccionadaExito,
  obtenerNoticiaSeleccionadaError,
  //Obtener Noticias para seccion
  cargandoObtenerNoticiasParaSeccion,
  obtenerNoticiasParaSeccionExito,
  obtenerNoticiasParaSeccionError,
  cargandoListarNoticia,
} from "./AccionesNoticias";

const noticiaPorDefecto = {
  noticias: [],
  noticiaDeBusqueda: "",
  noticiaSeleccionada: null,
  noticiaSeleccionadaError: null,
  isObteniendoNoticia: { isMostrar: false, tipo: "", mensaje: "" },
  noticiaEliminada: {},
  isNoticiaGurdada: {
    isMostrar: false,
    tipo: "",
    mensaje: "",
  },
  cargandoNoticiaDesarrollada: true,
  noticiaDesarrolada: null,
  noticiaDesarrolladaError: null,
  isCargandoSeccion: true,
  noticasSeccion: null,
  isErrrorSeccion: null,
  //Componente Pagina Noticia
  noticiasPaginaAdmin: null,
  cargandoNoticiasAdmin: true,
  errorPaginaNoticiasAdmin: null,
  //Componente Nueva Noticia
  subCategoriaSeleccionada: null,
  datosParaNuevaNoticias: null,
  isCargandoComponenteNuevaNoticias: true,
  errorComponenteNuevaNoticia: null,
};
const storeNoticias = (state = noticiaPorDefecto, accion) => {
  switch (accion.type) {
    //Buscar Noticia
    case cargandoBuscarNoticias: {
      return {
        ...state,
        isObteniendoNoticia: {
          isMostrar: true,
          tipo: "cargando",
          mensaje: "cargando",
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
        noticiaDeBusqueda: typeof accion.noticia.value !== "string" ? accion.noticia.value : [{ titulo: "sin resultado" }],
        isObteniendoNoticia: { isMostrar: false, tipo: "", mensaje: "" },
      };
    }
    case buscarNoticiaError: {
      return {
        ...state,
        isObteniendoNoticia: {
          isMostrar: true,
          tipo: "error",
          mensaje: accion.error.message,
        },
      };
    }
    case volverProdefectoNoticiasBusqueda: {
      return {
        ...state,
        noticiaDeBusqueda: "",
      };
    }
    case cargandoGuardarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "cargando",
          mensaje: accion.mensaje,
        },
      };
    }
    case guardarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "success",
          mensaje: "Noticia Guardada",
        },
        noticias: [...state.noticias, accion.respuesta.value],
      };
    }
    case guardarNoticiaError: {
      console.log(accion.error);
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "error",
          mensaje: "No se pudo guardar la noticia",
        },
      };
    }
    case volverPorDefecto: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: "",
          mensaje: "",
        },
      };
    }
    case guardarNoticiaMiniaturaSeleccionada: {
      const noticiaSeleccionada = state.noticias.find((noticia) => noticia._id === accion.id);
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
          noticiaSeleccionadaError: "No se encontro la noticia solicitada",
        };
      }
    }
    case cargandoEditarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "cargando",
          mensaje: accion.mensaje,
        },
      };
    }
    case edicionNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "success",
          mensaje: "Noticia editada",
        },
      };
    }
    case edicionNoticiaError: {
      console.log(accion.error);
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "error",
          mensaje: "No se pudo editar la noticia",
        },
      };
    }
    case cargandoEliminarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "cargando",
          mensaje: "Eliminando",
        },
      };
    }
    case eliminarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "success",
          mensaje: "Noticia eliminada",
        },
      };
    }
    case eliminarNoticiaError: {
      console.log(accion.error);
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "error",
          mensaje: "No se pudo eliminar la noticia",
        },
      };
    }
    case cargandoDestacarNoticia: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "cargando",
          mensaje: accion.mensaje,
        },
      };
    }
    case desestacarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "success",
          mensaje: "Se ha desestacado la noticia",
        },
      };
    }
    case desestacarNoticiaError: {
      console.log(accion.error);
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "error",
          mensaje: "No se pudo desestacar la noticia",
        },
      };
    }
    case destacarNoticiaExito: {
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "success",
          mensaje: "Noticia Destacada con exito",
        },
      };
    }
    case destacarNoticiaError: {
      console.log(accion.error);
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: true,
          tipo: "error",
          mensaje: "No se pudo destacar la noticia",
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
    case volverPorDefectoNoticiasDesarrollada: {
      return {
        ...state,
        cargandoNoticiaDesarrollada: false,
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
    //Obtener noticia Seccion
    case cargandoObtenerNoticiasParaSeccion: {
      return {
        ...state,
        isCargandoSeccion: true,
        noticasSeccion: null,
        subCategoriaSeleccionada: null,
        isErrrorSeccion: null,
      };
    }
    case obtenerNoticiasParaSeccionExito: {
      return {
        ...state,
        noticasSeccion: accion.noticias,
        subCategoriaSeleccionada: accion.subCategoriaSeleccionada,
        isErrrorSeccion: null,
        isCargandoSeccion: false,
      };
    }
    case obtenerNoticiasParaSeccionError: {
      return {
        ...state,
        isErrrorSeccion: accion.error,
        noticasSeccion: null,
        subCategoriaSeleccionada: null,
        isCargandoSeccion: false,
      };
    }
    //listar Noticias ADMIN
    case cargandoListarNoticia: {
      return {
        ...state,
        cargandoNoticiasAdmin: true,
        noticiasPaginaAdmin: null,
        errorPaginaNoticiasAdmin: null,
      };
    }
    case listarNoticiaExito: {
      return {
        ...state,
        noticiasPaginaAdmin: accion.payload,
        errorPaginaNoticiasAdmin: null,
        cargandoNoticiasAdmin: false,
      };
    }
    case listarNoticiaError: {
      console.log(accion.payload);
      return {
        ...state,
        errorPaginaNoticiasAdmin: "No se pudieron cargar los datos necesarios",
        noticiasPaginaAdmin: null,
        cargandoNoticiasAdmin: false,
      };
    }
    default:
      return state;
  }
};
export default storeNoticias;
