import API from './../Configuracion/api';

//buscar Noticia
export const cargandoBuscarNoticias = 'cargandoBuscarNoticias';
export const buscarNoticiaExito = 'buscarNoticiaExito';
export const buscarNoticiaError = 'buscarNoticiaError';
export const volverProdefectoNoticiasBusqueda = 'volverProdefectoNoticiasBusqueda';
export const guardarNoticiaSeleccionada = 'guardarNoticiaSeleccionada';
export const cargandoAgregarNoticia = 'cargandoAgregarNoticia';
export const agregarNoticiaExito = 'agregarNoticiaExito';
export const agregarNoticiaError = 'agregarNoticiaError';
export const cargandoGuardarNoticia = 'cargandoGuardarNoticia';
export const guardarNoticiaExito = 'guardarNoticiaExito';
export const guardarNoticiaError = 'guardarNoticiaError';

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
export const cargandoAgregarNoticia_accion = () => {
  return {
    type: cargandoAgregarNoticia,
  };
};
export const agregarNoticiaExito_accion = data => {
  return {
    type: agregarNoticiaExito,
    respuesta: data,
  };
};
export const agregarNoticiaError_accion = error => {
  return {
    type: agregarNoticiaError,
    error: error,
  };
};

//async agregar noticia
export const agregarNoticia = imagen => {
  return dispatch => {
    dispatch(cargandoAgregarNoticia_accion());
    var imagenNoticia = new FormData();
    imagenNoticia.append('archivos', imagen[0]);
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: imagenNoticia,
    })
      .then(res => {
        console.log(res);
        dispatch(agregarNoticiaExito_accion(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(agregarNoticiaError_accion(error));
      });
  };
};
//______________________________________________________
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

export const guardarNoticia_accion = datos => {
  return dispatch => {
    dispatch(cargandoGuardarNoticia_accion());
    API({
      url: '/Noticias/agregar',
      method: 'post',
      data: datos,
    })
      .then(res => {
        console.log(res);
        dispatch(GuardarNoticiaExito_accion(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(GuardarNoticiaError_accion(error));
      });
  };
};
