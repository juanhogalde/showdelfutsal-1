import React from 'react';
import './ImagenAdmin.css';
import {urlImagenes} from '../../urlImagenes';
import logoCargando from '../../Static/Cargando.gif';
// import ImagenMiniatura from '../../Static/Img/fondoAdmin.jpg';
// import imagenBack from 'localhost/imagenes/yOuSjEEjLTCEqSV-J4z7fA-r.jpg';
const ImagenAdmin = ({
  isTarjetaGaleria = false,
  isVideo = false,
  dataVideo = {},
  noticiaImagen = {},
  mostrarLogoCargando = false,
  mostrarModalImagen = () => {
    console.log('');
  },
}) => {
  return (
    <div
      className="CP-Imagen-admin"
      tabIndex="1"
      onFocus={() => mostrarModalImagen(true, noticiaImagen)}
    >
      <div className="CI-Imagen-admin">
        {isTarjetaGaleria ? (
          !isVideo ? (
            <img
              alt=""
              src={noticiaImagen.fuente ? urlImagenes + noticiaImagen.fuente : noticiaImagen}
              className="Img-Admin"
            ></img>
          ) : (
            <div>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${dataVideo.fuente}`}
                title={dataVideo.tituloVideo}
              ></iframe>
              <h5>{dataVideo.tituloVideo}</h5>
            </div>
          )
        ) : mostrarLogoCargando ? (
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
