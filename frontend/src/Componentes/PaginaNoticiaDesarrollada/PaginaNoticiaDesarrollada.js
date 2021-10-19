import React from 'react';
import './PaginaNoticiaDesarrollada.css';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import publicidadLarga from '../../Static/Img/Publicidad larga.jpg';
import publicidadCorta from '../../Static/Img/publicidad corta.jpg';

const PaginaNoticiaDesarrollada = ({tituloSeccionNoticias = 'Noticia Desarrollada'}) => {
  return (
    <div className="LI-ND-Noticia-Desarrollada Fondo-seccion-noticia-desarrollada">
      <div className="CP-ND-Noticias">
        <div className="CI-ND-Noticia-titulo">
          <div className="I-ND-Noticia-titulo">
            <p>{tituloSeccionNoticias}</p>
          </div>
        </div>
        <div className="CI-ND-Noticia-general">
          <div className="I-Noticia-desarrollada-Componente">
            <NoticiaDesarrollada />
          </div>
        </div>
        <div className="CI-ND-Noticia-miniatura">
          <div className="I-ND-Publicidad-corta">
            <img alt="" src={publicidadCorta}></img>
          </div>
          <div className="I-ND-Noticia-Componente-Slider">
            <SliderNoticias cantidadDeElementos={3} isVertical={true} />
          </div>
          <div className="CI-ND-Tags">
            <div className="I-ND-Tags">
              <h6>COMPONENTE TAGS</h6>
            </div>
          </div>
        </div>
        <div className="CI-ND-Publicidad">
          <img alt="" src={publicidadLarga}></img>
        </div>
      </div>
    </div>
  );
};

export default PaginaNoticiaDesarrollada;
