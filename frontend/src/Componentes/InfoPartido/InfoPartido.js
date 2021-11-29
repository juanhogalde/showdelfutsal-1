import React from 'react';
import './InfoPartido.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';

const InfoPartido = props => {
  const {fecha, sede, siguientePartido, isSoloTitulo, isTablaDePosiciones} = props;
  return (
    <div className="CP-InfoPartido">
      <div className="CI-InfoPartido">
        {isSoloTitulo ? (
          <React.Fragment>
            {isTablaDePosiciones ? <h3>Zona A</h3> : <h3>Fecha 1</h3>}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{fecha ? new Date(fecha).getHours() : '-'}</h3>
            <h4 className="fecha-dia">
              {fecha
                ? `${new Date(fecha).getFullYear()} 
                  -
                ${new Date(fecha).getMonth()} 
                -
               ${new Date(fecha).getDay()}`
                : '-'}
            </h4>
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
