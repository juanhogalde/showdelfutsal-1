import {
  cargandoAgregarTorneo,
  agregarTorneoExito,
  agregarTorneoError,
  volverPorDefectoAgregarTorneo,
  consultarPorEditarTorneo,
  cargandoEditarTorneo,
  editarTorneoExito,
  editarTorneoError,
  volverPorDefectoEditarTorneo,
  cargarDatosDeTorneoParaEdicion,
  consultarPorEliminarTorneo,
  cargandoEliminarTorneo,
  eliminarTorneoExito,
  actualizarListaDeTorneos,
  eliminarTorneoError,
  volverPorDefectoEliminarTorneo,
  cargandoListarTorneo,
  listarTorneoExito,
  listarTorneoError,
  volverPorDefectoListarTorneo,
  volverPorDefectoUnTorneo,
  recuperarTorneo,
  cargandoCrearZonaTorneo,
  crearZonaTorneoExito,
  crearZonaTorneoError,
  crearZonaTorneoDefault,
  actualizarListaDeTorneosCrearZona,
  /* consultarPoragregarCategoriaSubcategoriaTorneo,
  cargandoAgregarCategoriaSubcategoria,
  agregarCategoriaSubcategoriaTorneoExito,
  agregarCategoriaSubcategoriaTorneoError,
  volverPorDefectoAgregarCategoriaSubcategoriaTorneo,
  actualizarListaDeTorneosConSubcategoria, */
  cargandoObtenerDatosDeTorneoParaEdicion,
  obtenerDatosDeTorneoParaEdicionExito,
  obtenerDatosDeTorneoParaEdicionError,
  obtenerDatosDeTorneoParaEdicionDefault,
  ultimaUbicacionEditarTorneo,
  consultarPorEliminarZona,
  cargandoEliminarZona,
  eliminarZonaExito,
  eliminarZonaError,
  actualizarListaDeZonas,
  volverPorDefectoEliminarZona,
  consultarEliminarZonasDeTorneo,
  eliminarZonasDeTorneoCargando,
  eliminarZonasDeTorneoExito,
  eliminarZonasDeTorneoError,
  actualizarListaDeTorneosEliminarZonas,
  eliminarZonasDeTorneoDefault,
  agregarEquiposZonaTorneoCargando,
  agregarEquiposZonaTorneoExito,
  agregarEquiposZonaTorneoError,
  agregarEquiposZonaTorneoDefault,
} from './AccionesTorneos';

const torneoPorDefecto = {
  torneos: [],
  torneo: {},
  isAgregarTorneo: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isEliminarTorneo: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
    id: '',
  },
  isEditarTorneo: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
  },
  /* isAgregarCategoriaSubcategoria: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
    categoria: '',
    subcategoria: '',
  }, */
  isObtenerDatosEditarTorneo: {
    tipo: '',
    mensaje: '',
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isUltimaUbicacionEditarTorneo: false,
  isAgregarZona: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
  },
  isEliminarZona: {
    tipo: '',
    mensaje: '',
    isConsulta: false,
    isCargando: false,
    isExito: false,
    isError: false,
    idZona: '',
  },
  isEliminarZonasDeTorneo: {
    tipo: '',
    mensaje: '',
    isMostrar: false,
    subcategoria: '',
  },
};
const storeTorneos = (state = torneoPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoAgregarTorneo: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'cargando',
          mensaje: 'Agregando Torneo.',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case agregarTorneoExito: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo cargado con exito.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        torneos: [...state.torneos, accion.datos],
        torneo: accion.datos,
      };
    }
    case agregarTorneoError: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos agregar su torneo.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
        torneo: {},
      };
    }
    case volverPorDefectoAgregarTorneo: {
      return {
        ...state,
        isAgregarTorneo: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case consultarPorEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'warning',
          mensaje: '¿Desea editar el torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case cargandoEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'cargando',
          mensaje: 'Editando torneo...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          categoria: state.isEditarTorneo.categoria,
          subcategoria: state.isEditarTorneo.subcategoria,
        },
      };
    }
    case editarTorneoExito: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo Editado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          categoria: state.isEditarTorneo.categoria,
          subcategoria: state.isEditarTorneo.subcategoria,
        },
        torneo: accion.datos,
      };
    }
    case editarTorneoError: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no se pudo editar el torneo.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case volverPorDefectoEditarTorneo: {
      return {
        ...state,
        isEditarTorneo: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case cargarDatosDeTorneoParaEdicion: {
      let auxDatosDeTorneo = state.torneos.filter(torneo => torneo._id === accion.datos);
      return {
        ...state,
        torneo: auxDatosDeTorneo[0],
      };
    }
    case consultarPorEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'warning',
          mensaje: '¿Desea eliminar este torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          id: accion.datos,
        },
      };
    }
    case cargandoEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'cargando',
          mensaje: 'Eliminando torneo...',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          id: state.isEliminarTorneo.id,
        },
      };
    }
    case eliminarTorneoExito: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'success',
          mensaje: 'Torneo eliminado',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          id: state.isEliminarTorneo.id,
        },
      };
    }
    case actualizarListaDeTorneos: {
      let auxTorneos = [];
      if (state.isEliminarTorneo.id) {
        auxTorneos = state.torneos.filter(torneo => torneo._id !== state.isEliminarTorneo.id);
      }
      if (state.isEditarTorneo.isExito) {
        auxTorneos = state.torneos.map(torneoDeArray => {
          if (torneoDeArray._id === state.torneo._id) {
            return state.torneo;
          } else {
            return torneoDeArray;
          }
        });
      }
      return {
        ...state,
        torneos: auxTorneos,
        isEliminarTorneo: {
          tipo: '',
          mensaje: ' ',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          datos: '',
        },
        isEditarTorneo: {
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
    case eliminarTorneoError: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, no se pudo eliminar el torneo.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          datos: '',
        },
      };
    }
    case volverPorDefectoEliminarTorneo: {
      return {
        ...state,
        isEliminarTorneo: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          id: '',
        },
      };
    }
    case cargandoListarTorneo: {
      return {
        ...state,
      };
    }
    case listarTorneoExito: {
      return {
        ...state,
        torneos: [...state.torneos, ...accion.datos],
      };
    }
    case listarTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoListarTorneo: {
      return {
        ...state,
      };
    }
    case volverPorDefectoUnTorneo: {
      return {
        ...state,
        torneo: {},
      };
    }
    case recuperarTorneo: {
      console.log(accion.id);
      let auxTorneo = state.torneos.find(torneo => torneo._id === accion.id);
      console.log(auxTorneo);
      return {
        ...state,
      };
    }
    /* case consultarPoragregarCategoriaSubcategoriaTorneo: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'warning',
          mensaje: '¿Desea agregar categoría y subcategría al torneo?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: accion.keyCategoria,
          subcategoria: accion.keySubcategoria,
        },
      };
    }
    case cargandoAgregarCategoriaSubcategoria: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'cargando',
          mensaje: 'Agregando categoría y subcategoría al torneo...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          categoria: state.isAgregarCategoriaSubcategoria.categoria,
          subcategoria: state.isAgregarCategoriaSubcategoria.subcategoria,
        },
      };
    }
    case agregarCategoriaSubcategoriaTorneoExito: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: 'success',
          mensaje: 'Se agregó categoría y subcategoría exitosamente.',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          categoria: state.isAgregarCategoriaSubcategoria.categoria,
          subcategoria: state.isAgregarCategoriaSubcategoria.subcategoria,
        },
        torneo: accion.datos,
      };
    }
    case agregarCategoriaSubcategoriaTorneoError: {
      return {
        ...state,
      };
    }
    case volverPorDefectoAgregarCategoriaSubcategoriaTorneo: {
      return {
        ...state,
        isAgregarCategoriaSubcategoria: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    }
    case actualizarListaDeTorneosConSubcategoria: {
      let auxTorneos = state.torneos.map(torneoDeArray => {
        if (torneoDeArray._id === state.torneo._id) {
          return state.torneo;
        } else return torneoDeArray;
      });
      return {
        ...state,
        torneos: auxTorneos,
        isAgregarCategoriaSubcategoria: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
          categoria: '',
          subcategoria: '',
        },
      };
    } */
    case cargandoCrearZonaTorneo: {
      return {
        ...state,
        isAgregarZona: {
          tipo: 'cargando',
          mensaje: 'Agregando Zona.',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case crearZonaTorneoExito: {
      let auxDatosDeTorneo = {};
      Object.assign(auxDatosDeTorneo, state.torneo);

      if (auxDatosDeTorneo.zonas) {
        auxDatosDeTorneo.zonas.push(accion.datos);
      } else {
        auxDatosDeTorneo = {
          ...auxDatosDeTorneo,
          zonas: [],
        };
        auxDatosDeTorneo.zonas.push(accion.datos);
      }
      return {
        ...state,
        torneo: auxDatosDeTorneo,
        isAgregarZona: {
          tipo: 'success',
          mensaje: 'Zona Creada.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
      };
    }
    case crearZonaTorneoError: {
      return {
        ...state,
        isAgregarZona: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en éste momento no podemos agregar Zona.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
      };
    }
    case crearZonaTorneoDefault: {
      return {
        ...state,
        isAgregarZona: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case actualizarListaDeTorneosCrearZona: {
      let auxTorneos = state.torneos.map(torneoDeArray => {
        if (torneoDeArray._id === state.torneo._id) {
          return state.torneo;
        } else return torneoDeArray;
      });
      return {
        ...state,
        isAgregarZona: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
        torneos: auxTorneos,
      };
    }
    case cargandoObtenerDatosDeTorneoParaEdicion: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'cargando',
          mensaje: 'Obteniendo datos para editar torneo.',
          isCargando: true,
          isExito: false,
          isError: false,
        },
      };
    }
    case obtenerDatosDeTorneoParaEdicionExito: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'success',
          mensaje: 'Datos de torneo listos para editar.',
          isCargando: false,
          isExito: true,
          isError: false,
        },
        torneo: accion.datos,
      };
    }
    case obtenerDatosDeTorneoParaEdicionError: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos editar éste torneo.',
          isCargando: false,
          isExito: false,
          isError: true,
        },
      };
    }
    case obtenerDatosDeTorneoParaEdicionDefault: {
      return {
        ...state,
        isObtenerDatosEditarTorneo: {
          tipo: '',
          mensaje: '',
          isCargando: false,
          isExito: false,
          isError: false,
        },
      };
    }
    case ultimaUbicacionEditarTorneo: {
      return {
        ...state,
        isUltimaUbicacionEditarTorneo: accion.datos,
      };
    }
    case consultarPorEliminarZona: {
      return {
        ...state,
        isEliminarZona: {
          tipo: 'warning',
          mensaje: '¿Desea eliminar Zona?',
          isConsulta: true,
          isCargando: false,
          isExito: false,
          isError: false,
          idZona: accion.datos,
        },
      };
    }
    case cargandoEliminarZona: {
      return {
        ...state,
        isEliminarZona: {
          tipo: 'cargando',
          mensaje: 'Eliminando Zona...',
          isConsulta: false,
          isCargando: true,
          isExito: false,
          isError: false,
          idZona: state.isEliminarZona.idZona,
        },
      };
    }
    case eliminarZonaExito: {
      return {
        ...state,
        isEliminarZona: {
          tipo: 'success',
          mensaje: 'Zona eliminada.',
          isConsulta: false,
          isCargando: false,
          isExito: true,
          isError: false,
          idZona: state.isEliminarZona.idZona,
        },
      };
    }
    case eliminarZonaError: {
      return {
        ...state,
        isEliminarZona: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos eliminar Zona.',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: true,
          idZona: state.isEliminarZona.idZona,
        },
      };
    }
    case actualizarListaDeZonas: {
      let auxZonas = state.torneo.zonas.filter(zona => zona._id !== state.isEliminarZona.idZona);
      let auxTorneo = {...state.torneo};
      auxTorneo.zonas = auxZonas;
      console.log(auxTorneo);
      let auxTorneos = state.torneos.map(torneo => {
        if (torneo._id === auxTorneo._id) {
          return auxTorneo;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        torneo: auxTorneo,
        torneos: auxTorneos,
        isEliminarZona: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          idTorneo: '',
          idZona: '',
        },
      };
    }
    case volverPorDefectoEliminarZona: {
      return {
        ...state,
        isEliminarZona: {
          tipo: '',
          mensaje: '',
          isConsulta: false,
          isCargando: false,
          isExito: false,
          isError: false,
          idZona: '',
        },
      };
    }
    case consultarEliminarZonasDeTorneo: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'warning',
          mensaje: '¿Desea eliminar todas las zonas de ésta subcategoría?',
          isMostrar: true,
          subcategoria: accion.idSubcategoria,
        },
      };
    }
    case eliminarZonasDeTorneoCargando: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'cargando',
          mensaje: 'Eliminando Zonas...',
          isMostrar: true,
          subcategoria: state.isEliminarZonasDeTorneo.subcategoria,
        },
      };
    }
    case eliminarZonasDeTorneoExito: {
      let auxZonas = state.torneo.zonas.filter(
        zona => zona.idSubcategoria.keySubcategoria !== accion.subcategoria
      );

      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'success',
          mensaje: 'Zonas Eliminadas.',
          isMostrar: true,
        },
        torneo: {
          ...state.torneo,
          zonas: auxZonas,
        },
      };
    }
    case eliminarZonasDeTorneoError: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: 'error',
          mensaje: 'Lo sentimos, en este momento no podemos eliminar zonas.',
          isMostrar: true,
        },
      };
    }
    case actualizarListaDeTorneosEliminarZonas: {
      let auxTorneos = state.torneos.map(torneo => {
        if (torneo._id === state.torneo._id) {
          return state.torneo;
        } else {
          return torneo;
        }
      });
      return {
        ...state,
        torneos: auxTorneos,
        isEliminarZonasDeTorneo: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
          subcategoria: '',
        },
      };
    }
    case eliminarZonasDeTorneoDefault: {
      return {
        ...state,
        isEliminarZonasDeTorneo: {
          tipo: '',
          mensaje: '',
          isMostrar: false,
        },
      };
    }
    case agregarEquiposZonaTorneoCargando: {
      return {
        ...state,
      };
    }
    case agregarEquiposZonaTorneoExito: {
      return {
        ...state,
      };
    }
    case agregarEquiposZonaTorneoError: {
      return {
        ...state,
      };
    }
    case agregarEquiposZonaTorneoDefault: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storeTorneos;
