import {activarMedidaPublicidad_accion} from '../DatosInciales/AccionesDatosIniciales';
import API from './../Configuracion/api';
export const cargandoPublicidad = 'cargandoPublicidad';
export const publicidadExito = 'publicidadExito';
export const publicidadError = 'publicidadError';
export const listarPublicidadesExito = 'listarPublicidadesExito';
export const listarPublicidadesError = 'listarPublicidadesError';
export const buscarPublicidadAEditar = 'buscarPublicidadAEditar';
export const publicidadEditadaExito = 'publicidadEditadaExito';
export const volverPorDefectoPublicidad = 'volverPorDefectoPublicidad';

export const actualizarDisponibilidadMedidasPublicidad =
  'actualizarDisponibilidadMedidasPublicidad';

export const buscarPublicidadAEditar_accion = idPublicidad => {
  return {
    type: buscarPublicidadAEditar,
    id: idPublicidad,
  };
};
export const volverPorDefectoPublicidad_accion = () => {
  return {
    type: volverPorDefectoPublicidad,
  };
};
export const cargandoPublicidad_accion = (mensaje = 'Cargando...') => {
  return {
    type: cargandoPublicidad,
    mensaje: mensaje,
  };
};
export const publicidadExito_accion = data => {
  return {
    type: publicidadExito,
    publicidad: data,
  };
};
export const publicidadError_accion = error => {
  return {
    type: publicidadError,
    error: error,
  };
};
export const actializarMedidasPublicidades_Accion = datos => {
  return {
    type: actualizarDisponibilidadMedidasPublicidad,
    medidas: datos,
  };
};
export const guardarPublicidad = datosCargados => {
  return dispatch => {
    var imagenPublicidad = new FormData();
    imagenPublicidad.append('archivos[]', datosCargados.imagen[0]);
    dispatch(cargandoPublicidad_accion('Guardando...'));
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: imagenPublicidad,
    })
      .then(respuestaImagen => {
        datosCargados.idImagen = respuestaImagen.data.value;
        API({
          url: '/anuncios/agregar',
          method: 'post',
          data: datosCargados,
        })
          .then(respuestaPublicidad => {
            var respuestaExitoGuardarPublicidad = respuestaPublicidad.data;
            API({
              url: '/medidasPublicidad/editar',
              method: 'put',
              data: {_id: datosCargados.idMedidas},
            })
              .then(respuestaMedida => {
                dispatch(actializarMedidasPublicidades_Accion(respuestaMedida.data));
                dispatch(publicidadExito_accion(respuestaExitoGuardarPublicidad));
              })
              .catch(error => {
                console.log({error});
                dispatch(publicidadError_accion({error}));
              });
          })
          .catch(error => {
            console.log({error});
            dispatch(publicidadError_accion(error));
          });
      })
      .catch(error => {
        console.log({error});
        dispatch(publicidadError_accion(error));
      });
  };
};

export const ListarPublicidadesExito_accion = publicidades => {
  return {
    type: listarPublicidadesExito,
    respuesta: publicidades,
  };
};
export const ListarPublicidadesError_accion = error => {
  return {
    type: listarPublicidadesError,
    error: error,
  };
};
export const listarPublicidades_accion = () => {
  return dispatch => {
    // dispatch(cargandoListarNoticia_accion());
    API({
      url: '/anuncios/listar',
      method: 'get',
    })
      .then(res => {
        dispatch(ListarPublicidadesExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(ListarPublicidadesError_accion(error));
      });
  };
};

export const cargandoGuardarPublicidadEditada_accion = (mensaje = 'Cargando...') => {
  return {
    type: cargandoPublicidad,
    mensaje: mensaje,
  };
};
export const publicidadEditadaExito_accion = data => {
  return {
    type: publicidadEditadaExito,
    publicidad: data,
  };
};
export const publicidadEditadaError_accion = error => {
  return {
    type: publicidadError,
    error: error,
  };
};

export const guardarPublicidadEditada = datosCargados => {
  return dispatch => {
    if (datosCargados.imagen && datosCargados.imagen[0].type) {
      var imagenPublicidad = new FormData();
      imagenPublicidad.append('archivos[]', datosCargados.imagen[0]);
      dispatch(cargandoGuardarPublicidadEditada_accion('Editando...'));
      API({
        url: '/imagenes/agregar',
        method: 'post',
        data: imagenPublicidad,
      })
        .then(res => {
          datosCargados = {...datosCargados, idImagen: res.data.value};
          API({
            url: '/anuncios/modificar',
            method: 'put',
            data: datosCargados,
          })
            .then(res => {
              dispatch(publicidadEditadaExito_accion(res.data));
            })
            .catch(error => {
              console.log({error});
              dispatch(publicidadEditadaError_accion(error));
            });
        })
        .catch(error => {
          console.log({error});
          dispatch(publicidadEditadaError_accion(error));
        });
    } else {
      dispatch(cargandoGuardarPublicidadEditada_accion('Editando...'));
      API({
        url: '/anuncios/modificar',
        method: 'put',
        data: {...datosCargados},
      })
        .then(res => {
          dispatch(publicidadEditadaExito_accion(res.data));
        })
        .catch(error => {
          console.log({error});
          dispatch(publicidadEditadaError_accion(error));
        });
    }
  };
};

// Eliminar publicidad
export const modalPaginaPublicidadAccion = 'modalPaginaPublicidadAccion';
export const eliminarPublicidadExito = 'eliminarPublicidadExito';

export const modalPaginaPublicidad_accion = datosModal => {
  return {
    type: modalPaginaPublicidadAccion,
    datosModal: datosModal,
  };
};
export const eliminarPublicidadExito_accion = idPublicidad => {
  return {
    type: eliminarPublicidadExito,
    _id: idPublicidad,
  };
};

export const eliminarPublicidad = idPublicidad => {
  return (dispatch, getStore) => {
    dispatch(
      modalPaginaPublicidad_accion({isMostrar: true, tipo: 'cargando', mensaje: 'Cargando...'})
    );
    API({
      url: '/anuncios/eliminar',
      method: 'delete',
      data: {_id: idPublicidad},
    })
      .then(respuesta => {
        dispatch(eliminarPublicidadExito_accion(respuesta.data.value.idPublicidad));
        if (respuesta.data.status === 200) {
          dispatch(activarMedidaPublicidad_accion(respuesta.data.value.idMedida));
        }
      })
      .catch(error => {
        console.log({error});
        dispatch(
          modalPaginaPublicidad_accion({
            isMostrar: true,
            tipo: 'error',
            mensaje: 'No se pudo eliminar la publicidad',
          })
        );
      });
  };
};
