import React from 'react';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './GaleriaNoticiasMiniatura.css';

const GaleriaNoticiasMiniatura = ({noticias = []}) => {
  var tamañoArregloNoticias;
  if (noticias.length > 4) {
    tamañoArregloNoticias = 4;
  } else {
    tamañoArregloNoticias = noticias.length;
  }

  const cambioNoticiaFlecha = (direccion, origen) => {
    console.log(`direcc: ${direccion} origen: ${origen}`);
  };

  return (
    <div className="CP-Noticias-slider">
      <button
        onClick={() => {
          cambioNoticiaFlecha(false, 'img');
        }}
        className="I-Flechas-izq-Noticias"
      >
        🢀
      </button>
      <button
        onClick={() => {
          cambioNoticiaFlecha(true, 'img');
        }}
        className="I-Flechas-der-Noticias"
      >
        🢂
      </button>

      <div className="CI-Noticias-slider">
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
        <NoticiasMiniatura isSeccionNoticias={true} isSobreImagen={true} />
      </div>
    </div>
  );
};

export default GaleriaNoticiasMiniatura;
