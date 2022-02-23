import API from './../Configuracion/api';
export const listarEquiposCargando = 'listarEquiposCargando';
export const listarEquiposExito = 'listarEquiposExito';
export const listarEquiposError = 'listarEquiposError';

export const equiposPorSubcategoriaCargando = 'equiposPorSubcategoriaCargando';
export const equiposPorSubcategoriaExito = 'equiposPorSubcategoriaExito';
export const equiposPorSubcategoriaError = 'equiposPorSubcategoriaError';
export const equiposPorSubcategoriaDefault = 'equiposPorSubcategoriaDefault';

export const obtenerEquiposDeZonaCargando = 'obtenerEquiposDeZonaCargando';
export const obtenerEquiposDeZonaExito = 'obtenerEquiposDeZonaExito';
export const obtenerEquiposDeZonaError = 'obtenerEquiposDeZonaError';
export const obtenerEquiposDeZonaDefault = 'obtenerEquiposDeZonaDefault';

export const listarEquiposCargando_accion = () => {
  return {
    type: listarEquiposCargando,
  };
};
export const listarEquiposExito_accion = equipos => {
  return {
    type: listarEquiposExito,
    datos: equipos,
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
        dispatch(listarEquiposExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(listarEquiposError_accion());
      });
  };
};

/* TRAER EQUIPOS POR SUBCATEGORIA */

export const equiposPorSubcategoriaCargando_accion = () => {
  return {
    type: equiposPorSubcategoriaCargando,
  };
};
export const equiposPorSubcategoriaExito_accion = equipos => {
  return {
    type: equiposPorSubcategoriaExito,
    datos: equipos,
  };
};
export const equiposPorSubcategoriaError_accion = error => {
  return {
    type: equiposPorSubcategoriaError,
    error: error,
  };
};
export const equiposPorSubcategoriaDefault_accion = () => {
  return {
    type: equiposPorSubcategoriaDefault,
  };
};
export const equiposPorSubcategoria_accion = subcategoria => {
  return dispatch => {
    dispatch(equiposPorSubcategoriaCargando_accion());
    API({
      url: `/equipos/obtenerPorIdSubCategoria/${subcategoria}`,
      method: 'get',
    })
      .then(res => {
        dispatch(equiposPorSubcategoriaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(equiposPorSubcategoriaError_accion());
      });
  };
};
/* OBTENER EQUIPOS DE ZONA */
export const obtenerEquiposDeZonaCargando_accion = () => {
  return {
    type: obtenerEquiposDeZonaCargando,
  };
};
export const obtenerEquiposDeZonaExito_accion = equipos => {
  return {
    type: obtenerEquiposDeZonaExito,
    equiposZona: equipos,
  };
};
export const obtenerEquiposDeZonaError_accion = () => {
  return {
    type: obtenerEquiposDeZonaError,
  };
};
export const obtenerEquiposDeZonaDefault_accion = () => {
  return {
    type: obtenerEquiposDeZonaDefault,
  };
};

export const obtenerEquiposDeZona_accion = zonaId => {
  return dispatch => {
    dispatch(obtenerEquiposDeZonaCargando_accion());
    API({
      url: `zonas/obtenerEquiposPorZona/${zonaId}`,
      method: 'get',
      data: {_id: zonaId},
    })
      .then(res => {
        console.log({res});
        dispatch(obtenerEquiposDeZonaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(obtenerEquiposDeZonaError_accion());
      });
  };
};
