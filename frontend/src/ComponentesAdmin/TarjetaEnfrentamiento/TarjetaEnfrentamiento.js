import React, {useRef, useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import InfoPartido from '../../Componentes/InfoPartido/InfoPartido';
import CampoDeEdicion from '../CampoDeEdicion/CampoDeEdicion';
import './TarjetaEnfrentamiento.css';

const TarjetaEnfrentamiento = ({isSeccionInicio = false}) => {
  /* console.log(isSeccionInicio); */
  const [isHabilitarEdicionTarjeta, setIsHabilitarEdicionTarjeta] = useState(
    isSeccionInicio ? isSeccionInicio : false
  );
  const [isCampoDeEdicion, setIsCampoDeEdicion] = useState({
    isLocal: false,
    isVisitante: false,
    isComentarios: false,
  });
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();

  const [resultadoLocal, setResultadoLocal] = useState('');
  const [resultadoVisitante, setResultadoVisitante] = useState('');
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
      default:
        break;
    }
  };
  const habilitarCampoParaEdicion = campo => {
    console.log(campo);
    switch (campo) {
      case 'local':
        setIsCampoDeEdicion({isLocal: true, isVisitante: false, isComentarios: false});
        break;
      case 'visitante':
        setIsCampoDeEdicion({isLocal: false, isVisitante: true, isComentarios: false});
        break;
      case 'comentarios':
        setIsCampoDeEdicion({isLocal: false, isVisitante: false, isComentarios: true});
        break;
      default:
        break;
    }
  };
  const mostrarAccionesTarjetaEnfrentamiento = () => {
    console.log('ejecutó');
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const habilitarEdicionTarjetaEnfrentamiento = () => {
    setIsHabilitarEdicionTarjeta(!isHabilitarEdicionTarjeta);
    setIsAcciones(false);
  };
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
            <InfoPartido></InfoPartido>
          </div>
        )}

        <div className={isSeccionInicio ? 'datos-Partido-Inicio' : 'datos-Partido'}>
          {!isSeccionInicio && (
            <React.Fragment>
              <p className="Zona-TarjetaEnfrentamiento">Zona A</p>
              <p className="estadio-TarjetaEnfrentamiento">
                Estadio del Bicentenario - Pocito - San Juan - Argentina
              </p>
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
                {resultadoLocal ? resultadoLocal : '-'}
              </h3>
            )}

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
                {resultadoVisitante ? resultadoVisitante : '-'}
              </h3>
            )}
          </div>

          {!isSeccionInicio && <p>27/11/2021</p>}
          <p>Penales</p>
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
          <img alt="" src="http://futsal.lowa.com.ar/escudos/escudo_defensores_del_este.png"></img>
        </div>
        <div className="equipo-Visitante">
          <img alt="" src="http://futsal.lowa.com.ar/escudos/escudo_aberastain.jpeg"></img>
        </div>
        <div className="nombre-Equipo-Local">
          <p>Defensores del Este</p>
        </div>
        <div className="nombre-Equipo-Visitante">
          <p className="textoContenido"> Club Social y Deportivo Aberastain San Lorenzo</p>
        </div>
      </div>
    </div>
  );
};
export default TarjetaEnfrentamiento;
