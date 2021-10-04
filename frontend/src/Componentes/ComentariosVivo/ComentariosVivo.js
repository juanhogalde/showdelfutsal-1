import React from 'react';
import '../ComentariosVivo/ComentariosVivo.css';
//TODO: para el iframe de la caja de comentarios de youtube necesita el id del vivo y el dominio que debe ser https
const ComentariosVivo = ({id = '', dominio = ''}) => {
  return (
    <div className="tamaño-caja-comentariosVivo">
      <iframe src={`https://www.youtube.com/live_chat?v=${id}&embed_domain=${dominio}`}></iframe>
    </div>
  );
};

export default ComentariosVivo;
