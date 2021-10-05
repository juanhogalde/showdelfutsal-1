import React from 'react';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';

const GaleriaNoticiasMiniatura = ({noticias = []}) => {
  var tamañoArregloNoticias;
  if (noticias.length > 4) {
    tamañoArregloNoticias = 4;
  } else {
    tamañoArregloNoticias = noticias.length;
  }
  const cambioDeImagenVideoFlecha = (direccion, origen) => {
    console.log(`direcc: ${direccion} origen: ${origen}`);
  };
  return (
    <div>
      <div className="flechas-mas-cuerpo-imagenesVideo">
        <button
          onClick={() => {
            cambioDeImagenVideoFlecha(false, 'img');
          }}
          className="flechas-diseño-izq-imagenesVideo"
        >
          🢀
        </button>
        <button
          onClick={() => {
            cambioDeImagenVideoFlecha(true, 'img');
          }}
          className="flechas-diseño-der-imagenesVideo"
        >
          🢂
        </button>

        <div className="cuerpo-imagenesVideo">
          {DatosDeEntrada.length > 1 ? (
            noticias.map(function (x) {
              return (
                <div>
                  <NoticiasMiniatura />
                </div>
              );
            })
          ) : DatosDeEntrada.length !== 0 ? (
            <div>
              <NoticiasMiniatura />
            </div>
          ) : (
            <p>sin noticias</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GaleriaNoticiasMiniatura;
