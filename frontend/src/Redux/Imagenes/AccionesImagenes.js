import API from './../Configuracion/api';

/* export const cargandoGuardarGaleria = 'cargandoGuardarGaleria';
export const guardarGaleriaExito = 'guardarGaleriaExito';
export const guardarGaleriaError = 'guardarGaleriaError';
export const volverPorDefectoAgregarGaleria = 'volverPorDefectoAgregarGaleria'; */

export const cargandoListarImagenes = 'cargandoListarImagenes';
export const listarImagenesExito = 'listarImagenesExito';
export const listarImagenesError = 'listarImagenesError';

export const consultarEliminarImagen = 'consultarEliminarImagen';
export const cargandoEliminarImagen = 'cargandoEliminarImagen';
export const eliminarImagenExito = 'eliminarImagenExito';
export const eliminarImagenError = 'eliminarImagenError';
export const volverPorDefectoEliminarImagen = 'volverPorDefectoEliminarImagen';
//

/* ACCIONES AGREGAR GALERIA (MAXI) */
/* export const cargandoGuardarGaleria_accion = isCargando => {
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
      url: '/galeria/agregar',
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
 */
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

/* ACCIONES ELIMINAR IMAGENES (MAXI) */
export const consultarEliminarImagen_accion = dato => {
  return {
    type: consultarEliminarImagen,
    datos: dato,
  };
};
export const cargandoEliminarImagen_accion = isCargando => {
  return {
    type: cargandoEliminarImagen,
  };
};
export const eliminarImagenExito_accion = datos => {
  return {
    type: eliminarImagenExito,
    datos: datos,
  };
};
export const eliminarImagenError_accion = error => {
  return {
    type: eliminarImagenError,
    error: error,
  };
};
export const volverPorDefectoEliminarImagen_accion = () => {
  return {
    type: volverPorDefectoEliminarImagen,
  };
};

export const eliminarImagen_accion = (index, idImg, idGaleria) => {
  console.log(index);

  console.log(idImg);
  console.log(idGaleria);
  return dispatch => {
    dispatch(cargandoEliminarImagen_accion());
    API({
      url: '/imagenes/eliminar',
      method: 'delete',
      data: {id: idImg, idGaleria: idGaleria},
    })
      .then(res => {
        console.log({res});
        /*  dispatch(eliminarImagenExito_accion(res.data.value)); */
      })
      .catch(error => {
        console.log({error});
        /* dispatch(eliminarImagenError_accion()); */
      });
  };
};
