import React from 'react';
import './InfoPartido.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';
import FormatearFecha from '../../ModulosExternos/FormatearFecha';

const InfoPartido = props => {
  const {
    fecha,
    sede,
    siguientePartido = () => {
      console.log('');
    },
    isSoloTitulo,
    isTablaDePosiciones,
  } = props;
  return (
    <div className="CP-InfoPartido">
      <div className="CI-InfoPartido">
        {isSoloTitulo ? (
          <React.Fragment>{isTablaDePosiciones ? <h3>Zona A</h3> : <p>{fecha}</p>}</React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{fecha ? FormatearFecha(fecha, 'hora').substr(0, 5) : '-'}</h3>
            <h4 className="fecha-dia">{fecha ? FormatearFecha(fecha, 'fechaCorta') : '-'}</h4>
            <h5 className="margenSede">{sede ? sede : '-'}</h5>
          </React.Fragment>
        )}
      </div>
      <div
        className={`${
          isSoloTitulo
            ? 'slider-InfoPartido slider-izquierdo-IP marginParaFixture'
            : 'slider-InfoPartido slider-izquierdo-IP'
        }`}
        onClick={() => siguientePartido(-1)}
      >
        <AiFillCaretLeft />
      </div>
      <div
        className={`${
          isSoloTitulo
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
