import {
  cargandoGuardarGaleria,
  guardarGaleriaExito,
  guardarGaleriaError,
  volverPorDefectoAgregarGaleria,
} from './AccionesImagenes';

const imagenPorDefecto = {
  imagenes: [],
  galeria: [],
  isAgregarGaleria: {tipo: '', mensaje: '', isCargando: false, isExito: false, isError: false},
};
const storeImagenes = (state = imagenPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoGuardarGaleria: {
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
          mensaje: '',
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
    }
    default:
      return state;
  }
};
export default storeImagenes;
