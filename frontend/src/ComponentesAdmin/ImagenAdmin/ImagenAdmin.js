import React from 'react';
import './ImagenAdmin.css';
import {urlImagenes} from '../../urlImagenes';
import logoCargando from '../../Static/Cargando.gif';
// import ImagenMiniatura from '../../Static/Img/fondoAdmin.jpg';
// import imagenBack from 'localhost/imagenes/yOuSjEEjLTCEqSV-J4z7fA-r.jpg';
const ImagenAdmin = ({noticiaImagen = {}, mostrarLogoCargando = false}) => {
  return (
    <div className="CP-Imagen-admin">
      <div className="CI-Imagen-admin">
        {mostrarLogoCargando ? (
          <img alt="" src={logoCargando} className="Img-Admin"></img>
        ) : (
          <img
            alt=""
            src={
              JSON.stringify(noticiaImagen) !== '{}'
                ? urlImagenes + noticiaImagen.idImagen[0].fuente
                : ''
            }
            className="Img-Admin"
          ></img>
        )}
      </div>
    </div>
  );
};

export default ImagenAdmin;
