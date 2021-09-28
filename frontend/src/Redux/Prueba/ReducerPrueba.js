import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
  categorias: [
    {
      _id: 1,
      nombreCategoria: 'Masculino',
      color: '#00B8D9',
    },
    {
      _id: 2,
      nombreCategoria: 'Femenino',
      color: '#6da5f9',
    },
    {
      _id: 3,
      nombreCategoria: 'Ambos',
      color: '#806ee8',
    },
  ],
  subCategorias: [
    {
      _id: 1,
      nombreCategoria: 'Primera',
      color: '#00B8D9',
    },
    {
      _id: 2,
      nombreCategoria: 'Primera B',
      color: '#6da5f9',
    },
    {
      _id: 3,
      nombreCategoria: 'Ambos',
      color: '#806ee8',
    },
  ],
};

const storePrueba = (state = pruebaInicio, accion) => {
  switch (accion.type) {
    case prueba: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storePrueba;
