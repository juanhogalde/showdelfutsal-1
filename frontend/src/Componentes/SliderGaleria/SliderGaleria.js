import React, {useLayoutEffect, useState} from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import Slider from 'react-slick';
import {server} from '../../Entorno';
import '../SliderGaleria/SliderGaleria.css';
function SampleNextArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`${props.isVertical ? 'flechaNextVerticalGaleria' : 'flechaNextGaleria'}`}
      onClick={onClick}
    >
      <AiFillCaretRight className="flechaGaleria"></AiFillCaretRight>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return (
    <div
      className={`${props.isVertical ? 'flechaPrevVerticalGaleria' : 'flechaPrevGaleria'}`}
      onClick={onClick}
    >
      <AiFillCaretLeft className="flechaGaleria"></AiFillCaretLeft>
    </div>
  );
}
const SliderGaleria = ({
  cantidadDeElementos = 3,
  isVertical = false,
  categoriaGaleria = -1,
  mostrarTituloGaleria = true,
  tamañoImagen = {width: '350px', heigth: '250px'},
}) => {
  const [galeriaFiltrada, setGaleriaFiltrada] = useState([]);
  const {galerias} = useSelector(state => state.storeGalerias);
  useLayoutEffect(() => {
    var galeriaEncontrada = galerias.filter(element => element.keyCategoria === categoriaGaleria);
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
      {mostrarTituloGaleria && (
        <div className="centrar-titulo-galeria">
          <br></br>
          {galeriaFiltrada.imagenesId && galeriaFiltrada.imagenesId.length !== 0 && (
            <h4>GALERÍA</h4>
          )}
          <br></br>
        </div>
      )}
      <Slider {...settings}>
        {galeriaFiltrada.imagenesId &&
          galeriaFiltrada.imagenesId.map((imagen, index) => {
            return (
              <div className="cuerpo-imagen-galeria" key={index}>
                <img
                  width={tamañoImagen.width}
                  height={tamañoImagen.heigth}
                  alt="imagen"
                  src={server + imagen.fuente}
                ></img>
                {/* <div className="decripcion-galeriaVideo">
                  <h4>{galeriaFiltrada.descripcion}</h4>
                </div> */}
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SliderGaleria;
