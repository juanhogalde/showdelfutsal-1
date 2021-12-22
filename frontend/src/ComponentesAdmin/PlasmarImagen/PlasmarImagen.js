import React from 'react';
import './PlasmarImagen.css';
import {urlImagenes} from '../../urlImagenes';

const PlasmarImagen = ({datosImagen = {}, isVideo = false}) => {
  return (
    <div className="CP-PlasmarImagen">
      {isVideo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${datosImagen.fuente}`}
          width="300"
          title={datosImagen.descripcion}
          height="300"
        ></iframe>
      ) : (
        <img alt="" src={urlImagenes + datosImagen.fuente}></img>
      )}
    </div>
  );
};
export default PlasmarImagen;
