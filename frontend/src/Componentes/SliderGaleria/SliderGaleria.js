import React, {useLayoutEffect, useState} from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import {urlImagenes} from '../../urlImagenes';
import '../SliderGaleria/SliderGaleria.css';
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
const SliderGaleria = ({cantidadDeElementos = 3, isVertical = false, categoriaGaleria = -1}) => {
  const [galeriaFiltrada, setGaleriaFiltrada] = useState([]);
  const {galerias} = useSelector(state => state.storeGalerias);
  useLayoutEffect(() => {
    var galeriaEncontrada = galerias.filter(element => element.keyCategoria === categoriaGaleria);
    console.log(galeriaEncontrada);
    if (galeriaEncontrada.length) {
      setGaleriaFiltrada(galeriaEncontrada[galeriaEncontrada.length - 1]);
    }
  }, [galerias, setGaleriaFiltrada, categoriaGaleria]);
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
    <div>
      <div className="centrar-titulo-galeria">
        <br></br>
        {galeriaFiltrada.imagenesId && galeriaFiltrada.imagenesId.length !== 0 && <h4>GALERÍA</h4>}
        <br></br>
      </div>
      <Slider {...settings}>
        {galeriaFiltrada.imagenesId &&
          galeriaFiltrada.imagenesId.map((imagen, index) => {
            return (
              <div key={index}>
                <img width="350px" height="250px" alt="" src={urlImagenes + imagen.fuente}></img>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SliderGaleria;
