import React from 'react';
import './InfoPartido.css';

const InfoPartido = props => {
  const {fecha, sede, siguientePartido} = props;

  return (
    <div className="CP-InfoPartido">
      <div className="CI-InfoPartido">
        <h1>{fecha.hora}</h1>
        <h3>{fecha.dia}</h3>
        <h4 className="margenSede">{sede}</h4>
      </div>
      <div
        style={{marginBottom: '2rem'}}
        className="slider-InfoPartido slider-izquierdo-IP"
        onClick={() => siguientePartido(-1)}
      ></div>
      <div
        style={{marginBottom: '2rem'}}
        className="slider-InfoPartido slider-derecho-IP"
        onClick={() => siguientePartido(1)}
      ></div>
    </div>
  );
};
export default InfoPartido;
