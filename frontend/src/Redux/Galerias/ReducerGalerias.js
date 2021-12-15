import {
  cargandoAgregarGaleria,
  agregarGaleriaExito,
  agregarGaleriaError,
  volverPorDefectoAgregarGaleria,
  cargandoListarGalerias,
  listarGaleriasExito,
  listarGaleriasError,
  consultaEliminarGaleria,
  cargandoEliminarGaleria,
  eliminarGaleriaExito,
  actualizarListaDeGalerias,
  eliminarGaleriaError,
  volverPorDefectoEliminarGaleria,
  cargandoModificarGaleria,
  modificarGaleriaExito,
  modificarGaleriaError,
} from './AccionesGalerias';
import {actualizarGaleriaEliminarImagenExito} from '../Imagenes/AccionesImagenes';

const galeriaPorDefecto = {
  galerias: [],
  isAgregarGaleria: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
    datos: '',
  },
  isEliminarGaleria: {
    tipo: '',
    mensaje: '',
    isConsulta: true,
    isCargando: false,
    isExito: false,
    isError: false,
  },
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
    case consultaEliminarGaleria: {
      return {
        ...state,
        isEliminarGaleria: {
          tipo: 'warning',
          mensaje: '¿Desea eliminar la galería?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          datos: accion.datos,
        },
      };
    }
    case cargandoEliminarGaleria: {
      return {
        ...state,
        isEliminarGaleria: {
          tipo: 'cargando',
          mensaje: 'Eliminando Galería...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case eliminarGaleriaExito: {
      return {
        ...state,
        isEliminarGaleria: {
          tipo: 'success',
          mensaje: 'Galería Eliminada',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
        },
      };
    }
    case actualizarListaDeGalerias: {
      let auxGalerias = state.galerias.filter(galeria => galeria._id !== accion.datos);
      return {
        ...state,
        galerias: auxGalerias,
        isEliminarGaleria: {
          tipo: '',
          mensaje: ' ',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          datos: '',
        },
      };
    }
    case eliminarGaleriaError: {
      return {
        ...state,
        isEliminarGaleria: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no se pudo eliminar la galería.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          datos: '',
        },
      };
    }
    case volverPorDefectoEliminarGaleria: {
      return {
        ...state,
        isEliminarGaleria: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          datos: '',
        },
      };
    }
    case actualizarGaleriaEliminarImagenExito: {
      let auxGalerias = [];
      auxGalerias = state.galerias.map(galeria => {
        if (galeria._id === accion.idGaleria) {
          galeria.imagenesId.splice(accion.index, 1);
        }
        return galeria;
      });
      return {
        ...state,
        galerias: auxGalerias,
      };
    }
    case cargandoModificarGaleria: {
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
    case modificarGaleriaExito: {
      console.log(accion.datos);
      let auxGalerias = state.galerias.map(galeria => {
        if (galeria._id === accion.datos._id) {
          return accion.datos;
        } else {
          return galeria;
        }
      });
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'success',
          mensaje: 'Guardando Nueva Galería...',
          mensaje: 'Galería editada con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        galerias: auxGalerias,
      };
    }
    case modificarGaleriaError: {
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
    default:
      return state;
  }
};
export default storeGalerias;
