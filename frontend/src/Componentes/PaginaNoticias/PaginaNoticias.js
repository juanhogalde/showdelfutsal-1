import React from 'react';
import './PaginaNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SubMenuBuscadorNoticias from '../SubMenuBuscadorNoticias/SubMenuBuscadorNoticias';
import PieDepagina from '../PieDePagina/PieDepagina';

const PaginaNoticias = ({
  titulo = 'Masculino',
  noticias1 = 'Femenino',
  noticias2 = 'Inferiores',
  noticias3 = 'Copa y Liga',
}) => {
  return (
    <div className="LP-Seccion-Noticias">
      {/* SECCION NOTICIAS MASCULINO /> */}
      <SubMenuBuscadorNoticias />

      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias tituloSeccionNoticias="Masculino" />
      </div>
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias tituloSeccionNoticias="Femenino" />
      </div>
      {/* SECCION NOTICIAS FEMENINO /> */}

      {/* SECCION NOTICIAS INFERIORES /> */}
      <div className=" LI-Seccion-Noticias ">
        <div className=" CP-SN-Inferiores ">
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
            <SliderNoticias cantidadDeElementos={2} isConCopete={true}></SliderNoticias>
          </div>
        </div>
        {/* <div className="CI-SN-Inferiores-miniatura">
          <div className="CI-SN-Inferiores-slider"></div>
        </div> */}
      </div>
      {/* SECCION NOTICIAS COPA Y LIGA /> */}
      <div className=" LI-Seccion-Noticias ">
        <div className=" CP-SN-Liga  ">
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
      <PieDepagina></PieDepagina>
    </div>
  );
};

export default PaginaNoticias;
