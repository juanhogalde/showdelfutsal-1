import {
  cargandoDatosIniciales,
  cargaDatosInicialesExito,
  cargaDatosInicialesError,
} from './AccionesDatosIniciales';
const datosInicialesPorDefecto = {
  isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
  datosIniciales: null,
  categorias: [],
  subcategorias: [],
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
      console.log(categorias);
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
    default:
      return state;
  }
};
export default sotreDatosIniciales;
