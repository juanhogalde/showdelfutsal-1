import {
  cargandoPublicidad,
  publicidadExito,
  publicidadError,
  buscarPublicidadAEditar,
  publicidadEditadaExito,
  volverPorDefectoPublicidad,
  eliminarPublicidadExito,
  modalPaginaPublicidadAccion,
  //pagina publicidad admin
  cargandoPublicidadAdmin,
  obtenerDatosPaginaPublicidadAdminExito,
  obtenerDatosPaginaPublicidadAdminError,
  //NuevaPublicidad
  cargandoNuevaPublicidad,
  medidasParaNuevaPublicidadExito,
  medidasParaNuevaPublicidadError,
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
  modalPaginaPublicidad: {
    isMostrar: false,
    tipo: '',
    mensaje: '',
  },
  publicidadSeleccionadaEdit: {},
  isCargandoPaginaPublicidad : true,
  isErrorPaginaPublicidad:null,
  publicidadesPaginaPublicidad: null,
  isCargandoComponenteNuevaPublicidad : true,
  isErrorComponenteNuevaPublicidad:null,
  medidasParaNuevaPublicidad: null,
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
      return {
        ...state,
        publicidadesPaginaPublicidad: state.publicidadesPaginaPublicidad.map(publicidad => {
          if(publicidad._id === accion.publicidad.value._id){
            return accion.publicidad.value;
          }
          else{
            return publicidad
          }
        }),
        isPublicidad: {
          isMostrar: true,
          tipo: 'success',
          mensaje: 'Publicidad editada',
        },
      };
    }
    case modalPaginaPublicidadAccion: {
      return {
        ...state,
        modalPaginaPublicidad: {
          isMostrar: accion.datosModal.isMostrar,
          tipo: accion.datosModal.tipo,
          mensaje: accion.datosModal.mensaje,
        },
      };
    }
    case eliminarPublicidadExito: {
      const publicidadesEditadas = state.publicidades.filter(
        publicidad => publicidad._id !== accion._id
      );
      return {
        ...state,
        publicidades: publicidadesEditadas,
        modalPaginaPublicidad: {
          isMostrar: true,
          tipo: 'success',
          mensaje: 'Publicidad Eliminada con exito',
        },
      };
    }
    //Pagina Publicidad Admin
    case cargandoPublicidadAdmin: {
      return {
        ...state,
        isCargandoPaginaPublicidad:true,
        publicidadesPaginaPublicidad:null,
        isErrorPaginaPublicidad:null
      };
    }
    case obtenerDatosPaginaPublicidadAdminExito: {
      return {
        ...state,
        publicidadesPaginaPublicidad: accion.payload,
        isErrorPaginaPublicidad:null,
        isCargandoPaginaPublicidad:false,

      };
    }
    case obtenerDatosPaginaPublicidadAdminError: {
      return {
        ...state,
        isErrorPaginaPublicidad:"No se pudieron obtener los datos necesarios",
        publicidadesPaginaPublicidad: null,
        isCargandoPaginaPublicidad:false,
      };
    }
    case cargandoNuevaPublicidad: {
      return {
        ...state,
        isCargandoComponenteNuevaPublicidad:true,
        isErrorComponenteNuevaPublicidad:null,
        medidasParaNuevaPublicidad:null
      };
    }
    case medidasParaNuevaPublicidadExito: {
      const medidasPublicidad = accion.payload.map(medidas => {
        return {
          value: medidas._id,
          label: medidas.direccion + '->' + medidas.ancho + 'x' + medidas.alto,
          key: medidas.keyMedidas,
          ancho: medidas.ancho,
          alto: medidas.alto,
          disponible: medidas.disponible,
        };
      });
      return {
        ...state,
        medidasParaNuevaPublicidad: medidasPublicidad?.filter(medida => medida.disponible),
        isErrorComponenteNuevaPublicidad:null,
        isCargandoComponenteNuevaPublicidad:false,

      };
    }
    case medidasParaNuevaPublicidadError: {
      console.log(accion.payload)
      return {
        ...state,
        isErrorComponenteNuevaPublicidad:"No se pudieron obtener los datos necesarios",
        medidasParaNuevaPublicidad: null,
        isCargandoComponenteNuevaPublicidad:false,
      };
    }
    default:
      return state;
  }
};
export default storePublicidades;
