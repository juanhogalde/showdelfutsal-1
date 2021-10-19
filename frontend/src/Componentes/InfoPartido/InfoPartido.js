import React from 'react';
import './InfoPartido.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';

const InfoPartido = props => {
  const {fecha, sede, siguientePartido, isParaFixture} = props;

  return (
    <div className="CP-InfoPartido">
      <div className="CI-InfoPartido">
        {isParaFixture ? (
          <React.Fragment>
            <h3>Fecha 1</h3>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{fecha ? fecha.hora : '-'}</h3>
            <h4 className="fecha-dia">{fecha ? fecha.dia : '-'}</h4>
            <p className="margenSede">{sede ? sede : '-'}</p>
          </React.Fragment>
        )}
      </div>
      <div
        className={`${
          isParaFixture
            ? 'slider-InfoPartido slider-izquierdo-IP marginParaFixture'
            : 'slider-InfoPartido slider-izquierdo-IP'
        }`}
        onClick={() => siguientePartido(-1)}
      >
        <AiFillCaretLeft />
      </div>
      <div
        className={`${
          isParaFixture
            ? 'slider-InfoPartido slider-derecho-IP marginParaFixture'
            : 'slider-InfoPartido slider-derecho-IP'
        }`}
        onClick={() => siguientePartido(1)}
      >
        <AiFillCaretRight className="sinRotar" />
      </div>
    </div>
  );
};
export default InfoPartido;
