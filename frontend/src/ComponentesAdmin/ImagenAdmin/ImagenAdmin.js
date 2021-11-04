import React from 'react';
import './ImagenAdmin.css';
import ImagenMiniatura from '../../Static/Img/fondoAdmin.jpg';

const ImagenAdmin = () => {
  return (
    <div className="CP-Imagen-admin">
      <div className="CI-Imagen-admin">
        <img alt="" src={ImagenMiniatura} className="Img-Admin"></img>
      </div>
    </div>
  );
};

export default ImagenAdmin;
