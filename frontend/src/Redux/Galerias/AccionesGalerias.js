import API from './../Configuracion/api';

export const cargandoAgregarGaleria = 'cargandoAgregarGaleria';
export const agregarGaleriaExito = 'agregarGaleriaExito';
export const agregarGaleriaError = 'agregarGaleriaError';
export const volverPorDefectoAgregarGaleria = 'volverPorDefectoAgregarGaleria';

export const cargandoListarGalerias = 'cargandoListarGalerias';
export const listarGaleriasExito = 'listarGaleriasExito';
export const listarGaleriasError = 'listarGaleriasError';

export const consultaEliminarGaleria = 'consultaEliminarGaleria';
export const cargandoEliminarGaleria = 'cargandoEliminarGaleria';
export const eliminarGaleriaExito = 'eliminarGaleriaExito';
export const eliminarGaleriaError = 'eliminarGaleriaError';
export const volverPorDefectoEliminarGaleria = 'volverPorDefectoEliminarGaleria';

export const actualizarListaDeGalerias = 'actualizarListaDeGalerias';

export const cargandoModificarGaleria = 'cargandoModificarGaleria';
export const modificarGaleriaExito = 'modificarGaleriaExito';
export const modificarGaleriaError = 'modificarGaleriaError';

export const cargandoAgregarGaleriaVideo = 'cargandoAgregarGaleriaVideo';
export const agregarGaleriaVideoExito = 'agregarGaleriaVideoExito';
export const agregarGaleriaVideoError = 'agregarGaleriaVideoError';
export const cargarVideoGaleriaParaEditar = 'cargarVideoGaleriaParaEditar';
export const cargandoEditarGaleriaVideo = 'cargandoEditarGaleriaVideo';
export const editarGaleriaVideoExito = 'editarGaleriaVideoExito';
export const editarGaleriaVideoError = 'editarGaleriaVideoError';
export const eliminarVideoExito = 'eliminarVideoExito';
export const eliminarVideoError = 'eliminarVideoError';
/****** AGREGAR GALERIA ******/
export const cargarVideoGaleriaParaEditar_accion = galeriaVideo => {
  return {
    type: cargarVideoGaleriaParaEditar,
    datos: galeriaVideo,
  };
};

export const cargandoAgregarGaleria_accion = () => {
  return {
    type: cargandoAgregarGaleria,
  };
};

export const agregarGaleriaExito_accion = datos => {
  return {
    type: agregarGaleriaExito,
    datos: datos,
  };
};

export const agregarGaleriaError_accion = error => {
  return {
    type: agregarGaleriaError,
    error: error,
  };
};

export const volverPorDefectoAgregarGaleria_accion = () => {
  return {
    type: volverPorDefectoAgregarGaleria,
  };
};

export const agregarGaleria_accion = datosGaleria => {
  return dispatch => {
    var auxDatosGaleria = new FormData();
    datosGaleria.imagenes.forEach(file => {
      auxDatosGaleria.append('archivos[]', file);
    });
    auxDatosGaleria.append('tituloGaleria', datosGaleria.descripcion);
    auxDatosGaleria.append('idCategoria', datosGaleria.idCategoria);
    auxDatosGaleria.append('keyCategoria', datosGaleria.keyCategoria);
    dispatch(cargandoAgregarGaleria_accion());
    API({
      url: '/galeria/agregar',
      method: 'post',
      data: auxDatosGaleria,
    })
      .then(res => {
        dispatch(agregarGaleriaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarGaleriaError_accion());
      });
  };
};

/****** LISTAR GALERIAS ******/
export const cargandoListarGalerias_accion = isCargando => {
  return {
    type: cargandoListarGalerias,
  };
};

export const listarGaleriasExito_accion = datos => {
  return {
    type: listarGaleriasExito,
    datos: datos,
  };
};

export const listarGaleriasError_accion = error => {
  return {
    type: listarGaleriasError,
    error: error,
  };
};

export const listarGalerias_accion = () => {
  return dispatch => {
    dispatch(cargandoListarGalerias_accion());
    API({
      url: '/galeria/listar',
      method: 'get',
    })
      .then(res => {
        dispatch(listarGaleriasExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarGaleriasError_accion()); */
      });
  };
};

/****** ELIMINAR GALERIAS ******/
export const consultaEliminarGaleria_accion = datos => {
  return {
    type: consultaEliminarGaleria,
    datos: datos,
  };
};

export const cargandoEliminarGaleria_accion = isCargando => {
  return {
    type: cargandoEliminarGaleria,
  };
};

export const eliminarGaleriaExito_accion = datos => {
  return {
    type: eliminarGaleriaExito,
    datos: datos,
  };
};
export const actualizarListaDeGalerias_accion = () => {
  return {
    type: actualizarListaDeGalerias,
  };
};
export const eliminarGaleriaError_accion = error => {
  return {
    type: eliminarGaleriaError,
    error: error,
  };
};
export const volverPorDefectoEliminarGaleria_accion = () => {
  return {
    type: volverPorDefectoEliminarGaleria,
  };
};
export const eliminarGaleria_accion = id => {
  return dispatch => {
    dispatch(cargandoEliminarGaleria_accion());
    API({
      url: '/galeria/eliminar',
      method: 'delete',
      data: {_id: id},
    })
      .then(res => {
        dispatch(eliminarGaleriaExito_accion(id));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarGaleriaError_accion());
      });
  };
};

/****** MODIFICAR GALERIA ******/
export const cargandoModificarGaleria_accion = () => {
  return {
    type: cargandoModificarGaleria,
  };
};

export const modificarGaleriaExito_accion = datos => {
  return {
    type: modificarGaleriaExito,
    datos: datos,
  };
};

export const modificarGaleriaError_accion = error => {
  return {
    type: modificarGaleriaError,
    error: error,
  };
};

/* export const volverPorDefectoAgregarGaleria_accion = () => {
  return {
    type: volverPorDefectoAgregarGaleria,
  };
}; */

export const modificarGaleria_accion = datosGaleria => {
  return dispatch => {
    var auxDatosGaleria = new FormData();
    auxDatosGaleria.append('_id', datosGaleria.id);
    auxDatosGaleria.append('descripcion', datosGaleria.descripcion);
    auxDatosGaleria.append('idCategoria', datosGaleria.idCategoria);
    auxDatosGaleria.append('keyCategoria', datosGaleria.keyCategoria);

    Object.values(datosGaleria.imagenes).forEach(file => {
      if (file instanceof Blob) {
        auxDatosGaleria.append('archivos', file);
      }
    });

    dispatch(cargandoModificarGaleria_accion());
    API({
      url: '/galeria/modificar',
      method: 'put',
      data: auxDatosGaleria,
    })
      .then(res => {
        dispatch(modificarGaleriaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(modificarGaleriaError_accion());
      });
  };
};

/****** AGREGAR GALERIA VIDEO ******/
export const cargandoAgregarGaleriaVideo_accion = (mensaje = 'Cargando') => {
  return {
    type: cargandoAgregarGaleriaVideo,
    mensaje: mensaje,
  };
};

export const agregarGaleriaVideoExito_accion = datos => {
  return {
    type: agregarGaleriaVideoExito,
    datos: datos,
  };
};

export const agregarGaleriaVideoError_accion = error => {
  return {
    type: agregarGaleriaVideoError,
    error: error,
  };
};
export const guardarGaleriaVideo_accion = (datosGaleria, videosCargados) => {
  return dispatch => {
    dispatch(cargandoAgregarGaleriaVideo_accion('agregando galeria de video'));
    API({
      url: '/galeria/agregar/galeriaVideo',
      method: 'post',
      data: {tituloGaleria: datosGaleria.tituloGaleria, fechaCarga: datosGaleria.fechaCarga},
    })
      .then(res => {
        var respuestaAgregarGaleria = res.data.value;
        API({
          url: '/videos/agregar',
          method: 'post',
          data: {videos: videosCargados, idGaleria: res.data.value._id},
        })
          .then(res => {
            dispatch(
              agregarGaleriaVideoExito_accion({
                videos: res.data.value,
                galeria: respuestaAgregarGaleria,
              })
            );
          })
          .catch(error => {
            console.log({error});
            dispatch(agregarGaleriaVideoError_accion(error));
          });
      })
      .catch(error => {
        console.log({error});
        dispatch(agregarGaleriaVideoError_accion(error));
      });
  };
};

/****** EDITAR GALERIA VIDEO ******/
export const cargandoEditarGaleriaVideo_accion = (mensaje = 'Cargando') => {
  return {
    type: cargandoEditarGaleriaVideo,
    mensaje: mensaje,
  };
};

export const editarGaleriaVideoExito_accion = datos => {
  return {
    type: editarGaleriaVideoExito,
    datos: datos,
  };
};

export const editarGaleriaVideoError_accion = error => {
  return {
    type: editarGaleriaVideoError,
    error: error,
  };
};
export const editarGaleriaVideo_accion = (datosGaleria, videosCargados) => {
  return dispatch => {
    dispatch(cargandoEditarGaleriaVideo_accion('agregando galeria de video'));
    API({
      url: '/galeria/modificar/galeriaVideo',
      method: 'put',
      data: {
        _id: datosGaleria._id,
        tituloGaleria: datosGaleria.tituloGaleria,
        fechaModificacion: datosGaleria.fechaModificacion,
      },
    })
      .then(res => {
        var respuestaEditarGaleria = res.data.value;
        API({
          url: '/videos/agregar',
          method: 'post',
          data: {videos: videosCargados, idGaleria: res.data.value._id},
        })
          .then(res => {
            dispatch(
              editarGaleriaVideoExito_accion({
                videos: res.data.value,
                galeria: respuestaEditarGaleria,
              })
            );
          })
          .catch(error => {
            console.log({error});
            dispatch(editarGaleriaVideoError_accion(error));
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const eliminarVideoExito_accion = data => {
  return {
    type: eliminarVideoExito,
    video: data,
  };
};

export const eliminarVideoError_accion = error => {
  return {
    type: eliminarVideoError,
    error: error,
  };
};
export const eliminarVideo_accion = video => {
  return dispatch => {
    dispatch(cargandoEditarGaleriaVideo_accion('eliminando video'));
    API({
      url: '/videos/eliminar',
      method: 'delete',
      data: {
        id: video._id,
      },
    })
      .then(res => {
        dispatch(eliminarVideoExito_accion(res.data.value));
      })
      .catch(error => {
        dispatch(eliminarVideoError_accion(error));
      });
  };
};
