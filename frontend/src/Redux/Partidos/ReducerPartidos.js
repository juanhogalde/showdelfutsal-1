import {
  agregarPartidoCargando,
  agregarPartidoExito,
  agregarPartidoError,
  agregarPartidoDefault,
  eliminarPartidoConsultar,
  eliminarPartidoCargando,
  eliminarPartidoExito,
  eliminarPartidoError,
  eliminarPartidoDefault,
  actulizarListaDeEnfrentamientos,
  obtenerPartidosDeZonaCargando,
  obtenerPartidosDeZonaExito,
  obtenerPartidosDeZonaError,
  obtenerPartidosDeZonaDefault,
} from './AccionPartidos';
//Para Desarrollo - al subir
// import {urlStaticImages} from '../../urlImagenes';
// const escudoHuarpes = urlStaticImages + 'Huarpes.png';
// const escudoHualilan = urlStaticImages + 'Hualilán.png';
// const escudoSEC = urlStaticImages + 'SEC.png';
// const escudoKrause = urlStaticImages + 'Krause.png';
// const escudoCoopCaucete = urlStaticImages + 'CoopCaucete.png';
// const escudoLaGloria = urlStaticImages + 'LaGloria.png';
// Para Local
// import escudoHuarpes from '../../Static/Escudos/Huarpes.png';
// import escudoHualilan from '../../Static/Escudos/Hualilán.png';
// import escudoSEC from '../../Static/Escudos/SEC.png';
// import escudoKrause from '../../Static/Escudos/Krause.png';
// import escudoCoopCaucete from '../../Static/Escudos/CoopCaucete.png';
// import escudoLaGloria from '../../Static/Escudos/LaGloria.png';

const partidosPorDefecto = {
  /* partidos: [
      {
        equipoLocal: {
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
        },
        equipoVisitante: {
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
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
          escudo: escudoSEC,
        },
        equipoVisitante: {
          nombreClub: 'Krause',
          escudo: escudoKrause,
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
          escudo: escudoCoopCaucete,
        },
        equipoVisitante: {
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
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
          escudo: escudoKrause,
        },
        equipoVisitante: {
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
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
      {
        equipoLocal: {
          nombreClub: 'Coop. Caucete',
          escudo: escudoCoopCaucete,
        },
        equipoVisitante: {
          nombreClub: 'S.E.C',
          escudo: escudoSEC,
        },
        resultadoLocal: 4,
        resultadoVisitante: 4,
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
      {
        equipoLocal: {
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
        },
        equipoVisitante: {
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
        },
        resultadoLocal: 4,
        resultadoVisitante: 4,
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
      {
        equipoLocal: {
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
        },
        equipoVisitante: {
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
        },
        resultadoLocal: 4,
        resultadoVisitante: 3,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 3',
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
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
        },
        equipoVisitante: {
          nombreClub: 'S.E.C',
          escudo: escudoSEC,
        },
        resultadoLocal: 3,
        resultadoVisitante: 6,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 3',
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
          escudo: escudoCoopCaucete,
        },
        equipoVisitante: {
          nombreClub: 'Krause',
          escudo: escudoKrause,
        },
        resultadoLocal: 2,
        resultadoVisitante: 3,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 3',
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
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
        },
        equipoVisitante: {
          nombreClub: 'Krause',
          escudo: escudoKrause,
        },
        resultadoLocal: 3,
        resultadoVisitante: 5,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 4',
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
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
        },
        equipoVisitante: {
          nombreClub: 'S.E.C',
          escudo: escudoSEC,
        },
        resultadoLocal: 5,
        resultadoVisitante: 4,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 4',
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
          escudo: escudoCoopCaucete,
        },
        equipoVisitante: {
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
        },
        resultadoLocal: 2,
        resultadoVisitante: 1,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 4',
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
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
        },
        equipoVisitante: {
          nombreClub: 'Coop. Caucete',
          escudo: escudoCoopCaucete,
        },
        resultadoLocal: 5,
        resultadoVisitante: 7,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 5',
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
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
        },
        equipoVisitante: {
          nombreClub: 'S.E.C',
          escudo: escudoSEC,
        },
        resultadoLocal: 2,
        resultadoVisitante: 0,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 5',
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
          nombreClub: 'Hualilán',
          escudo: escudoHualilan,
        },
        equipoVisitante: {
          nombreClub: 'Coop. Caucete',
          escudo: escudoCoopCaucete,
        },
        resultadoLocal: 5,
        resultadoVisitante: 7,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 5',
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
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
        },
        equipoVisitante: {
          nombreClub: 'Krause',
          escudo: escudoKrause,
        },
        resultadoLocal: 2,
        resultadoVisitante: 1,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Fecha N° 5',
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
          escudo: escudoKrause,
        },
        equipoVisitante: {
          nombreClub: 'Huarpes',
          escudo: escudoHuarpes,
        },
        resultadoLocal: 1,
        resultadoVisitante: 8,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Semifinales',
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
          nombreClub: 'La Gloria',
          escudo: escudoLaGloria,
        },
        equipoVisitante: {
          nombreClub: 'S.E.C',
          escudo: escudoSEC,
        },
        resultadoLocal: 3,
        resultadoVisitante: 1,
        penalesLocal: '',
        penalesVisitante: '',
        fechaPartido: '',
        fecha: 'Semifinales',
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
        nombreClub: 'Villa Hipódromo',
        escudo: urlStaticImages + 'escudo_cvhd.png',
      },
      equipoVisitante: {
        nombreClub: 'Aberastain San Lorenzo',
        escudo: urlStaticImages + 'escudo_aberastain.jpeg',
      },
      resultadoLocal: 6,
      resultadoVisitante: 6,
      penalesLocal: '4',
      penalesVisitante: '2',
      fechaPartido: '2021-12-20T16:00:00',
      fecha: 'Primera Fecha',
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
        keyCategoria: 1,
      },
      idTabla: {},
    },
    {
      equipoLocal: {
        nombreClub: 'defensores este',
        escudo: urlStaticImages + 'escudo_defensores_del_este.png',
      },
      equipoVisitante: {
        nombreClub: 'Luz y fuerza',
        escudo: urlStaticImages + 'escudo_lusfuerza.png',
      },
      resultadoLocal: 2,
      resultadoVisitante: 2,
      penalesLocal: '0',
      penalesVisitante: '0',
      fechaPartido: '2021-12-10T22:00:00',
      fecha: 'Primera Fecha',
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
        keyCategoria: 2,
      },
      idTabla: {},
    },
  ], */
  partidos: [],
  partido: {},
  isAgregarPartido: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
  },
  isEliminarPartido: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    id: '',
  },
  isObtenerPartidos: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    id: '',
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
    case eliminarPartidoConsultar: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'warning',
          isMostrar: true,
          mensaje: '¿Desea eliminar este enfrentamiento?',
          id: accion.partidoId,
        },
      };
    }
    case eliminarPartidoCargando: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Eliminando enfrentamiento...',
          id: state.isEliminarPartido.partidoId,
        },
      };
    }
    case eliminarPartidoExito: {
      let auxPartidos = state.partidos.filter(partido => partido._id !== accion.id);
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'success',
          isMostrar: true,
          mensaje: 'Enfrentamiento eliminado',
          id: '',
        },
        partidos: auxPartidos,
      };
    }
    case eliminarPartidoError: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, en este momento no podemos eliminar este enfrentamiento...',
          id: '',
        },
      };
    }
    case eliminarPartidoDefault: {
      return {
        ...state,
        isEliminarPartido: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          id: '',
        },
      };
    }
    case actulizarListaDeEnfrentamientos: {
      return {
        ...state,
      };
    }
    case obtenerPartidosDeZonaCargando: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: 'cargando',
          isMostrar: true,
          mensaje: 'Obteniendo partidos de zona...',
        },
      };
    }
    case obtenerPartidosDeZonaExito: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
        },
        partidos: accion.datos,
      };
    }
    case obtenerPartidosDeZonaError: {
      return {
        ...state,
        isObtenerPartidos: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Lo sentimos, no pudimos obtener partidos de zona.',
        },
      };
    }
    case obtenerPartidosDeZonaDefault: {
      return {
        ...state,
        isObtenerPartidos: {
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
