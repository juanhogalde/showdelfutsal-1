import React from 'react';
import './TarjetaNoticias.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import TarjetaNoticiasMiniatura from '../TarjetaNoticiasMiniatura/TarjetaNoticiasMiniatura';
import {BiDotsVerticalRounded} from 'react-icons/bi';

export const TarjetaNoticias = () => {
  return (
    <div className="CP-Tarjeta-Noticias-Admin">
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiDotsVerticalRounded size={20} />
        </div>
      </div>
    </div>
  );
};

export default TarjetaNoticias;
