import React from 'react';
import {server} from '../../Entorno';
import './ImagenSlider.css';

const ImagenSlider = ({datos = {}, tamañoImagen = {}, descripcion = ''}) => {
  return (
    <>
      <div className="CP-Contendor-ImagenSlider">
        <img
          className="I-Imagen-Slider"
          // width={tamañoImagen.width ? tamañoImagen.width : ''}
          height={tamañoImagen.height ? tamañoImagen.height : '250px'}
          alt="imagen"
          src={server + datos.fuente}
        ></img>
        <div className="I-Descripcion-ImagenSlider">
          <h4>{descripcion}</h4>
        </div>
      </div>
    </>
  );
};

export default ImagenSlider;
