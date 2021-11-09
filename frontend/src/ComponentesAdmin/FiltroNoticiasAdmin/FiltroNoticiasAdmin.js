import React from 'react';
import './FiltroNoticiasAdmin.css';
import {BsSliders} from 'react-icons/bs';
const FiltroNoticiasAdmin = ({tituloFiltro = 'TITULO'}) => {
  return (
    <div className="CP-Filtro-Noticias-Admin">
      <div className="CI-Filtro-Noticias-Admin">
        <div className="I-Filtro-Noticias-Admin-titulo">
          <h6>{tituloFiltro}</h6>
        </div>
        <div className="I-Filtro-Noticias-Admin-filtrador">
          <BsSliders size={20} />
        </div>
      </div>
    </div>
  );
};
export default FiltroNoticiasAdmin;
