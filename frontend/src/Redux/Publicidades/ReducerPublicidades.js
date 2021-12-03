import {
  cargandoPublicidad,
  publicidadExito,
  publicidadError,
  listarPublicidadesExito,
  listarPublicidadesError,
} from './AccionesPublicidades';

const noticiaPorDefecto = {
  publicidades: [],
  isPublicidad: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
};
const storePublicidades = (state = noticiaPorDefecto, accion) => {
  switch (accion.type) {
    //Buscar Noticia
    case cargandoPublicidad: {
      return {
        ...state,
        isPublicidad: {
          isMostrar: true,
          tipo: 'cargando',
          mensaje: 'cargando',
          isExito: false,
          isError: false,
        },
      };
    }
    case publicidadExito: {
      return {
        ...state,
        publicidades: [...state.publicidades, accion.publicidad.value],
        isPublicidad: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'publicidad generada exitosamente',
          isExito: true,
          isError: false,
        },
      };
    }
    case publicidadError: {
      return {
        ...state,
        isPublicidad: {
          isMostrar: false,
          tipo: 'error',
          mensaje: accion.error.message,
          isExito: false,
          isError: true,
        },
      };
    }
    case listarPublicidadesExito: {
      return {
        ...state,
        publicidades: accion.respuesta,
        isPublicidad: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
        },
      };
    }
    case listarPublicidadesError: {
      return {
        ...state,
        isPublicidad: {
          isMostrar: false,
          tipo: 'error',
          mensaje: 'accion.error.message',
          isExito: false,
          isError: true,
        },
      };
    }

    default:
      return state;
  }
};
export default storePublicidades;
