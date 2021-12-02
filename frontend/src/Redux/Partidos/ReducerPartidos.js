import {} from './AccionPartidos';
import {urlStaticImages} from '../../urlImagenes';
const partidosPorDefecto = {
  partidos: [
    {
      equipoLocal: {
        nombreClub: 'Alianza',
        escudo: urlStaticImages + 'escudo_alianza.fe7f5b67.png',
      },
      equipoVisitante: {
        nombreClub: 'Trinidad',
        escudo: urlStaticImages + 'escudo_huarpes.3dc53784.png',
      },
      resultadoLocal: 6,
      resultadoVisitante: 6,
      penalesLocal: '4',
      penalesVisitante: '2',
      fechaPartido: '2022-02-26T21:26:55.133',
      fecha: 'Primera Fecha',
      idEstadio: {
        nombreEstadio: 'Estadio Aldo Cantoni',
        direccion: 'urquiza',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: 'final 2021',
        fechaInicio: '2021-02-26T17:58:06.719+00:00',
        fechaFin: '2021-11-26T17:58:06.719+00:00',
        keyCategoria: 2,
      },
      idTabla: {},
    },
    // {
    //   equipoLocal: {
    //     nombreClub: 'Villa Hipódromo',
    //     escudo: urlStaticImages + 'escudo_cvhd.png',
    //   },
    //   equipoVisitante: {
    //     nombreClub: 'Aberastain San Lorenzo',
    //     escudo: urlStaticImages + 'escudo_aberastain.jpeg',
    //   },
    //   resultadoLocal: 6,
    //   resultadoVisitante: 6,
    //   penalesLocal: '4',
    //   penalesVisitante: '2',
    //   fechaPartido: '2021-12-20T16:00:00',
    //   fecha: 'Primera Fecha',
    //   idEstadio: {
    //     nombreEstadio: 'Estadio Bicentenario',
    //     direccion: 'calle',
    //   },
    //   posicionFixture: '',
    //   comentarios: [],
    //   campeonato: {
    //     tituloCampeonato: 'copa 2021',
    //     fechaInicio: '2021-10-26T17:58:06.719+00:00',
    //     fechaFin: '2021-11-26T17:58:06.719+00:00',
    //     keyCategoria: 1,
    //   },
    //   idTabla: {},
    // },
    // {
    //   equipoLocal: {
    //     nombreClub: 'Alianza 2',
    //     escudo: urlStaticImages + 'BBwI4rWo3OUvFW0hjOJjFOHl.png',
    //   },
    //   equipoVisitante: {
    //     nombreClub: 'Trinidad 2',
    //     escudo: urlStaticImages + 'xcDE-dLcIaiCPyCvtcx5_Vt6.png',
    //   },
    //   resultadoLocal: 2,
    //   resultadoVisitante: 2,
    //   penalesLocal: '0',
    //   penalesVisitante: '0',
    //   fechaPartido: '2021-12-10T22:00:00',
    //   fecha: 'Primera Fecha',
    //   idEstadio: {
    //     nombreEstadio: 'Estadio Aldo Cantoni 2',
    //     direccion: 'urquiza 2',
    //   },
    //   posicionFixture: '',
    //   comentarios: [],
    //   campeonato: {
    //     tituloCampeonato: 'final 2021 - 2',
    //     fechaInicio: '2021-02-26T17:58:06.719+00:00',
    //     fechaFin: '2021-11-26T17:58:06.719+00:00',
    //     keyCategoria: 2,
    //   },
    //   idTabla: {},
    // },
  ],
  isPartido: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
};
const storePartidos = (state = partidosPorDefecto, accion) => {
  switch (accion.type) {
    default:
      return state;
  }
};
export default storePartidos;
