import React from 'react';
import CuerpoTarjetaFixture from './CuerpoTarjetaFixture';
import './TarjetaFixture.css';
var array = [
  {clave: 1, valor: 10},
  {clave: 2, valor: 20},
  {clave: 3, valor: 30},
];
const TarjetaFixture = () => {
  return (
    <div className="CP-TarjetaFixture">
      <div className="CI-fecha-Fixture">
        <p className="fecha-Fixture">Jueves 27 de Agosto</p>
      </div>
      <div className="CI-Cuerpo-TarjetaFixture">
        {array.map((element, index) => {
          console.log(index);
          return <CuerpoTarjetaFixture></CuerpoTarjetaFixture>;
        })}
      </div>
    </div>
  );
};
export default TarjetaFixture;
