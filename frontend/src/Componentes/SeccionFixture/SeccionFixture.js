import React from 'react';
import InfoPartido from '../InfoPartido/InfoPartido';
import TarjetaFixture from '../TarjetaFixture/TarjetaFixture';
import './SeccionFixture.css';

const SeccionFixture = () => {
  return (
    <div className="CP-SeccionFixture">
      <div className="CI-componente-InfoPartido">
        <InfoPartido
          siguientePartido={() => {
            console.log('Falta Función');
          }}
          isParaFixture={true}
        ></InfoPartido>
      </div>
      <div className="CI-componente-TarjetaFixture">
        <TarjetaFixture></TarjetaFixture>
      </div>
    </div>
  );
};
export default SeccionFixture;
