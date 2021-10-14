import React from 'react';
import '../SeccionNoticias/SeccionNoticias.css';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import PieDepagina from '../PieDePagina/PieDepagina';

// import {useSelector} from 'react-redux';
const SeccionNoticias = ({
  titulo = 'Masculino',
  noticias1 = 'Femenino',
  noticias2 = 'Inferiores',
  noticias3 = 'Copa y Liga',
}) => {
  //const {noticias, noticias2, noticias3} = useSelector(state => state.storePrueba);
  return (
    <div className="LI-Seccion-Noticias  ">
      <div className="CP-SN-Noticias-Busquedas">
        <div className="I-Noticias-busqueda-titulo">
          <p>NOTICIAS</p>
        </div>
        <div className="I-Noticias-busqueda-buscador">
          {/* <div className="I-contendor-busqueda">
            <input type="text" name="name" className="Input-busqueda" />
          </div> */}
        </div>
      </div>

      {/* SECCION NOTICIAS MASCULINO /> */}

      <div className=" CP-SN-Masculino Fondo-seccion-noticias">
        <div className="CI-SN-Masculino-titulo">
          <div className="I-SN-Masculino-titulo">
            <p>{titulo}</p>
          </div>
        </div>
        <div className="CI-SN-Masculino-general">
          <div className="I-Noticia-masculino">
            <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          </div>
        </div>
        <div className="CI-SN-Masculino-miniatura">
          <div className="I-Noticia-masculino-miniatura">
            <NoticiasMiniatura datosModelado={noticias2} />
            <NoticiasMiniatura datosModelado={noticias3} />
          </div>
        </div>
        <div className="CI-SN-Masculino-slider"></div>
      </div>
      {/* SECCION NOTICIAS FEMENINO /> */}
      <div className=" CP-SN-Femenino Fondo-seccion-noticias">
        <div className="CI-SN-Femenino-titulo">
          <div className="I-SN-Femenino-titulo">
            <p>{noticias1}</p>
          </div>
        </div>
        <div className="CI-SN-Femenino-general">
          <div className="I-Noticia-femenino">
            <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true}></NoticiasMiniatura>
          </div>
        </div>
        <div className="CI-SN-femenino-miniatura">
          <div className="I-Noticia-femenino-miniatura">
            <NoticiasMiniatura datosModelado={noticias2} />
            <NoticiasMiniatura datosModelado={noticias3} />
          </div>
        </div>
        <div className="CI-SN-femenino-slider"></div>
      </div>
      {/* SECCION NOTICIAS INFERIORES /> */}
      <div className=" CP-SN-Inferiores Fondo-animacion">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
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
      {/* SECCION NOTICIAS COPA Y LIGA /> */}
      <div className=" CP-SN-Liga Fondo-animacion ">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
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
  );
};

export default SeccionNoticias;
