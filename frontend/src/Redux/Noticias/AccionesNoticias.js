import API from "./../Configuracion/api";

export const cargandoBuscarNoticias = "cargandoBuscarNoticias";
export const buscarNoticiaExito = "buscarNoticiaExito";
export const buscarNoticiaError = "buscarNoticiaError";
export const volverProdefectoNoticiasBusqueda = "volverProdefectoNoticiasBusqueda";
export const guardarNoticiaSeleccionada = "guardarNoticiaSeleccionada";
export const cargandoGuardarNoticia = "cargandoGuardarNoticia";
export const guardarNoticiaExito = "guardarNoticiaExito";
export const guardarNoticiaError = "guardarNoticiaError";
export const volverPorDefecto = "volverPorDefecto";
export const guardarNoticiaMiniaturaSeleccionada = "guardarNoticiaMiniaturaSeleccionada";
export const cargandoEditarNoticia = "cargandoEditarNoticia";
export const edicionNoticiaExito = "edicionNoticiaExito";
export const edicionNoticiaError = "edicionNoticiaError";
export const cargandoEliminarNoticia = "cargandoEliminarNoticia";
export const eliminarNoticiaExito = "eliminarNoticiaExito";
export const eliminarNoticiaError = "eliminarNoticiaError";

export const cargandoDestacarNoticia = "cargandoDestacarNoticia";
export const desestacarNoticiaExito = "desestacarNoticiaExito";
export const desestacarNoticiaError = "desestacarNoticiaError";
export const destacarNoticiaExito = "destacatNoticiaExito";
export const destacarNoticiaError = "destacarNoticiaError";

//acciones buscar noticia
export const cargandoBuscarNoticia_accion = () => {
  return {
    type: cargandoBuscarNoticias,
  };
};
export const buscarNoticiaExito_accion = (data) => {
  return {
    type: buscarNoticiaExito,
    noticia: data,
  };
};
export const buscarNoticiaError_accion = (error) => {
  return {
    type: buscarNoticiaError,
    error: error,
  };
};
export const volverProdefectoNoticiasBusqueda_accion = () => {
  return {
    type: volverProdefectoNoticiasBusqueda,
  };
};
export const guardarNoticiaSeleccionada_accion = (noticia) => {
  return {
    type: guardarNoticiaSeleccionada,
    noticia: noticia,
  };
};

//async buscar noticia
export const buscarNoticia = (titulo) => {
  return (dispatch) => {
    if (titulo) {
      dispatch(cargandoBuscarNoticia_accion());
      API({
        url: "/noticias/buscar",
        method: "post",
        data: {
          titulo: titulo,
        },
      })
        .then((res) => {
          dispatch(buscarNoticiaExito_accion(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(buscarNoticiaError_accion(error));
        });
    } else {
      dispatch(buscarNoticiaExito_accion({ value: "" }));
    }
  };
};

//acciones agregar noticia
export const cargandoGuardarNoticia_accion = (mensaje = "Cargando...") => {
  return {
    type: cargandoGuardarNoticia,
    mensaje: mensaje,
  };
};
export const GuardarNoticiaExito_accion = (noticia) => {
  return {
    type: guardarNoticiaExito,
    respuesta: noticia,
  };
};
export const GuardarNoticiaError_accion = (error) => {
  return {
    type: guardarNoticiaError,
    error: error,
  };
};
export const volverPorDefecto_accion = () => {
  return {
    type: volverPorDefecto,
  };
};

export const guardarNoticia_accion = (noticiaModelada, datosCargados) => {
  return (dispatch) => {
    var imagenNoticia = new FormData();
    imagenNoticia.append("archivos[]", datosCargados.imagen[0]);
    dispatch(cargandoGuardarNoticia_accion("Guardando..."));
    API({
      url: "/imagenes/agregar",
      method: "post",
      data: imagenNoticia,
    })
      .then((res) => {
        noticiaModelada.idImagen = res.data.value;
        API({
          url: "/Noticias/agregar",
          method: "post",
          data: noticiaModelada,
        })
          .then((res) => {
            dispatch(GuardarNoticiaExito_accion(res.data));
          })
          .catch((error) => {
            console.log(error);
            dispatch(GuardarNoticiaError_accion(error));
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch(GuardarNoticiaError_accion(error));
      });
  };
};

export const guardarNoticiaMiniaturaSeleccionada_accion = (id) => {
  return {
    type: guardarNoticiaMiniaturaSeleccionada,
    id: id,
  };
};

export const guardarNoticiaParaEditar_accion = (noticiaEditar) => {
  return {
    type: guardarNoticiaSeleccionada,
    noticia: noticiaEditar,
  };
};

export const cargandoEditarNoticia_accion = (mensaje = "Cargando...") => {
  return {
    type: cargandoEditarNoticia,
    mensaje: mensaje,
  };
};
export const EdicionNoticiaExito_accion = (noticia) => {
  return {
    type: edicionNoticiaExito,
    noticia: noticia,
  };
};
export const EdicionNoticiaError_accion = (error) => {
  return {
    type: edicionNoticiaError,
    error: error,
  };
};

export const editarNoticia_accion = (noticiaModelada, datosCargados) => {
  return (dispatch) => {
    if (datosCargados.imagen && datosCargados.imagen[0].type) {
      var imagenNoticia = new FormData();
      imagenNoticia.append("archivos[]", datosCargados.imagen[0]);
      dispatch(cargandoEditarNoticia_accion("Editnado..."));
      API({
        url: "/imagenes/agregar",
        method: "post",
        data: imagenNoticia,
      })
        .then((res) => {
          noticiaModelada.idImagen = res.data.value;
          API({
            url: "/Noticias/modificar",
            method: "put",
            data: noticiaModelada,
          })
            .then((res) => {
              dispatch(EdicionNoticiaExito_accion(res.data));
            })
            .catch((error) => {
              console.log(error);
              dispatch(EdicionNoticiaError_accion(error));
            });
        })
        .catch((error) => {
          console.log(error);
          dispatch(EdicionNoticiaError_accion(error));
        });
    } else {
      dispatch(cargandoEditarNoticia_accion("Editando..."));
      API({
        url: "/Noticias/modificar",
        method: "put",
        data: { ...noticiaModelada, idImagen: datosCargados.idImagen },
      })
        .then((res) => {
          dispatch(EdicionNoticiaExito_accion(res.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(EdicionNoticiaError_accion(error));
        });
    }
  };
};

export const cargandoEliminarNoticia_accion = (mensaje = "Cargando...") => {
  return {
    type: cargandoEliminarNoticia,
    mensaje: mensaje,
  };
};
export const eliminarNoticiaExito_accion = (noticia) => {
  return {
    type: eliminarNoticiaExito,
    noticia: noticia,
  };
};
export const eliminarNoticiaError_accion = (error) => {
  return {
    type: eliminarNoticiaError,
    error: error,
  };
};

export const eliminarNoticia_accion = (noticia) => {
  return (dispatch) => {
    dispatch(cargandoEliminarNoticia_accion("Eliminando"));
    API({
      url: "/Noticias/eliminar",
      method: "delete",
      data: { id: noticia._id },
    })
      .then((res) => {
        API({
          url: "/imagenes/eliminar",
          method: "delete",
          data: { id: noticia.idImagen[0]._id },
        })
          .then((res) => {
            dispatch(eliminarNoticiaExito_accion(noticia));
          })
          .catch((error) => {
            dispatch(eliminarNoticiaError_accion(error));
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch(eliminarNoticiaError_accion(error));
      });
  };
};

export const cargandoDestacarNoticia_accion = (mensaje = "") => {
  return {
    type: cargandoDestacarNoticia,
    mensaje: mensaje,
  };
};
export const desestacarNoticiaExito_accion = (noticia) => {
  return {
    type: desestacarNoticiaExito,
    noticia: noticia,
  };
};
export const desestacarNoticiaError_accion = (error) => {
  return {
    type: desestacarNoticiaError,
    error: error,
  };
};
export const destacarNoticiaExito_accion = (noticia) => {
  return {
    type: destacarNoticiaExito,
    noticia: noticia,
  };
};
export const destacarNoticiaError_accion = (error) => {
  return {
    type: destacarNoticiaError,
    error: error,
  };
};
export const desestacarNoticia_accion = (noticia) => {
  return (dispatch) => {
    dispatch(cargandoDestacarNoticia_accion("Espere..."));
    API({
      url: "/Noticias/desestacar",
      method: "put",
      data: noticia,
    })
      .then((res) => {
        dispatch(desestacarNoticiaExito_accion(res.data.value));
      })
      .catch((error) => {
        console.log(error);
        dispatch(desestacarNoticiaError_accion(error));
      });
  };
};
export const destacarNoticia_accion = (noticia) => {
  return (dispatch) => {
    dispatch(cargandoDestacarNoticia_accion("Destacando..."));
    API({
      url: "/Noticias/destacar",
      method: "put",
      data: noticia,
    })
      .then((res) => {
        dispatch(destacarNoticiaExito_accion(res.data.value));
      })
      .catch((error) => {
        console.log(error);
        dispatch(destacarNoticiaError_accion(error));
      });
  };
};

// Obtener noticia seleccionada
export const cargandoObtenerNoticiaSeleccionada = "cargandoObtenerNoticiaSeleccionada";
export const volverPorDefectoNoticiasDesarrollada = "volverPorDefectoNoticiasDesarrollada";
export const obtenerNoticiaSeleccionadaExito = "obtenerNoticiaSeleccionadaExito";
export const obtenerNoticiaSeleccionadaError = "obtenerNoticiaSeleccionadaError";
export const cargandoObtenerNoticiaSeleccionada_accion = () => {
  return {
    type: cargandoObtenerNoticiaSeleccionada,
  };
};
export const volverPorDefectoNoticiasDesarrollada_accion = () => {
  return {
    type: volverPorDefectoNoticiasDesarrollada,
  };
};
export const obtenerNoticiaSeleccionadaExito_accion = (noticia) => {
  return {
    type: obtenerNoticiaSeleccionadaExito,
    noticia: noticia,
  };
};
export const obtenerNoticiaSeleccionadaError_accion = (error) => {
  return {
    type: obtenerNoticiaSeleccionadaError,
    error: error,
  };
};
export const obtenerNoticiaSeleccionada = (id) => {
  return (dispatch) => {
    dispatch(cargandoObtenerNoticiaSeleccionada_accion());
    API({
      url: `/Noticias/obtener/${id}`,
      method: "get",
    })
      .then((res) => {
        dispatch(obtenerNoticiaSeleccionadaExito_accion(res.data.value));
      })
      .catch((error) => {
        console.log({ error });
        dispatch(obtenerNoticiaSeleccionadaError_accion("No se pudo obtener la noticia"));
      });
  };
};
///Obtener Noticias Para Seccion
export const cargandoObtenerNoticiasParaSeccion = "cargandoObtenerNoticiasParaSeccion";
export const obtenerNoticiasParaSeccionExito = "obtenerNoticiasParaSeccionExito";
export const obtenerNoticiasParaSeccionError = "obtenerNoticiasParaSeccionError";
export const cargandoObtenerNoticiasParaSeccion_accion = () => {
  return {
    type: cargandoObtenerNoticiasParaSeccion,
  };
};

export const obtenerNoticiasParaSeccionExito_accion = (noticias, subCategoriaSeleccionada) => {
  return {
    type: obtenerNoticiasParaSeccionExito,
    noticias: noticias,
    subCategoriaSeleccionada: subCategoriaSeleccionada,
  };
};
export const obtenerNoticiasParaSeccionError_accion = (error) => {
  return {
    type: obtenerNoticiasParaSeccionError,
    error: error,
  };
};
export const obtenerNoticiasParaSeccion = (id, subcategorias) => {
  return (dispatch) => {
    const subCategoriaSeleccionada = subcategorias?.find((element) => element.key === parseInt(id));
    dispatch(cargandoObtenerNoticiasParaSeccion_accion());
    API({
      url: `/Noticias/obtenerPorSubCategoria/${id}`,
      method: "get",
    })
      .then((res) => {
        dispatch(obtenerNoticiasParaSeccionExito_accion(res.data.value, subCategoriaSeleccionada));
      })
      .catch((error) => {
        console.log({ error });
        dispatch(obtenerNoticiasParaSeccionError_accion("No se pudieron obtener las noticias"));
      });
  };
};

//listar Noticias ADMIN
export const cargandoListarNoticia = "cargandoListarNoticia";
export const listarNoticiaExito = "listarNoticiaExito";
export const listarNoticiaError = "listarNoticiaError";
export const cargandoListarNoticia_accion = () => {
  return {
    type: cargandoListarNoticia,
  };
};
export const ListarNoticiaExito_accion = (noticias) => {
  return {
    type: listarNoticiaExito,
    payload: noticias,
  };
};
export const ListarNoticiaError_accion = (error) => {
  return {
    type: listarNoticiaError,
    payload: error,
  };
};
export const obtenerDatosPaginaNoticiasAdmin = () => {
  return (dispatch) => {
    dispatch(cargandoListarNoticia_accion());
    API({
      url: "/Noticias/listar",
      method: "get",
    })
      .then((res) => {
        dispatch(ListarNoticiaExito_accion(res.data.value));
      })
      .catch((error) => {
        console.log({ error });
        dispatch(ListarNoticiaError_accion(error));
      });
  };
};
