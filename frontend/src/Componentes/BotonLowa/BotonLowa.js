import React from 'react';
import './BotonLowa.css';

const BotonLowa = props => {
  const {onClick} = props;
  return (
    <button className="boton-Lowa" onClick={onClick}>
      Continue
    </button>
  );
};
export default BotonLowa;
