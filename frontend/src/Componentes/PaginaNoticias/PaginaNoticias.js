import React, {useLayoutEffect, useState} from 'react';
import './PaginaNoticias.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import publicidadLarga from '../../Static/Img/anuncio_larga.jpg';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SubMenuBuscadorNoticias from '../SubMenuBuscadorNoticias/SubMenuBuscadorNoticias';
import Animaciones from '../Animaciones/Animaciones';
import PieDepagina from '../PieDePagina/PieDepagina';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import SliderGaleria from '../SliderGaleria/SliderGaleria';
import {server} from '../../Entorno';

const PaginaNoticias = ({
  titulo = 'Masculino',
  noticias1 = 'Femenino',
  noticias2 = 'Inferiores',
  noticias3 = 'LNFA',
}) => {
  const {noticias} = useSelector(state => state.storeNoticias);
  const [noticiaMasculino, setNoticiaMasculino] = useState({});
  const [noticiaFemenino, setNoticiaFemenino] = useState({});
  const [noticiaLiga, setNoticiaLiga] = useState({});
  const {publicidades} = useSelector(state => state.storePublicidades);
  const [publicidadAbajoGaleriaMasculino, setPublicidadAbajoGaleriaMasculino] = useState();
  const [publicidadAbajoGaleriaFemenino, setPublicidadAbajoGaleriaFemenino] = useState();
  const [publicidadAbajoGaleriaLNFA, setPublicidadAbajoGaleriaLNFA] = useState();

  useLayoutEffect(() => {
    if (publicidades.length) {
      publicidades.forEach(publicidad => {
        switch (publicidad.idMedidas[0]?.keyMedidas) {
          case 10:
            if (publicidad.isActiva) {
              setPublicidadAbajoGaleriaMasculino(server + publicidad.idImagen[0].fuente);
            }
            break;
          case 11:
            if (publicidad.isActiva) {
              setPublicidadAbajoGaleriaFemenino(server + publicidad.idImagen[0].fuente);
            }
            break;
          case 12:
            if (publicidad.isActiva) {
              setPublicidadAbajoGaleriaLNFA(server + publicidad.idImagen[0].fuente);
            }
            break;
          default:
            break;
        }
      });
    }
    return () => {};
  }, [publicidades]);

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

  return (
    <div className="LP-Seccion-Noticias">
      <SubMenuBuscadorNoticias />

      {/* SECCION NOTICIAS MASCULINO /> */}
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias
          tituloSeccionNoticias="Masculino"
          noticias={noticiaMasculino}
          categoriaNoticia={1}
          subcategoriaNoticia={-1}
        />
      </div>
      <div className="publicidad-ComponenteNoticias">
        <img
          alt=""
          src={publicidadAbajoGaleriaMasculino ? publicidadAbajoGaleriaMasculino : publicidadLarga}
        ></img>
      </div>
      {/* SECCION NOTICIAS FEMENINO /> */}
      <div className=" LI-Seccion-Noticias ">
        <SeccionNoticias
          tituloSeccionNoticias="Femenino"
          noticias={noticiaFemenino}
          categoriaNoticia={2}
          subcategoriaNoticia={-1}
        />
        <div className="publicidad-ComponenteNoticias">
          <img
            alt=""
            src={publicidadAbajoGaleriaFemenino ? publicidadAbajoGaleriaFemenino : publicidadLarga}
          ></img>
        </div>
      </div>

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
                to={`/Noticia/Desarrollada/${noticiaLiga.noticia1._id}`}
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
                to={`/Noticia/Desarrollada/${noticiaLiga.noticia2._id}`}
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
          <div className="CI-SN-Galeria-slider-liga">
            <SliderGaleria categoriaGaleria={3}></SliderGaleria>
          </div>
        </div>
      </div>
      <div className="publicidad-ComponenteNoticias">
        <img
          alt=""
          src={publicidadAbajoGaleriaLNFA ? publicidadAbajoGaleriaLNFA : publicidadLarga}
        ></img>
      </div>
      <PieDepagina></PieDepagina>
    </div>
  );
};

export default PaginaNoticias;
