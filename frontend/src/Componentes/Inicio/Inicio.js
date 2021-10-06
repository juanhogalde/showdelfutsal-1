import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import PieDepagina from '../PieDePagina/PieDepagina';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import PublicidadLarga from '../../Static/Img/Publicidad larga.jpg';
import PublicidadCorta from '../../Static/Img/publicidad corta.jpg';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Filtros from '../Filtros/Filtros';
import Marcador from '../Marcador/Marcador';

import './Inicio.css';

const Inicio = () => {
  return (
    <div className="LP-Inicio">
      {/* <BarraDeNavegacion /> */}
      {/* SECCION BANNER INICIO */}
      <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
          <div className="CI-Somos"></div>
        </div>
      </div>
      {/* SECCION VIVO */}
      <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Vivo">
            <ImagenesVideo />
          </div>
          <div className="CI-Vivo">
            <ImagenesVideo />
          </div>
          <div className="CI-Vivo">
            <img src={PublicidadLarga}></img>
          </div>
        </div>
      </div>
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <Marcador></Marcador>
          </div>
          <div className="CI-Marcador">
            <div className="I-Marcador-publicidad">
              <div className="I-Foto-Marcador">
                <img src={PublicidadCorta}></img>
              </div>
              <div className="I-Foto-Marcador">
                <img src={PublicidadCorta}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECCION NOTICIAS */}
      <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="CI-Noticias">
            <Filtros />
          </div>
          <div className="CI-Noticias">
            <NoticiasMiniatura />
          </div>
          <div className="I-Noticias-Miniaturas">
            <div className="I-Noticias">
              <NoticiasMiniatura />
            </div>
            <div className="I-Noticias">
              <NoticiasMiniatura />
            </div>
          </div>
          <div className="CI-Noticias">
            <img src={PublicidadLarga}></img>
          </div>
        </div>
      </div>
      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria">
            <ImagenesVideo />
          </div>
          <div className="CI-Galeria">
            <ImagenesVideo />
          </div>
        </div>
      </div>
      {/* <PieDepagina /> */}
    </div>
  );
};

export default Inicio;
