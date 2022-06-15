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
    isExito: false,
    isError: false,
    isEditada: false,
    isEliminado: false,
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
        noticiaDeBusqueda:
          typeof accion.noticia.value !== "string"
            ? accion.noticia.value
            : [{ titulo: "sin resultado" }],
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
          tipo: "success",
          mensaje: "Noticia Guardada",
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
          tipo: "error",
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
          tipo: "",
          mensaje: "",
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case guardarNoticiaMiniaturaSeleccionada: {
      const noticiaSeleccionada = state.noticias.find(
        (noticia) => noticia._id === accion.id
      );
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
          isExito: false,
          isError: false,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case edicionNoticiaExito: {
      let index = state.noticias.findIndex(
        (element) => element._id === accion.noticia.value._id
      );
      let copia = [...state.noticias];
      copia[index] = accion.noticia.value;
      return {
        ...state,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: "success",
          mensaje: "Noticia editada",
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
          tipo: "error",
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
          tipo: "cargando",
          mensaje: "Eliminando",
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
          tipo: "success",
          mensaje: "Noticia eliminada",
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
          tipo: "error",
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case actualizarListaNoticias: {
      let copia = state.noticias.filter((element) => element._id !== accion.id);
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: "",
          mensaje: "",
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
          tipo: "cargando",
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
      let index = state.noticias.findIndex(
        (element) => element._id === accion.noticia._id
      );
      let copia = [...state.noticias];
      copia[index] = accion.noticia;
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: "",
          mensaje: "",
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
          tipo: "error",
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          isEliminado: false,
        },
      };
    }
    case destacarNoticiaExito: {
      let index = state.noticias.findIndex(
        (element) => element._id === accion.noticia._id
      );
      let copia = [...state.noticias];
      copia[index] = accion.noticia;
      return {
        ...state,
        noticias: copia,
        isNoticiaGurdada: {
          isMostrar: false,
          tipo: "",
          mensaje: "",
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
          tipo: "error",
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
      const categorias = accion.payload.categorias.map((categoria) => {
        return {
          value: categoria._id,
          label: categoria.nombreCategoria,
          key: categoria.keyCategoria,
        };
      });
      const subCategorias = accion.payload.subcategorias.map((subcategoria) => {
        return {
          value: subcategoria._id,
          label: subcategoria.nombreSubcategoria,
          key: subcategoria.keySubcategoria,
          keyCategoria: subcategoria.keyCategoria,
        };
      });
      return {
        ...state,
        noticiasPaginaAdmin: accion.payload.noticias,
        categorias: categorias,
        subcategorias: subCategorias,
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
