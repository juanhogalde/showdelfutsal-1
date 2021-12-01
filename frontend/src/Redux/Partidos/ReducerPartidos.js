import {} from './AccionPartidos';
import {urlImagenes} from '../../urlImagenes';
const partidosPorDefecto = {
  partidos: [
    {
      equipoLocal: {
        nombreClub: 'Alianza',
        escudo: urlImagenes + '/imagenes/zCom5ZOiRbCuBmvMuXfFFgnB.png',
      },
      equipoVisitante: {
        nombreClub: 'Trinidad',
        escudo: urlImagenes + '/imagenes/yY9zTQq_fhQ565szhmE8yDZc.png',
      },
      resultadoLocal: 6,
      resultadoVisitante: 6,
      penalesLocal: '4',
      penalesVisitante: '2',
      fechaPartido: '2022-02-26T21:26:55.133',
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
        idCategoria: '617fee1ff7e3b603e4078c63',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Villa Hipódromo',
        escudo: urlImagenes + '/imagenes/qY7P0Olc6xtCfHvf9bL8o1nI.png',
      },
      equipoVisitante: {
        nombreClub: 'Aberastain San Lorenzo',
        escudo: urlImagenes + '/imagenes/rb7mFK9aRYpvMrbiRx21CUu4.jpeg',
      },
      resultadoLocal: 6,
      resultadoVisitante: 6,
      penalesLocal: '4',
      penalesVisitante: '2',
      fechaPartido: '2021-12-20T16:00:00',
      idEstadio: {
        nombreEstadio: 'Estadio Bicentenario',
        direccion: 'calle',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: 'copa 2021',
        fechaInicio: '2021-10-26T17:58:06.719+00:00',
        fechaFin: '2021-11-26T17:58:06.719+00:00',
        idCategoria: '617fee4ef7e3b603e4078c65',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Alianza 2',
        escudo: urlImagenes + '/imagenes/BBwI4rWo3OUvFW0hjOJjFOHl.png',
      },
      equipoVisitante: {
        nombreClub: 'Trinidad 2',
        escudo: urlImagenes + '/imagenes/xcDE-dLcIaiCPyCvtcx5_Vt6.png',
      },
      resultadoLocal: 2,
      resultadoVisitante: 2,
      penalesLocal: '0',
      penalesVisitante: '0',
      fechaPartido: '2021-12-10T22:00:00',
      idEstadio: {
        nombreEstadio: 'Estadio Aldo Cantoni 2',
        direccion: 'urquiza 2',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: 'final 2021 - 2',
        fechaInicio: '2021-02-26T17:58:06.719+00:00',
        fechaFin: '2021-11-26T17:58:06.719+00:00',
        idCategoria: '617fee1ff7e3b603e4078c63',
      },
      idTabla: {},
    },
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
