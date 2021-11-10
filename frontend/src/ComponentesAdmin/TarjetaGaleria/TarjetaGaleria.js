import React from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';

const TarjetaGaleria = () => {
  return (
    <div className="CP-TarjetaGaleria">
      <p>TITULO GALERIA</p>
      <div className="CI-Cuerpo-TarjetaGaleria">
        <div className="imagenes-TarjetaGaleria">
          <ImagenAdmin></ImagenAdmin>
          <ImagenAdmin></ImagenAdmin>
          <ImagenAdmin></ImagenAdmin>
          <ImagenAdmin></ImagenAdmin>
          <ImagenAdmin></ImagenAdmin>
        </div>
        <div className="acciones-TarjetaGaleria">
          <HiDotsVertical />
        </div>
      </div>
    </div>
  );
};
export default TarjetaGaleria;