import React, {useLayoutEffect, useState} from 'react';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SliderNoticias.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

function SampleNextArrow(props) {
  const {onClick} = props;
  return (
    <div className={`${props.isVertical ? 'flechaNextVertical' : 'flechaNext'}`} onClick={onClick}>
      <AiFillCaretRight className="flecha"></AiFillCaretRight>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div className={`${props.isVertical ? 'flechaPrevVertical' : 'flechaPrev'}`} onClick={onClick}>
      <AiFillCaretLeft className="flecha"></AiFillCaretLeft>
    </div>
  );
}
export const SliderNoticias = ({
  cantidadDeElementos = 4,
  isVertical = false,

  isConCopete = false,
  categoriaNoticias,
  subcategoriaNoticia,
}) => {
  const {noticias} = useSelector(state => state.storeNoticias);
  const [noticiaAmostrar, setNoticiaAmostrar] = useState([]);
  /* const noticia = useSelector(state => state.storePrueba.noticias3); */
  useLayoutEffect(() => {
    if (categoriaNoticias) {
      var noticiasFiltradas = [];
      if (subcategoriaNoticia) {
        noticiasFiltradas = noticias.filter(
          noticia =>
            noticia.keyCategoria === categoriaNoticias &&
            noticia.keySubcategoria === parseInt(subcategoriaNoticia)
        );
      } else {
        noticiasFiltradas = noticias.filter(noticia => noticia.keyCategoria === categoriaNoticias);
      }
      setNoticiaAmostrar(noticiasFiltradas);
    } else {
      setNoticiaAmostrar(noticias);
    }
  }, [setNoticiaAmostrar, noticias, categoriaNoticias, subcategoriaNoticia]);
  var settings = {
    adaptiveHeight: true,
    slidesToShow: cantidadDeElementos,
    slidesToScroll: cantidadDeElementos,
    vertical: isVertical,
    verticalSwiping: isVertical,
    nextArrow: <SampleNextArrow isVertical={isVertical} />,
    prevArrow: <SamplePrevArrow isVertical={isVertical} />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          /* dots: true, */
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="containerSlider">
      <Slider {...settings}>
        {noticiaAmostrar.map((noticia, index) => {
          return (
            <div key={index}>
              <Link to={`/Noticia/Desarrollada/${noticia._id}`} className="estilos-Link">
                <NoticiasMiniatura
                  isConCopete={isConCopete}
                  isParaSlider={true}
                  datosModelado={noticia}
                  isSeccionNoticias={isConCopete}
                  /* isSobreImagen={isConCopete} */
                ></NoticiasMiniatura>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

/* export default SliderNoticias; */
