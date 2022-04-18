import React, {useState} from 'react';
import publicidadCorta from '../../Static/Img/anuncio2_corta.jpg';
import './Inicio.css';
import Filtros from '../Filtros/Filtros';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import publicidadLarga2 from '../../Static/Img/anuncio2_larga.jpg';
import publicidadLarga from '../../Static/Img/anuncio_larga.jpg';
// import ImagenesVideo from '../ImagenesVideo/ImagenesVideo';
import Vivo from '../Vivo/Vivo';
import SomosFrase from '../../Static/Img/frase_inicio.png';
import {BsInstagram, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PieDepagina from '../PieDePagina/PieDepagina';
// import {guardarNoticiaMiniaturaSeleccionada_accion} from '../../Redux/Noticias/AccionesNoticias';
import ModalLowa from '../../ComponentesAdmin/ModalLowa/ModalLowa';
import publicidadModal from '../../Static/Img/anuncio-modal.png';
import {server} from '../../Entorno';
import TarjetaEnfrentamiento from '../../ComponentesAdmin/TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import Slider from 'react-slick';
import ImagenSlider from '../ImagenSlider/ImagenSlider';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';
const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Liga', link: '/NoticiaDesarrollada'},
];

const Inicio = () => {
  const {datosPublicos} = useSelector(state => state.sotreDatosIniciales);
  const [partido, setPartido] = useState({
    data: datosPublicos.partidos[0],
    index: 0,
  });

  const [isMostrarModalPublicidad, setIsMostrarModalPublicidad] = useState(true);

  const [noticiaP, setNoticiaP] = useState(datosPublicos.noticias.femenino.noticiaP);
  const [noticia1, setNoticia1] = useState(datosPublicos.noticias.femenino.noticia1);
  const [noticia2, setNoticia2] = useState(datosPublicos.noticias.femenino.noticia2);

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
    dots: false,
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

  const obtenerFiltro = filtro => {
    setNoticiaP(datosPublicos.noticias[filtro.toLowerCase()].noticiaP);
    setNoticia1(datosPublicos.noticias[filtro.toLowerCase()].noticia1);
    setNoticia2(datosPublicos.noticias[filtro.toLowerCase()].noticia2);
  };
  const cerrarModalPublicidad = () => {
    setIsMostrarModalPublicidad(false);
  };
  const redireccionar = url => {
    window.open(url);
  };
  const siguientePartido = respuesta => {
    if (partido.index < datosPublicos.partidos.length - 1) {
      if (partido.index >= 0) {
        if (respuesta === 1) {
          setPartido({
            data: datosPublicos.partidos[partido.index + 1],
            index: partido.index + 1,
          });
        } else {
          setPartido({
            data: datosPublicos.partidos[partido.index - respuesta],
            index: partido.index - 1,
          });
        }
      } else {
        setPartido({
          data: datosPublicos.partidos[0],
          index: 0,
        });
      }
    } else {
      setPartido({
        data: datosPublicos.partidos[0],
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
      {datosPublicos.videoVivo?.isActivo && (
        <div className="LI-Inicio seccion-vivo Margen-Vivo">
          <div className="CP-Vivo">
            <div className="CI-Componente-Vivo">
              <Vivo video={datosPublicos.videoVivo} />
            </div>
            <div className="CI-Chat-Vivo">
              <p>MINUTO A MINUTO</p>
              <div className="componente-Chat-Vivo">
                <iframe
                  title="Vivo"
                  src={datosPublicos.videoVivo?.chat ? datosPublicos.videoVivo.chat : ''}
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
            <div className="CI-Publicidad-Vivo">
              <img alt="" src={publicidadLarga2}></img>
            </div>
          </div>
        </div>
      )}
      {/* SECCION MARCADOR */}
      <div className="LI-Inicio seccion-marcador margenes-Responsive-Seccion-Marcador">
        <div className="CP-Marcador">
          <div className="titulo-Marcador">
            <h1>PARTIDOS</h1>
            <br></br>
          </div>
          <div className="CI-Marcador">
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
                datosPublicos.publicaciones?.partidoDerecha1?.idImagen[0]?.fuente
                  ? server + datosPublicos.publicaciones.partidoDerecha1.idImagen[0].fuente
                  : publicidadCorta
              }
            ></img>
            <img
              className="img-Publicidad-Marcador"
              alt=""
              src={
                datosPublicos.publicaciones?.partidoDerecha2?.idImagen[0]?.fuente
                  ? server + datosPublicos.publicaciones.partidoDerecha2.idImagen[0].fuente
                  : publicidadCorta
              }
            ></img>
          </div>
          <div className="publicidad-Noticias-Partidos">
            <img
              alt=""
              src={
                datosPublicos.publicaciones?.publicidadNoticiaHorizontalBajoPartidos?.idImagen[0]
                  ?.fuente
                  ? server +
                    datosPublicos.publicaciones.publicidadNoticiaHorizontalBajoPartidos.idImagen[0]
                      .fuente
                  : publicidadLarga
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
                to={`/Noticia/Desarrollada/${noticiaP._id}`}
                // onClick={() => {
                //   noticiaSeleccionada(noticiaP);
                // }}
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
                to={`/Noticia/Desarrollada/${noticia1._id}`}
                // onClick={() => {
                //   noticiaSeleccionada(noticia1);
                // }}
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
                to={`/Noticia/Desarrollada/${noticia2._id}`}
                // onClick={() => {
                //   noticiaSeleccionada(noticia2);
                // }}
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
                datosPublicos.publicaciones?.noticiaHorizontalBajo?.idImagen[0]?.fuente
                  ? server + datosPublicos.publicaciones.noticiaHorizontalBajo.idImagen[0].fuente
                  : publicidadLarga2
              }
            ></img>
          </div>
        </div>
      </div>

      {/* SECCION GALERIA */}
      <div className="LI-Inicio seccion-galeria margenes-Galeria">
        <div className="CP-Galeria">
          <h1 className="titulo-Galeria">GALERÍA</h1>
          <div className="galeria-Imagenes-A">
            <div className="I-Contenedor-slider-imagenes">
              {datosPublicos.galerias?.galeria2?.imagenesId && (
                <Slider {...settings} cantidadDeElementos={1}>
                  {datosPublicos.galerias.galeria2.imagenesId.map(datoGaleria => {
                    return (
                      <ImagenSlider
                        tamañoImagen={{height: '700px'}}
                        datos={datoGaleria}
                        descripcion={datosPublicos.galerias.galeria2.tituloGaleria}
                      ></ImagenSlider>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
          <div className="galeria-Imagenes-B">
            <div className="I-Contenedor-slider-imagenes">
              {datosPublicos.galerias?.galeria1?.imagenesId && (
                <Slider {...settings} cantidadDeElementos={1}>
                  {datosPublicos.galerias.galeria1.imagenesId.map(datoGaleria => {
                    return (
                      <ImagenSlider
                        datos={datoGaleria}
                        descripcion={datosPublicos.galerias.galeria1.tituloGaleria}
                      ></ImagenSlider>
                    );
                  })}
                </Slider>
              )}
            </div>
            <div className="I-Contenedor-slider-imagenes">
              {datosPublicos.galerias?.galeria3?.imagenesId && (
                <Slider {...settings} cantidadDeElementos={0}>
                  {datosPublicos.galerias.galeria3.imagenesId.map(datoGaleria => {
                    return (
                      <ImagenSlider
                        datos={datoGaleria}
                        descripcion={datosPublicos.galerias.galeria3.tituloGaleria}
                      ></ImagenSlider>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
          <div className="galeria-Imagenes-C">
            <div className="I-Contenedor-slider-imagenes">
              {datosPublicos.galerias?.galeria4?.imagenesId && (
                <Slider {...settings} cantidadDeElementos={1}>
                  {datosPublicos.galerias.galeria4.imagenesId.map(datoGaleria => {
                    return (
                      <ImagenSlider
                        datos={datoGaleria}
                        descripcion={datosPublicos.galerias.galeria4.tituloGaleria}
                      ></ImagenSlider>
                    );
                  })}
                </Slider>
              )}
            </div>
            <div className="I-Contenedor-slider-imagenes">
              {datosPublicos.galerias?.galeria5?.imagenesId && (
                <Slider {...settings} cantidadDeElementos={0}>
                  {datosPublicos.galerias.galeria5.imagenesId.map(datoGaleria => {
                    return (
                      <ImagenSlider
                        datos={datoGaleria}
                        descripcion={datosPublicos.galerias.galeria5.tituloGaleria}
                      ></ImagenSlider>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>

          <div className="publicidad-Noticias-Galeria">
            <img
              alt=""
              src={
                datosPublicos.publicaciones?.publicidadNoticiaHorizontalBajoGaleria?.idImagen[0]
                  ? server +
                    datosPublicos.publicaciones.publicidadNoticiaHorizontalBajoGaleria.idImagen[0]
                      .fuente
                  : publicidadLarga
              }
            ></img>
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
            datosPublicos.publicaciones?.publicidadInicioModal?.idImagen[0]
              ? server + datosPublicos.publicaciones.publicidadInicioModal.idImagen[0]
              : publicidadModal
          }
        ></img>
      </ModalLowa>
    </div>
  );
};

export default Inicio;
