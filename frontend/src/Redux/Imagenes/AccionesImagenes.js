import API from './../Configuracion/api';

export const cargandoGuardarGaleria = 'cargandoGuardarGaleria';
export const guardarGaleriaExito = 'guardarGaleriaExito';
export const guardarGaleriaError = 'guardarGaleriaError';
export const volverPorDefectoAgregarGaleria = 'volverPorDefectoAgregarGaleria';

//acciones agregar galeria

export const cargandoGuardarGaleria_accion = isCargando => {
  return {
    type: cargandoGuardarGaleria,
  };
};
export const guardarGaleriaExito_accion = noticia => {
  return {
    type: guardarGaleriaExito,
    respuesta: noticia,
  };
};
export const guardarGaleriaError_accion = error => {
  return {
    type: guardarGaleriaError,
    error: error,
  };
};
export const volverPorDefectoAgregarGaleria_accion = () => {
  return {
    type: volverPorDefectoAgregarGaleria,
  };
};

export const agregarGaleria_accion = datosGaleria => {
  console.log(datosGaleria);
  return dispatch => {
    console.log(datosGaleria);
    var auxDatosGaleria = new FormData();
    Object.values(datosGaleria.imagenes).forEach(file => {
      console.log(file);
      auxDatosGaleria.append('archivos', file);
    });
    auxDatosGaleria.append('descripcion', datosGaleria.descripcion);

    dispatch(cargandoGuardarGaleria_accion());
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: auxDatosGaleria,
    })
      .then(res => {
        console.log({res});
        dispatch(guardarGaleriaExito_accion());
      })
      .catch(error => {
        console.log({error});
        dispatch(guardarGaleriaError_accion());
      });
  };
};
