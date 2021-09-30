import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
  DatosDePruebaVideos: [
    {
      fuente: '0gIKILHYA4Y',
      descripcion: 'Liga Nac. Femenina ',
    },
    {
      fuente: 'KIBeny5wq6M',
      descripcion: 'Campeones ligas menores',
    },
    {
      fuente: 'mWBbiJKUoxQ',
      descripcion: 'Campeones ligas menores',
    },
  ],

  DatosDePruebaImagenes: [
    {
      fuente:
        'https://amp.fcbarcelonanoticias.com/mrf4u/statics/i/ps/www.fcbarcelonanoticias.com/uploads/s1/12/70/06/9/mercado-fichajes-2021.jpeg?width=1200&enable=upscale',
      descripcion: 'Liga Nac. Femenina ',
    },
    {
      fuente: 'https://i.ytimg.com/vi/BWeWk6KhwYg/maxresdefault.jpg',
      descripcion: 'Campeones ligas menores',
    },
    {
      fuente:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJ5eKkunzfUzU_rsCh7BO32h5a95aiX65OA&usqp=CAU',
      descripcion: 'Campeones ligas menores',
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
