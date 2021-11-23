import React, {useState} from 'react';
import Marcador from '../Marcador/Marcador';
/* import PieDepagina from '../PieDePagina/PieDepagina'; */
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {useSelector} from 'react-redux';
import publicidadLarga from '../../Static/Img/publicidad_larga.jpg';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Vivo from '../Vivo/Vivo';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Radio from '../Radio/Radio';
import PieDepagina from '../PieDePagina/PieDepagina';

const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Inferiores', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  /*   const {noticias1, noticias2, noticias3} = useSelector(state => state.storePrueba);*/
  const [noticiaP, setNoticiaP] = useState({});
  const [noticia1, setNoticia1] = useState({});
  const [noticia2, setNoticia2] = useState({});

  const {
    DatosDePruebaImagenes,
    DatosDePruebaImagenes2,
    DatosDePruebaImagenes3,
    // DatosDePruebaVideos,
    noticiasFemenino,
    noticiasMasculino,
    noticiasInferiores,
  } = useSelector(state => state.storePrueba);
  const {linkVideosInicioGaleria} = useSelector(state => state.sotreDatosIniciales);
  const videoVivoPrueba = {fuente: 'MmysMu3mgvw'};
  const obtenerFiltro = filtro => {
    switch (filtro) {
      case 'Masculino':
        console.log('Switch Masculino');
        setNoticiaP(noticiasMasculino[0]);
        setNoticia1(noticiasMasculino[1]);
        setNoticia2(noticiasMasculino[2]);

        break;
      case 'Femenino':
        console.log('Switch Femenino');
        setNoticiaP(noticiasFemenino[0]);
        setNoticia1(noticiasFemenino[1]);
        setNoticia2(noticiasFemenino[2]);
        break;
      case 'Inferiores':
        console.log('Switch Inferiores');
        setNoticiaP(noticiasInferiores[0]);
        setNoticia1(noticiasInferiores[1]);
        setNoticia2(noticiasInferiores[2]);
        break;
      default:
        break;
    }
  };
  return (
    <div className="LP-Inicio">
      <div className="LI-Inicio Margen-inicio seccion-somos">
        <div className="CP-Somos">
          <div className="CI-Somos-frase">
            <img alt="" src={SomosFrase}></img>
          </div>
          <div className="CI-Somos-redes">
            <div className="I-Redes">
              <div className="red-social">
                <Link className="" to="/">
                  <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
                </Link>
                <Link className="" to="/">
                  <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
                </Link>
                <Link className="" to="/">
                  <BsInstagram className="iconos-Redes-Sociales"></BsInstagram>
                </Link>
                <Link className="" to="/">
                  <BsYoutube className="iconos-Redes-Sociales"></BsYoutube>
                </Link>
              </div>
            </div>
          </div>

          <div className="CI-Somos-radio">
            <Radio />
          </div>
        </div>
      </div>
      {/* SECCION VIVO */}
      <div className="LI-Inicio seccion-vivo Margen-Vivo">
        <div className="CP-Vivo">
          <div className="CI-Componente-Vivo">
            <Vivo video={videoVivoPrueba} />
          </div>
          <div className="CI-Chat-Vivo">
            <p>MINUTO A MINUTO</p>
            <div className="componente-Chat-Vivo"></div>
          </div>
          <div className="CI-Publicidad-Vivo">
            <img alt="" src={publicidadLarga}></img>
          </div>
        </div>
      </div>
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador margenes-Responsive-Seccion-Marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <div className="titulo-Marcador">
              <h1>PARTIDOS</h1>
            </div>
            <div className="componente-Marcador">
              <Marcador />
            </div>
          </div>
          <div className="CI-Publicidad-Marcador">
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
            <div>
              <img alt="" src={publicidadCorta}></img>
            </div>
          </div>
        </div>
      </div>
      {/* SECCION NOTICIAS */}
      <div className="LI-Inicio seccion-noticias  Margen-Noticias">
        <div className="CP-Noticias">
          <div className="titulo-Seccion-Noticias">
            <h1>NOTICIAS</h1>
          </div>
          <div className="CI-Filtros">
            <Filtros filtros={Filtro} obtenerFiltro={obtenerFiltro}></Filtros>
          </div>
          <div className="CI-NoticiaPrincipal">
            <div className="componenteNoticiaPrincipal">
              <Link to="/Noticia/Desarrollada" className="estilos-Link">
                <NoticiasMiniatura
                  isSeccionNoticias={true}
                  isSobreImagen={true}
                  datosModelado={noticiaP}
                ></NoticiasMiniatura>
              </Link>
            </div>
          </div>
          <div className="CI-NoticiasMini">
            <div className="noticia-Miniatura-1">
              <NoticiasMiniatura
                isSeccionNoticias={true}
                datosModelado={noticia1}
              ></NoticiasMiniatura>
            </div>
            <div className="noticia-Miniatura-2">
              <NoticiasMiniatura
                isSeccionNoticias={true}
                datosModelado={noticia2}
              ></NoticiasMiniatura>
            </div>
          </div>
          <div className="publicidad-Noticias">
            <img alt="" src={publicidadLarga}></img>
          </div>
        </div>
      </div>

      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria margenes-Galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria-Imagenes">
            <h1 className="titulo-Galeria">GALERÍA</h1>
            <div className="galeria-Imagenes-A">
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
            </div>
            <div className="galeria-Imagenes-B">
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes2}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
              <ImagenesVideo
                DatosDeEntrada={DatosDePruebaImagenes3}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
            </div>
          </div>
          <div className="CI-Galeria-Videos">
            <ImagenesVideo
              DatosDeEntrada={linkVideosInicioGaleria}
              tipoDeSliderFlecha={true}
              tipoVideo={true}
            ></ImagenesVideo>
          </div>
        </div>
      </div>
      <PieDepagina isConFondo={true}></PieDepagina>
    </div>
  );
};

export default Inicio;
