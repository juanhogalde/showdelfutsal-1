import React from 'react';
import './TarjetaNoticias.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';

export const TarjetaNoticias = () => {
  return (
    <div className="CP-Tarjeta-Noticias-Admin">
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo"></div>
        <div className="I-Tarjeta-Noticias-Opciones"></div>
      </div>
    </div>
  );
};

export default TarjetaNoticias;
