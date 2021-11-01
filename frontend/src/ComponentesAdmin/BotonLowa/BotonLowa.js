import React from 'react';
import './BotonLowa.css';

const BotonLowa = props => {
  const {onClick, tituloboton} = props;
  return (
    <button className="boton-Lowa" onClick={onClick}>
      {tituloboton} Agregar
    </button>
  );
};
export default BotonLowa;
