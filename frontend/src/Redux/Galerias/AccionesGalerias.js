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
/****** AGREGAR GALERIA ******/
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
    Object.values(datosGaleria.imagenes).forEach(file => {
      auxDatosGaleria.append('archivos', file);
    });
    auxDatosGaleria.append('descripcion', datosGaleria.descripcion);

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
export const actualizarListaDeGalerias_accion = datos => {
  return {
    type: actualizarListaDeGalerias,
    datos: datos,
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
    console.log(id);
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
  console.log(datosGaleria);
  return dispatch => {
    var auxDatosGaleria = new FormData();
    auxDatosGaleria.append('_id', datosGaleria.id);
    auxDatosGaleria.append('descripcion', datosGaleria.descripcion);

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
        console.log({res});

        /* dispatch(modificarGaleriaExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        dispatch(modificarGaleriaError_accion());
      });
  };
};
