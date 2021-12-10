import API from './../Configuracion/api';

export const cargandoAgregarGaleria = 'cargandoAgregarGaleria';
export const agregarGaleriaExito = 'agregarGaleriaExito';
export const agregarGaleriaError = 'agregarGaleriaError';
export const volverPorDefectoAgregarGaleria = 'volverPorDefectoAgregarGaleria';

export const cargandoListarGalerias = 'cargandoListarGalerias';
export const listarGaleriasExito = 'listarGaleriasExito';
export const listarGaleriasError = 'listarGaleriasError';

/****** AGREGAR GALERIA ******/
export const cargandoAgregarGaleria_accion = isCargando => {
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
        console.log({res});

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
        console.log({res});

        dispatch(listarGaleriasExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarGaleriasError_accion()); */
      });
  };
};
