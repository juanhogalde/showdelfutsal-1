import API from './../Configuracion/api';

export const cargandoAgregarTorneo = 'cargandoAgregarTorneo';
export const agregarTorneoExito = 'cargandoAgregarTorneo';
export const agregarTorneoError = 'cargandoAgregarTorneo';
export const volverPorDefectoAgregarTorneo = 'volverPorDefectoAgregarTorneo';

export const cargandoEditarTorneo = 'cargandoEditarTorneo';
export const editarTorneoExito = 'editarTorneoExito';
export const editarTorneoError = 'editarTorneoError';
export const volverPorDefectoEditarTorneo = 'volverPorDefectoEditarTorneo';

export const cargandoEliminarTorneo = 'cargandoEliminarTorneo';
export const eliminarTorneoExito = 'eliminarTorneoExito';
export const eliminarTorneoError = 'eliminarTorneoError';
export const volverPorDefectoEliminarTorneo = 'volverPorDefectoEliminarTorneo';

export const cargandoListarTorneo = 'cargandoListarTorneo';
export const listarTorneoExito = 'listarTorneoExito';
export const listarTorneoError = 'listarTorneoError';
export const volverPorDefectoListarTorneo = 'volverPorDefectoListarTorneo';

/****** AGREGAR TORNEO ******/
export const cargandoAgregarTorneo_accion = () => {
  return {
    type: cargandoAgregarTorneo,
  };
};

export const agregarTorneoExito_accion = datos => {
  return {
    type: agregarTorneoExito,
    datos: datos,
  };
};

export const agregarTorneoError_accion = error => {
  return {
    type: agregarTorneoError,
    error: error,
  };
};

export const volverPorDefectoAgregarTorneo_accion = () => {
  return {
    type: volverPorDefectoAgregarTorneo,
  };
};

export const agregarTorneo_accion = datosTorneo => {
  console.log(datosTorneo);

  return dispatch => {
    dispatch(cargandoAgregarTorneo_accion());
    API({
      url: '/campeonatos/agregar',
      method: 'post',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        /* dispatch(agregarTorneoExito_accion(res.data.value)); */
        dispatch(agregarTorneoExito_accion(datosTorneo));
      })
      .catch(error => {
        console.log({error});
        /* dispatch(agregarTorneoError_accion()); */
      });
  };
};

/****** EDITAR TORNEO ******/
export const cargandoEditarTorneo_accion = () => {
  return {
    type: cargandoEditarTorneo,
  };
};

export const editarTorneoExito_accion = datos => {
  return {
    type: editarTorneoExito,
    datos: datos,
  };
};

export const editarTorneoError_accion = error => {
  return {
    type: editarTorneoError,
    error: error,
  };
};

export const volverPorDefectoEditarTorneo_accion = () => {
  return {
    type: volverPorDefectoEditarTorneo,
  };
};

export const editarTorneo_accion = datosTorneo => {
  return dispatch => {
    dispatch(cargandoEditarTorneo_accion());
    API({
      url: '/campeonatos/editar',
      method: 'put',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        /* dispatch(editarTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(editarTorneoError_accion()); */
      });
  };
};

/****** ELIMINAR TORNEO ******/
export const cargandoEliminarTorneo_accion = () => {
  return {
    type: cargandoEliminarTorneo,
  };
};

export const eliminarTorneoExito_accion = datos => {
  return {
    type: eliminarTorneoExito,
    datos: datos,
  };
};

export const eliminarTorneoError_accion = error => {
  return {
    type: eliminarTorneoError,
    error: error,
  };
};

export const volverPorDefectoEliminarTorneo_accion = () => {
  return {
    type: volverPorDefectoEliminarTorneo,
  };
};

export const eliminarTorneo_accion = datosTorneo => {
  return dispatch => {
    dispatch(cargandoEliminarTorneo_accion());
    API({
      url: '/campeonatos/eliminar',
      method: 'delete',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        /* dispatch(eliminarTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(eliminarTorneoError_accion()); */
      });
  };
};

/****** LISTAR TORNEO ******/
export const cargandoListarTorneo_accion = () => {
  return {
    type: cargandoListarTorneo,
  };
};

export const listarTorneoExito_accion = datos => {
  return {
    type: listarTorneoExito,
    datos: datos,
  };
};

export const listarTorneoError_accion = error => {
  return {
    type: listarTorneoError,
    error: error,
  };
};

export const volverPorDefectoListarTorneo_accion = () => {
  return {
    type: volverPorDefectoListarTorneo,
  };
};

export const listarTorneo_accion = datosTorneo => {
  return dispatch => {
    dispatch(cargandoListarTorneo_accion());
    API({
      url: '/campeonatos/listar',
      method: 'get',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        /* dispatch(listarTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarTorneoError_accion()); */
      });
  };
};
