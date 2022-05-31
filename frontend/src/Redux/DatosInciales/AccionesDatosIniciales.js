import API from './../Configuracion/api';
export const cargandoDatosIniciales = 'cargandoDatosIniciales';
export const cargaDatosInicialesExito = 'cargaDatosInicialesExito';
export const cargaDatosInicialesError = 'cargaDatosInicialesError';
export const controlModalPublicidad = 'controlModalPublicidad';
export const gurdarCategoriaSeleccionada = 'gurdarCategoriaSeleccionada';
export const gurdarCategoriaSeleccionada_accion = categoria => {
  return {
    type: gurdarCategoriaSeleccionada,
    categoria: categoria,
  };
};
export const cargandoDatosIniciales_accion = datos => {
  return {
    type: cargandoDatosIniciales,
    datos: datos,
  };
};
export const cargaDatosInicialesExito_accion = datosIniciales => {
  return {
    type: cargaDatosInicialesExito,
    datosIniciales: datosIniciales,
  };
};
export const cargaDatosInicialesError_accion = error => {
  return {
    type: cargaDatosInicialesError,
    error: error,
  };
};

//async buscar noticia
export const obtenerDatosIniciales = () => {
  return dispatch => {
    var datosIniciales;
    dispatch(cargandoDatosIniciales_accion());

    API({
      url: '/categorias/listar',
      method: 'get',
    })
      .then(res => {
        datosIniciales = {...datosIniciales, categorias: res.data.value};

        API({
          url: '/subcategorias/listar',
          method: 'get',
        })
          .then(res => {
            datosIniciales = {...datosIniciales, subcategorias: res.data.value};
            API({
              url: '/medidasPublicidad/listar',
              method: 'get',
            })
              .then(res => {
                datosIniciales = {...datosIniciales, medidasPublicidad: res.data.value};
                dispatch(cargaDatosInicialesExito_accion(datosIniciales));
              })
              .catch(error => {
                console.log(error);
                dispatch(cargaDatosInicialesError_accion(error));
              });
          })
          .catch(error => {
            console.log(error);
            dispatch(cargaDatosInicialesError_accion(error));
          });
      })
      .catch(error => {
        console.log(error);
        dispatch(cargaDatosInicialesError_accion(error));
      });
  };
};

export const controlModalPublicidad_accion = () => {
  return {
    type: controlModalPublicidad,
  };
};
export const activarMedidaPublicidad = 'activarMedidaPublicidad';

export const activarMedidaPublicidad_accion = id => {
  return {
    type: activarMedidaPublicidad,
    _id: id,
  };
};

// Inicio Obtener Datos iniciales Publicos
export const cargandoDatosInicialesPublicos = 'cargandoDatosInicialesPublicos';
export const cargaDatosInicialesPublicosExito = 'cargaDatosInicialesPublicosExito';
export const cargaDatosInicialesPulbicosError = 'cargaDatosInicialesPulbicosError';

export const cargandoDatosInicialesPublicos_accion = datos => {
  return {
    type: cargandoDatosInicialesPublicos,
    datos: datos,
  };
};
export const cargaDatosInicialesPublicosExito_accion = datos => {
  return {
    type: cargaDatosInicialesPublicosExito,
    payload: datos,
  };
};
export const cargaDatosInicialesPulbicosError_accion = error => {
  return {
    type: cargaDatosInicialesPulbicosError,
    payload: error,
  };
};

export const obtenerDatosInicialesPublicos = () => {
  return dispatch => {
    dispatch(cargandoDatosInicialesPublicos_accion());

    API({
      url: 'home/datosIniciales/',
      method: 'get',
    })
      .then(res => {
        // console.log(res.data.value)
        //TODO:CAMBIAR URL Y DATOS CAUNDO ESTE LISTA LA RUTA
        const respuestaSimulada = {
          noticias: res.data.value.noticias,
          partidos: res.data.value.partidos,
          videoVivo: {},
          galerias: res.data.value.galerias,
          publicaciones:  res.data.value.publicaciones,
        };
        dispatch(cargaDatosInicialesPublicosExito_accion(respuestaSimulada));
      })
      .catch(error => {
        console.log({error});
        dispatch(cargaDatosInicialesPulbicosError_accion(error));
      });
  };
};

// Seccion editor equipos

export const controlModalGenericoEditorEquipo = 'controlModalGenericoEditorEquipo';
export const controlModalGenericoEditorEquipo_accion = datos => {
  return {
    type: controlModalGenericoEditorEquipo,
    payload: datos,
  };
};

export const crearEquiposExito = 'crearEquiposExito';
export const crearEquiposExito_accion = equipo => {
  return {
    type: crearEquiposExito,
    payload: equipo,
  };
};
export const crearEquiposError = 'crearEquiposError';
export const crearEquiposError_accion = error => {
  return {
    type: crearEquiposError,
    payload: error,
  };
};
export const agregarEquipoNuevo = equipo => {
  return dispatch => {
    dispatch(
      controlModalGenericoEditorEquipo_accion({
        isMostar: true,
        tipo: 'cargando',
        mensaje: 'cargando',
        data: 'nuevo',
      })
    );
    if (equipo.nombre && equipo.subcategoria && equipo.categoria && equipo.escudo) {
      const equipoFormateado = new FormData();
      equipoFormateado.append('escudo', equipo.escudo);
      equipoFormateado.append('nombre', equipo.nombre);
      equipoFormateado.append('categoria', equipo.categoria);
      equipoFormateado.append('subcategoria', equipo.subcategoria);
      API({
        url: 'equipos/agregar',
        method: 'post',
        data: equipoFormateado,
      })
        .then(res => {
          dispatch(crearEquiposExito_accion(res.data.value));
        })
        .catch(error => {
          dispatch(crearEquiposError_accion(error));
        });
    } else {
      dispatch(
        controlModalGenericoEditorEquipo_accion({
          isMostar: true,
          tipo: 'error',
          mensaje: 'Faltan datos requeridos',
          data: null,
        })
      );
    }
  };
};
export const editorEquiposExito = 'editorEquiposExito';
export const editorEquiposExito_accion = equipo => {
  return {
    type: editorEquiposExito,
    payload: equipo,
  };
};
export const editorEquiposError = 'editorEquiposError';
export const editorEquiposError_accion = error => {
  return {
    type: editorEquiposError,
    payload: error,
  };
};
export const modificarEquipo = equipo => {
  return dispatch => {
    dispatch(
      controlModalGenericoEditorEquipo_accion({
        isMostar: true,
        tipo: 'cargando',
        mensaje: 'cargando',
        data: 'modificar',
      })
    );
    if (equipo.nombre && equipo.subcategoria && equipo.categoria && equipo._id) {
      let body;
      if (equipo.escudo) {
        body = new FormData();
        body.append('escudo', equipo.escudo);
        body.append('nombre', equipo.nombre);
        body.append('categoria', equipo.categoria);
        body.append('subcategoria', equipo.subcategoria);
      } else {
        body = equipo;
      }
      API({url: 'equipos/modificar', method: 'put', data: body})
        .then(res => {
          dispatch(editorEquiposExito_accion(res.data.value));
        })
        .catch(error => {
          dispatch(editorEquiposError_accion(error));
        });
    } else {
      dispatch(
        controlModalGenericoEditorEquipo_accion({
          isMostar: true,
          tipo: 'error',
          mensaje: 'Faltan datos requeridos',
          data: null,
        })
      );
    }
  };
};
