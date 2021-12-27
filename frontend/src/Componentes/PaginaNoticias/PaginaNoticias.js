import React, {useLayoutEffect, useState} from 'react';
import './PaginaNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {SliderNoticias} from '../SliderNoticias/SliderNoticias';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SubMenuBuscadorNoticias from '../SubMenuBuscadorNoticias/SubMenuBuscadorNoticias';
import Animaciones from '../Animaciones/Animaciones';
import PieDepagina from '../PieDePagina/PieDepagina';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {guardarNoticiaMiniaturaSeleccionada_accion} from '../../Redux/Noticias/AccionesNoticias';

const PaginaNoticias = ({
  titulo = 'Masculino',
  noticias1 = 'Femenino',
  noticias2 = 'Inferiores',
  noticias3 = 'Copa y Liga',
}) => {
  const {noticias} = useSelector(state => state.storeNoticias);
  const [noticiaMasculino, setNoticiaMasculino] = useState({});
  const [noticiaFemenino, setNoticiaFemenino] = useState({});
  const [noticiaLiga, setNoticiaLiga] = useState({});
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    var noticiasMasculinos = {};
    var noticiasFemenino = {};
    var noticiasLiga = {};
    var noticiasFiltradasF = noticias.filter(noticia => noticia.keyCategoria === 2);
    var noticiasFiltradasM = noticias.filter(noticia => noticia.keyCategoria === 1);
    var noticiasFiltradasLiga = noticias.filter(noticia => noticia.keyCategoria === 3);
    // Masculino
    if (noticiasFiltradasM[0]) {
      noticiasMasculinos = {...noticiasMasculinos, noticia1: noticiasFiltradasM[0]};
    }
    if (noticiasFiltradasM[1]) {
      noticiasMasculinos = {...noticiasMasculinos, noticia2: noticiasFiltradasM[1]};
    }
    if (noticiasFiltradasM[2]) {
      noticiasMasculinos = {...noticiasMasculinos, noticia3: noticiasFiltradasM[2]};
    }
    setNoticiaMasculino(noticiasMasculinos);
    // Femenino
    if (noticiasFiltradasF[0]) {
      noticiasFemenino = {...noticiasFemenino, noticia1: noticiasFiltradasF[0]};
    }
    if (noticiasFiltradasF[1]) {
      noticiasFemenino = {...noticiasFemenino, noticia2: noticiasFiltradasF[1]};
    }
    if (noticiasFiltradasF[2]) {
      noticiasFemenino = {...noticiasFemenino, noticia3: noticiasFiltradasF[2]};
    }
    setNoticiaFemenino(noticiasFemenino);
    //Liga
    if (noticiasFiltradasLiga[0]) {
      noticiasLiga = {...noticiasLiga, noticia1: noticiasFiltradasLiga[0]};
    }
    if (noticiasFiltradasLiga[1]) {
      noticiasLiga = {...noticiasLiga, noticia2: noticiasFiltradasLiga[1]};
    }
    if (noticiasFiltradasLiga[2]) {
      noticiasLiga = {...noticiasLiga, noticia3: noticiasFiltradasLiga[2]};
    }
    setNoticiaLiga(noticiasLiga);
  }, [noticias, setNoticiaMasculino]);
  const noticiaSeleccionada = noticiaRecibida => {
    dispatch(guardarNoticiaMiniaturaSeleccionada_accion(noticiaRecibida));
  };
  return (
    <div className="LP-Seccion-Noticias">
      {/* SECCION NOTICIAS MASCULINO /> */}
      <SubMenuBuscadorNoticias />

      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias
          tituloSeccionNoticias="Masculino"
          noticias={noticiaMasculino}
          categoriaNoticia={1}
          subcategoriaNoticia={-1}
        />
      </div>
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias
          tituloSeccionNoticias="Femenino"
          noticias={noticiaFemenino}
          categoriaNoticia={2}
          subcategoriaNoticia={-1}
        />
      </div>
      {/* SECCION NOTICIAS FEMENINO /> */}

      {/* SECCION NOTICIAS INFERIORES /> */}
      {/* <div className=" LI-Seccion-Noticias ">
        <Animaciones isAlineado={true} orientacion={'izquierda'} />
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
        <div className="CI-SN-Inferiores-miniatura">
          <div className="CI-SN-Inferiores-slider"></div>
        </div>
      </div> */}
      {/* SECCION NOTICIAS COPA Y LIGA /> */}
      <div className=" LI-Seccion-Noticias ">
        <Animaciones isAlineado={false} />

        <div className=" CP-SN-Liga  ">
          <div className="CI-SN-Liga-titulo">
            <div className="I-SN-Liga-titulo">
              <p>{noticias3}</p>
            </div>
          </div>
          <div className="CI-SN-Liga-general">
            <div className="I-Noticia-Liga">
              <Link
                to="/Noticia/Desarrollada"
                onClick={() => {
                  noticiaSeleccionada(noticiaLiga.noticia1 ? noticiaLiga.noticia1 : {});
                }}
                className="estilos-Link"
              >
                <NoticiasMiniatura
                  datosModelado={noticiaLiga.noticia1 ? noticiaLiga.noticia1 : {}}
                  isSeccionNoticias={true}
                  isSobreImagen={true}
                ></NoticiasMiniatura>
              </Link>
            </div>
            <div className="I-Noticia-Liga">
              <Link
                to="/Noticia/Desarrollada"
                onClick={() => {
                  noticiaSeleccionada(noticiaLiga.noticia2 ? noticiaLiga.noticia2 : {});
                }}
                className="estilos-Link"
              >
                <NoticiasMiniatura
                  datosModelado={noticiaLiga.noticia2 ? noticiaLiga.noticia2 : {}}
                  isSeccionNoticias={true}
                  isSobreImagen={true}
                ></NoticiasMiniatura>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PieDepagina></PieDepagina>
    </div>
  );
};

export default PaginaNoticias;
