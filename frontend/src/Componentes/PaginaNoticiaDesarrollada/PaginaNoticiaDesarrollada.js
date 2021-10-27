import React from 'react';
import './PaginaNoticiaDesarrollada.css';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import publicidadLarga from '../../Static/Img/Publicidad larga.jpg';
import publicidadCorta from '../../Static/Img/publicidad corta.jpg';
import {useSelector} from 'react-redux';

const PaginaNoticiaDesarrollada = ({tituloSeccionNoticias = 'Noticia Desarrollada'}) => {
  const userAgent = navigator.userAgent;
  const isMobileIPhone = userAgent.indexOf('iPhone');
  const isMobileAndroid = userAgent.indexOf('Android');

  console.log(isMobileIPhone);
  // console.log(isMobileAndroid);

  const {noticias1} = useSelector(state => state.storePrueba);

  console.log(noticias1);
  // console.log(userAgent);

  return (
    <div className="LI-ND-Noticia-Desarrollada Fondo-seccion-noticia-desarrollada">
      <div className="CP-ND-Noticias">
        <div className="CI-ND-Noticia-general">
          <div className="I-Noticia-desarrollada-Componente">
            <NoticiaDesarrollada datosModelado={noticias1} />
          </div>
        </div>
        <div className="CI-ND-Noticia-miniatura">
          <div className="I-ND-Publicidad-corta">
            <img alt="" src={publicidadCorta}></img>
          </div>
          <div className="I-ND-Noticia-Componente-Slider">
            {isMobileAndroid !== -1 || isMobileIPhone !== -1 ? (
              <SliderNoticias cantidadDeElementos={6} isVertical={false} />
            ) : (
              <SliderNoticias cantidadDeElementos={3} isVertical={true} />
            )}
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