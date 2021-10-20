import React from 'react';
import './Radio.css';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {BsFillStopCircleFill} from 'react-icons/bs';

const Radio = () => {
  return (
    <div className="CP-Componente-Radio">
      <div className="CI-Radio">
        <div className="I-Radio-Titulo">
          <h3>Radio</h3>
          <BsFillPlayCircleFill size={50} className="I-Iconos-radio-play" />
          <BsFillStopCircleFill size={50} className="I-Iconos-radio-pausa" />
        </div>
        <div className="I-Radio-SubTitulo">
          <h3>Lunes a Viernes - 15:30 hs</h3>
        </div>
      </div>
    </div>
  );
};

export default Radio;
