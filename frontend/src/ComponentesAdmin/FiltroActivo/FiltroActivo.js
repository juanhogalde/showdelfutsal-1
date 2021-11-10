import React, {useState} from 'react';
import './FiltroActivo.css';
const FiltroActivo = () => {
  const [isFiltroActivo, setIsFiltroActivo] = useState(false);

  const activarDesactivarFiltro = () => {
    setIsFiltroActivo(!isFiltroActivo);
  };
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
        <div className={` barraActiva ${isFiltroActivo && 'barraInactiva'}`}></div>
      </div>
    </div>
  );
};
export default FiltroActivo;
