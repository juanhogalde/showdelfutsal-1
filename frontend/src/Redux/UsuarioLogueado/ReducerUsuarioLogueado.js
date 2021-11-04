import {cargandologin, loginExito, loginError} from './AccionesUsuarioLogueado';
import jwt from 'jsonwebtoken';
const usuarioLogueadoPorDefecto = {
  isLogueoUsuario: {isMostrar: false, tipo: '', mensaje: ''},
  usuarioLogueado: jwt.decode(localStorage.getItem('token'), {complete: true}),
  token: localStorage.getItem('token'),
};
const sotreLogueo = (state = usuarioLogueadoPorDefecto, accion) => {
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
    default:
      return state;
  }
};
export default sotreLogueo;
