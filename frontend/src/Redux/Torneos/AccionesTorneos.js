import API from './../Configuracion/api';

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

export const consultarPoragregarCategoriaSubcategoriaTorneo =
  'consultarPoragregarCategoriaSubcategoriaTorneo';
export const cargandoAgregarCategoriaSubcategoria = 'cargandoAgregarCategoriaSubcategoria';
export const agregarCategoriaSubcategoriaTorneoExito = 'agregarCategoriaSubcategoriaTorneoExito';
export const agregarCategoriaSubcategoriaTorneoError = 'agregarCategoriaSubcategoriaTorneoError';
export const volverPorDefectoAgregarCategoriaSubcategoriaTorneo =
  'volverPorDefectoAgregarCategoriaSubcategoriaTorneo';
export const actualizarListaDeTorneosConSubcategoria = 'actualizarListaDeTorneosConSubcategoria';
export const crearZonaTorneoExito = 'crearZonaTorneoExito';

export const volverPorDefectoUnTorneo_accion = () => {
  return {
    type: volverPorDefectoUnTorneo,
  };
};

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
export const consultarPorEditarTorneo_accion = (idCategoria, idSubcategoria) => {
  return {
    type: consultarPorEditarTorneo,
    idCategoria: idCategoria,
    idSubcategoria: idSubcategoria,
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
  return dispatch => {
    dispatch(cargandoEditarTorneo_accion());
    API({
      url: '/torneos/modificar',
      method: 'put',
      data: torneo,
    })
      .then(res => {
        dispatch(editarTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(editarTorneoError_accion());
      });
  };
};
/* AGREGAR CATEGORIA Y SUBCATEGORIA */
export const consultarPoragregarCategoriaSubcategoriaTorneo_accion = (
  idCategoria,
  idSubcategoria
) => {
  return {
    type: consultarPoragregarCategoriaSubcategoriaTorneo,
    idCategoria: idCategoria,
    idSubcategoria: idSubcategoria,
  };
};
export const cargandoAgregarCategoriaSubcategoria_accion = () => {
  return {
    type: cargandoAgregarCategoriaSubcategoria,
  };
};

export const agregarCategoriaSubcategoriaTorneoExito_accion = datos => {
  return {
    type: agregarCategoriaSubcategoriaTorneoExito,
    datos: datos,
  };
};

export const agregarCategoriaSubcategoriaTorneoError_accion = error => {
  return {
    type: agregarCategoriaSubcategoriaTorneoError,
    error: error,
  };
};
export const volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion = () => {
  return {
    type: volverPorDefectoAgregarCategoriaSubcategoriaTorneo,
  };
};
export const agregarCategoriaSubcategoriaTorneo_accion = torneo => {
  return dispatch => {
    dispatch(cargandoAgregarCategoriaSubcategoria_accion());
    API({
      url: '/torneos/cargarSubcategoria',
      method: 'put',
      data: torneo,
    })
      .then(res => {
        console.log({res});
        dispatch(agregarCategoriaSubcategoriaTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarCategoriaSubcategoriaTorneoError_accion());
      });
  };
};
export const actualizarListaDeTorneosConSubcategoria_accion = () => {
  return {
    type: actualizarListaDeTorneosConSubcategoria,
  };
};
/* CREAR ZONA */
export const crearZonaTorneoExito_accion = datos => {
  return {
    type: crearZonaTorneoExito,
    datos: datos,
  };
};
export const crearZonaTorneo_accion = torneo => {
  return dispatch => {
    dispatch(cargandoEditarTorneo_accion());
    API({
      url: '/zonas/agregar',
      method: 'post',
      data: {
        nombreZona: torneo.nombreZona,
        tipoZona: torneo.tipoZona,
        idSubcategoria: torneo.idSubcategoria,
        idCategoria: torneo.idCategoria,
        idTorneo: torneo._id,
      },
    })
      .then(res => {
        /* dispatch(editarTorneoExito_accion(res.data.value)); */
        dispatch(crearZonaTorneoExito_accion(res.data.value));
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
