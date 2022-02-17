import API from './../Configuracion/api';
export const agregarPartidoCargando = 'agregarPartidoCargando';
export const agregarPartidoExito = 'agregarPartidoExito';
export const agregarPartidoError = 'agregarPartidoError';
export const agregarPartidoDefault = 'agregarPartidoDefault';

export const listarPartidosCargando = 'listarPartidosCargando';
export const listarPartidosExito = 'listarPartidosExito';
export const listarPartidosError = 'listarPartidosError';

/*  Agregar Partido  */
export const agregarPartidoCargando_accion = () => {
  return {
    type: agregarPartidoCargando,
  };
};

export const agregarPartidoExito_accion = datos => {
  return {
    type: agregarPartidoExito,
    datos: datos,
  };
};

export const agregarPartidoError_accion = () => {
  return {
    type: agregarPartidoError,
  };
};
export const agregarPartidoDefault_accion = () => {
  return {
    type: agregarPartidoDefault,
  };
};
export const agregarPartido_accion = enfrentamiento => {
  return dispatch => {
    dispatch(agregarPartidoCargando_accion());
    API({
      url: '/Partidos/Agregar',
      method: 'post',
      data: enfrentamiento,
    })
      .then(res => {
        console.log({res});
        dispatch(agregarPartidoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarPartidoError_accion());
      });
  };
};

/*  Listar Partido  */
export const listarPartidosCargando_accion = () => {
  return {
    type: listarPartidosCargando,
  };
};

export const listarPartidosExito_accion = datos => {
  return {
    type: listarPartidosExito,
    datos: datos,
  };
};

export const listarPartidosError_accion = () => {
  return {
    type: listarPartidosError,
  };
};

export const listarPartidos_accion = () => {
  return dispatch => {
    dispatch(listarPartidosCargando_accion());
    API({
      url: '/Partidos/Listar',
      method: 'get',
      /* data: enfrentamiento, */
    })
      .then(res => {
        console.log({res});
        dispatch(listarPartidosExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(listarPartidosError_accion());
      });
  };
};
