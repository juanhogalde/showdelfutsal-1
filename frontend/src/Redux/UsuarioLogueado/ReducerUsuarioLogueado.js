import {
  cargandologin,
  loginExito,
  loginError,
  cargandoRecuperarPws,
  recuperarPwsExito,
  recuperarPwsError,
  volverPorDefectoRecuperarPsw,
  cargandoCambiarContraseña,
  cambiarContraseñaExito,
  cambiarContraseñaError,
} from './AccionesUsuarioLogueado';
import jwt from 'jsonwebtoken';

const obtenerInfoDeTokenEnLocalStorage = () => {
  var infoToken = jwt.decode(localStorage.getItem('token'), {complete: true});
  if (infoToken && infoToken.payload) {
    return infoToken.payload._doc;
  } else {
    return null;
  }
};
const usuarioLogueadoPorDefecto = {
  isLogueoUsuario: {isMostrar: false, tipo: '', mensaje: ''},
  isRecuperarContraseña: {isMostrar: false, tipo: '', mensaje: ''},
  isCambiandoContraseña: {isMostrar: false, tipo: '', mensaje: ''},
  contraseñaModificada: false,
  isEmailRecuperarContraseñaExito: false,
  usuarioLogueado: obtenerInfoDeTokenEnLocalStorage(),
  token: localStorage.getItem('token'),
};
const storeLogueo = (state = usuarioLogueadoPorDefecto, accion) => {
  switch (accion.type) {
    case cargandologin: {
      return {
        ...state,
        isLogueoUsuario: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
      };
    }
    case loginExito: {
      localStorage.setItem('token', accion.token);
      return {
        ...state,
        usuarioLogueado: {...accion.infoToken._doc},
        token: accion.token,
        isLogueoUsuario: {isMostrar: false, tipo: '', mensaje: ''},
      };
    }
    case loginError: {
      return {
        ...state,

        isLogueoUsuario: {isMostrar: true, tipo: 'error', mensaje: accion.message},
      };
    }
    case cargandoRecuperarPws: {
      return {
        ...state,
        isRecuperarContraseña: {isMostrar: true, tipo: 'cargando', mensaje: 'enviando'},
      };
    }
    case recuperarPwsExito: {
      return {
        ...state,
        isRecuperarContraseña: {isMostrar: false, tipo: '', mensaje: ''},
        isEmailRecuperarContraseñaExito: true,
      };
    }
    case recuperarPwsError: {
      return {
        ...state,
        isRecuperarContraseña: {isMostrar: true, tipo: 'error', mensaje: accion.error.message},
        isEmailRecuperarContraseñaExito: false,
      };
    }
    case volverPorDefectoRecuperarPsw: {
      return {
        ...state,
        isRecuperarContraseña: {isMostrar: false, tipo: '', mensaje: ''},
        isEmailRecuperarContraseñaExito: false,
      };
    }
    case cargandoCambiarContraseña: {
      return {
        ...state,
        isCambiandoContraseña: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
      };
    }
    case cambiarContraseñaExito: {
      localStorage.removeItem('token');
      localStorage.setItem('token', accion.token);
      return {
        ...state,
        isCambiandoContraseña: {isMostrar: false, tipo: '', mensaje: ''},
        contraseñaModificada: true,
        usuarioLogueado: jwt.decode(localStorage.getItem('token'), {complete: true}),
      };
    }
    case cambiarContraseñaError: {
      return {
        ...state,
        isCambiandoContraseña: {isMostrar: true, tipo: 'error', mensaje: accion.error.message},
      };
    }
    default:
      return state;
  }
};
export default storeLogueo;
