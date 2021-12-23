import React, {useLayoutEffect, useState} from 'react';
import Marcador from '../Marcador/Marcador';
/* import PieDepagina from '../PieDePagina/PieDepagina'; */
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {useDispatch, useSelector} from 'react-redux';
import publicidadLarga from '../../Static/Img/publicidad_larga.jpg';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
// import Vivo from '../Vivo/Vivo';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Radio from '../Radio/Radio';
import PieDepagina from '../PieDePagina/PieDepagina';
import {guardarNoticiaMiniaturaSeleccionada_accion} from '../../Redux/Noticias/AccionesNoticias';
import ModalLowa from '../../ComponentesAdmin/ModalLowa/ModalLowa';
import publicidadModal from '../../Static/Img/publicidad-modal.png';
import {urlImagenes} from '../../urlImagenes';
import {controlModalPublicidad_accion} from '../../Redux/DatosInciales/AccionesDatosIniciales';
const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Liga', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  const dispatch = useDispatch();
  const {noticias} = useSelector(state => state.storeNoticias);
  const {isMostrarModalPublicidad} = useSelector(state => state.sotreDatosIniciales);
  const {publicidades} = useSelector(state => state.storePublicidades);

  const {galerias} = useSelector(state => state.storeGalerias);

  // const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [noticiaP, setNoticiaP] = useState({});
  const [noticia1, setNoticia1] = useState({});
  const [noticia2, setNoticia2] = useState({});
  const [publicaciones, setPublicaciones] = useState(null);
  const [galeria, setGaleria] = useState({galeria1: [], galeria2: [], galeria3: []});

  const FiltrarNoticias = keyCategoria => {
    return new Promise((resolve, reject) => {
      var filtradoDeNoticia = noticias.filter(noticia => noticia.keyCategoria === keyCategoria);
      resolve(filtradoDeNoticia);
    });
  };
  const noticiaSeleccionada = noticiaRecibida => {
    dispatch(guardarNoticiaMiniaturaSeleccionada_accion(noticiaRecibida));
  };
  useLayoutEffect(() => {
    // CARGA DE PUBLICIDADES
    let publicidadPartidoDerecha1;
    let publicidadPartidoDerecha2;
    let publicidadNoticiaHorizontalBajo;
    let publicidadModalInicio;
    publicidades.forEach(publicidad => {
      switch (publicidad.idMedidas[0].keyMedidas) {
        case 1:
          if (publicidad.isActiva) {
            publicidadPartidoDerecha1 = publicidad;
          }
          break;
        case 2:
          if (publicidad.isActiva) {
            publicidadPartidoDerecha2 = publicidad;
          }
          break;
        case 5:
          if (publicidad.isActiva) {
            publicidadModalInicio = publicidad;
          }
          break;
        case 6:
          if (publicidad.isActiva) {
            publicidadNoticiaHorizontalBajo = publicidad;
          }
          break;

        default:
          break;
      }
    });
    setPublicaciones({
      partidoDerecha1: publicidadPartidoDerecha1,
      partidoDerecha2: publicidadPartidoDerecha2,
      noticiaHorizontalBajo: publicidadNoticiaHorizontalBajo,
      publicidadInicioModal: publicidadModalInicio,
    });

    var noticiasFiltradas = noticias.filter(noticia => noticia.keyCategoria === 2);
    if (noticiasFiltradas[0]) {
      setNoticiaP(noticiasFiltradas[0]);
    }
    if (noticiasFiltradas[1]) {
      setNoticia1(noticiasFiltradas[1]);
    }
    if (noticiasFiltradas[2]) {
      setNoticia2(noticiasFiltradas[2]);
    }

    var auxGaleriasImagenes = galerias.map((galeria, index) => {
      if (Object.keys(galeria).length > 0) {
        return galeria;
      } else return {};
    });
    var ultimoIndice = auxGaleriasImagenes.length;

    setGaleria({
      galeria1: auxGaleriasImagenes[ultimoIndice - 3] ? auxGaleriasImagenes[ultimoIndice - 3] : {},
      galeria2: auxGaleriasImagenes[ultimoIndice - 2] ? auxGaleriasImagenes[ultimoIndice - 2] : {},
      galeria3: auxGaleriasImagenes[ultimoIndice - 1] ? auxGaleriasImagenes[ultimoIndice - 1] : {},
    });
  }, [setNoticiaP, setNoticia1, setNoticia2, noticias, setGaleria, galerias, publicidades]);

  /* const {DatosDePruebaImagenes, DatosDePruebaImagenes2, DatosDePruebaImagenes3} = useSelector(
    state => state.storePrueba
  ); */

  const {linkVideosInicioGaleria} = useSelector(state => state.sotreDatosIniciales);
  // const videoVivoPrueba = {fuente: 'MmysMu3mgvw'};
  const obtenerFiltro = filtro => {
    switch (filtro) {
      case 'Masculino':
        FiltrarNoticias(1).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          }
        });
        break;
      case 'Femenino':
        FiltrarNoticias(2).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          }
        });
        break;
      case 'Liga':
        FiltrarNoticias(3).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          }
        });
        break;
      default:
        break;
    }
  };
  const cerrarModalPublicidad = () => {
    dispatch(controlModalPublicidad_accion());
  };
  const redireccionar = url => {
    window.open(url);
  };

  console.log(galerias);
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
                <div onClick={() => redireccionar('https://www.facebook.com/ElShowdelFutsal')}>
                  <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
                </div>
                <div onClick={() => redireccionar()}>
                  <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
                </div>
                <div onClick={() => redireccionar('https://www.instagram.com/elshowdelfutsal/')}>
                  <BsInstagram className="iconos-Redes-Sociales"></BsInstagram>
                </div>
                <div
                  onClick={() =>
                    redireccionar('https://www.youtube.com/channel/UCPigWjVAL4yAFBbXOyElpmA')
                  }
                >
                  <BsYoutube className="iconos-Redes-Sociales"></BsYoutube>
                </div>
              </div>
            </div>
          </div>

          <div className="CI-Somos-radio">
            <Radio />
          </div>
        </div>
      </div>
      {/* SECCION VIVO */}
      {/* <div className="LI-Inicio seccion-vivo Margen-Vivo">
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
      </div> */}
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
            <div className="tamañoPublicidadDerechaInicio">
              <img
                alt=""
                src={
                  publicaciones
                    ? publicaciones.partidoDerecha1
                      ? urlImagenes + publicaciones.partidoDerecha1.idImagen[0].fuente
                      : publicidadCorta
                    : publicidadCorta
                }
              ></img>
            </div>
            <div className="tamañoPublicidadDerechaInicio">
              <img
                alt=""
                src={
                  publicaciones
                    ? publicaciones.partidoDerecha2
                      ? urlImagenes + publicaciones.partidoDerecha2.idImagen[0].fuente
                      : publicidadCorta
                    : publicidadCorta
                }
              ></img>
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
              <Link
                to="/Noticia/Desarrollada"
                onClick={() => {
                  noticiaSeleccionada(noticiaP);
                }}
                className="estilos-Link"
              >
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
            <img
              alt=""
              src={
                publicaciones
                  ? publicaciones.noticiaHorizontalBajo
                    ? urlImagenes + publicaciones.noticiaHorizontalBajo.idImagen[0].fuente
                    : publicidadLarga
                  : publicidadLarga
              }
            ></img>
            {/* publicidadLarga */}
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
                descripcion={galeria.galeria2.tituloGaleria}
                DatosDeEntrada={galeria.galeria2.imagenesId}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
            </div>
            <div className="galeria-Imagenes-B">
              <ImagenesVideo
                descripcion={galeria.galeria1.tituloGaleria}
                DatosDeEntrada={galeria.galeria1.imagenesId}
                tipoDeSliderFlecha={false}
              ></ImagenesVideo>
              <ImagenesVideo
                descripcion={galeria.galeria3.tituloGaleria}
                DatosDeEntrada={galeria.galeria3.imagenesId}
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
      <ModalLowa
        isMostrar={isMostrarModalPublicidad}
        cerrarModalLowa={() => cerrarModalPublicidad()}
      >
        <img
          alt=""
          className="publicidadModalLowa"
          src={
            publicaciones
              ? publicaciones.publicidadInicioModal
                ? urlImagenes + publicaciones.publicidadInicioModal.idImagen[0].fuente
                : publicidadModal
              : publicidadModal
          }
        ></img>
      </ModalLowa>
    </div>
  );
};

export default Inicio;
