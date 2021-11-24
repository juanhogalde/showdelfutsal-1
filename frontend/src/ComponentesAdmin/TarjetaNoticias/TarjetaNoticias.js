import React from 'react';
import './TarjetaNoticias.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import TarjetaNoticiasMiniatura from '../TarjetaNoticiasMiniatura/TarjetaNoticiasMiniatura';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {useSelector} from 'react-redux';

export const TarjetaNoticias = () => {
  const {noticias} = useSelector(state => state.storeNoticias);

  return noticias.map(noticia => {
    return (
      <div className="CP-Tarjeta-Noticias-Admin">
        <div className="CI-Tarjeta-Noticias-Admin">
          <div className="I-Tarjeta-Noticias-Imagen">
            <ImagenAdmin noticiaImagen={noticia} />
          </div>
          <div className="I-Tarjeta-Noticias-Cuerpo">
            <TarjetaNoticiasMiniatura noticiaRecibida={noticia} />
          </div>
          <div className="I-Tarjeta-Noticias-Opciones">
            <BiDotsVerticalRounded size={20} />
          </div>
        </div>
      </div>
    );
  });
};

export default TarjetaNoticias;
