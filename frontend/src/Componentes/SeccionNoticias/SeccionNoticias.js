import React from 'react';
import './SeccionNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SeccionNoticias.css';
import GaleriaNoticiasMiniatura from '../GaleriaNoticiasMiniatura/GaleriaNoticiasMiniatura';
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';

const SeccionNoticias = () => {
  return (
    <div className=" CP-SN-Noticias Fondo-seccion-noticias">
      <div className="CI-SN-Noticia-titulo">
        <div className="I-SN-Noticia-titulo">
          <p>TITULO</p>
        </div>
      </div>
      <div className="CI-SN-Noticia-general">
        <div className="I-Noticia-Componente">
          <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
        </div>
      </div>
      <div className="CI-SN-Noticia-miniatura">
        <div className="I-Noticia-Componente-miniatura">
          {/* <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura> */}
          <img alt="" src={publicidadCorta}></img>
          <img alt="" src={publicidadCorta}></img>
        </div>
      </div>
      <div className="CI-SN-Noticia-slider">
        <div className="I-Componente-galeria-noticias">{/* <GaleriaNoticiasMiniatura /> */}</div>
      </div>
    </div>
  );
};

export default SeccionNoticias;
