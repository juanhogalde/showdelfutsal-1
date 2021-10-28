import React from 'react';
import './SeccionNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SeccionNoticias.css';
/* import publicidadCorta from '../../Static/Img/publicidad_corta.jpg'; */
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import {Link} from 'react-router-dom';

const SeccionNoticias = ({tituloSeccionNoticias = 'Título', isTitulo = true}) => {
  return (
    <div
      className={`${
        isTitulo
          ? ' CP-SN-Noticias Fondo-seccion-noticias'
          : 'CP-SN-Noticias-SinTitulo Fondo-seccion-noticias'
      }`}
    >
      {isTitulo && (
        <div className="CI-SN-Noticia-titulo">
          <div className="I-SN-Noticia-titulo">
            <p>{tituloSeccionNoticias}</p>
          </div>
        </div>
      )}

      <div className="CI-SN-Noticia-general">
        <div className="I-Noticia-Componente">
          <Link to="/Noticia/Desarrollada" className="estilos-Link">
            <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          </Link>
        </div>
      </div>
      <div className="CI-SN-Noticia-miniatura">
        <div className="I-Noticia-Componente-miniatura">
          <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          {/* <img alt="" src={publicidadCorta}></img>
          <img alt="" src={publicidadCorta}></img> */}
        </div>
      </div>
      <div className="CI-SN-Noticia-slider">
        <SliderNoticias></SliderNoticias>
      </div>
    </div>
  );
};

export default SeccionNoticias;
