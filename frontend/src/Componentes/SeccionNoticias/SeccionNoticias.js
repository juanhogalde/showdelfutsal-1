import React from 'react';
import './SeccionNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SeccionNoticias.css';
/* import publicidadCorta from '../../Static/Img/publicidad_corta.jpg'; */
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import {Link} from 'react-router-dom';
import {guardarNoticiaMiniaturaSeleccionada_accion} from '../../Redux/Noticias/AccionesNoticias';
import {useDispatch} from 'react-redux';

const SeccionNoticias = ({
  tituloSeccionNoticias = 'Título',
  isTitulo = true,
  noticias = {},
  categoriaNoticia = 1,
}) => {
  const dispatch = useDispatch();
  const noticiaSeleccionada = noticiaRecibida => {
    dispatch(guardarNoticiaMiniaturaSeleccionada_accion(noticiaRecibida));
  };
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
          {noticias.noticia1 ? (
            <Link
              to="/Noticia/Desarrollada"
              onClick={() => {
                noticiaSeleccionada(noticias.noticia1 ? noticias.noticia1 : {});
              }}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticias.noticia1 ? noticias.noticia1 : {}}
                isSeccionNoticias={true}
                isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="CI-SN-Noticia-miniatura">
        <div className="I-Noticia-Componente-miniatura">
          {noticias.noticia2 ? (
            <Link
              to="/Noticia/Desarrollada"
              onClick={() => {
                noticiaSeleccionada(noticias.noticia2 ? noticias.noticia2 : {});
              }}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticias.noticia2 ? noticias.noticia2 : {}}
                isSeccionNoticias={true}
                isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
          {noticias.noticia3 ? (
            <Link
              to="/Noticia/Desarrollada"
              onClick={() => {
                noticiaSeleccionada(noticias.noticia3 ? noticias.noticia3 : {});
              }}
              className="estilos-Link"
            >
              <NoticiasMiniatura
                datosModelado={noticias.noticia3 ? noticias.noticia3 : {}}
                isSeccionNoticias={true}
                isSobreImagen={true}
              ></NoticiasMiniatura>
            </Link>
          ) : null}
          {/* <img alt="" src={publicidadCorta}></img>
          <img alt="" src={publicidadCorta}></img> */}
        </div>
      </div>
      <div className="CI-SN-Noticia-slider">
        <SliderNoticias categoriaNoticias={categoriaNoticia}></SliderNoticias>
      </div>
    </div>
  );
};

export default SeccionNoticias;
