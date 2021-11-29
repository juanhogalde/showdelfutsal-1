import React from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';

const TarjetaGaleria = ({datosTarjetaGaleria = {}, tituloGaleria = 'Titulo'}) => {
  console.log(datosTarjetaGaleria);
  return (
    <div className="CP-TarjetaGaleria">
      <p>{tituloGaleria}</p>
      <div className="CI-Cuerpo-TarjetaGaleria">
        <div className="imagenes-TarjetaGaleria">
          {datosTarjetaGaleria.map((imagen, index) => {
            return (
              <ImagenAdmin key={index} noticiaImagen={imagen} isTarjetaGaleria={true}></ImagenAdmin>
            );
          })}
        </div>
        <div className="acciones-TarjetaGaleria">
          <HiDotsVertical />
        </div>
      </div>
    </div>
  );
};
export default TarjetaGaleria;
