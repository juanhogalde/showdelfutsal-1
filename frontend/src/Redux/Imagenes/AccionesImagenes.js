import API from './../Configuracion/api';

export const cargandoListarImagenes = 'cargandoListarImagenes';
export const listarImagenesExito = 'listarImagenesExito';
export const listarImagenesError = 'listarImagenesError';

export const consultarEliminarImagen = 'consultarEliminarImagen';
export const cargandoEliminarImagen = 'cargandoEliminarImagen';
export const eliminarImagenExito = 'eliminarImagenExito';
export const eliminarImagenError = 'eliminarImagenError';
export const volverPorDefectoEliminarImagen = 'volverPorDefectoEliminarImagen';
export const actualizarGaleriaEliminarImagenExito = 'actualizarGaleriaEliminarImagenExito';

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

export const listarImagenes_accion = () => {
  return dispatch => {
    dispatch(cargandoListarImagenes_accion());
    API({
      url: '/imagenes/listar',
      method: 'get',
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
export const consultarEliminarImagen_accion = (dato, isNuevaImagen) => {
  return {
    type: consultarEliminarImagen,
    datos: dato,
    isNuevaImagen: isNuevaImagen,
  };
};
export const cargandoEliminarImagen_accion = isCargando => {
  return {
    type: cargandoEliminarImagen,
  };
};
export const eliminarImagenExito_accion = () => {
  return {
    type: eliminarImagenExito,
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

export const actualizarGaleriaEliminarImagenExito_accion = (indiceImg, idGaleria) => {
  return {
    type: actualizarGaleriaEliminarImagenExito,
    indiceImg: indiceImg,
    idGaleria: idGaleria,
  };
};

export const eliminarImagen_accion = (index, idImg, idGaleria) => {
  return dispatch => {
    dispatch(cargandoEliminarImagen_accion());
    API({
      url: '/imagenes/eliminar',
      method: 'delete',
      data: {id: idImg, idGaleria: idGaleria},
    })
      .then(res => {
        console.log({res});
        dispatch(eliminarImagenExito_accion());
        dispatch(actualizarGaleriaEliminarImagenExito_accion(index, idGaleria));
      })
      .catch(error => {
        console.log({error});
        dispatch(eliminarImagenError_accion());
      });
  };
};
