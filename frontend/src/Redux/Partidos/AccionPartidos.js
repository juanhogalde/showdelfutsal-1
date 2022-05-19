import API from './../Configuracion/api';
export const agregarPartidoCargando = 'agregarPartidoCargando';
export const agregarPartidoExito = 'agregarPartidoExito';
export const agregarPartidoError = 'agregarPartidoError';
export const agregarPartidoDefault = 'agregarPartidoDefault';

export const listarPartidosCargando = 'listarPartidosCargando';
export const listarPartidosExito = 'listarPartidosExito';
export const listarPartidosError = 'listarPartidosError';

export const eliminarPartidoConsultar = 'eliminarPartidoConsultar';
export const eliminarPartidoCargando = 'eliminarPartidoCargando';
export const eliminarPartidoExito = 'eliminarPartidoExito';
export const eliminarPartidoError = 'eliminarPartidoError';
export const eliminarPartidoDefault = 'eliminarPartidoDefault';
export const actulizarListaDeEnfrentamientos = 'actulizarListaDeEnfrentamientos';

export const obtenerPartidosDeZonaCargando = 'obtenerPartidosDeZonaCargando';
export const obtenerPartidosDeZonaExito = 'obtenerPartidosDeZonaExito';
export const obtenerPartidosDeZonaError = 'obtenerPartidosDeZonaError';
export const obtenerPartidosDeZonaDefault = 'obtenerPartidosDeZonaDefault';

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
  console.log(enfrentamiento);
  return dispatch => {
    dispatch(agregarPartidoCargando_accion());
    API({
      url: '/Partidos/Agregar',
      method: 'post',
      data: enfrentamiento,
    })
      .then(res => {
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
    /* dispatch(listarPartidosCargando_accion()); */
    API({
      url: '/Partidos/Listar',
      method: 'get',
      /* data: enfrentamiento, */
    })
      .then(res => {
        /* dispatch(listarPartidosExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /*  dispatch(listarPartidosError_accion()); */
      });
  };
};
/* LISTAR PARTIDOS POR ID DE ZONA */
export const obtenerPartidosDeZonaCargando_accion = () => {
  return {
    type: obtenerPartidosDeZonaCargando,
  };
};

export const obtenerPartidosDeZonaExito_accion = datos => {
  return {
    type: obtenerPartidosDeZonaExito,
    datos: datos,
  };
};

export const obtenerPartidosDeZonaError_accion = () => {
  return {
    type: obtenerPartidosDeZonaError,
  };
};
export const obtenerPartidosDeZonaDefault_accion = () => {
  return {
    type: obtenerPartidosDeZonaDefault,
  };
};
export const obtenerPartidosDeZona_accion = zonaId => {
  return dispatch => {
    dispatch(obtenerPartidosDeZonaCargando_accion());
    API({
      url: `partidos/obtenerPartidosPorIdZona/${zonaId}`,
      method: 'get',
      data: {_id: zonaId},
    })
      .then(res => {
        dispatch(obtenerPartidosDeZonaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log(error);
        dispatch(obtenerPartidosDeZonaError_accion());
      });
  };
};

/*  Eliminar Partido  */
export const eliminarPartidoConsultar_accion = idPartido => {
  return {
    type: eliminarPartidoConsultar,
    partidoId: idPartido,
  };
};
export const eliminarPartidoCargando_accion = () => {
  return {
    type: eliminarPartidoCargando,
  };
};

export const eliminarPartidoExito_accion = idPartido => {
  return {
    type: eliminarPartidoExito,
    id: idPartido,
  };
};

export const eliminarPartidoError_accion = () => {
  return {
    type: eliminarPartidoError,
  };
};
export const eliminarPartidoDefault_accion = () => {
  return {
    type: eliminarPartidoDefault,
  };
};
export const eliminarPartido_accion = idPartido => {
  return dispatch => {
    dispatch(eliminarPartidoCargando_accion());
    API({
      url: '/partidos/eliminar',
      method: 'delete',
      data: {id: idPartido},
    })
      .then(res => {
        dispatch(eliminarPartidoExito_accion(res.data.value._id));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarPartidoError_accion());
      });
  };
};

export const actulizarListaDeEnfrentamientos_accion = partidoId => {
  return {
    type: actulizarListaDeEnfrentamientos,
    partidoId: partidoId,
  };
};

// Restructurando TODO REDUCER ENFRENTAMIENTOS
export const controlModalGenericoEditorEnfrentamiento = 'controlModalGenericoEditorEnfrentamiento';

export const controlModalGenericoEditorEnfrentamiento_accion = datos => {
  return {
    type: controlModalGenericoEditorEnfrentamiento,
    modal: datos,
  };
};

export const cargarZonasParaEditorEnfrentamiento = 'cargarZonasParaEditorEnfrentamiento';
export const cargarZonasParaEditorEnfrentamiento_accion = zonas => {
  return {
    type: cargarZonasParaEditorEnfrentamiento,
    payload: zonas,
  };
};
export const obtenerZonasParaEditorEnfrentamiento = id => {
  return dispatch => {
    dispatch(
      controlModalGenericoEditorEnfrentamiento_accion({
        tipo: 'cargando',
        mensaje: 'Obteniendo Zonas del torneo seleccionado..',
        datos: null,
        isMostrar: true,
      })
    );
    API({
      url: '/zonas/listar',
      method: 'post',
      data: {idTorneo: id},
    })
      .then(res => {
        console.log({res});
        dispatch(cargarZonasParaEditorEnfrentamiento_accion(res.data.value));
        // dispatch(obtenerDatosDeTorneoParaEdicionExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(
          controlModalGenericoEditorEnfrentamiento_accion({
            tipo: 'error',
            mensaje: 'No se pudieron obtener las zonas de este torneo',
            datos: 'zonas',
            isMostrar: true,
          })
        );
      });
  };
};
