import React from 'react';
import './TarjetaZona.css';

const TarjetaZona = ({indice = '', datos = ''}) => {
  return (
    <div className="CP-TarjetaZona">
      <div className="CI-Indice">
        <h3>{indice + 1}</h3>
      </div>
      <div className="CI-Cuerpo-TarjetaZona">
        <div className="Zona-Tipo">
          <h5>{datos.tituloZona}</h5>
          <p>{datos.tipo}</p>
        </div>
        <div className="Categoria-Division">
          <p>Masculino</p>
          <p>Div A</p>
        </div>
      </div>
    </div>
  );
};
export default TarjetaZona;
