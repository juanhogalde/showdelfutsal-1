import React, {useLayoutEffect, useRef, useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import InfoPartido from '../../Componentes/InfoPartido/InfoPartido';
import CampoDeEdicion from '../CampoDeEdicion/CampoDeEdicion';
import Cargando from '../Cargando/Cargando';
import './TarjetaEnfrentamiento.css';

const TarjetaEnfrentamiento = ({
  isSeccionInicio = false,
  enfrentamiento = {},
  siguientePartido = () => {
    console.log('');
  },
}) => {
  const [isHabilitarEdicionTarjeta, setIsHabilitarEdicionTarjeta] = useState(
    isSeccionInicio ? isSeccionInicio : false
  );
  const [isCampoDeEdicion, setIsCampoDeEdicion] = useState({
    isLocal: false,
    isVisitante: false,
    isComentarios: false,
    isEstadio: false,
    isFechaPartido: false,
  });
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();

  const [resultadoLocal, setResultadoLocal] = useState(0);
  const [resultadoVisitante, setResultadoVisitante] = useState(0);
  const [estadio, setEstadio] = useState('Estadio');
  const [comentarios, setComentarios] = useState('');

  const escucharCambios = (name, value, isMostrarCampoDeEdicion) => {
    console.log(name);
    console.log(value);
    setIsCampoDeEdicion(isMostrarCampoDeEdicion);
    switch (name) {
      case 'resultadoLocal':
        setResultadoLocal(value);
        break;
      case 'resultadoVisitante':
        setResultadoVisitante(value);
        break;
      case 'comentarios':
        setComentarios(value);
        break;
      case 'estadio':
        setEstadio(value);
        break;
      case 'fechaPartido':
        setEstadio(value);
        break;
      default:
        break;
    }
  };
  const habilitarCampoParaEdicion = campo => {
    switch (campo) {
      case 'local':
        setIsCampoDeEdicion({
          isLocal: true,
          isVisitante: false,
          isComentarios: false,
          isEstadio: false,
        });
        break;
      case 'visitante':
        setIsCampoDeEdicion({
          isLocal: false,
          isVisitante: true,
          isComentarios: false,
          isEstadio: false,
        });
        break;
      case 'comentarios':
        setIsCampoDeEdicion({
          isLocal: false,
          isVisitante: false,
          isComentarios: true,
          isEstadio: false,
        });
        break;
      case 'estadio':
        setIsCampoDeEdicion({
          isLocal: false,
          isVisitante: false,
          isComentarios: false,
          isEstadio: true,
        });
        break;

      case 'fechaPartido':
        setIsCampoDeEdicion({
          isLocal: false,
          isVisitante: false,
          isComentarios: false,
          isEstadio: false,
          isFechaPartido: true,
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
  useLayoutEffect(() => {
    if (Object.keys(enfrentamiento).length > 0) {
      setResultadoLocal(enfrentamiento.resultadoLocal);
      setResultadoVisitante(enfrentamiento.resultadoVisitante);
    }

    return () => {};
  }, [enfrentamiento, enfrentamiento.resultadoLocal, enfrentamiento.resultadoVisitante]);
  console.log(isSeccionInicio);
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
              /* onClick={() => consultaPorEliminarGaleria()} */
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
              fecha={enfrentamiento.fecha}
              siguientePartido={siguientePartido}
            ></InfoPartido>
          </div>
        )}

        <div className={isSeccionInicio ? 'datos-Partido-Inicio' : 'datos-Partido'}>
          {!isSeccionInicio && (
            <React.Fragment>
              <p className="Zona-TarjetaEnfrentamiento">Zona A</p>

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
                  {estadio ? estadio : 'Estadio'}
                </p>
              )}
            </React.Fragment>
          )}

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
                {resultadoLocal ? resultadoLocal : '0'}
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
                {resultadoVisitante ? resultadoVisitante : '0'}
              </h3>
            )}
          </div>
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
                name="visitante"
                tabIndex="0"
                onFocus={() => habilitarCampoParaEdicion('fechaPartido')}
              >
                {resultadoVisitante ? resultadoVisitante : 'Fecha de Partido'}
              </p>
            ))}

          {Object.keys(enfrentamiento).length > 0 && enfrentamiento.penalesLocal.length !== 0 ? (
            <p>Penales</p>
          ) : (
            ''
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
              {comentarios ? comentarios : 'Comentarios'}
            </p>
          )}
        </div>
        <div className="equipo-Local">
          {Object.keys(enfrentamiento).length > 0 && enfrentamiento.equipoLocal.escudo ? (
            <img alt="" src={enfrentamiento.equipoLocal.escudo}></img>
          ) : (
            <Cargando></Cargando>
          )}
        </div>
        <div className="equipo-Visitante">
          {Object.keys(enfrentamiento).length > 0 && enfrentamiento.equipoVisitante.escudo ? (
            <img alt="" src={enfrentamiento.equipoVisitante.escudo}></img>
          ) : (
            <Cargando></Cargando>
          )}
        </div>
        <div className="nombre-Equipo-Local">
          <p>
            {Object.keys(enfrentamiento).length > 0 ? enfrentamiento.equipoLocal.nombreClub : '-'}
          </p>
        </div>
        <div className="nombre-Equipo-Visitante">
          <p className="textoContenido">
            {' '}
            {Object.keys(enfrentamiento).length > 0
              ? enfrentamiento.equipoVisitante.nombreClub
              : '-'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TarjetaEnfrentamiento;
