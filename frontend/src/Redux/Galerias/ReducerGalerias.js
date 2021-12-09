import {
  cargandoAgregarGaleria,
  agregarGaleriaExito,
  agregarGaleriaError,
  volverPorDefectoAgregarGaleria,
} from './AccionesGalerias';

const galeriaPorDefecto = {
  galerias: [],
  isAgregarGaleria: {tipo: '', mensaje: '', isCargando: false, isExito: false, isError: false},
};

const storeGalerias = (state = galeriaPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoAgregarGaleria: {
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
    case agregarGaleriaExito: {
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
    case agregarGaleriaError: {
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
export default storeGalerias;
