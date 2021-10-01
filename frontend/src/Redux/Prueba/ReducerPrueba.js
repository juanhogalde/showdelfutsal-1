import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
  noticias: {
    titulo: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
    copete:
      'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
    cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
    epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
    categoria: 2,
    fuenteImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThX2q8RqKjEnR_ow3Bp7-kfP01UOGZFeo3-A&usqp=CAU',
    subcategoria: 3,
    fecha: '28/9/2021',
    autor: 'sergio Ledesma',
  },

  categorias: [
    {
      _id: 1,
      key_categoria: 1,
      categoria: 'Masculino',
      color: '#00B8D9',
    },
    {
      _id: 2,
      key_categoria: 2,
      categoria: 'Femenino',
      color: '#6da5f9',
    },
    {
      _id: 3,
      key_categoria: 3,
      categoria: 'Ambos',
      color: '#806ee8',
    },
  ],
  subcategorias: [
    {
      _id: 1,
      key_subcategoria: 1,
      subcategoria: 'Primera',
      color: '#00B8D9',
    },
    {
      _id: 2,
      key_subcategoria: 2,
      subcategoria: 'Primera B',
      color: '#6da5f9',
    },
    {
      _id: 3,
      key_subcategoria: 3,
      subcategoria: 'Ambos',
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
