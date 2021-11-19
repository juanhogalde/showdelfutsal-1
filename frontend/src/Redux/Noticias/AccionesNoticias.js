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
export const cargandoGuardarNoticia_accion = () => {
  return {
    type: cargandoGuardarNoticia,
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
    dispatch(cargandoGuardarNoticia_accion());
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
