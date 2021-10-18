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
    <div className="flechaNext" onClick={onClick}>
      <AiFillCaretRight className="flecha"></AiFillCaretRight>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div className="flechaPrev" onClick={onClick}>
      <AiFillCaretLeft className="flecha"></AiFillCaretLeft>
    </div>
  );
}
export const SliderNoticias = (/* {noticias = []} */) => {
  const noticias = useSelector(state => state.storePrueba.noticias);
  /* const noticia = useSelector(state => state.storePrueba.noticias3); */

  var settings = {
    speed: 1000,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="containerSlider">
      <Slider {...settings}>
        {noticias.map((noticia, index) => {
          return (
            <div key={index}>
              <NoticiasMiniatura isParaSlider={true} datosModelado={noticia}></NoticiasMiniatura>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

/* export default SliderNoticias; */
