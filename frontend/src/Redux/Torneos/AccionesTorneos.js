import API from './../Configuracion/api';

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

/* export const consultarPoragregarCategoriaSubcategoriaTorneo =
  'consultarPoragregarCategoriaSubcategoriaTorneo';
export const cargandoAgregarCategoriaSubcategoria = 'cargandoAgregarCategoriaSubcategoria';
export const agregarCategoriaSubcategoriaTorneoExito = 'agregarCategoriaSubcategoriaTorneoExito';
export const agregarCategoriaSubcategoriaTorneoError = 'agregarCategoriaSubcategoriaTorneoError';
export const volverPorDefectoAgregarCategoriaSubcategoriaTorneo =
  'volverPorDefectoAgregarCategoriaSubcategoriaTorneo';
export const actualizarListaDeTorneosConSubcategoria = 'actualizarListaDeTorneosConSubcategoria'; */

export const cargandoCrearZonaTorneo = 'cargandoCrearZonaTorneo';
export const controlModalZonas = 'controlModalZonas';

export const crearZonaTorneoExito = 'crearZonaTorneoExito';
export const crearZonaTorneoError = 'crearZonaTorneoError';
export const crearZonaTorneoDefault = 'crearZonaTorneoDefault';
export const actualizarListaDeTorneosCrearZona = 'actualizarListaDeTorneosCrearZona';

export const cargandoObtenerDatosDeTorneoParaEdicion = 'cargandoObtenerDatosDeTorneoParaEdicion';
export const obtenerDatosDeTorneoParaEdicionExito = 'obtenerDatosDeTorneoParaEdicionExito';
export const obtenerDatosDeTorneoParaEdicionError = 'obtenerDatosDeTorneoParaEdicionError';
export const obtenerDatosDeTorneoParaEdicionDefault = 'obtenerDatosDeTorneoParaEdicionDefault';
export const ultimaUbicacionEditarTorneo = 'ultimaUbicacionEditarTorneo';

export const eliminarZonaExito = 'eliminarZonaExito';
export const eliminarZonaError = 'eliminarZonaError';
export const volverPorDefectoEliminarZona = 'volverPorDefectoEliminarZona';

export const consultarEliminarZonasDeTorneo = 'consultarEliminarZonasDeTorneo';
export const eliminarZonasDeTorneoCargando = 'eliminarZonasDeTorneoCargando';
export const eliminarZonasDeTorneoExito = 'eliminarZonasDeTorneoExito';
export const eliminarZonasDeTorneoError = 'eliminarZonasDeTorneoError';
export const actualizarListaDeTorneosEliminarZonas = 'actualizarListaDeTorneosEliminarZonas';
export const eliminarZonasDeTorneoDefault = 'eliminarZonasDeTorneoDefault';

export const agregarEquiposZonaTorneoCargando = 'agregarEquiposZonaTorneoCargando';
export const agregarEquiposZonaTorneoExito = 'agregarEquiposZonaTorneoExito';
export const actualizarListaTorneosAgregarEquiposZona = 'actualizarListaTorneosAgregarEquiposZona';
export const agregarEquiposZonaTorneoError = 'agregarEquiposZonaTorneoError';
export const agregarEquiposZonaTorneoDefault = 'agregarEquiposZonaTorneoDefault';

export const estadoComponenteAgregarEquipo = 'estadoComponenteAgregarEquipo';

export const eliminarEquipoDeZonaConsulta = 'eliminarEquipoDeZonaConsulta';
export const eliminarEquipoDeZonaExito = 'eliminarEquipoDeZonaExito';
export const eliminarEquipoDeZonaError = 'eliminarEquipoDeZonaError';
export const eliminarEquipoDeZonaDefault = 'eliminarEquipoDeZonaDefault';
export const actualizarListaTorneosEliminarEquiposZona =
  'actualizarListaTorneosEliminarEquiposZona';

export const volverPorDefectoUnTorneo_accion = () => {
  return {
    type: volverPorDefectoUnTorneo,
  };
};

/****** COMPONENTE NUEVO TORENO ******/

export const controlModalNuevoTorneo = 'controlModalNuevoTorneo';
export const agregarTorneoExito = 'agregarTorneoExito';
export const agregarTorneoError = 'agregarTorneoError';
export const controlModalNuevoTorneo_accion = datos => {
  return {
    type: controlModalNuevoTorneo,
    datos: datos,
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
export const agregarTorneo_accion = datosTorneo => {
  return dispatch => {
    dispatch(
      controlModalNuevoTorneo_accion({
        tipo: 'cargando',
        mensaje: 'Agregando Torneo.',
        isMostrar: true,
        datosAdicionales: null,
      })
    );
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

export const editarTorneoExito = 'editarTorneoExito';
export const editarTorneoError = 'editarTorneoError';

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
export const obtenerDatosDeTorneoParaEdicionError_accion = error => {
  return {
    type: obtenerDatosDeTorneoParaEdicionError,
    error: error,
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
export const obtenerDatosDeTorneoParaEdicion = torneo => {
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
        dispatch(
          obtenerDatosDeTorneoParaEdicionError_accion(
            'Lo sentimos, en este momento no podemos editar éste torneo.'
          )
        );
      });
  };
};
export const editarTorneo_accion = torneo => {
  return dispatch => {
    dispatch(
      controlModalNuevoTorneo_accion({
        isMostrar: true,
        tipo: 'cargando',
        mensaje: 'Editando Torneo.',
        datosAdicionales: null,
      })
    );
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
/* export const consultarPoragregarCategoriaSubcategoriaTorneo_accion = (
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
export const obtenerEntidadZonaAgregarEquipos = torneo => {
  return dispatch => {
    dispatch(cargandoAgregarCategoriaSubcategoria_accion());
    API({
      url: '/torneos/cargarSubcategoria',
      method: 'put',
      data: torneo,
    })
      .then(res => {
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
}; */

/****** CREAR ZONA ******/
export const cargandoCrearZonaTorneo_accion = datos => {
  return {
    type: cargandoCrearZonaTorneo,
    datos: datos,
  };
};
export const controlModalZonas_accion = datos => {
  return {
    type: controlModalZonas,
    payload: datos,
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
export const crearZonaTorneo_accion = nuevaZona => {
  return dispatch => {
    dispatch(
      controlModalZonas_accion({
        isMostrar: true,
        tipo: 'cargando',
        mensaje: 'Creando Zona.',
        datosAdicionales: null,
      })
    );
    API({
      url: '/zonas/agregar',
      method: 'post',
      data: {
        nombreZona: nuevaZona.nombreZona,
        tipoZona: nuevaZona.tipoZona,
        idSubcategoria: nuevaZona.idSubcategoria,
        idCategoria: nuevaZona.idCategoria,
        idTorneo: nuevaZona.idTorneo,
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
  return dispatch => {
    /* dispatch(cargandoListarTorneo_accion()); */
    API({
      url: '/zonas/listar',
      method: 'post',
      data: {idTorneo: id},
    })
      .then(res => {
        /* dispatch(listarZonaTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarZonaTorneoError_accion()); */
      });
  };
};
/****** ELIMINAR ZONA DE TORNEO ******/

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

export const eliminarZona_accion = idZona => {
  return dispatch => {
    dispatch(
      controlModalZonas_accion({
        isMostrar: true,
        datos: null,
        tipo: 'cargando',
        mensaje: 'Eliminando Zona..',
      })
    );
    // dispatch(cargandoEliminarZona_accion());
    API({
      url: '/zonas/eliminar',
      method: 'delete',
      data: {
        _id: idZona,
      },
    })
      .then(res => {
        dispatch(
          controlModalZonas_accion({
            isMostrar: true,
            datos: {id: idZona, tipo: 'eliminar'},
            tipo: 'success',
            mensaje: 'Zona eliminada con exito',
          })
        );
        // dispatch(eliminarZonaExito_accion(idZona));
      })
      .catch(error => {
        console.log({error});
        dispatch(
          controlModalZonas_accion({
            isMostrar: true,
            datos: null,
            tipo: 'error',
            mensaje: 'Error al eliminar la zona',
          })
        );
        // dispatch(eliminarZonaError_accion());
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
/* ELIMINAR TODAS LAS ZONAS DE UNA SUBCATEGORÍA DE TORNEO */
export const consultarEliminarZonasDeTorneo_accion = subcategoria => {
  return {
    type: consultarEliminarZonasDeTorneo,
    idSubcategoria: subcategoria,
  };
};
export const eliminarZonasDeTorneoCargando_accion = () => {
  return {
    type: eliminarZonasDeTorneoCargando,
  };
};
export const eliminarZonasDeTorneoExito_accion = subcategoriaId => {
  return {
    type: eliminarZonasDeTorneoExito,
    subcategoria: subcategoriaId,
  };
};
export const eliminarZonasDeTorneoError_accion = () => {
  return {
    type: eliminarZonasDeTorneoError,
  };
};
export const actualizarListaDeTorneosEliminarZonas_accion = () => {
  return {
    type: actualizarListaDeTorneosEliminarZonas,
  };
};
export const eliminarZonasDeTorneoDefault_accion = () => {
  return {
    type: eliminarZonasDeTorneoDefault,
  };
};
export const eliminarZonasDeTorneo_accion = (torneoId, subcategoriaId) => {
  return dispatch => {
    dispatch(eliminarZonasDeTorneoCargando_accion());
    API({
      url: 'zonas/eliminarPorSubcategoria',
      method: 'delete',
      data: {idTorneo: torneoId, idSubcategoria: `${subcategoriaId}`},
    })
      .then(res => {
        dispatch(eliminarZonasDeTorneoExito_accion(subcategoriaId));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarZonasDeTorneoError_accion());
      });
  };
};
/* AGREGAR EQUIPOS A ZONA DE TORNEO */
export const agregarEquiposZonaTorneoCargando_accion = () => {
  return {
    type: agregarEquiposZonaTorneoCargando,
  };
};
export const agregarEquiposZonaTorneoExito_accion = equipos => {
  return {
    type: agregarEquiposZonaTorneoExito,
    equipos: equipos,
  };
};
export const actualizarListaTorneosAgregarEquiposZona_accion = () => {
  return {
    type: actualizarListaTorneosAgregarEquiposZona,
  };
};
export const agregarEquiposZonaTorneoError_accion = () => {
  return {
    type: agregarEquiposZonaTorneoError,
  };
};

export const agregarEquiposZonaTorneoDefault_accion = () => {
  return {
    type: agregarEquiposZonaTorneoDefault,
  };
};

export const agregarEquiposZonaTorneo_accion = (zonaId, equiposId) => {
  return dispatch => {
    dispatch(
      modalGenericoAgregarEquipos_accion({
        tipo: 'cargando',
        mensaje: 'Agregando eqiopo/s...',
        isMostrar: true,
      })
    );
    API({
      url: 'zonas/agregarEquipos',
      method: 'post',
      data: {_id: zonaId, nuevosEquipos: equiposId},
    })
      .then(res => {
        dispatch(agregarEquiposZonaTorneoExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarEquiposZonaTorneoError_accion());
      });
  };
};

/* ELIMINAR EQUIPO DE ZONA DE TORNEO */
export const controlModalGenericoAgregarEquipos = 'controlModalGenericoAgregarEquipos';

export const eliminarEquipoDeZonaConsulta_accion = (equipoId, isEquipoNuevo) => {
  return {
    type: eliminarEquipoDeZonaConsulta,
    idEquipo: equipoId,
    isNuevo: isEquipoNuevo,
  };
};
export const modalGenericoAgregarEquipos_accion = datos => {
  return {
    type: controlModalGenericoAgregarEquipos,
    datos: datos,
  };
};
export const eliminarEquipoDeZonaExito_accion = equipo => {
  return {
    type: eliminarEquipoDeZonaExito,
    equipo: equipo,
  };
};
export const actualizarListaTorneosEliminarEquiposZona_accion = () => {
  return {
    type: actualizarListaTorneosEliminarEquiposZona,
  };
};
export const eliminarEquipoDeZonaError_accion = () => {
  return {
    type: eliminarEquipoDeZonaError,
  };
};

export const eliminarEquipoDeZonaDefault_accion = () => {
  return {
    type: eliminarEquipoDeZonaDefault,
  };
};

export const eliminarEquipoDeZona_accion = (zonaId, equipo) => {
  return dispatch => {
    dispatch(
      modalGenericoAgregarEquipos_accion({
        tipo: 'cargando',
        mensaje: 'Cargando...',
        isMostrar: true,
      })
    );
    API({
      url: 'zonas/eliminarEquipo',
      method: 'delete',
      data: {
        idEquipo: equipo._id,
        _id: zonaId,
      },
    })
      .then(res => {
        dispatch(eliminarEquipoDeZonaExito_accion(equipo));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarEquipoDeZonaError_accion());
      });
  };
};

/* VERIFICAR ESTADO DE COMPONENTE AGREGAR EQUIPOS EN TORNEO */

export const estadoComponenteAgregarEquipo_accion = isVerificar => {
  return {
    type: estadoComponenteAgregarEquipo,
    data: isVerificar,
  };
};

// Seccion Agregar equipos a zona
export const cargandoObtenerZonaAgregarEquipos = 'cargandoObtenerZonaAgregarEquipos';
export const ZonaAgregarEquiposExito = 'ZonaAgregarEquiposExito';
export const ZonaAgregarEquiposError = 'ZonaAgregarEquiposError';

export const cargandoobtenerZonaAgregarEquipos_accion = () => {
  return {
    type: cargandoObtenerZonaAgregarEquipos,
  };
};
export const ZonaAgregarEquiposExito_accion = zona => {
  return {
    type: ZonaAgregarEquiposExito,
    zona: zona,
  };
};
export const ZonaAgregarEquiposError_accion = mensajeError => {
  return {
    type: ZonaAgregarEquiposError,
    mensajeError: mensajeError,
  };
};
export const obtenerZonaAgregarEquipos = zonaId => {
  return dispatch => {
    dispatch(cargandoobtenerZonaAgregarEquipos_accion());
    API({
      url: `zonas/obtenerPorId/${zonaId}`,
      method: 'get',
    })
      .then(res => {
        API({
          url: `/equipos/obtenerPorIdSubCategoria/${res.data.value.idSubcategoria}`,
          method: 'get',
        })
          .then(RespuestaEquipos => {
            res.data.value.equiposDisponibles = RespuestaEquipos.data.value;
            dispatch(ZonaAgregarEquiposExito_accion(res.data.value));
          })
          .catch(error => {
            console.log({error});
            dispatch(
              ZonaAgregarEquiposError_accion(
                error?.response?.data?.message || 'Error interno del servidor'
              )
            );
          });
      })
      .catch(error => {
        console.log({error});
        dispatch(
          ZonaAgregarEquiposError_accion(
            error?.response?.data?.message || 'Error interno del servidor'
          )
        );
      });
  };
};
