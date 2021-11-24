import React from 'react';
import './ImagenAdmin.css';
import {api} from '../../api';
// import ImagenMiniatura from '../../Static/Img/fondoAdmin.jpg';
// import imagenBack from 'localhost/imagenes/yOuSjEEjLTCEqSV-J4z7fA-r.jpg';
const ImagenAdmin = ({noticiaImagen}) => {
  console.log(noticiaImagen);
  const baseURL = `http://${api}:4000`;
  return (
    <div className="CP-Imagen-admin">
      <div className="CI-Imagen-admin">
        <img
          alt=""
          src={
            noticiaImagen.idImagen.length !== 0 ? baseURL + noticiaImagen.idImagen[0].fuente : ''
          }
          className="Img-Admin"
        ></img>
      </div>
    </div>
  );
};

export default ImagenAdmin;
