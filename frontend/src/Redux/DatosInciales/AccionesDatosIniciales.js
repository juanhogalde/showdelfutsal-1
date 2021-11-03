// import API from './../Configuracion/api';
export const cargandoDatosIniciales = 'cargandoDatosIniciales';
export const cargaDatosInicialesExito = 'cargaDatosInicialesExito';
export const cargaDatosInicialesError = 'cargaDatosInicialesError';

export const cargandoDatosIniciales_accion = () => {
  return {
    type: cargandoDatosIniciales,
  };
};
export const cargaDatosInicialesExito_accion = datosIniciales => {
  return {
    type: cargaDatosInicialesExito,
    datosIniciales: datosIniciales,
  };
};
export const cargaDatosInicialesError_accion = error => {
  return {
    type: cargaDatosInicialesError,
    error: error,
  };
};

//async buscar noticia
export const obtenerDatosIniciales = datosDeLogueo => {
  return dispatch => {
    dispatch(cargandoDatosIniciales_accion());
    setTimeout(() => {
      dispatch(cargaDatosInicialesExito_accion({}));
    }, 2000);
    //TODO: descomentar API
    // API({
    //   url: '/usuarios/login',
    //   method: 'post',
    //   data: datosDeLogueo,
    // })
    //   .then(res => {
    //     const usuario = jwt.decode(res.data.value);
    //     dispatch(loginExito_accion(res.data.value, usuario));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     dispatch(loginError_accion(error));
    //   });
  };
};
