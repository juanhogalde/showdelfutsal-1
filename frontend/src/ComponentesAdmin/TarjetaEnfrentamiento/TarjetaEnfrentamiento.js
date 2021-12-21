import React, {useRef, useState} from 'react';
import {HiDotsVertical} from 'react-icons/hi';
import CampoDeEdicion from '../CampoDeEdicion/CampoDeEdicion';
import './TarjetaEnfrentamiento.css';

const TarjetaEnfrentamiento = () => {
  const [isHabilitarEdicionTarjeta, setIsHabilitarEdicionTarjeta] = useState(false);
  const [isCampoDeEdicion, setIsCampoDeEdicion] = useState({isLocal: false, isVisitante: false});
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();

  const [resultadoLocal, setResultadoLocal] = useState('');

  const escucharCambios = (name, value, isMostrarCampoDeEdicion) => {
    console.log(name);
    console.log(value);
    setIsCampoDeEdicion(isMostrarCampoDeEdicion);
    setResultadoLocal(value);
  };
  const habilitarCampoParaEdicion = campo => {
    console.log(campo);
    if (campo === 'local') {
      setIsCampoDeEdicion({isLocal: true, isVisitante: false});
    } else {
      setIsCampoDeEdicion({isLocal: false, isVisitante: true});
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
      >
        <p onClick={() => habilitarEdicionTarjetaEnfrentamiento()}>editar</p>
      </div>
      <div
        className="CI-Cabecera-TarjetaEnfrentamiento"
        onClick={() => mostrarAccionesTarjetaEnfrentamiento()}
      >
        <HiDotsVertical />
      </div>
      <div
        className={
          isHabilitarEdicionTarjeta
            ? 'CI-Cuerpo-TarjetaEnfrentamiento habilitarEdicion'
            : 'CI-Cuerpo-TarjetaEnfrentamiento'
        }
      >
        <div className="datos-Partido">
          <p>Zona A</p>
          <p>Bicentenario</p>
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
                onFocus={e => habilitarCampoParaEdicion('visitante')}
              >
                {resultadoLocal ? resultadoLocal : 0}
              </h3>
            )}
          </div>

          <p>27/11/2021</p>
          <p>Penales</p>
          <p>Comentarios</p>
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
          <p> Club Social y Deportivo Aberastain San Lorenzo</p>
        </div>
      </div>
    </div>
  );
};
export default TarjetaEnfrentamiento;
