import {
  /* cargandoGuardarGaleria,
  guardarGaleriaExito,
  guardarGaleriaError,
  volverPorDefectoAgregarGaleria, */
  cargandoListarImagenes,
  listarImagenesExito,
  listarImagenesError,
  consultarEliminarImagen,
  cargandoEliminarImagen,
  eliminarImagenExito,
  eliminarImagenError,
  volverPorDefectoEliminarImagen,
} from './AccionesImagenes';

const imagenPorDefecto = {
  imagenes: [],
  isEliminarImagen: {
    isNuevaImagen: false,
    tipo: '',
    mensaje: '',
    dato: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
  },
  /* galeria: [],
  isAgregarGaleria: {tipo: '', mensaje: '', isCargando: false, isExito: false, isError: false}, */
};
const storeImagenes = (state = imagenPorDefecto, accion) => {
  switch (accion.type) {
    /* case cargandoGuardarGaleria: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'cargando',
          mensaje: '',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case guardarGaleriaExito: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'success',
          mensaje: 'Galería cargada con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        galeria: [...state.galeria, ...accion.datos],
      };
    }
    case guardarGaleriaError: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'error',
          mensaje: 'En este momento no podemos agregar imágenes.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
      };
    }
    case volverPorDefectoAgregarGaleria: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    } */
    case cargandoListarImagenes: {
      return {
        ...state,
      };
    }
    case listarImagenesExito: {
      return {
        ...state,
        imagenes: [...state.galeria, ...accion.datos],
      };
    }
    case listarImagenesError: {
      return {
        ...state,
      };
    }
    case consultarEliminarImagen: {
      return {
        ...state,
        isEliminarImagen: {
          isNuevaImagen: accion.isNuevaImagen,
          tipo: 'warning',
          mensaje: '¿Desea eliminar la imágen?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          dato: accion.datos,
        },
      };
    }
    case cargandoEliminarImagen: {
      return {
        ...state,
        isEliminarImagen: {
          tipo: 'cargando',
          mensaje: 'Eliminando imágen...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          dato: accion.datos,
        },
      };
    }
    case eliminarImagenExito: {
      return {
        ...state,
        isEliminarImagen: {
          isNuevaImagen: false,
          tipo: 'success',
          mensaje: 'Imágen eliminada...',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          dato: '',
        },
      };
    }
    case eliminarImagenError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoEliminarImagen: {
      return {
        ...state,
        isEliminarImagen: {
          isNuevaImagen: false,
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          dato: accion.datos,
        },
      };
    }
    default:
      return state;
  }
};
export default storeImagenes;
