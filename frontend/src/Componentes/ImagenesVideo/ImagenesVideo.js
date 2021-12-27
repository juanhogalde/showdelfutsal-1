import React, {useLayoutEffect, useState} from 'react';
import '../ImagenesVideo/ImagenesVideo.css';
import {urlImagenes} from '../../urlImagenes';
import {AiFillCaretLeft, AiFillCaretRight, AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
const ImagenesVideo = ({
  DatosDeEntrada = [],
  tipoDeSliderFlecha = true,
  tipoVideo = false,
  sinDescripcion = false,
  isConBorder = false,
  isDatosStatic = false,
  descripcion = '',
  isGaleriaPrincipal = false,
}) => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileIPhone = userAgent.indexOf('iPhone'); // para detectar si se esta desde un android o iphone
  const isMobileAndroid = userAgent.indexOf('Android');
  const [indiceActual, setIndiceActual] = useState(0);
  const [ocultarFlechasVideo, setOcultarFlechasVideo] = useState({});
  const [dataActual, setDataActual] = useState({});
  const [siguientedataActual, setSiguientedataActual] = useState({});
  useLayoutEffect(() => {
    if (DatosDeEntrada.length) {
      setDataActual(DatosDeEntrada[0]);
      if (DatosDeEntrada.length > 1) {
        setSiguientedataActual(DatosDeEntrada[1]);
      }
    }
    if (DatosDeEntrada.length === 2 || DatosDeEntrada.length === 1) {
      setOcultarFlechasVideo({
        flechaArriba: true,
        flechaAbajo: true,
      });
    } else {
      setOcultarFlechasVideo({
        flechaArriba: false,
        flechaAbajo: true,
      });
    }
  }, [setDataActual, DatosDeEntrada, setSiguientedataActual, setOcultarFlechasVideo]);

  const cambioDeImagen = index => {
    setDataActual(DatosDeEntrada[index]);
    setIndiceActual(index);
  };

  const cambioDeImagenVideoFlecha = (direccion, origen) => {
    let contador = indiceActual;

    if (direccion) {
      contador += 1;
      if (contador >= DatosDeEntrada.length) {
        contador = 0;
      }
    } else {
      contador -= 1;
      if (contador < 0) {
        contador = DatosDeEntrada.length - 1;
      }
    }
    if (direccion) {
      if (isMobileAndroid === -1 && isMobileIPhone === -1) {
        if (contador + 1 === DatosDeEntrada.length - 1) {
          setOcultarFlechasVideo({flechaArriba: true, flechaAbajo: false});
        } else {
          setOcultarFlechasVideo({flechaArriba: false, flechaAbajo: false});
        }
      } else {
        if (contador + 1 === DatosDeEntrada.length) {
          setOcultarFlechasVideo({flechaArriba: true, flechaAbajo: false});
        } else {
          setOcultarFlechasVideo({flechaArriba: false, flechaAbajo: false});
        }
      }
    } else {
      if (indiceActual - 1 === 0) {
        setOcultarFlechasVideo({flechaArriba: false, flechaAbajo: true});
      } else {
        setOcultarFlechasVideo({flechaArriba: false, flechaAbajo: false});
      }
    }
    setIndiceActual(contador);
    setDataActual(DatosDeEntrada[contador]);
    setSiguientedataActual(DatosDeEntrada[contador + 1]);
  };

  // const cambioDeVideoFlecha = direccion =>{
  //   let contadorVideo = indiceActual;
  //   if (direccion) {
  //     contadorVideo += 1;
  //     if (contadorVideo >= DatosDeEntrada.length) {
  //       contadorVideo = 0;
  //     }
  //   } else {
  //     contadorVideo -= 1;
  //     if (contadorVideo < 0) {
  //       contadorVideo = DatosDeEntrada.length - 1;
  //     }
  //   }
  //   setIndiceActual(contadorVideo);
  //   setDataActual(DatosDeEntrada[contadorVideo]);
  // }

  return DatosDeEntrada.length !== 0 ? (
    <div className="CP-imagenesVideo">
      {tipoVideo && !ocultarFlechasVideo.flechaArriba && (
        <button
          onClick={() => {
            cambioDeImagenVideoFlecha(true, 'video');
          }}
          className="flechas-diseño-arriba-imagenesVideo"
        >
          <AiFillCaretUp className="flecha-Arriba" />
        </button>
      )}

      <div className="flechas-mas-cuerpo-imagenesVideo">
        {((tipoDeSliderFlecha && !tipoVideo) || (!tipoVideo && DatosDeEntrada.length > 6)) && (
          <button
            onClick={() => {
              cambioDeImagenVideoFlecha(false, 'img');
            }}
            className="flechas-diseño-izq-imagenesVideo flechas-diseño-Active"
          >
            <AiFillCaretLeft />
          </button>
        )}
        {((tipoDeSliderFlecha && !tipoVideo) || (!tipoVideo && DatosDeEntrada.length > 6)) && (
          <button
            onClick={() => {
              cambioDeImagenVideoFlecha(true, 'img');
            }}
            className="flechas-diseño-der-imagenesVideo flechas-diseño-Active"
          >
            <AiFillCaretRight />
          </button>
        )}
        <div className="cuerpo-imagenesVideo">
          {/* VIDEO */}
          {tipoVideo &&
            (DatosDeEntrada.length > 1 && isMobileAndroid === -1 && isMobileIPhone === -1 ? (
              <React.Fragment>
                <div className="CI-Videos">
                  <iframe
                    className={
                      isConBorder ? 'video-con-borde-imagenesVideo ' : 'video-imagenesVideo'
                    }
                    src={`https://www.youtube-nocookie.com/embed/${dataActual.fuente}`}
                    title="sadasd"
                  ></iframe>
                  <div className="decripcion-imagenesVideo2">
                    <h4>{dataActual.descripcion}</h4>
                  </div>
                </div>
                <div className="CI-Videos oculta-Video-Responsive">
                  <iframe
                    className={
                      isConBorder ? 'video-con-borde-imagenesVideo ' : 'video-imagenesVideo'
                    }
                    src={`https://www.youtube-nocookie.com/embed/${siguientedataActual.fuente}`}
                    title="sadasd"
                  ></iframe>
                  <div className="decripcion-imagenesVideo2">
                    <h4>{siguientedataActual.descripcion}</h4>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <div className="CI-Video">
                <iframe
                  className={isConBorder ? 'video-con-borde-imagenesVideo ' : 'video-imagenesVideo'}
                  src={`https://www.youtube-nocookie.com/embed/${dataActual.fuente}`}
                  title="sadasd"
                ></iframe>
                <div className="decripcion-imagenesVideo2">
                  <h4>{dataActual.descripcion}</h4>
                </div>
              </div>
            ))}

          {/* IMÁGENES */}
          {!tipoVideo && (
            <div className="cuerpo-imagenesVideo">
              {isDatosStatic ? (
                <img
                  className={
                    isGaleriaPrincipal ? 'img-Principal-imagenesVideo' : 'img-imagenesVideo'
                  }
                  alt=""
                  src={dataActual.fuente ? dataActual.fuente : ''}
                ></img>
              ) : (
                <img
                  src={
                    dataActual.fuente
                      ? urlImagenes + dataActual.fuente
                      : urlImagenes + DatosDeEntrada[0].fuente
                  }
                  alt="imagen"
                  className={
                    isGaleriaPrincipal ? 'img-Principal-imagenesVideo' : 'img-imagenesVideo'
                  }
                />
              )}
            </div>
          )}
          {!tipoVideo && (
            <div className="decripcion-imagenesVideo">
              <h4>{descripcion ? descripcion : ''}</h4>
            </div>
          )}
        </div>
      </div>

      {tipoVideo && !ocultarFlechasVideo.flechaAbajo && (
        <button
          onClick={() => {
            cambioDeImagenVideoFlecha(false, 'video');
          }}
          className="flechas-diseño-abajo-imagenesVideo "
        >
          <AiFillCaretDown className="flecha-Abajo" />
        </button>
      )}
      {!tipoDeSliderFlecha && !tipoVideo && DatosDeEntrada.length <= 6 && (
        <div className="botonera-inferior-imagenesVideo">
          {DatosDeEntrada.map(function (element, index) {
            return (
              <button
                key={index}
                onClick={() => {
                  cambioDeImagen(index);
                }}
                className="botones-redondo-imagenesVideo"
              >
                ◉
              </button>
            );
          })}
        </div>
      )}
    </div>
  ) : (
    ''
  );
};
export default ImagenesVideo;
