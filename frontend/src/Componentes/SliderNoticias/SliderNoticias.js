import React from 'react';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './SliderNoticias.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
}) => {
  const noticias = useSelector(state => state.storePrueba.noticias);
  /* const noticia = useSelector(state => state.storePrueba.noticias3); */

  var settings = {
    speed: 1000,
    slidesToShow: cantidadDeElementos,
    slidesToScroll: cantidadDeElementos,
    vertical: isVertical,
    verticalSwiping: isVertical,
    nextArrow: <SampleNextArrow isVertical={isVertical} />,
    prevArrow: <SamplePrevArrow isVertical={isVertical} />,
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
        {noticias.map((noticia, index) => {
          return (
            <div key={index}>
              <NoticiasMiniatura
                isConCopete={isConCopete}
                isParaSlider={true}
                datosModelado={noticia}
                isSeccionNoticias={isConCopete}
                /* isSobreImagen={isConCopete} */
              ></NoticiasMiniatura>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

/* export default SliderNoticias; */
