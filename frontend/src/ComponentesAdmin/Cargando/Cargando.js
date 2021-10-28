import React from 'react';
import './Cargando.css';
import gifCargando from '../../Static/Cargando.gif';
const Cargando = () => {
  return (
    <div className="CP-Cargando">
      <img alt="Cargando" src={gifCargando}></img>
    </div>
  );
};
export default Cargando;
