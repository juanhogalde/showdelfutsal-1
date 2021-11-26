import API from './../Configuracion/api';

export const cargandoGuardarGaleria = 'cargandoGuardarGaleria';
export const guardarGaleriaExito = 'guardarGaleriaExito';
export const guardarGaleriaError = 'guardarGaleriaError';
export const volverPorDefectoAgregarGaleria = 'volverPorDefectoAgregarGaleria';

export const cargandoListarImagenes = 'cargandoListarImagenes';
export const listarImagenesExito = 'listarImagenesExito';
export const listarImagenesError = 'listarImagenesError';
//

/* ACCIONES AGREGAR GALERIA (MAXI) */
export const cargandoGuardarGaleria_accion = isCargando => {
  return {
    type: cargandoGuardarGaleria,
  };
};
export const guardarGaleriaExito_accion = datos => {
  return {
    type: guardarGaleriaExito,
    datos: datos,
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
    var auxDatosGaleria = new FormData();
    Object.values(datosGaleria.imagenes).forEach(file => {
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
        dispatch(guardarGaleriaExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        dispatch(guardarGaleriaError_accion());
      });
  };
};

/* ACCIONES LISTAR IMAGENES (MAXI) */
export const cargandoListarImagenes_accion = isCargando => {
  return {
    type: cargandoListarImagenes,
  };
};
export const listarImagenesExito_accion = datos => {
  return {
    type: listarImagenesExito,
    datos: datos,
  };
};
export const listarImagenesError_accion = error => {
  return {
    type: listarImagenesError,
    error: error,
  };
};
/* export const volverPorDefectoAgregarGaleria_accion = () => {
  return {
    type: volverPorDefectoAgregarGaleria,
  };
}; */

export const listarImagenes_accion = () => {
  return dispatch => {
    dispatch(cargandoListarImagenes_accion());
    API({
      url: '/imagenes/listar',
      method: 'get',
      /* data: auxDatosGaleria, */
    })
      .then(res => {
        console.log({res});
        dispatch(listarImagenesExito_accion(res.data.value));
      })
      .catch(error => {
        console.log({error});
        /* dispatch(listarImagenesError_accion()); */
      });
  };
};
