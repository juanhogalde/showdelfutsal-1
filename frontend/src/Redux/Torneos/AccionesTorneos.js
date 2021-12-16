import API from './../Configuracion/api';

export const cargandoAgregarTorneo = 'cargandoAgregarTorneo';
export const agregarTorneoExito = 'cargandoAgregarTorneo';
export const agregarTorneoError = 'cargandoAgregarTorneo';
export const volverPorDefectoAgregarTorneo = 'volverPorDefectoAgregarTorneo';

/****** AGREGAR GALERIA ******/
export const cargandoAgregarTorneo_accion = () => {
  return {
    type: cargandoAgregarTorneo,
  };
};

export const agregarTorneoExito_accion = datos => {
  return {
    type: agregarTorneoExito,
    datos: datos,
  };
};

export const agregarTorneoError_accion = error => {
  return {
    type: agregarTorneoError,
    error: error,
  };
};

export const volverPorDefectoAgregarTorneo_accion = () => {
  return {
    type: volverPorDefectoAgregarTorneo,
  };
};

export const agregarTorneo_accion = datosGaleria => {
  return dispatch => {
    /*  var auxDatosGaleria = new FormData();
      Object.values(datosGaleria.imagenes).forEach(file => {
        auxDatosGaleria.append('archivos', file);
      });
      auxDatosGaleria.append('descripcion', datosGaleria.descripcion); */

    dispatch(cargandoAgregarTorneo_accion());
    API({
      url: '/torneos/agregar',
      method: 'post',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        /* dispatch(agregarTorneoExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(agregarTorneoError_accion()); */
      });
  };
};
