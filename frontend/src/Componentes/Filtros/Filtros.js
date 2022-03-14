import React from 'react';
import '../Filtros/Filtros.css';
import logoBarra from '../../Logos/barra-filtros-large.png';

const Filtros = ({
  filtros = [],
  obtenerFiltro = () => {
    console.log('No se envió función');
  },
}) => {
  return filtros.map(function (element, index) {
    return (
      <div key={index} className="CI-filtro-barra" onClick={() => obtenerFiltro(element.nombre)}>
        <div className="filtros-cuerpo">
          <img src={logoBarra} alt="imagen" className="barra-color-filtros"></img>
          <p className="texto-filtros">{element.nombre}</p>
        </div>
      </div>
    );
  });
};

export default Filtros;

//30px
