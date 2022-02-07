import API from './../Configuracion/api';

export const listarEquipos_accion = () => {
  return dispatch => {
    /* dispatch(cargandoListarImagenes_accion()); */
    API({
      url: '/equipos/listar',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        /* dispatch(listarImagenesExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarImagenesError_accion()); */
      });
  };
};
