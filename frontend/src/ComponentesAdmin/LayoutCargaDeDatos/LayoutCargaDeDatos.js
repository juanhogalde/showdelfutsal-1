import React from 'react';
import './LayoutCargaDeDatos.css';
//import Cargando from '../Cargando/Cargando';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';

export const LayoutCargaDeDatos = () => {
  return (
    <div className="CP-LayoutCargaDeDatos">
      <img alt="Marca" src={marca} className="marca"></img>
      <img alt="Iso" src={iso} className="iso"></img>
      {/* <Cargando></Cargando> */}
    </div>
  );
};
