import API from './../Configuracion/api';
export const cargandoPublicidad = 'cargandoPublicidad';
export const publicidadExito = 'publicidadExito';
export const publicidadError = 'publicidadError';
export const listarPublicidadesExito = 'listarPublicidadesExito';
export const listarPublicidadesError = 'listarPublicidadesError';
export const buscarPublicidadAEditar = 'buscarPublicidadAEditar';
export const publicidadEditadaExito = 'publicidadEditadaExito';
export const volverPorDefectoPublicidad = 'volverPorDefectoPublicidad';

export const buscarPublicidadAEditar_accion = idPublicidad => {
  return {
    type: buscarPublicidadAEditar,
    id: idPublicidad,
  };
};
export const volverPorDefectoPublicidad_accion = () => {
  return {
    type: volverPorDefectoPublicidad,
  };
};
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
        dispatch(ListarPublicidadesExito_accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(ListarPublicidadesError_accion(error));
      });
  };
};

export const cargandoGuardarPublicidadEditada_accion = () => {
  return {
    type: cargandoPublicidad,
  };
};
export const publicidadEditadaExito_accion = data => {
  return {
    type: publicidadEditadaExito,
    publicidad: data,
  };
};
export const publicidadEditadaError_accion = error => {
  return {
    type: publicidadError,
    error: error,
  };
};

export const guardarPublicidadEditada = datosCargados => {
  return dispatch => {
    if (datosCargados.imagen) {
      var imagenPublicidad = new FormData();
      imagenPublicidad.append('archivos', datosCargados.imagen[0]);
      dispatch(cargandoGuardarPublicidadEditada_accion());
      API({
        url: '/imagenes/agregar',
        method: 'post',
        data: imagenPublicidad,
      })
        .then(res => {
          datosCargados = {...datosCargados, idImagen: [...[], res.data.value]};
          API({
            url: '/publicidades/modificar',
            method: 'put',
            data: datosCargados,
          })
            .then(res => {
              dispatch(publicidadEditadaExito_accion(res.data));
            })
            .catch(error => {
              console.log(error);
              dispatch(publicidadEditadaError_accion(error));
            });
        })
        .catch(error => {
          console.log(error);
          dispatch(publicidadEditadaError_accion(error));
        });
    } else {
      API({
        url: '/publicidades/modificar',
        method: 'put',
        data: {...datosCargados},
      })
        .then(res => {
          dispatch(publicidadEditadaExito_accion(res.data));
        })
        .catch(error => {
          console.log(error);
          dispatch(publicidadEditadaError_accion(error));
        });
    }
  };
};
