import API from './../Configuracion/api';
import jwt from 'jsonwebtoken';
export const cargandologin = 'cargandologin';
export const loginExito = 'loginExito';
export const loginError = 'loginError';
export const cargandoRecuperarPws = 'cargandoRecuperarPws';
export const recuperarPwsExito = 'recuperarPwsExito';
export const recuperarPwsError = 'recuperarPwsError';
export const volverPorDefectoRecuperarPsw = 'volverPorDefectoRecuperarPsw';
export const cargandoCambiarContraseña = 'cargandoCambiarContraseña';
export const cambiarContraseñaExito = 'cambiarContraseñaExito';
export const cambiarContraseñaError = 'cambiarContraseñaError';

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

export const cargandoRecuperarPsw_accion = () => {
  return {
    type: cargandoRecuperarPws,
  };
};
export const recuperarPswExito_accion = () => {
  return {
    type: recuperarPwsExito,
  };
};
export const recuperarPswError_accion = error => {
  return {
    type: recuperarPwsError,
    error: error,
  };
};
export const volverPorDefectoRecuperarPsw_accion = () => {
  return {
    type: volverPorDefectoRecuperarPsw,
  };
};

//async buscar noticia
export const recuperarPsw = email => {
  return dispatch => {
    dispatch(cargandoRecuperarPsw_accion());
    API({
      url: '/usuarios/recuperarPass',
      method: 'post',
      data: email,
    })
      .then(res => {
        if (res.data.value === 'El email ingresado no está registrado.') {
          dispatch(recuperarPswError_accion({message: res.data.value}));
        } else {
          dispatch(recuperarPswExito_accion());
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(recuperarPswError_accion(error));
      });
  };
};

export const cargandoCambiarContraseña_accion = () => {
  return {
    type: cargandoCambiarContraseña,
  };
};
export const cambiarContraseñaExito_accion = token => {
  return {
    type: cambiarContraseñaExito,
    token: token,
  };
};
export const cambiarContraseñaError_accion = error => {
  return {
    type: cambiarContraseñaError,
    error: error,
  };
};

//async buscar noticia
export const cambiarContraseña = datosDeUsuario => {
  return dispatch => {
    dispatch(cargandoCambiarContraseña_accion());
    API({
      url: '/usuarios/modificarPass',
      method: 'post',
      data: {idUsuraio: datosDeUsuario.usuario._id, passwordNueva: datosDeUsuario.passwordNueva},
    })
      .then(res => {
        dispatch(cambiarContraseñaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(cambiarContraseñaError_accion(error));
      });
  };
};
