import {prueba, obtenerNoticiasFiltradas} from './AccionesPrueba';

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
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/241666479_4715899868420858_6789549810217285789_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=usHNyI0zEVgAX-qAqU5&_nc_ht=scontent.fmdz4-1.fna&oh=a647f5e4f99dbc29b7c69384dddf5035&oe=619887C1',
      descripcion: '3 TRES',
    },
    {
      fuente: 'https://www.wallpapertip.com/wmimgs/53-530438_torneo-de-futsal.jpg',
      descripcion: '4 CUATRO',
    },
  ],
  DatosDePruebaImagenes2: [
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243263799_4775717809105730_5434765154927509475_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=YhROEwd3IacAX-YgR9D&_nc_ht=scontent.fmdz4-1.fna&oh=c1ddc857440749c68530799512ce13d2&oe=619DC61C',
      descripcion: '1 UNO ',
    },
    {
      fuente: 'https://i.ytimg.com/vi/BWeWk6KhwYg/maxresdefault.jpg',
      descripcion: '2 DOS',
    },
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243200797_4775717535772424_3110194755917429738_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=q_FUNGHc2ugAX_wuF-u&_nc_ht=scontent.fmdz4-1.fna&oh=83dfbcf36ff83ce693f32fc831b961d6&oe=619F94D4',
      descripcion: '3 TRES',
    },
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/240398526_4702201263124052_8865566955572111850_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=fMCOt0mSMcEAX828uYo&_nc_ht=scontent.fmdz4-1.fna&oh=22378cb0ed6d1fd4e3ada55ebf5d66d9&oe=619D7075',
      descripcion: '4 CUATRO',
    },
  ],
  DatosDePruebaImagenes3: [
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/240426763_4700533633290815_7829316978391515324_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=HDN7ukR1K0QAX_2fTFJ&_nc_ht=scontent.fmdz4-1.fna&oh=1d1239e8c8b90e63bb62dba4a14dbbc0&oe=619F52E5',
      descripcion: '1 UNO ',
    },
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/238058025_4693633797314132_8221355246724701238_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=973b4a&_nc_ohc=PR3Gyq-l_70AX909Jd9&_nc_ht=scontent.fmdz4-1.fna&oh=ca1f443dd69f963fee8f3db0523a2730&oe=619D37D4',
      descripcion: '2 DOS',
    },
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/241666479_4715899868420858_6789549810217285789_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=usHNyI0zEVgAX-qAqU5&_nc_ht=scontent.fmdz4-1.fna&oh=a647f5e4f99dbc29b7c69384dddf5035&oe=619887C1',
      descripcion: '3 TRES',
    },
    {
      fuente:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/238617012_4651218128222366_6491545351616149736_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=_irl4TMAQN8AX_Ndtu8&_nc_ht=scontent.fmdz4-1.fna&oh=710124139dc36af793d45c901c6b45fa&oe=619F3213',
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
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinalesvóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinalesvóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinalesvóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinalesvóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales
    vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales
    vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
    En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
    Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
    Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales`,
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
  noticiasFemenino: [
    {
      titulo: 'Independencia 3 - 4 Bermejito',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 2,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/247012642_4848264918517685_264445427877293891_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=973b4a&_nc_ohc=2IsEjl1niXcAX-bzQb1&_nc_ht=scontent.fmdz4-1.fna&oh=0c40266a5195d692c191f79047c59afe&oe=619F4B9C',
      subcategoria: 1,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Del Globo 1 - 1 Juventud Del Norte',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 2,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243583208_4848264915184352_6993466848593581892_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=DmfOVXP1lZgAX9OBKmD&_nc_ht=scontent.fmdz4-1.fna&oh=3b090a5bfbcfbd94915871368d88485c&oe=619E7638',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Trinidad 2 - 3 Palermo',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 2,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/245043883_4844585062219004_9218646873302868723_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=AHfdjOSlfJIAX9XNmdZ&_nc_ht=scontent.fmdz4-1.fna&oh=5476a156373a0eaf8cd7de4d7c9a422b&oe=619F98C2',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
  ],
  noticiasMasculino: [
    {
      titulo: 'Independencia 3 - 4 Bermejito',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 1,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/249222607_4869698949707615_6766172858889066332_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=XlXJAi-kytQAX88n_nk&_nc_ht=scontent.fmdz4-1.fna&oh=e236a1c8fdf387192facf79ed9404c0d&oe=619E914C',
      subcategoria: 1,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Del Globo 1 - 1 Juventud Del Norte',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 1,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/242902272_4869698713040972_8067746439715380239_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=QZ5zIk_1U4wAX8vbhRO&_nc_ht=scontent.fmdz4-1.fna&oh=654a984a839d1fe7a16827d075f1a345&oe=61A0E729',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Trinidad 2 - 3 Palermo',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 1,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/249552617_4869698686374308_6052215611643456255_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=A5-0sML84DMAX9YeCIG&_nc_ht=scontent.fmdz4-1.fna&oh=3ba79a07ae58ff5bbf90e2c26480038a&oe=619DC9FA',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
  ],
  noticiasInferiores: [
    {
      titulo: 'Hualilan al pie de la suela!',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 4,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243182649_4775717829105728_8543801551919624565_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=973b4a&_nc_ohc=NuBF4-_4dD8AX_TFEad&_nc_ht=scontent.fmdz4-1.fna&oh=e8b38730d06154192c9b018442138d70&oe=61A10027',
      subcategoria: 1,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Jornada Gloriosa!',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 4,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/243863064_4785127388164772_7552539301010699169_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=yA2MEXa1__UAX_sTiPn&_nc_ht=scontent.fmdz4-1.fna&oh=da971926487f5a9f0876333d78ac2eec&oe=619E2481',
      subcategoria: 1,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
    {
      titulo: 'Club Sportivo 25, apoyando el deporte',
      copete:
        'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
      cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.
      En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
      Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
      Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
      epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
      categoria: 4,
      fuenteImg:
        'https://scontent.fmdz4-1.fna.fbcdn.net/v/t1.6435-9/244464604_4797284556949055_7809805936116769877_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=IY4FLDonKZcAX8HgHjU&_nc_oc=AQktMw9RgKEiagttZr_RqReG62dhV6khPVUTifw1Vw7riQLA4n25CpSWsqiY66zFbWlrBHVy8MQKonOqcGYd2ggE&_nc_ht=scontent.fmdz4-1.fna&oh=168d65d52629a7a43343ea6261183257&oe=619E4737',
      subcategoria: 3,
      fecha: '28/9/2021',
      autor: 'sergio Ledesma',
    },
  ],
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
    case obtenerNoticiasFiltradas: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default storePrueba;
