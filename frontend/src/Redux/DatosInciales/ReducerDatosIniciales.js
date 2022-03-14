import {
  cargandoDatosIniciales,
  cargaDatosInicialesExito,
  cargaDatosInicialesError,
  controlModalPublicidad,
  gurdarCategoriaSeleccionada,
  activarMedidaPublicidad,
} from './AccionesDatosIniciales';
import {actualizarDisponibilidadMedidasPublicidad} from '../Publicidades/AccionesPublicidades';
const datosInicialesPorDefecto = {
  linkVideosInicioGaleria: [
    {
      fuente: 'VfhOetA3kog',
      descripcion: 'MAQUINA MONTERO',
    },
    {
      fuente: 'I9EakpNrhz0',
      descripcion: 'YAMILA PEREIRA',
    },
    {
      fuente: '27ZPcljfgXQ',
      descripcion: 'JACKI ACOSTA',
    },
  ],
  isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
  datosIniciales: null,
  categorias: [],
  subcategorias: [],
  medidasPublicidad: [],
  isMostrarModalPublicidad: true,
  categoriaSeleccionada: null,
};
const sotreDatosIniciales = (state = datosInicialesPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoDatosIniciales: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
      };
    }
    case gurdarCategoriaSeleccionada: {
      return {
        ...state,
        categoriaSeleccionada: accion.categoria,
      };
    }
    case cargaDatosInicialesExito: {
      var categorias = accion.datosIniciales.categorias.map(categoria => {
        return {
          value: categoria._id,
          label: categoria.nombreCategoria,
          key: categoria.keyCategoria,
        };
      });
      var subCategorias = accion.datosIniciales.subcategorias.map(subcategoria => {
        return {
          value: subcategoria._id,
          label: subcategoria.nombreSubcategoria,
          key: subcategoria.keySubcategoria,
          keyCategoria: subcategoria.keyCategoria,
        };
      });
      var medidasPublicidad = accion.datosIniciales.medidasPublicidad.map(medidas => {
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
        isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
        datosIniciales: {},
        categorias: categorias,
        subcategorias: subCategorias,
        medidasPublicidad: medidasPublicidad,
      };
    }
    case cargaDatosInicialesError: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: true, tipo: 'error', mensaje: accion.message},
      };
    }
    case controlModalPublicidad: {
      return {
        ...state,
        isMostrarModalPublicidad: !state.isMostrarModalPublicidad,
      };
    }
    case actualizarDisponibilidadMedidasPublicidad: {
      return {
        ...state,
        medidasPublicidad: state.medidasPublicidad.map(medida => {
          if (medida.value === accion._id) {
            return {
              ...medida,

              disponible: false,
            };
          } else {
            return medida;
          }
        }),
      };
    }
    case activarMedidaPublicidad: {
      var medidasPublicidadActivadas = state.medidasPublicidad.map(medida => {
        if (medida.value === accion._id) {
          return {
            ...medida,

            disponible: true,
          };
        } else {
          return medida;
        }
      });
      return {
        ...state,
        medidasPublicidad: medidasPublicidadActivadas,
      };
    }
    default:
      return state;
  }
};
export default sotreDatosIniciales;
