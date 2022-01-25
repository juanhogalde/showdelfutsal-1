import React, {useLayoutEffect, useState} from 'react';
import publicidadCorta from '../../Static/Img/publicidad_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import {useDispatch, useSelector} from 'react-redux';
import publicidadLarga from '../../Static/Img/publicidad_larga.jpg';
import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Vivo from '../Vivo/Vivo';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Radio from '../Radio/Radio';
import PieDepagina from '../PieDePagina/PieDepagina';
import {guardarNoticiaMiniaturaSeleccionada_accion} from '../../Redux/Noticias/AccionesNoticias';
import ModalLowa from '../../ComponentesAdmin/ModalLowa/ModalLowa';
import publicidadModal from '../../Static/Img/publicidad-modal.png';
import {urlDominio, urlImagenes} from '../../urlImagenes';
import {controlModalPublicidad_accion} from '../../Redux/DatosInciales/AccionesDatosIniciales';
import TarjetaEnfrentamiento from '../../ComponentesAdmin/TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import Slider from 'react-slick';
import ImagenSlider from '../ImagenSlider/ImagenSlider';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';

const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Liga', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  const dispatch = useDispatch();
  const {noticias} = useSelector(state => state.storeNoticias);
  const {partidos} = useSelector(state => state.storePartidos);
  const {isMostrarModalPublicidad} = useSelector(state => state.sotreDatosIniciales);
  const {vivo} = useSelector(state => state.storeVivo);
  const {publicidades} = useSelector(state => state.storePublicidades);

  const {galerias} = useSelector(state => state.storeGalerias);
  const [partido, setPartido] = useState({
    data: {},
    index: 0,
  });
  const [videosGaleria, setVideosGaleria] = useState([]);
  // const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [videoVivo, setVideoVivo] = useState({});
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
    //CARGA DE PARTIDOS
    setPartido({
      data: partidos[0],
      index: 0,
    });
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
    // CARGA DE NOTICIAS
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
    //CARGA DE GALERIAS

    var auxGaleriasImagenes = [];
    if (galerias.length) {
      auxGaleriasImagenes = galerias.filter(element => element.imagenesId.length !== 0);
      // auxGaleriasImagenes = galerias.for(galeria => {
      //   if (Object.keys(galeria).length > 0 && galeria.imagenesId.length !== 0) {
      //     return galeria;
      //   }
      // });
    }
    var ultimoIndice = auxGaleriasImagenes.length;
    setGaleria({
      galeria1: auxGaleriasImagenes[ultimoIndice - 3] ? auxGaleriasImagenes[ultimoIndice - 3] : {},
      galeria2: auxGaleriasImagenes[ultimoIndice - 2] ? auxGaleriasImagenes[ultimoIndice - 2] : {},
      galeria3: auxGaleriasImagenes[ultimoIndice - 1] ? auxGaleriasImagenes[ultimoIndice - 1] : {},
    });

    var galeriasTipoVideos = galerias.filter(galeria => galeria.videosId.length !== 0);
    if (galeriasTipoVideos.length) {
      setVideosGaleria(galeriasTipoVideos[galeriasTipoVideos.length - 1].videosId);
    }

    //CARGA DE VIDEO EN VIVO
    if (vivo.urlVivo) {
      let urlFinal;
      if (vivo.urlVivo.indexOf('video') !== -1) {
        let posinicial = vivo.urlVivo.indexOf('video') + 6;
        let posicionFinal = vivo.urlVivo.indexOf('/livestreaming');
        urlFinal = vivo.urlVivo.substr(posinicial, posicionFinal - posinicial);
      } else {
        let posinicial = vivo.urlVivo.indexOf('be/') + 3;
        urlFinal = vivo.urlVivo.substr(posinicial, vivo.urlVivo.length - posinicial);
      }
      let urlChat = `https://www.youtube.com/live_chat?v=${urlFinal}&embed_domain=${urlDominio}`;
      setVideoVivo({fuente: urlFinal, chat: urlChat, isActivo: vivo.isActivo});
    } else {
      setVideoVivo({});
    }
  }, [
    partidos,
    setNoticiaP,
    setNoticia1,
    setNoticia2,
    noticias,
    setGaleria,
    galerias,
    publicidades,
    setVideosGaleria,
    vivo,
  ]);

  /* =========== COMPONENTE SLIDER =========== */

  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div className="I-Contenedor-flecha-derecha">
        <div
          className={`${
            props.isVertical ? 'flechaNextVertical' : 'flechaSiguiente I-Contenedor-flecha-derecha'
          }`}
          onClick={onClick}
        >
          <AiFillCaretRight size={20} className="flecha"></AiFillCaretRight>
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
        className={`${
          props.isVertical
            ? 'flechaPrevVertical I-Contenedor-flecha-izquierda'
            : 'flechaAnterior I-Contenedor-flecha-izquierda'
        }`}
        onClick={onClick}
      >
        <AiFillCaretLeft size={20} className="flecha"></AiFillCaretLeft>
      </div>
    );
  }

  const settings = {
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'ease-in-out',
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          /* dots: true, */
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /* =========== FIN COMPONENTE SLIDER =========== */

  /* const {DatosDePruebaImagenes, DatosDePruebaImagenes2, DatosDePruebaImagenes3} = useSelector(
    state => state.storePrueba
  ); */

  // const videoVivoPrueba = {fuente: 'ZFx0BuHzTxU'};
  const obtenerFiltro = filtro => {
    switch (filtro) {
      case 'Masculino':
        FiltrarNoticias(1).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          } else {
            setNoticiaP({});
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          } else {
            setNoticia1({});
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          } else {
            setNoticia2({});
          }
        });
        break;
      case 'Femenino':
        FiltrarNoticias(2).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          } else {
            setNoticiaP({});
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          } else {
            setNoticia1({});
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          } else {
            setNoticia2({});
          }
        });
        break;
      case 'Liga':
        FiltrarNoticias(3).then(noticiasFiltradas => {
          if (noticiasFiltradas[0]) {
            setNoticiaP(noticiasFiltradas[0]);
          } else {
            setNoticiaP({});
          }
          if (noticiasFiltradas[1]) {
            setNoticia1(noticiasFiltradas[1]);
          } else {
            setNoticia1({});
          }
          if (noticiasFiltradas[2]) {
            setNoticia2(noticiasFiltradas[2]);
          } else {
            setNoticia2({});
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
  const siguientePartido = respuesta => {
    console.log(respuesta);
    if (partido.index < partidos.length - 1) {
      if (partido.index >= 0) {
        if (respuesta === 1) {
          setPartido({
            data: partidos[partido.index + 1],
            index: partido.index + 1,
          });
        } else {
          setPartido({data: partidos[partido.index - respuesta], index: partido.index - 1});
        }
      } else {
        setPartido({
          data: partidos[0],
          index: 0,
        });
      }
    } else {
      setPartido({
        data: partidos[0],
        index: 0,
      });
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
                <div onClick={() => redireccionar('https://www.facebook.com/ElShowdelFutsal')}>
                  <FaFacebookF className="iconos-Redes-Sociales"></FaFacebookF>
                </div>
                {/*  <div onClick={() => redireccionar()}>
                  <BsTwitter className="iconos-Redes-Sociales"></BsTwitter>
                </div> */}
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

          {/* <div className="CI-Somos-radio">
            <Radio />
          </div> */}
        </div>
      </div>
      {/* SECCION VIVO */}
      {videoVivo.isActivo && (
        <div className="LI-Inicio seccion-vivo Margen-Vivo">
          <div className="CP-Vivo">
            <div className="CI-Componente-Vivo">
              <Vivo video={videoVivo} />
            </div>
            <div className="CI-Chat-Vivo">
              <p>MINUTO A MINUTO</p>
              <div className="componente-Chat-Vivo">
                <iframe
                  title="Vivo"
                  src={videoVivo.chat ? videoVivo.chat : ''}
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
            <div className="CI-Publicidad-Vivo">
              <img alt="" src={publicidadLarga}></img>
            </div>
          </div>
        </div>
      )}
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador margenes-Responsive-Seccion-Marcador">
        <div className="CP-Marcador">
          <div className="CI-Marcador">
            <div className="titulo-Marcador">
              <h1>PARTIDOS</h1>
              <br></br>
            </div>
            <div className="componente-Marcador">
              {/* <Marcador /> */}
              <TarjetaEnfrentamiento
                enfrentamiento={partido.data}
                isSeccionInicio={true}
                siguientePartido={siguientePartido}
              ></TarjetaEnfrentamiento>
            </div>
          </div>
          <div className="CI-Publicidad-Marcador">
            <img
              alt=""
              className="img-Publicidad-Marcador"
              src={
                publicaciones
                  ? publicaciones.partidoDerecha1
                    ? urlImagenes + publicaciones.partidoDerecha1.idImagen[0].fuente
                    : publicidadCorta
                  : publicidadCorta
              }
            ></img>
            <img
              className="img-Publicidad-Marcador"
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
              <Link
                to="/Noticia/Desarrollada"
                onClick={() => {
                  noticiaSeleccionada(noticia1);
                }}
                className="estilos-Link"
              >
                <NoticiasMiniatura
                  isSeccionNoticias={true}
                  datosModelado={noticia1}
                ></NoticiasMiniatura>
              </Link>
            </div>
            <div className="noticia-Miniatura-2">
              <Link
                to="/Noticia/Desarrollada"
                onClick={() => {
                  noticiaSeleccionada(noticia2);
                }}
                className="estilos-Link"
              >
                <NoticiasMiniatura
                  isSeccionNoticias={true}
                  datosModelado={noticia2}
                ></NoticiasMiniatura>
              </Link>
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
          </div>
        </div>
      </div>

      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria margenes-Galeria">
        <div className="CP-Galeria">
          <div className="CI-Galeria-Imagenes">
            <h1 className="titulo-Galeria">GALERÍA</h1>
            <div className="galeria-Imagenes-A">
              <div className="I-Contenedor-slider-imagenes">
                {galeria.galeria2.imagenesId && (
                  <Slider {...settings} cantidadDeElementos={1}>
                    {galeria.galeria2.imagenesId.map(datoGaleria => {
                      return (
                        <ImagenSlider
                          tamañoImagen={{height: '700px'}}
                          datos={datoGaleria}
                          descripcion={galeria.galeria2.tituloGaleria}
                        ></ImagenSlider>
                      );
                    })}
                  </Slider>
                )}
              </div>
            </div>
            <div className="galeria-Imagenes-B">
              <div className="I-Contenedor-slider-imagenes">
                {galeria.galeria1.imagenesId && (
                  <Slider {...settings} cantidadDeElementos={1}>
                    {galeria.galeria1.imagenesId.map(datoGaleria => {
                      return (
                        <ImagenSlider
                          datos={datoGaleria}
                          descripcion={galeria.galeria1.tituloGaleria}
                        ></ImagenSlider>
                      );
                    })}
                  </Slider>
                )}
              </div>
              <div className="I-Contenedor-slider-imagenes">
                {galeria.galeria3.imagenesId && (
                  <Slider {...settings} cantidadDeElementos={0}>
                    {galeria.galeria3.imagenesId.map(datoGaleria => {
                      return (
                        <ImagenSlider
                          datos={datoGaleria}
                          descripcion={galeria.galeria3.tituloGaleria}
                        ></ImagenSlider>
                      );
                    })}
                  </Slider>
                )}
              </div>
            </div>
          </div>
          <div className="CI-Galeria-Videos">
            <ImagenesVideo
              DatosDeEntrada={videosGaleria}
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
