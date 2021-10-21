import React from 'react';
import './NoticiasFiltradas.css';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';

const NoticiasFiltradas = () => {
  return (
    <div className="CP-SN-Noticia-fIltrada">
      <div className="CI-SN-Noticia-filtrada-titulo">
        <div className="I-SN-Noticia-filtrada-titulo">
          <p>TITULO</p>
        </div>
      </div>
      <div className="CI-SN-Noticia-filtrada-grilla CI-SN-Noticia-filtrada-auto-grilla">
        <div className="I-Noticia-filtrada-grilla">
          <NoticiasMiniatura />
        </div>
        <div className="I-Noticia-filtrada-grilla">
          <NoticiasMiniatura />
        </div>
        <div className="I-Noticia-filtrada-grilla">
          <NoticiasMiniatura />
        </div>
      </div>
      <div className="CI-SN-Noticia-filtrada-Panel-lateral"></div>
    </div>
  );
};

export default NoticiasFiltradas;
