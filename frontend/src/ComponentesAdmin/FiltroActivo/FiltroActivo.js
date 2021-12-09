import React from 'react';
import './FiltroActivo.css';
const FiltroActivo = ({
  activarDesactivarFiltro,
  isFiltroActivo,
  isFiltroActivoParrafo = {activo: true, desactivado: false},
}) => {
  return (
    <div className="CI-FiltroActivo">
      <div className="contenedor-TituloActivo">
        <p
          className={` textoInactiva ${
            isFiltroActivoParrafo.activo && ' textoActiva'
          } tituloActivo`}
          onClick={() => activarDesactivarFiltro()}
        >
          Activo
        </p>
        <p
          className={` textoInactiva  ${
            isFiltroActivoParrafo.desactivado && 'textoActiva'
          } tituloActivo`}
          onClick={() => activarDesactivarFiltro()}
        >
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
