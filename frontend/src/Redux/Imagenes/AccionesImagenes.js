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
  return dispatch => {
    console.log(datosGaleria);
    var imagenNoticia = new FormData();
    imagenNoticia.append('archivos', datosGaleria);
    dispatch(cargandoGuardarGaleria_accion());
    API({
      url: '/imagenes/agregar',
      method: 'post',
      data: imagenNoticia,
    })
      .then(res => {
        console.log({res});
      })
      .catch(error => {
        console.log({error});
        dispatch(guardarGaleriaError_accion());
      });
  };
};
