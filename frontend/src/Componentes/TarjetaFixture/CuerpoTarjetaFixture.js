import React from 'react';
import './CuerpoTarjetaFixture.css';
import escudo_alianza from '../../Static/Img/escudo_alianza.png';
import escudo_huarpes from '../../Static/Img/escudo_huarpes.png';

const CuerpoTarjetaFixture = () => {
  return (
    <div className="cuerpo-TarjetaFixture">
      <div className="CI-Cuerpo-Fixture">
        <div className="hora-sede-Fixture">
          <p>20:30</p>
          <p>Club. Sport. Desamparados</p>
        </div>

        <div className="equipo-Fixture posicion-EquipoA-Fixture">
          <img alt="escudo-Fixture" src={escudo_huarpes}></img>
          <p>Huarpes</p>
        </div>
        <div className="marcador-Fixture posicion-MarcadorA-Fixture">
          <h3>0</h3>
        </div>

        <div className="marcador-Fixture posicion-MarcadorB-Fixture">
          <h3>2</h3>
        </div>
        <div className="equipo-Fixture posicion-Equipo-B-Fixture">
          <img alt="escudo-Fixture" src={escudo_alianza}></img>
          <p>Alianza</p>
        </div>
      </div>
    </div>
  );
};
export default CuerpoTarjetaFixture;
