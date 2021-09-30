import React, {useState} from 'react';
import '../ImagenesVideo/ImagenesVideo.css';
const ImagenesVideo = ({DatosDeEntrada = {}, tipoDeSliderFlecha = true, tipoVideo = false}) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [dataActual, setDataActual] = useState(
    DatosDeEntrada.length !== 0 ? DatosDeEntrada[0] : {}
  );
  const cambioDeImagen = index => {
    setDataActual(DatosDeEntrada[index]);
    setIndiceActual(index);
  };
  const cambioDeImagenFlecha = direccion => {
    let contador = indiceActual;
    //true = derecha flase=izquierda
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
    setIndiceActual(contador);
    setDataActual(DatosDeEntrada[contador]);
  };

  return DatosDeEntrada.length !== 0 ? (
    <div className="CP-imagenesVideo">
      <div className="flechas-mas-cuerpo-imagenesVideo">
        {tipoDeSliderFlecha && (
          <button
            onClick={() => {
              cambioDeImagenFlecha(false);
            }}
            className="flechas-diseño-izq-imagenesVideo"
          >
            🢀
          </button>
        )}
        {tipoDeSliderFlecha && (
          <button
            onClick={() => {
              cambioDeImagenFlecha(true);
            }}
            className="flechas-diseño-der-imagenesVideo"
          >
            🢂
          </button>
        )}
        <div className="cuerpo-imagenesVideo">
          {tipoVideo ? (
            <iframe
              className="video-imagenesVideo"
              src={`https://www.youtube-nocookie.com/embed/${dataActual.fuente}`}
              title="sadasd"
            ></iframe>
          ) : (
            <img
              src={dataActual.fuente ? dataActual.fuente : ''}
              alt="imagen"
              className="img-imagenesVideo"
            />
          )}

          <div className="decripcion-imagenesVideo">
            <h3>{dataActual.descripcion}</h3>
          </div>
        </div>
      </div>
      {!tipoDeSliderFlecha && (
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
