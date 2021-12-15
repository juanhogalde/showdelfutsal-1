import React from 'react';
import './PlasmarImagen.css';
import {urlImagenes} from '../../urlImagenes';

const PlasmarImagen = ({datosImagen = {}}) => {
  return (
    <div className="CP-PlasmarImagen">
      <img alt="" src={urlImagenes + datosImagen.fuente}></img>
    </div>
  );
};
export default PlasmarImagen;
