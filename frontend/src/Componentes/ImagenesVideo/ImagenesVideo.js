import React, {useState} from 'react';
import '../ImagenesVideo/ImagenesVideo.css';
const ImagenesVideo = ({
  DatosDeEntrada = [],
  tipoDeSliderFlecha = true,
  tipoVideo = false,
  sinDescripcion = false,
  isConBorder = false,
}) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [ocultarFlechasVideo, setOcultarFlechasVideo] = useState(
    DatosDeEntrada.length === 2 || DatosDeEntrada.length === 1
      ? {
          flechaArriba: true,
          flechaAbajo: true,
        }
      : {
          flechaArriba: false,
          flechaAbajo: true,
        }
  );
  const [dataActual, setDataActual] = useState(
    DatosDeEntrada.length !== 0 ? DatosDeEntrada[0] : {}
  );
  const [siguientedataActual, setSiguientedataActual] = useState(
    DatosDeEntrada.length !== 0 && DatosDeEntrada.length > 1 ? DatosDeEntrada[1] : {}
  );

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
      if (contador + 1 === DatosDeEntrada.length - 1) {
        setOcultarFlechasVideo({flechaArriba: true, flechaAbajo: false});
      } else {
        setOcultarFlechasVideo({flechaArriba: false, flechaAbajo: false});
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
          ▲
        </button>
      )}

      <div className="flechas-mas-cuerpo-imagenesVideo">
        {((tipoDeSliderFlecha && !tipoVideo) || (!tipoVideo && DatosDeEntrada.length > 6)) && (
          <button
            onClick={() => {
              cambioDeImagenVideoFlecha(false, 'img');
            }}
            className="flechas-diseño-izq-imagenesVideo"
          >
            🢀
          </button>
        )}
        {((tipoDeSliderFlecha && !tipoVideo) || (!tipoVideo && DatosDeEntrada.length > 6)) && (
          <button
            onClick={() => {
              cambioDeImagenVideoFlecha(true, 'img');
            }}
            className="flechas-diseño-der-imagenesVideo"
          >
            🢂
          </button>
        )}
        <div className="cuerpo-imagenesVideo">
          {/* VIDEO */}
          {tipoVideo &&
            (DatosDeEntrada.length > 1 ? (
              <React.Fragment>
                <div className="CI-Videos ">
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
                    <h4>{dataActual.descripcion}</h4>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <iframe
                className={isConBorder ? 'video-con-borde-imagenesVideo ' : 'video-imagenesVideo'}
                src={`https://www.youtube-nocookie.com/embed/${dataActual.fuente}`}
                title="sadasd"
              ></iframe>
            ))}

          {/* IMÁGENES */}
          {!tipoVideo && (
            <div className="cuerpo-imagenesVideo">
              <img
                src={dataActual.fuente ? dataActual.fuente : ''}
                alt="imagen"
                className="img-imagenesVideo"
              />
            </div>
          )}
          {!tipoVideo && (
            <div className="decripcion-imagenesVideo">
              <h4>{tipoVideo ? siguientedataActual.descripcion : dataActual.descripcion}</h4>
            </div>
          )}
        </div>
      </div>

      {tipoVideo && !ocultarFlechasVideo.flechaAbajo && (
        <button
          onClick={() => {
            cambioDeImagenVideoFlecha(false, 'video');
          }}
          className="flechas-diseño-abajo-imagenesVideo"
        >
          ▼
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
    <p>Sin Datos</p>
  );
};
export default ImagenesVideo;
