import API from './../Configuracion/api';

//buscar Noticia
export const cargandoBuscarNoticias = 'cargandoBuscarNoticias';
export const buscarNoticiaExito = 'buscarNoticiaExito';
export const buscarNoticiaError = 'buscarNoticiaError';
export const volverProdefectoNoticiasBusqueda = 'volverProdefectoNoticiasBusqueda';

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
