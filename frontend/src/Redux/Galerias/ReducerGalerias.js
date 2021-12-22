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
  cargandoAgregarGaleriaVideo,
  agregarGaleriaVideoExito,
  agregarGaleriaVideoError,
  cargarVideoGaleriaParaEditar,
  cargandoEditarGaleriaVideo,
  editarGaleriaVideoExito,
  editarGaleriaVideoError,
  eliminarVideoExito,
  eliminarVideoError,
} from './AccionesGalerias';
import {actualizarGaleriaEliminarImagenExito} from '../Imagenes/AccionesImagenes';

const galeriaPorDefecto = {
  galerias: [],
  videoGaleriaEditar: {},
  isAgregarGaleria: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
    datos: '',
  },
  isEditarGaleria: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
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
    case cargarVideoGaleriaParaEditar: {
      return {
        ...state,
        videoGaleriaEditar: accion.datos,
      };
    }
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
        videoGaleriaEditar: {},
        isAgregarGaleria: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
        isEditarGaleria: {
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
          galeria.imagenesId.splice(accion.indiceImg, 1);
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
    case cargandoAgregarGaleriaVideo: {
      return {
        ...state,
        isAgregarGaleria: {
          tipo: 'cargando',
          mensaje: 'Guardando Nueva Galería De Video...',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case agregarGaleriaVideoExito: {
      var objetoAgregar = {
        ...accion.datos.galeria,
        videosId: accion.datos.videos,
        imagenesId: [],
      };

      var datosFinales = [...state.galerias.slice(), objetoAgregar];

      return {
        ...state,
        galerias: datosFinales,
        isAgregarGaleria: {
          tipo: 'success',
          mensaje: 'Galería de video creada con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
      };
    }
    case agregarGaleriaVideoError: {
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
    case cargandoEditarGaleriaVideo: {
      return {
        ...state,
        isEditarGaleria: {
          tipo: 'cargando',
          mensaje: accion.mensaje,
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case editarGaleriaVideoExito: {
      var objetoEditado = {
        ...accion.datos.galeria,
        videosId: accion.datos.videos,
        imagenesId: [],
      };
      var index = state.galerias.findIndex(galeria => galeria._id === accion.datos.galeria._id);
      var galeriaFinal = [...state.galerias];
      galeriaFinal[index] = objetoEditado;

      return {
        ...state,
        galerias: galeriaFinal,
        isEditarGaleria: {
          tipo: 'success',
          mensaje: 'Galería de video editada con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
      };
    }
    case editarGaleriaVideoError: {
      return {
        ...state,
        isEditarGaleria: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar su galería.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
      };
    }
    case eliminarVideoExito: {
      var indexGaleria = state.galerias.findIndex(
        galeria => (galeria._id = accion.video.idGaleria)
      );

      var copiaGalerias = state.galerias.slice();

      var galeria = {
        ...state.galerias[indexGaleria],
        videosId: state.galerias[indexGaleria].videosId.filter(
          video => video._id !== accion.video._id
        ),
      };

      copiaGalerias[indexGaleria] = galeria;

      return {
        ...state,
        galerias: copiaGalerias,
        isEditarGaleria: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case eliminarVideoError: {
      return {
        ...state,
        isEditarGaleria: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no pudimos eliminar el video.',
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
