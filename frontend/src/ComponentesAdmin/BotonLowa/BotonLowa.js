import React from 'react';
import './BotonLowa.css';

const BotonLowa = props => {
  const {onClick, tituloboton} = props;
  return (
    <button className="boton-Lowa" onClick={onClick}>
      {tituloboton ? tituloboton : 'Continue'}
    </button>
  );
};
export default BotonLowa;
