import API from './../Configuracion/api';
export const volverDatosPorfecto = 'volverDatosPorfecto';
export const cargandoAgregarVivo = 'cargandoAgregarVivo';
export const agregarVivoExito = 'agregarVivoExito';
export const agregarVivoError = 'agregarVivoError';
export const editarVivoExito = 'editarVivoExito';
export const editarVivoError = 'editarVivoError';
export const listarVivoExito = 'listarVivoExito';
export const preguntarPorEliminarVivo = 'preguntarPorEliminarVivo';
export const eliminarVivoExito = 'eliminarVivoExito';
export const eliminarVivoError = 'eliminarVivoError';

export const volverDatosPorfecto_accion = () => {
  return {
    type: volverDatosPorfecto,
  };
};

export const cargandoVivo_accion = (msj = 'cargando') => {
  return {
    type: cargandoAgregarVivo,
    msj: msj,
  };
};

export const agregarVivoExito_accion = datos => {
  return {
    type: agregarVivoExito,
    datos: datos,
  };
};

export const agregarVivoError_accion = error => {
  return {
    type: agregarVivoError,
    error: error,
  };
};

export const agregarVivo_accion = datosVivo => {
  return dispatch => {
    dispatch(cargandoVivo_accion('Agregando nuevo vivo'));
    API({
      url: '/videosVivo/agregar',
      method: 'post',
      data: datosVivo,
    })
      .then(res => {
        dispatch(agregarVivoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarVivoError_accion(error));
      });
  };
};

export const EditarVivoExito_accion = datos => {
  return {
    type: editarVivoExito,
    datos: datos,
  };
};

export const EditarVivoError_accion = error => {
  return {
    type: editarVivoError,
    error: error,
  };
};

export const EditarVivo_accion = datosVivo => {
  return dispatch => {
    dispatch(cargandoVivo_accion('Editando vivo'));
    API({
      url: '/videosVivo/modificar',
      method: 'put',
      data: datosVivo,
    })
      .then(res => {
        dispatch(EditarVivoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(EditarVivoError_accion(error));
      });
  };
};

export const listarVivoExito_accion = datos => {
  return {
    type: listarVivoExito,
    datos: datos,
  };
};
export const listarVivo_accion = () => {
  return dispatch => {
    // dispatch(cargandoVivo_accion('listando vivo'));
    API({
      url: '/videosVivo/listar',
      method: 'get',
    })
      .then(res => {
        dispatch(listarVivoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarVivoError_accion(error));
      });
  };
};
export const eliminarVivoExito_Accion = data => {
  return {
    type: eliminarVivoExito,
    datos: data,
  };
};
export const eliminarVivoError_Accion = error => {
  return {
    type: eliminarVivoError,
    error: error,
  };
};
export const eliminarVivo_accion = vivo => {
  return dispatch => {
    dispatch(cargandoVivo_accion('Eliminando vivo'));
    API({
      url: 'videosVivo/eliminar',
      method: 'delete',
      data: vivo,
    })
      .then(res => {
        dispatch(eliminarVivoExito_Accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(eliminarVivoError_Accion(error));
      });
  };
};
export const preguntarPorEliminarVivo_accion = () => {
  return {
    type: preguntarPorEliminarVivo,
  };
};
