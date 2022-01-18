import {
  volverDatosPorfecto,
  cargandoAgregarVivo,
  agregarVivoExito,
  agregarVivoError,
  editarVivoExito,
  editarVivoError,
  listarVivoExito,
  preguntarPorEliminarVivo,
  eliminarVivoExito,
  eliminarVivoError,
} from './AccionesVivo';

const vivoPorDefecto = {
  vivo: {},
  isVivo: {
    isMostrar: false,
    tipo: '',
    mensaje: '',
    isExito: false,
    isError: false,
    isEditada: false,
    porEliminar: false,
    isEliminado: false,
  },
};
const storeVivo = (state = vivoPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoAgregarVivo: {
      return {
        ...state,
        isVivo: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: accion.msj,
          isExito: false,
          isError: false,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case agregarVivoExito: {
      return {
        ...state,
        vivo: accion.datos,
        isVivo: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'vivo agregado con exito',
          isExito: true,
          isError: false,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case agregarVivoError: {
      return {
        ...state,
        isVivo: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case editarVivoExito: {
      return {
        ...state,
        vivo: accion.datos,
        isVivo: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Vivo editado con exito',
          isExito: false,
          isError: false,
          isEditada: true,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case editarVivoError: {
      return {
        ...state,
        isVivo: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case listarVivoExito: {
      let vivoAmostrar = {};
      if (accion.datos.length) {
        vivoAmostrar = accion.datos[0];
      }
      return {
        ...state,
        vivo: vivoAmostrar,
        isVivo: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case volverDatosPorfecto: {
      return {
        ...state,
        isVivo: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    case preguntarPorEliminarVivo: {
      return {
        ...state,
        isVivo: {
          isMostrar: false,
          tipo: 'warning',
          mensaje: 'Desea eliminar el vivo',
          isExito: false,
          isError: false,
          isEditada: false,
          porEliminar: true,
          isEliminado: false,
        },
      };
    }
    case eliminarVivoExito: {
      return {
        ...state,
        vivo: {},
        isVivo: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'vivo eliminado con exito',
          isExito: false,
          isError: false,
          isEditada: false,
          porEliminar: false,
          isEliminado: true,
        },
      };
    }
    case eliminarVivoError: {
      return {
        ...state,
        isVivo: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
          isEditada: false,
          porEliminar: false,
          isEliminado: false,
        },
      };
    }
    default:
      return state;
  }
};
export default storeVivo;
