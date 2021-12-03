import API from './../Configuracion/api';
export const cargandoPublicidad = 'cargandoPublicidad';
export const publicidadExito = 'publicidadExito';
export const publicidadError = 'publicidadError';
export const listarPublicidadesExito = 'listarPublicidadesExito';
export const listarPublicidadesError = 'listarPublicidadesError';

export const cargandoPublicidad_accion = () => {
  return {
    type: cargandoPublicidad,
  };
};
export const publicidadExito_accion = data => {
  return {
    type: publicidadExito,
    publicidad: data,
  };
};
export const publicidadError_accion = error => {
  return {
    type: publicidadError,
    error: error,
  };
};

export const guardarPublicidad = datosCargados => {
  return dispatch => {
    var imagenPublicidad = new FormData();
    imagenPublicidad.append('archivos', datosCargados.imagen[0]);
    dispatch(cargandoPublicidad_accion());
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: imagenPublicidad,
    })
      .then(res => {
        datosCargados = {...datosCargados, idImagen: res.data.value._id};
        API({
          url: '/publicidades/agregar',
          method: 'post',
          data: datosCargados,
        })
          .then(res => {
            console.log(res);
            dispatch(publicidadExito_accion(res.data));
          })
          .catch(error => {
            console.log(error);
            dispatch(publicidadError_accion(error));
          });
      })
      .catch(error => {
        console.log(error);
        dispatch(publicidadError_accion(error));
      });
  };
};

export const ListarPublicidadesExito_accion = publicidades => {
  return {
    type: listarPublicidadesExito,
    respuesta: publicidades,
  };
};
export const ListarPublicidadesError_accion = error => {
  return {
    type: listarPublicidadesError,
    error: error,
  };
};
export const listarPublicidades_accion = () => {
  return dispatch => {
    // dispatch(cargandoListarNoticia_accion());
    API({
      url: '/Publicidades/listar',
      method: 'get',
    })
      .then(res => {
        console.log(res);
        dispatch(ListarPublicidadesExito_accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(ListarPublicidadesError_accion(error));
      });
  };
};
