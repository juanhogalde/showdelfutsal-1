import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import PieDepagina from '../PieDePagina/PieDepagina';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import PublicidadLarga from '../../Static/Img/Publicidad larga.jpg';
import PublicidadCorta from '../../Static/Img/publicidad corta.jpg';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Filtros from '../Filtros/Filtros';
import Marcador from '../Marcador/Marcador';

import './Inicio.css';

const Inicio = () => {
  return (
    <div className="LP-Inicio">
      <BarraDeNavegacion />
      {/* SECCION BANNER INICIO */}
      <div className="LI-Inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos"></div>

          <div className="CI-Somos-frase">
            <div className="I-somos-frase">
              <img className="Somos-frase" src={SomosFrase}></img>
            </div>
          </div>
          <div className="CI-Somos-redes"></div>

          <div className="CI-Somos-radio">
            <div className="I-somos-radio"></div>
          </div>
        </div>
      </div>
      {/* SECCION VIVO */}
      {/* <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
          <div className="CI-Vivo"></div>
        </div>
      </div> */}
      {/* SECCION MARCADOR */}
      {/* <div className="LI-Inicio seccion-marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador"></div>
          <div className="CI-Marcador">
            <div className="I-Marcador-publicidad">
              <div className="I-Foto-Marcador"></div>
              <div className="I-Foto-Marcador"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* SECCION NOTICIAS */}
      {/* <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="CI-Noticias"></div>
          <div className="CI-Noticias"></div>
          <div className="I-Noticias-Miniaturas">
            <div className="I-Noticias"></div>
            <div className="I-Noticias"></div>
          </div>
          <div className="CI-Noticias"></div>
        </div>
      </div> */}
      {/* SECCION GALERIA */}
      {/* <div className="LI-Inicio seccion-galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria"></div>
          <div className="CI-Galeria"></div>
        </div>
      </div> */}
      <PieDepagina />
    </div>
  );
};

export default Inicio;
