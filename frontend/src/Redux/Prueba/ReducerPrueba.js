import {prueba} from './AccionesPrueba';

const pruebaInicio = {
  logueado: false,
  DatosDePruebaVideos: [
    {
      fuente: 'ox7spKu7EOc',
      descripcion: '1 UNO',
    },
    {
      fuente: 'aA27Fsl2gJc',
      descripcion: '2 DOS',
    },
    {
      fuente: 'NBB8PDenGJM',
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
      fuente: 'https://www.wallpapertip.com/wmimgs/53-530438_torneo-de-futsal.jpg',
      descripcion: '4 CUATRO',
    },
  ],

  noticias: [
    {
      titulo:
        'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica y ganaron por goleada su partido',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 4,
      fuenteImg:
        'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VBDNUL67PBFFLFYERGGZYAXNIM.jpg',
      subcategoria: 1,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 2,
      fuenteImg: 'https://i.ytimg.com/vi/CQre9mRlPaQ/maxresdefault.jpg',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
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
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/245619900_4825283070815870_6767203021912753684_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=eb2cGGP5LfMAX9FDskd&_nc_ht=scontent.fmdz4-1.fna&oh=741a6c35d9b1c3b8e2fdabfc13803454&oe=6191984B',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
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
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/245523131_4825282800815897_2885300462022226492_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=oDkwhoixhVMAX_EC4fS&_nc_ht=scontent.fmdz4-1.fna&oh=4d014893092698c81146dd92ec6eb904&oe=61949A47',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
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
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243162160_4825282824149228_5283036649846464825_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=AaPQVHvp-uwAX-78OlM&_nc_ht=scontent.fmdz4-1.fna&oh=5e5ebd51bc6579b074f6d7980ae1ee3c&oe=61945E89',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 2,
      fuenteImg: 'https://i.ytimg.com/vi/CQre9mRlPaQ/maxresdefault.jpg',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
  ],
  noticias1: {
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
      'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/242697780_4797284710282373_3703383293170952651_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=enQWhlNyKXgAX8kiFPG&_nc_ht=scontent.fmdz4-1.fna&oh=49580ddcf408ef43abf6c8354479afc6&oe=61917CAF',
    subcategoria: 3,
    fecha: '28/9/2021',
    autor: 'sergio Ledesma',
  },
  noticias2: {
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
      'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/244658492_4802774796400031_5698503971285100447_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=973b4a&_nc_ohc=dcM4nnli9Y4AX8E9ZAI&_nc_oc=AQn5uZByGpPBi-pzKyV4MlNDdS07NgciT-RfMrNm646CCHuAnFFX-WbbzvTIliAiNmY&_nc_ht=scontent.fmdz4-1.fna&oh=36a6a00438c28a873a4fcdad20d2c5a4&oe=6193A7E8',
    subcategoria: 3,
    fecha: '28/9/2021',
    autor: 'sergio Ledesma',
  },
  noticias3: {
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
      'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/244666831_4802756099735234_5302158478241245395_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=SPyHDg9TwUAAX89prMD&_nc_ht=scontent.fmdz4-1.fna&oh=abd1325bffe87a46907e3c1db969a2d2&oe=6192EC76',
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
    {
      _id: 4,
      key_categoria: 4,
      categoria: 'Inferiores',
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
