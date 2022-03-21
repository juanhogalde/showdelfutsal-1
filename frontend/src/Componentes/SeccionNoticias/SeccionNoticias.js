import React from 'react';
import './SeccionNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SeccionNoticias.css';
/* import publicidadCorta from '../../Static/Img/anuncio2_corta.jpg'; */
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import {Link} from 'react-router-dom';
import SliderGaleria from '../SliderGaleria/SliderGaleria';

const SeccionNoticias = ({
  tituloSeccionNoticias = 'Título',
  isTitulo = true,
  subcategoriaNoticia,
  noticias,
}) => {
  if (!noticias) {
    return (
      <div className="CI-SN-Noticia-general">
        <div className="I-Noticia-Componente">
          <h1>No hay noticias</h1>
        </div>
      </div>
    );
  } else {
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
            {noticias[0] && (
              <Link to={`/Noticia/Desarrollada/${noticias[0]._id}`} className="estilos-Link">
                <NoticiasMiniatura
                  datosModelado={noticias[0] ? noticias[0] : {}}
                  isSeccionNoticias={true}
                  isSobreImagen={true}
                ></NoticiasMiniatura>
              </Link>
            )}
          </div>
        </div>
        <div className="CI-SN-Noticia-miniatura">
          <div className="I-Noticia-Componente-miniatura">
            {noticias[1] && (
              <Link to={`/Noticia/Desarrollada/${noticias[1]._id}`} className="estilos-Link">
                <NoticiasMiniatura
                  datosModelado={noticias[1] ? noticias[1] : {}}
                  isSeccionNoticias={true}
                  // isSobreImagen={true}
                ></NoticiasMiniatura>
              </Link>
            )}
            {noticias[2] && (
              <Link to={`/Noticia/Desarrollada/${noticias[2]._id}`} className="estilos-Link">
                <NoticiasMiniatura
                  datosModelado={noticias[2] ? noticias[2] : {}}
                  isSeccionNoticias={true}
                  // isSobreImagen={true}
                ></NoticiasMiniatura>
              </Link>
            )}
            {/* <img alt="" src={publicidadCorta}></img>
          <img alt="" src={publicidadCorta}></img> */}
          </div>
        </div>
        <div className="CI-SN-Noticia-slider">
          <SliderNoticias
            categoriaNoticias={subcategoriaNoticia.keyCategoria}
            subcategoriaNoticia={subcategoriaNoticia.key}
          ></SliderNoticias>
        </div>
        <div className="CI-SN-Galeria-slider">
          <SliderGaleria categoriaGaleria={subcategoriaNoticia.keyCategoria}></SliderGaleria>
        </div>
      </div>
    );
  }
};

export default SeccionNoticias;
