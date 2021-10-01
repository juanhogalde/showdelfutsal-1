import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
  DatosDePruebaVideos: [
    {
      fuente: '0gIKILHYA4Y',
      descripcion: '1 UNO',
    },
    {
      fuente: 'KIBeny5wq6M',
      descripcion: '2 DOS',
    },
    {
      fuente: 'mWBbiJKUoxQ',
      descripcion: '3 TRES',
    },
    {
      fuente: 'RvHe2-jRQrE',
      descripcion: '4 CUATRO',
    },
    {
      fuente: 'RvHe2-jRQrE',
      descripcion: '5 CINCO',
    },
  ],

  DatosDePruebaImagenes: [
    {
      fuente:
        'https://amp.fcbarcelonanoticias.com/mrf4u/statics/i/ps/www.fcbarcelonanoticias.com/uploads/s1/12/70/06/9/mercado-fichajes-2021.jpeg?width=1200&enable=upscale',
      descripcion: '1 UNO ',
    },
    {
      fuente: 'https://i.ytimg.com/vi/BWeWk6KhwYg/maxresdefault.jpg',
      descripcion: '2 DOS',
    },
    {
      fuente:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJ5eKkunzfUzU_rsCh7BO32h5a95aiX65OA&usqp=CAU',
      descripcion: '3 TRES',
    },
    {
      fuente:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJ5eKkunzfUzU_rsCh7BO32h5a95aiX65OA&usqp=CAU',
      descripcion: '4 CUATRO',
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
