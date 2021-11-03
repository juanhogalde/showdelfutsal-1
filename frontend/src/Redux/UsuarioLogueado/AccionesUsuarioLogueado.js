import API from './../Configuracion/api';
import jwt from 'jsonwebtoken';
export const cargandologin = 'cargandologin';
export const loginExito = 'loginExito';
export const loginError = 'loginError';

export const cargandologin_accion = () => {
  return {
    type: cargandologin,
  };
};
export const loginExito_accion = (token, infoToken) => {
  return {
    type: loginExito,
    token: token,
    infoToken: infoToken,
  };
};

export const loginError_accion = error => {
  return {
    type: loginError,
    error: error,
  };
};

//async buscar noticia
export const login = datosDeLogueo => {
  return dispatch => {
    dispatch(cargandologin_accion());
    API({
      url: '/usuarios/login',
      method: 'post',
      data: datosDeLogueo,
    })
      .then(res => {
        const usuario = jwt.decode(res.data.value);
        dispatch(loginExito_accion(res.data.value, usuario));
      })
      .catch(error => {
        console.log(error);
        dispatch(loginError_accion(error));
      });
  };
};
