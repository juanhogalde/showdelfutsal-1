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

export const cargandoCrearZonaTorneo = 'cargandoCrearZonaTorneo';
export const crearZonaTorneoExito = 'crearZonaTorneoExito';
export const crearZonaTorneoError = 'crearZonaTorneoError';
export const crearZonaTorneoDefault = 'crearZonaTorneoDefault';
export const actualizarListaDeTorneosCrearZona = 'actualizarListaDeTorneosCrearZona';

export const cargandoObtenerDatosDeTorneoParaEdicion = 'cargandoObtenerDatosDeTorneoParaEdicion';
export const obtenerDatosDeTorneoParaEdicionExito = 'obtenerDatosDeTorneoParaEdicionExito';
export const obtenerDatosDeTorneoParaEdicionError = 'obtenerDatosDeTorneoParaEdicionError';
export const obtenerDatosDeTorneoParaEdicionDefault = 'obtenerDatosDeTorneoParaEdicionDefault';
export const ultimaUbicacionEditarTorneo = 'ultimaUbicacionEditarTorneo';

export const consultarPorEliminarZona = 'consultarPorEliminarZona';
export const cargandoEliminarZona = 'cargandoEliminarZona';
export const eliminarZonaExito = 'eliminarZonaExito';
export const eliminarZonaError = 'eliminarZonaError';
export const volverPorDefectoEliminarZona = 'volverPorDefectoEliminarZona';
export const actualizarListaDeZonas = 'actualizarListaDeZonas';

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
export const consultarPorEditarTorneo_accion = () => {
  return {
    type: consultarPorEditarTorneo,
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

/***** DATOS DE TORNEO PARA EDICIÓN *****/
export const cargandoObtenerDatosDeTorneoParaEdicion_accion = () => {
  return {
    type: cargandoObtenerDatosDeTorneoParaEdicion,
  };
};
export const obtenerDatosDeTorneoParaEdicionExito_accion = torneo => {
  return {
    type: obtenerDatosDeTorneoParaEdicionExito,
    datos: torneo,
  };
};
export const obtenerDatosDeTorneoParaEdicionError_accion = () => {
  return {
    type: obtenerDatosDeTorneoParaEdicionError,
  };
};
export const obtenerDatosDeTorneoParaEdicionDefault_accion = () => {
  return {
    type: obtenerDatosDeTorneoParaEdicionDefault,
  };
};
export const ultimaUbicacionEditarTorneo_accion = datos => {
  return {
    type: ultimaUbicacionEditarTorneo,
    datos: datos,
  };
};
export const obtenerDatosDeTorneoParaEdicion_accion = torneo => {
  return dispatch => {
    dispatch(cargandoObtenerDatosDeTorneoParaEdicion_accion());
    API({
      url: '/zonas/listar',
      method: 'post',
      data: {idTorneo: torneo._id},
    })
      .then(res => {
        let auxTorneo = {...torneo, zonas: res.data.value};
        dispatch(obtenerDatosDeTorneoParaEdicionExito_accion(auxTorneo));
      })
      .catch(error => {
        console.log({error});
        dispatch(obtenerDatosDeTorneoParaEdicionError_accion());
      });
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
  auxKeyCategoria,
  auxKeySubCategoria
) => {
  return {
    type: consultarPoragregarCategoriaSubcategoriaTorneo,
    keyCategoria: auxKeyCategoria,
    keySubcategoria: auxKeySubCategoria,
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
  console.log(torneo);
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

/****** CREAR ZONA ******/
export const cargandoCrearZonaTorneo_accion = datos => {
  return {
    type: cargandoCrearZonaTorneo,
    datos: datos,
  };
};
export const crearZonaTorneoExito_accion = datos => {
  return {
    type: crearZonaTorneoExito,
    datos: datos,
  };
};
export const crearZonaTorneoError_accion = datos => {
  return {
    type: crearZonaTorneoError,
    datos: datos,
  };
};
export const crearZonaTorneoDefault_accion = datos => {
  return {
    type: crearZonaTorneoDefault,
    datos: datos,
  };
};
export const actualizarListaDeTorneosCrearZona_accion = datos => {
  return {
    type: actualizarListaDeTorneosCrearZona,
    datos: datos,
  };
};
export const crearZonaTorneo_accion = torneo => {
  return dispatch => {
    dispatch(cargandoCrearZonaTorneo_accion());
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
        dispatch(crearZonaTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(crearZonaTorneoError_accion());
      });
  };
};
/****** LISTAR ZONA ******/
export const listarZonasTorneo_accion = id => {
  console.log(id);
  return dispatch => {
    /* dispatch(cargandoListarTorneo_accion()); */
    API({
      url: '/zonas/listar',
      method: 'post',
      data: {idTorneo: id},
    })
      .then(res => {
        console.log({res});
        /* dispatch(listarZonaTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarZonaTorneoError_accion()); */
      });
  };
};
/****** ELIMINAR ZONA DE TORNEO ******/
export const consultarPorEliminarZona_accion = (idTorneo, datos) => {
  return {
    type: consultarPorEliminarZona,
    idTorneo: idTorneo,
    datos: datos,
  };
};

export const cargandoEliminarZona_accion = () => {
  return {
    type: cargandoEliminarZona,
  };
};

export const eliminarZonaExito_accion = datos => {
  return {
    type: eliminarZonaExito,
    datos: datos,
  };
};

export const eliminarZonaError_accion = () => {
  return {
    type: eliminarZonaError,
  };
};

export const volverPorDefectoEliminarZona_accion = () => {
  return {
    type: volverPorDefectoEliminarZona,
  };
};

export const actualizarListaDeZonas_accion = () => {
  return {
    type: actualizarListaDeZonas,
  };
};

export const eliminarZona_accion = idZona => {
  return dispatch => {
    dispatch(cargandoEliminarZona_accion());
    API({
      url: '/zonas/eliminar',
      method: 'delete',
      data: {
        _id: idZona,
      },
    })
      .then(res => {
        console.log({res});
        dispatch(eliminarZonaExito_accion(idZona));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarZonaError_accion());
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
