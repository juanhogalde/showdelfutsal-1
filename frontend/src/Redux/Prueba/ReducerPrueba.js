import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
};

const storePrueba = (state = pruebaInicio, accion) => {
  switch (accion.type) {
    case prueba: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storePrueba;
