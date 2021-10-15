import React from 'react';
import './InfoPartido.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';

const InfoPartido = props => {
  const {fecha, sede, siguientePartido} = props;

  return (
    <div className="CP-InfoPartido">
      <div className="CI-InfoPartido">
        <h3>{fecha.hora}</h3>
        <h4 className="fecha-dia">{fecha.dia}</h4>
        <p className="margenSede">{sede}</p>
      </div>
      <div
        style={{marginBottom: '2rem'}}
        className="slider-InfoPartido slider-izquierdo-IP"
        onClick={() => siguientePartido(-1)}
      >
        <AiFillCaretLeft />
      </div>
      <div
        style={{marginBottom: '2rem'}}
        className="slider-InfoPartido slider-derecho-IP"
        onClick={() => siguientePartido(1)}
      >
        <AiFillCaretRight className="sinRotar" />
      </div>
    </div>
  );
};
export default InfoPartido;
