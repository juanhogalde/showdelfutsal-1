import React, {useLayoutEffect, useRef, useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {useSelector} from 'react-redux';
import InfoPartido from '../../Componentes/InfoPartido/InfoPartido';
import CampoDeEdicion from '../CampoDeEdicion/CampoDeEdicion';
import './TarjetaEnfrentamiento.css';
import {urlEscudos} from '../../Entorno';
import escudo_generico from '../../Static/Img/escudo_generico.png';

const TarjetaEnfrentamiento = ({
  datos = {},
  zona = {},
  isSeccionInicio = false,
  /*  enfrentamiento = {}, */
  siguientePartido = () => {
    console.log('Falta funcion');
  },
  funcionEliminarEnfrentamiento = () => {
    console.log('Falta Funcion');
  },
}) => {
  const {equipos} = useSelector(state => state.storeEquipos);
  const [enfrentamiento, setEnfrentamiento] = useState({});
  const [isHabilitarEdicionTarjeta, setIsHabilitarEdicionTarjeta] = useState(
    isSeccionInicio ? isSeccionInicio : false
  );
  const [isCampoDeEdicion, setIsCampoDeEdicion] = useState({
    isLocal: false,
    isVisitante: false,
    isComentarios: false,
    isEstadio: false,
    isFechaPartido: false,
    isPenales: false,
    isPenalesLocal: false,
    isPenalesVisitante: false,
  });
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();
  /* TODO: Revisar si son necesarios */
  // const [resultadoLocal, setResultadoLocal] = useState(0);
  // const [resultadoVisitante, setResultadoVisitante] = useState(0);
  // const [estadio, setEstadio] = useState('Estadio');
  // const [comentarios, setComentarios] = useState('');

  const escucharCambios = (name, value, isMostrarCampoDeEdicion) => {
    setIsCampoDeEdicion(isMostrarCampoDeEdicion);
    // switch (name) {
    //   case 'resultadoLocal':
    //     setResultadoLocal(value);
    //     break;
    //   case 'resultadoVisitante':
    //     setResultadoVisitante(value);
    //     break;
    //   case 'comentarios':
    //     setComentarios(value);
    //     break;
    //   case 'estadio':
    //     setEstadio(value);
    //     break;
    //   case 'fechaPartido':
    //     setEstadio(value);
    //     break;

    //   default:
    //     break;
    // }
  };
  const habilitarCampoParaEdicion = campo => {
    switch (campo) {
      case 'local':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isLocal: true,
        });
        break;
      case 'visitante':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isVisitante: true,
        });
        break;
      case 'comentarios':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isComentarios: true,
        });
        break;
      case 'estadio':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isEstadio: true,
        });
        break;

      case 'fechaPartido':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isFechaPartido: true,
        });
        break;

      case 'penales':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isPenales: true,
        });
        break;
      case 'penalesLocal':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isPenalesLocal: true,
        });
        break;
      case 'penalesVisitante':
        setIsCampoDeEdicion({
          ...isCampoDeEdicion,
          isPenalesVisitante: true,
        });
        break;
      default:
        break;
    }
  };
  const mostrarAccionesTarjetaEnfrentamiento = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const habilitarEdicionTarjetaEnfrentamiento = () => {
    setIsHabilitarEdicionTarjeta(!isHabilitarEdicionTarjeta);
    setIsAcciones(false);
  };
  const formatearFechaUTC = dato => {
    let fecha = new Date(dato);
    let minutos = fecha.getUTCMinutes();
    return `${fecha.getUTCDate()}/${
      fecha.getUTCMonth() < 10 ? `0${fecha.getUTCMonth()}` : fecha.getUTCMonth()
    }/${fecha.getUTCFullYear()} ${fecha.getUTCHours()}:${
      minutos > 9 ? minutos : `0${minutos}`
    } Hs.`;
  };

  useLayoutEffect(() => {
    let auxEnfrentamiento = {};
    if (datos) {
      if (equipos.length > 0) {
        let auxEquipoLocal = equipos.find(equipo => equipo._id === datos.idEquipoLocal);
        let auxEquipoVisitante = equipos.find(equipo => equipo._id === datos.idEquipoVisitante);
        auxEnfrentamiento = {
          equipoLocal: auxEquipoLocal,
          equipoVisitante: auxEquipoVisitante,
        };
      }
      auxEnfrentamiento = {
        ...auxEnfrentamiento,
        comentarios: datos.comentarios,
        estadio: datos.estadio,
        fechaPartido: datos.fechaPartido,
        idTorneo: datos.idTorneo,
      };
      if (Object.keys(datos).length > 0) {
        setEnfrentamiento(auxEnfrentamiento);
      }
    }
    return () => {};
  }, [equipos.length, datos, equipos]);

  return (
    <div
      className={
        isSeccionInicio
          ? 'CP-TarjetaEnfrentamiento CP-TarjetaEnfrentamiento-Inicio'
          : 'CP-TarjetaEnfrentamiento'
      }
    >
      {!isSeccionInicio && (
        <React.Fragment>
          <div
            ref={elementoAcciones}
            className={
              isAcciones
                ? 'acciones-TarjetaEnfrentamiento acciones-TarjetaEnfrentamiento-Apertura'
                : 'acciones-TarjetaEnfrentamiento'
            }
            tabIndex={1}
            onBlur={() => setIsAcciones(false)}
          >
            <FiEdit3
              className="iconoAcción-TarjetaEnfrentamiento"
              onClick={() => habilitarEdicionTarjetaEnfrentamiento()}
            ></FiEdit3>
            <MdDeleteForever
              onClick={() => funcionEliminarEnfrentamiento(datos._id)}
              className="iconoAcción-TarjetaEnfrentamiento"
            />
          </div>
          <div
            className="CI-Cabecera-TarjetaEnfrentamiento"
            onClick={() => mostrarAccionesTarjetaEnfrentamiento()}
          >
            <HiDotsVertical className="iconoAcción-TarjetaEnfrentamiento" />
          </div>
        </React.Fragment>
      )}

      <div
        className={
          isSeccionInicio
            ? 'CI-Cuerpo-TarjetaEnfrentamiento-Inicio'
            : isHabilitarEdicionTarjeta
            ? 'CI-Cuerpo-TarjetaEnfrentamiento habilitarEdicion'
            : 'CI-Cuerpo-TarjetaEnfrentamiento'
        }
      >
        {isSeccionInicio && (
          <div className="componente-InfoPartido">
            <InfoPartido
              isSoloTitulo={true}
              fecha={datos.fechaPorJugar}
              siguientePartido={siguientePartido}
            ></InfoPartido>
          </div>
        )}

        <div className={isSeccionInicio ? 'datos-Partido-Inicio' : 'datos-Partido'}>
          {!isSeccionInicio && (
            <React.Fragment>
              <p className="Zona-TarjetaEnfrentamiento">
                {zona.nombreZona ? zona.nombreZona : 'Zona'}
              </p>

              {isCampoDeEdicion.isEstadio ? (
                <CampoDeEdicion
                  name="estadio"
                  type="text"
                  min="0"
                  max="30"
                  isCampoDeEdicion={true}
                  respuestaDeComponente={escucharCambios}
                />
              ) : (
                <p tabIndex="0" onFocus={() => habilitarCampoParaEdicion('estadio')}>
                  {enfrentamiento.estadio ? enfrentamiento.estadio : 'Estadio'}
                </p>
              )}
            </React.Fragment>
          )}
          {!isSeccionInicio &&
            (isCampoDeEdicion.isFechaPartido ? (
              <CampoDeEdicion
                name="fechaPartido"
                type="text"
                min="0"
                max="30"
                isCampoDeEdicion={true}
                respuestaDeComponente={escucharCambios}
              />
            ) : (
              <p
                name="fechaPartido"
                tabIndex="0"
                onFocus={() => habilitarCampoParaEdicion('fechaPartido')}
              >
                {enfrentamiento.fechaPartido
                  ? formatearFechaUTC(enfrentamiento.fechaPartido)
                  : 'Fecha de Partido'}
              </p>
            ))}
          <div className="CI-Resultados">
            {!isSeccionInicio && isCampoDeEdicion.isLocal ? (
              <CampoDeEdicion
                name="resultadoLocal"
                type="number"
                min="0"
                max="30"
                isCampoDeEdicion={true}
                respuestaDeComponente={escucharCambios}
              />
            ) : (
              <h3 tabIndex="0" onFocus={() => habilitarCampoParaEdicion('local')}>
                {enfrentamiento.resultadoLocal ? enfrentamiento.resultadoLocal : '0'}
              </h3>
            )}
            <h3>-</h3>
            {!isSeccionInicio && isCampoDeEdicion.isVisitante ? (
              <CampoDeEdicion
                name="resultadoVisitante"
                type="number"
                min="0"
                max="30"
                isCampoDeEdicion={true}
                respuestaDeComponente={escucharCambios}
              />
            ) : (
              <h3
                name="visitante"
                tabIndex="0"
                onFocus={() => habilitarCampoParaEdicion('visitante')}
              >
                {enfrentamiento.resultadoVisitante ? enfrentamiento.resultadoVisitante : '0'}
              </h3>
            )}
          </div>
          {!isSeccionInicio && isCampoDeEdicion.isPenales ? (
            <div className="CI-Penales-TarjetaEnfrentamiento">
              {isCampoDeEdicion.isPenalesLocal ? (
                <CampoDeEdicion
                  name="penalesLocal"
                  type="number"
                  min="0"
                  max="30"
                  isCampoDeEdicion={true}
                  respuestaDeComponente={escucharCambios}
                />
              ) : (
                <p tabIndex="0" onFocus={() => habilitarCampoParaEdicion('penalesLocal')}>
                  Penales Local
                </p>
              )}
              -
              {isCampoDeEdicion.isPenalesVisitante ? (
                <CampoDeEdicion
                  name="penalesVisitante"
                  type="number"
                  min="0"
                  max="30"
                  isCampoDeEdicion={true}
                  respuestaDeComponente={escucharCambios}
                />
              ) : (
                <p tabIndex="0" onFocus={() => habilitarCampoParaEdicion('penalesVisitante')}>
                  Penales Visitante
                </p>
              )}
            </div>
          ) : (
            <p
              name="penales"
              tabIndex="0"
              onFocus={() => habilitarCampoParaEdicion('penales')}
              className=""
            >
              {enfrentamiento.penalesLocal ? enfrentamiento.penalesLocal : 'Penales'}
            </p>
          )}

          {!isSeccionInicio && isCampoDeEdicion.isComentarios ? (
            <CampoDeEdicion
              name="comentarios"
              type="text"
              min="0"
              max="30"
              isCampoDeEdicion={true}
              respuestaDeComponente={escucharCambios}
            />
          ) : (
            <p
              name="comentarios"
              tabIndex="0"
              onFocus={() => habilitarCampoParaEdicion('comentarios')}
              className="comentarios"
            >
              {enfrentamiento.comentarios ? enfrentamiento.comentarios : 'Comentarios'}
            </p>
          )}
        </div>
        <div className="equipo-Local">
          {enfrentamiento.equipoLocal ? (
            <img alt="" src={urlEscudos + enfrentamiento.equipoLocal.escudo}></img>
          ) : (
            <img alt="" src={escudo_generico}></img>
          )}
        </div>
        <div className="equipo-Visitante">
          {enfrentamiento.equipoVisitante ? (
            <img alt="" src={urlEscudos + enfrentamiento.equipoVisitante.escudo}></img>
          ) : (
            <img alt="" src={escudo_generico}></img>
          )}
        </div>
        <div className="nombre-Equipo-Local">
          <p>
            {enfrentamiento.equipoLocal && enfrentamiento.equipoLocal.escudos
              ? enfrentamiento.equipoLocal.nombreClub
              : 'El show del futsal'}
          </p>
        </div>
        <div className="nombre-Equipo-Visitante">
          <p className="textoContenido">
            {enfrentamiento.equipoLocal && enfrentamiento.equipoVisitante.nombreClub
              ? enfrentamiento.equipoVisitante.nombreClub
              : 'El show del futsal'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TarjetaEnfrentamiento;
