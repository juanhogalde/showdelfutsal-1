import {
  cargandoDatosIniciales,
  cargaDatosInicialesExito,
  cargaDatosInicialesError,
} from './AccionesDatosIniciales';
const datosInicialesPorDefecto = {
  isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
  datosIniciales: null,
};
const sotreDatosIniciales = (state = datosInicialesPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoDatosIniciales: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
      };
    }
    case cargaDatosInicialesExito: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
        datosIniciales: accion.datosIniciales,
      };
    }
    case cargaDatosInicialesError: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: true, tipo: 'error', mensaje: accion.message},
      };
    }
    default:
      return state;
  }
};
export default sotreDatosIniciales;
