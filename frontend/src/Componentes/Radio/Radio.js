import React from 'react';
import './Radio.css';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {BsFillStopCircleFill} from 'react-icons/bs';

const Radio = ({isSeccionSomos = false}) => {
  return (
    <div className="CP-Componente-Radio">
      <div className="CI-Radio">
        <div
          className={`${isSeccionSomos ? 'I-Radio-Titulo I-Radio-Titulo-Somos' : 'I-Radio-Titulo'}`}
        >
          <h3>Radio</h3>
          <BsFillPlayCircleFill size={50} className="I-Iconos-radio-play" />
          <BsFillStopCircleFill size={50} className="I-Iconos-radio-pausa" />
        </div>
        <div className="I-Radio-SubTitulo">
          <h4>Lunes a Viernes - 15:30 hs</h4>
        </div>
      </div>
    </div>
  );
};

export default Radio;
