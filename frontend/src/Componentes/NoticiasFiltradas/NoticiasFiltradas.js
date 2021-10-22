import React from 'react';
import './NoticiasFiltradas.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import {useSelector} from 'react-redux';

const NoticiasFiltradas = () => {
  // const userAgent = navigator.userAgent;
  // const isMobileIPhone = userAgent.indexOf('iPhone');
  // const isMobileAndroid = userAgent.indexOf('Android');

  // console.log(isMobileIPhone);
  // console.log(isMobileAndroid);

  const {noticias1} = useSelector(state => state.storePrueba);
  const noticias = useSelector(state => state.storePrueba.noticias);

  console.log(noticias1);
  // console.log(userAgent);

  return (
    <div className="LI-Noticias-filtradas Seccion-Noticia-filtrada">
      <div className="CP-SN-Noticia-fIltrada Fondo-Noticias-filtradas">
        <div className="CI-SN-Noticia-filtrada-titulo">
          <div className="I-SN-Noticia-filtrada-titulo"></div>
        </div>
        <div className="CI-SN-Noticia-filtrada-grilla CI-SN-Noticia-filtrada-auto-grilla">
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
          <NoticiasMiniatura />
        </div>
        <div className="CI-SN-Noticia-filtrada-Panel-lateral">
          <div className="I-Noticia-filtrada-Panel-lateral-publicidad">
            <div className="I-Noticia-filtrada-componente-publicidad"></div>
          </div>
          <div className="I-Noticia-filtrada-Panel-lateral-slider">
            <SliderNoticias cantidadDeElementos={3} isVertical={true} />
          </div>
        </div>
        <div className="CI-SN-Noticia-filtrada-Paginador">
          <h4>PAGINADOR</h4>
        </div>
      </div>
    </div>
  );
};

export default NoticiasFiltradas;
