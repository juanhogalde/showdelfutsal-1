import {
  cargandoDatosIniciales,
  cargaDatosInicialesExito,
  cargaDatosInicialesError,
  controlModalPublicidad,
} from './AccionesDatosIniciales';
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
  isMostrarModalPublicidad: true,
};
const sotreDatosIniciales = (state = datosInicialesPorDefecto, accion) => {
  switch (accion.type) {
    case cargandoDatosIniciales: {
      return {
        ...state,
        isDatosIniciales: {isMostrar: true, tipo: 'cargando', mensaje: 'cargando'},
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
        };
      });
      return {
        ...state,
        isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
        datosIniciales: {},
        categorias: categorias,
        subcategorias: subCategorias,
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
    default:
      return state;
  }
};
export default sotreDatosIniciales;
