import React from 'react';
import './BotonLowa.css';

const BotonLowa = props => {
  const {onClick, tituloboton, disabled} = props;
  return (
    <button className="boton-Lowa" onClick={onClick} disabled={disabled}>
      {tituloboton ? tituloboton : 'Continue'}
    </button>
  );
};
export default BotonLowa;
