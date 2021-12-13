import {
  cargandoAgregarGaleria,
  agregarGaleriaExito,
  agregarGaleriaError,
  volverPorDefectoAgregarGaleria,
  cargandoListarGalerias,
  listarGaleriasExito,
  listarGaleriasError,
  cargandoEliminarGaleria,
  eliminarGaleriaExito,
  eliminarGaleriaError,
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
          mensaje: 'Guardando Nueva Galería...',
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
        galerias: [...state.galerias, accion.datos],
      };
    }
    case agregarGaleriaError: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar su galería.',
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
    case cargandoListarGalerias: {
      return {
        ...state,
      };
    }
    case listarGaleriasExito: {
      return {
        ...state,
        galerias: [...state.galerias, ...accion.datos],
      };
    }
    case listarGaleriasError: {
      return {
        ...state,
      };
    }
    case cargandoEliminarGaleria: {
      return {
        ...state,
      };
    }
    case eliminarGaleriaExito: {
      let auxGalerias = state.galerias.filter(galeria => galeria._id !== accion.datos);
      return {
        ...state,
        galerias: auxGalerias,
      };
    }
    case eliminarGaleriaError: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storeGalerias;
