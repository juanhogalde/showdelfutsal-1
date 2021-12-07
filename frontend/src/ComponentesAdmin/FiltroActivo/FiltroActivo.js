import React from 'react';
import './FiltroActivo.css';
const FiltroActivo = ({activarDesactivarFiltro, isFiltroActivo}) => {
  return (
    <div className="CI-FiltroActivo">
      <div className="contenedor-TituloActivo">
        <p className="tituloActivo" onClick={() => activarDesactivarFiltro()}>
          Activo
        </p>
        <p className="tituloActivo" onClick={() => activarDesactivarFiltro()}>
          Inactivo
        </p>
      </div>
      <div className="contenedor-BarraActivo">
        <div className={` barraActiva ${!isFiltroActivo && 'barraInactiva'}`}></div>
      </div>
    </div>
  );
};
export default FiltroActivo;
