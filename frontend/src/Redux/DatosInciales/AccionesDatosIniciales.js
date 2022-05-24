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
