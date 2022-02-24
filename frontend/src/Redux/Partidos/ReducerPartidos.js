import {
  agregarPartidoCargando,
  agregarPartidoExito,
  agregarPartidoError,
  agregarPartidoDefault,
} from './AccionPartidos';
import {urlEscudos} from '../../Entorno';

const partidosPorDefecto = {
  partidos: [
    {
      equipoLocal: {
        nombreClub: 'Huarpes',
        escudo: urlEscudos + 'huarpes.png',
      },
      equipoVisitante: {
        nombreClub: 'Hualilán',
        escudo: urlEscudos + 'hualilan.png',
      },
      resultadoLocal: 2,
      resultadoVisitante: 0,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'S.E.C',
        escudo: urlEscudos + 'sindicatoempleadosdecomercio.png',
      },
      equipoVisitante: {
        nombreClub: 'Krause',
        escudo: urlEscudos + 'krause.png',
      },
      resultadoLocal: 3,
      resultadoVisitante: 1,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Coop. Caucete',
        escudo: urlEscudos + 'cooperativacaucete.png',
      },
      equipoVisitante: {
        nombreClub: 'La Gloria',
        escudo: urlEscudos + 'lagloria.png',
      },
      resultadoLocal: 1,
      resultadoVisitante: 4,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 1',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'Krause',
        escudo: urlEscudos + 'krause.png',
      },
      equipoVisitante: {
        nombreClub: 'Huarpes',
        escudo: urlEscudos + 'huarpes.png',
      },
      resultadoLocal: 6,
      resultadoVisitante: 3,
      penalesLocal: '',
      penalesVisitante: '',
      fechaPartido: '',
      fecha: 'Fecha N° 2',
      idEstadio: {
        nombreEstadio: '',
        direccion: '',
      },
      posicionFixture: '',
      comentarios: [],
      campeonato: {
        tituloCampeonato: '',
        fechaInicio: '',
        fechaFin: '',
        keyCategoria: '',
      },
      idTabla: {},
    },
  ],
  //partidos: [],
  isAgregarPartido: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
  },
  isPartido: {isMostrar: false, tipo: '', mensaje: '', isExito: false, isError: false},
};
const storePartidos = (state = partidosPorDefecto, accion) => {
  switch (accion.type) {
    case agregarPartidoCargando: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Agregando Partido...',
        },
      };
    }
    case agregarPartidoExito: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'success',
          isMostrar: true,
          mensaje: 'Partido Agregado...',
        },
        partidos: [...state.partidos, accion.datos],
      };
    }
    case agregarPartidoError: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, en este momento no podemos agregar éste partido...',
        },
      };
    }
    case agregarPartidoDefault: {
      return {
        ...state,
        isAgregarPartido: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
      };
    }
    default:
      return state;
  }
};
export default storePartidos;
