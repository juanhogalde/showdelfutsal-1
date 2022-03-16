import React, {useLayoutEffect, useState} from 'react';
import './SeccionNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SeccionNoticias.css';
/* import publicidadCorta from '../../Static/Img/anuncio2_corta.jpg'; */
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import SliderGaleria from '../SliderGaleria/SliderGaleria';

const SeccionNoticias = ({
  tituloSeccionNoticias = 'Título',
  isTitulo = true,
  categoriaNoticia = 1,
  subcategoriaNoticia = -1,
}) => {
  const {noticias} = useSelector(state => state.storeNoticias);
  const [noticiaVisualizada, setNoticiaVisualizada] = useState({});
  useLayoutEffect(() => {
    var noticiasAMostrar = {};
    var noticiasFiltradasFinal = [];
    var noticiasFiltradasCategoria = noticias.filter(
      noticia => noticia.keyCategoria === categoriaNoticia
    );
    if (subcategoriaNoticia !== -1) {
      noticiasFiltradasFinal = noticiasFiltradasCategoria.filter(
        noticia => noticia.keySubcategoria === parseInt(subcategoriaNoticia)
      );
    } else {
      noticiasFiltradasFinal = [...noticiasFiltradasCategoria];
    }
    // Masculino
    if (noticiasFiltradasFinal[0]) {
      noticiasAMostrar = {...noticiasAMostrar, noticia1: noticiasFiltradasFinal[0]};
    }
    if (noticiasFiltradasFinal[1]) {
      noticiasAMostrar = {...noticiasAMostrar, noticia2: noticiasFiltradasFinal[1]};
    }
    if (noticiasFiltradasFinal[2]) {
      noticiasAMostrar = {...noticiasAMostrar, noticia3: noticiasFiltradasFinal[2]};
    }
    setNoticiaVisualizada(noticiasAMostrar);
  }, [noticias, setNoticiaVisualizada, categoriaNoticia, subcategoriaNoticia]);

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
          {noticiaVisualizada.noticia1 ? (
            <Link
              to={`/Noticia/Desarrollada/${noticiaVisualizada.noticia1_id}`}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticiaVisualizada.noticia1 ? noticiaVisualizada.noticia1 : {}}
                isSeccionNoticias={true}
                isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="CI-SN-Noticia-miniatura">
        <div className="I-Noticia-Componente-miniatura">
          {noticiaVisualizada.noticia2 ? (
            <Link
              to={`/Noticia/Desarrollada/${noticiaVisualizada.noticia2_id}`}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticiaVisualizada.noticia2 ? noticiaVisualizada.noticia2 : {}}
                isSeccionNoticias={true}
                // isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
          {noticiaVisualizada.noticia3 ? (
            <Link
              to={`/Noticia/Desarrollada/${noticiaVisualizada.noticia3_id}`}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticiaVisualizada.noticia3 ? noticiaVisualizada.noticia3 : {}}
                isSeccionNoticias={true}
                // isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
          {/* <img alt="" src={publicidadCorta}></img>
          <img alt="" src={publicidadCorta}></img> */}
        </div>
      </div>
      <div className="CI-SN-Noticia-slider">
        <SliderNoticias
          categoriaNoticias={categoriaNoticia}
          subcategoriaNoticia={subcategoriaNoticia}
        ></SliderNoticias>
      </div>
      <div className="CI-SN-Galeria-slider">
        <SliderGaleria categoriaGaleria={categoriaNoticia}></SliderGaleria>
      </div>
    </div>
  );
};

export default SeccionNoticias;
