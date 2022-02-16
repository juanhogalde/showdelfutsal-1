import API from './../Configuracion/api';
export const listarEquiposCargando = 'listarEquiposCargando';
export const listarEquiposExito = 'listarEquiposExito';
export const listarEquiposError = 'listarEquiposError';

export const listarEquiposCargando_accion = () => {
  return {
    type: listarEquiposCargando,
  };
};
export const listarEquiposExito_accion = datosIniciales => {
  return {
    type: listarEquiposExito,
    datosIniciales: datosIniciales,
  };
};
export const listarEquiposError_accion = error => {
  return {
    type: listarEquiposError,
    error: error,
  };
};
export const listarEquipos_accion = () => {
  return dispatch => {
    dispatch(listarEquiposCargando_accion());
    API({
      url: '/equipos/listar',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(listarEquiposExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(listarEquiposError_accion());
      });
  };
};
