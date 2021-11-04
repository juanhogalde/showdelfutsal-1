import React from 'react';
import './TarjetaNoticiasMiniatura.css';

const TarjetaNoticiasMiniatura = () => {
  return (
    <div className="CP-Tarjeta-Noticia-Miniatura">
      <div className="CP-Tarjeta-Noticia-Miniatura-Contenedor">
        <div className="CI-Tarjeta-Noticia-Miniatura">
          <div className="CI-Tarjeta-Noticia-Miniatura-Titulo">
            <h6>Titulo</h6>
          </div>
          <div className="CI-Tarjeta-Noticia-Miniatura-Categoria">
            <div className="I-Tarjeta-Noticia-Categoria">
              <h6>Categoria</h6> <h6>Division</h6> <h6>Fecha</h6>
            </div>
          </div>
          <div className="CI-Tarjeta-Noticia-Miniatura-Cuerpo">
            <div className="I-Tarjeta-Noticia-cuerpo">
              <p>
                Molestie felis est bibendum scelerisque luctus vitae, mauris habitant fames a orci,
                tortor aenean aliquam eget pharetra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaNoticiasMiniatura;
