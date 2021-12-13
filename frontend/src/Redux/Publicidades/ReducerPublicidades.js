import {
  cargandoPublicidad,
  publicidadExito,
  publicidadError,
  listarPublicidadesExito,
  listarPublicidadesError,
  buscarPublicidadAEditar,
  publicidadEditadaExito,
  volverPorDefectoPublicidad,
} from './AccionesPublicidades';

const noticiaPorDefecto = {
  publicidades: [],
  isPublicidad: {
    isMostrar: false,
    tipo: '',
    mensaje: '',
    isExito: false,
    isError: false,
    isPublicidadSeleccionada: false,
  },
  publicidadSeleccionadaEdit: {},
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
          mensaje: accion.mensaje,
          isExito: false,
          isError: false,
          isPublicidadSeleccionada: false,
        },
      };
    }
    case volverPorDefectoPublicidad: {
      return {
        ...state,
        isPublicidad: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isPublicidadSeleccionada: false,
        },
        publicidadSeleccionadaEdit: {},
      };
    }
    case publicidadExito: {
      return {
        ...state,
        publicidades: [...state.publicidades, accion.publicidad.value],
        isPublicidad: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Publicidad generada exitosamente',
          isExito: true,
          isError: false,
          isPublicidadSeleccionada: false,
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
          isPublicidadSeleccionada: false,
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
          isPublicidadSeleccionada: false,
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
          isPublicidadSeleccionada: false,
        },
      };
    }
    case buscarPublicidadAEditar: {
      var resultadoFiltrar = state.publicidades.find(publicidad => publicidad._id === accion.id);

      return {
        ...state,
        publicidadSeleccionadaEdit: resultadoFiltrar,
        isPublicidad: {
          isMostrar: false,
          tipo: '',
          mensaje: '',
          isExito: false,
          isError: false,
          isPublicidadSeleccionada: true,
        },
      };
    }
    case publicidadEditadaExito: {
      var indexDePublicidad = state.publicidades.findIndex(
        element => element._id === accion.publicidad.value._id
      );

      var copiaPublicidades = state.publicidades.slice();

      copiaPublicidades[indexDePublicidad] = accion.publicidad.value;

      return {
        ...state,
        publicidades: copiaPublicidades,
        isPublicidad: {
          isMostrar: false,
          tipo: 'success',
          mensaje: 'Publicidad editada',
          isExito: true,
          isError: false,
          isPublicidadSeleccionada: false,
        },
      };
    }

    default:
      return state;
  }
};
export default storePublicidades;
