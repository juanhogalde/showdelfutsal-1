import API from './../Configuracion/api';

export const cargandoBuscarNoticias = 'cargandoBuscarNoticias';
export const buscarNoticiaExito = 'buscarNoticiaExito';
export const buscarNoticiaError = 'buscarNoticiaError';
export const volverProdefectoNoticiasBusqueda = 'volverProdefectoNoticiasBusqueda';
export const guardarNoticiaSeleccionada = 'guardarNoticiaSeleccionada';
export const cargandoGuardarNoticia = 'cargandoGuardarNoticia';
export const guardarNoticiaExito = 'guardarNoticiaExito';
export const guardarNoticiaError = 'guardarNoticiaError';
export const volverPorDefecto = 'volverPorDefecto';
export const listarNoticiaExito = 'listarNoticiaExito';
export const listarNoticiaError = 'listarNoticiaError';
export const guardarNoticiaMiniaturaSeleccionada = 'guardarNoticiaMiniaturaSeleccionada';

//acciones buscar noticia
export const cargandoBuscarNoticia_accion = () => {
  return {
    type: cargandoBuscarNoticias,
  };
};
export const buscarNoticiaExito_accion = data => {
  return {
    type: buscarNoticiaExito,
    noticia: data,
  };
};
export const buscarNoticiaError_accion = error => {
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
export const guardarNoticiaSeleccionada_accion = noticia => {
  return {
    type: guardarNoticiaSeleccionada,
    noticia: noticia,
  };
};

//async buscar noticia
export const buscarNoticia = titulo => {
  return dispatch => {
    if (titulo) {
      dispatch(cargandoBuscarNoticia_accion());
      API({
        url: '/noticias/buscar',
        method: 'post',
        data: {
          titulo: titulo,
        },
      })
        .then(res => {
          console.log(res);
          dispatch(buscarNoticiaExito_accion(res.data));
        })
        .catch(error => {
          console.log(error);
          dispatch(buscarNoticiaError_accion(error));
        });
    } else {
      dispatch(buscarNoticiaExito_accion({value: ''}));
    }
  };
};

//acciones agregar noticia
export const cargandoGuardarNoticia_accion = (mensaje = 'Cargando...') => {
  return {
    type: cargandoGuardarNoticia,
    mensaje: mensaje,
  };
};
export const GuardarNoticiaExito_accion = noticia => {
  return {
    type: guardarNoticiaExito,
    respuesta: noticia,
  };
};
export const GuardarNoticiaError_accion = error => {
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
  return dispatch => {
    var imagenNoticia = new FormData();
    imagenNoticia.append('archivos', datosCargados.imagen[0]);
    dispatch(cargandoGuardarNoticia_accion('Guardando...'));
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: imagenNoticia,
    })
      .then(res => {
        noticiaModelada.idImagen = res.data.value._id;
        API({
          url: '/Noticias/agregar',
          method: 'post',
          data: noticiaModelada,
        })
          .then(res => {
            console.log(res);
            dispatch(GuardarNoticiaExito_accion(res.data));
          })
          .catch(error => {
            console.log(error);
            dispatch(GuardarNoticiaError_accion(error));
          });
      })
      .catch(error => {
        console.log(error);
        dispatch(GuardarNoticiaError_accion(error));
      });
  };
};

//listar Noticias
// export const cargandoListarNoticia_accion = () => {
//   return {
//     type: cargandoGuardarNoticia,
//   };
// };
export const ListarNoticiaExito_accion = noticias => {
  return {
    type: listarNoticiaExito,
    respuesta: noticias,
  };
};
export const ListarNoticiaError_accion = error => {
  return {
    type: listarNoticiaError,
    error: error,
  };
};
export const listarNoticia_accion = () => {
  return dispatch => {
    // dispatch(cargandoListarNoticia_accion());
    API({
      url: '/Noticias/listar',
      method: 'get',
    })
      .then(res => {
        dispatch(ListarNoticiaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(ListarNoticiaError_accion(error));
      });
  };
};

export const guardarNoticiaMiniaturaSeleccionada_accion = noticiaMiniatura => {
  return {
    type: guardarNoticiaMiniaturaSeleccionada,
    noticia: noticiaMiniatura,
  };
};
