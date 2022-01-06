import React from 'react';
import {urlImagenes} from '../../urlImagenes';
import './ImagenSlider.css';

const ImagenSlider = ({
  datos = {},
  //   tamañoImagen = {width: '200px', height: '200px'},
  descripcion = '',
}) => {
  console.log(datos);
  return (
    <>
      <div className="CP-Contendor-ImagenSlider">
        <img
          className="I-Imagen-Slider"
          //   width={tamañoImagen.width}
          //   height={tamañoImagen.heigth}
          alt="imagen"
          src={urlImagenes + datos.fuente}
        ></img>
        <div className="I-Descripcion-ImagenSlider">
          <h4>{descripcion}</h4>
        </div>
      </div>
    </>
  );
};

export default ImagenSlider;
