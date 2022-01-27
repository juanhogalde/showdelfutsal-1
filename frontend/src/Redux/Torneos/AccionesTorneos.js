import API from './../Configuracion/api';

/* export const obtenerDatosDeTorneo = 'obtenerDatosDeTorneo'; */
/* export const obtenerCategoriaSubcategoriaDatosDeTorneo =
  'obtenerCategoriaSubcategoriaDatosDeTorneo'; */

export const cargandoAgregarTorneo = 'cargandoAgregarTorneo';
export const agregarTorneoExito = 'agregarTorneoExito';
export const agregarTorneoError = 'agregarTorneoError';
export const volverPorDefectoAgregarTorneo = 'volverPorDefectoAgregarTorneo';

export const consultarPorEditarTorneo = 'consultarPorEditarTorneo';
export const cargandoEditarTorneo = 'cargandoEditarTorneo';
export const editarTorneoExito = 'editarTorneoExito';
export const editarTorneoError = 'editarTorneoError';
export const volverPorDefectoEditarTorneo = 'volverPorDefectoEditarTorneo';
export const cargarDatosDeTorneoParaEdicion = 'cargarDatosDeTorneoParaEdicion';

export const consultarPorEliminarTorneo = 'consultarPorEliminarTorneo';
export const cargandoEliminarTorneo = 'cargandoEliminarTorneo';
export const eliminarTorneoExito = 'eliminarTorneoExito';
export const eliminarTorneoError = 'eliminarTorneoError';
export const volverPorDefectoEliminarTorneo = 'volverPorDefectoEliminarTorneo';
export const actualizarListaDeTorneos = 'actualizarListaDeTorneos';

export const cargandoListarTorneo = 'cargandoListarTorneo';
export const listarTorneoExito = 'listarTorneoExito';
export const listarTorneoError = 'listarTorneoError';
export const volverPorDefectoListarTorneo = 'volverPorDefectoListarTorneo';
export const volverPorDefectoUnTorneo = 'volverPorDefectoUnTorneo';

export const cargandoObtenerTorneo = 'cargandoObtenerTorneo';
export const obtenerTorneoExito = 'obtenerTorneoExito';
export const obtenerTorneoError = 'obtenerTorneoError';

export const recuperarTorneo = 'recuperarTorneo';

export const volverPorDefectoUnTorneo_accion = () => {
  return {
    type: volverPorDefectoUnTorneo,
  };
};

/* export const obtenerCategoriaSubcategoriaDatosDeTorneo_accion = (categoriaId, subcategoriaId) => {
  return {
    type: obtenerCategoriaSubcategoriaDatosDeTorneo,
    categoriaId: categoriaId,
    subcategoriaId: subcategoriaId,
  };
}; */
/****** AGREGAR TORNEO ******/

/* export const obtenerDatosDeTorneo_accion = datos => {
  return {
    type: obtenerDatosDeTorneo,
    datos: datos,
  };
}; */

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
  return dispatch => {
    dispatch(cargandoAgregarTorneo_accion());
    API({
      url: '/torneos/agregar',
      method: 'post',
      data: datosTorneo,
    })
      .then(res => {
        dispatch(agregarTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarTorneoError_accion());
      });
  };
};

/****** EDITAR TORNEO ******/
export const consultarPorEditarTorneo_accion = (categoria, subcategoria, mensaje) => {
  return {
    type: consultarPorEditarTorneo,
    categoria: categoria,
    subcategoria: subcategoria,
    mensaje: mensaje,
  };
};
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
export const cargarDatosDeTorneoParaEdicion_accion = datos => {
  return {
    type: cargarDatosDeTorneoParaEdicion,
    datos: datos,
  };
};

export const editarTorneo_accion = torneo => {
  console.log(torneo);
  return dispatch => {
    dispatch(cargandoEditarTorneo_accion());
    API({
      url: '/torneos/modificar',
      method: 'put',
      data: torneo,
    })
      .then(res => {
        console.log({res});
        dispatch(editarTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(editarTorneoError_accion());
      });
  };
};

/****** ELIMINAR TORNEO ******/
export const consultarPorEliminarTorneo_accion = datos => {
  return {
    type: consultarPorEliminarTorneo,
    datos: datos,
  };
};

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

export const eliminarTorneoError_accion = () => {
  return {
    type: eliminarTorneoError,
  };
};

export const volverPorDefectoEliminarTorneo_accion = () => {
  return {
    type: volverPorDefectoEliminarTorneo,
  };
};

export const actualizarListaDeTorneos_accion = () => {
  return {
    type: actualizarListaDeTorneos,
  };
};

export const eliminarTorneo_accion = id => {
  return dispatch => {
    dispatch(cargandoEliminarTorneo_accion());
    API({
      url: '/torneos/eliminar',
      method: 'delete',
      data: {id: id},
    })
      .then(res => {
        dispatch(eliminarTorneoExito_accion(id));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarTorneoError_accion());
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

export const listarTorneo_accion = () => {
  return dispatch => {
    dispatch(cargandoListarTorneo_accion());
    API({
      url: '/torneos/listar',
      method: 'get',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        dispatch(listarTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarTorneoError_accion()); */
      });
  };
};
/****** OBTENER TORNEO EN MEMORIA******/
export const recuperarTorneo_accion = id => {
  return {
    type: recuperarTorneo,
    id: id,
  };
};

/****** OBTENER TORNEO ASYNC******/
export const cargandoObtenerTorneo_accion = () => {
  return {
    type: cargandoObtenerTorneo,
  };
};

export const obtenerTorneoExito_accion = datos => {
  return {
    type: obtenerTorneoExito,
    datos: datos,
  };
};

export const obtenerTorneoError_accion = error => {
  return {
    type: obtenerTorneoError,
    error: error,
  };
};

/* export const volverPorDefectoListarTorneo_accion = () => {
  return {
    type: volverPorDefectoListarTorneo,
  };
}; */

export const obtenerTorneo_accion = id => {
  return dispatch => {
    dispatch(cargandoObtenerTorneo_accion());
    API({
      url: '/torneos/obtener',
      method: 'get',
      data: {_id: id},
    })
      .then(res => {
        /* dispatch(listarTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarTorneoError_accion()); */
      });
  };
};
