import React, {useRef, useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import CampoDeEdicion from '../CampoDeEdicion/CampoDeEdicion';
import './TarjetaEnfrentamiento.css';

const TarjetaEnfrentamiento = () => {
  const [isHabilitarEdicionTarjeta, setIsHabilitarEdicionTarjeta] = useState(false);
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
    /* if (name === 'resultadoLocal') {
      setResultadoLocal(value);
    } else {
      setResultadoVisitante(value);
    } */
    switch (name) {
      case 'local':
        setResultadoLocal(value);
        break;
      case 'visitante':
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
    /* if (campo === 'local') {
      setIsCampoDeEdicion({isLocal: true, isVisitante: false});
    } else {
      setIsCampoDeEdicion({isLocal: false, isVisitante: true});
    } */
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
    <div className="CP-TarjetaEnfrentamiento">
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
      <div
        className={
          isHabilitarEdicionTarjeta
            ? 'CI-Cuerpo-TarjetaEnfrentamiento habilitarEdicion'
            : 'CI-Cuerpo-TarjetaEnfrentamiento'
        }
      >
        <div className="datos-Partido">
          <p className="Zona-TarjetaEnfrentamiento">Zona A</p>
          <p className="estadio-TarjetaEnfrentamiento">
            Estadio del Bicentenario - Pocito - San Juan - Argentina
          </p>
          <div className="CI-Resultados">
            {isCampoDeEdicion.isLocal ? (
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
                {resultadoLocal ? resultadoLocal : 0}
              </h3>
            )}

            {isCampoDeEdicion.isVisitante ? (
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
                {resultadoVisitante ? resultadoVisitante : 0}
              </h3>
            )}
          </div>

          <p>27/11/2021</p>
          <p>Penales</p>
          {isCampoDeEdicion.isComentarios ? (
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
