import React from 'react';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import './GaleriaNoticiasMiniatura.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import {AiFillCaretRight} from 'react-icons/ai';
import {useSelector} from 'react-redux';

const GaleriaNoticiasMiniatura = (/* {noticias = []} */) => {
  const noticias = useSelector(state => state.storePrueba.noticias);
  /* var tamañoArregloNoticias;
  if (noticias.length > 4) {
    tamañoArregloNoticias = 4;
  } else {
    tamañoArregloNoticias = noticias.length;
  }

  const cambioNoticiaFlecha = (direccion, origen) => {
    console.log(`direcc: ${direccion} origen: ${origen}`);
  }; */

  return (
    <div className="CP-Noticias-slider">
      <button
        /* onClick={() => {
          cambioNoticiaFlecha(false, 'img');
        }} */
        className="I-Flechas-izq-Noticias"
      >
        <AiFillCaretLeft className="flechas-Slide-GaleriaNoticias" />
      </button>
      <button
        /* onClick={() => {
          cambioNoticiaFlecha(true, 'img');
        }} */
        className="I-Flechas-der-Noticias"
      >
        <AiFillCaretRight className="flechas-Slide-GaleriaNoticias" />
      </button>

      <div className="CI-Noticias-slider">
        {noticias.map((noticia, index) => {
          return <NoticiasMiniatura hey={index} datosModelado={noticia}></NoticiasMiniatura>;
        })}
      </div>
    </div>
  );
};

export default GaleriaNoticiasMiniatura;
