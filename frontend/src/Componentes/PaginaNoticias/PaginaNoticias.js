import React from 'react';
import './PaginaNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import GaleriaNoticiasMiniatura from '../GaleriaNoticiasMiniatura/GaleriaNoticiasMiniatura';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SubMenuBuscadorNoticias from '../SubMenuBuscadorNoticias/SubMenuBuscadorNoticias';
import SubMenuNoticias from '../SubMenuNoticias/SubMenuNoticias';

// import {useSelector} from 'react-redux';
const PaginaNoticias = ({
  titulo = 'Masculino',
  noticias1 = 'Femenino',
  noticias2 = 'Inferiores',
  noticias3 = 'Copa y Liga',
}) => {
  //const {noticias, noticias2, noticias3} = useSelector(state => state.storePrueba);
  return (
    <div className="LP-Seccion-Noticias">
      {/* SECCION NOTICIAS MASCULINO /> */}
      {/* <SubMenuBuscadorNoticias /> */}
      <SubMenuNoticias />
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias />
      </div>
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias />
      </div>
      {/* SECCION NOTICIAS FEMENINO /> */}

      {/* SECCION NOTICIAS INFERIORES /> */}
      <div className=" LI-Seccion-Noticias ">
        <div className=" CP-SN-Inferiores Fondo-animacion">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="CI-SN-Inferiores-titulo">
            <div className="I-SN-Inferiores-titulo">
              <p>{noticias2}</p>
            </div>
          </div>
          <div className="CI-SN-Inferiores-general">
            <div className="I-Noticia-Inferiores">
              <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
            </div>
          </div>
          <div className="CI-SN-Inferiores-miniatura">
            <div className="CI-SN-Inferiores-slider"></div>
          </div>
        </div>
      </div>
      {/* SECCION NOTICIAS COPA Y LIGA /> */}
      <div className=" LI-Seccion-Noticias ">
        <div className=" CP-SN-Liga Fondo-animacion ">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="CI-SN-Liga-titulo">
            <div className="I-SN-Liga-titulo">
              <p>{noticias3}</p>
            </div>
          </div>
          <div className="CI-SN-Liga-general">
            <div className="I-Noticia-Liga">
              <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
            </div>
            <div className="I-Noticia-Liga">
              <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaNoticias;
