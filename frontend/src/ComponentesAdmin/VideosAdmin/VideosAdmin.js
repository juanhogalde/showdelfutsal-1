import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import '../VideosAdmin/VideosAdmin.css';
const VideosAdmin = ({
  videosCargados = [],
  eliminarVideoCargado = () => {
    console.log('falta eliminarVideoCargado');
  },
}) => {
  return (
    <div>
      {videosCargados.length > 0 && (
        <div className="CI-ListaImagnes">
          {videosCargados.map((videos, index) => {
            return (
              videos && (
                <div key={index} className="CP-lista-videos">
                  <div className="CI-Video-Lista-Tarjeta">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videos.fuente}`}
                      title={videos.tituloVideo}
                    ></iframe>
                    <h5>{videos.tituloVideo}</h5>
                  </div>
                  <div className="accionesFilaListaImagenes">
                    <MdDeleteForever
                      onClick={() => eliminarVideoCargado(index)}
                      className="iconoAcción-ListaImagenes"
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideosAdmin;
