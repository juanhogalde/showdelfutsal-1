import React from 'react';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  return (
    <div className="CP-Campeonato">
      <div className="CI-CampeonatoMasculino">
        <p>Masculino</p>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
      </div>
      <div className="CI-CampeonatoMasculino">
        <p>Femenino</p>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
        <TarjetaTorneo isCampeonato={true}></TarjetaTorneo>
      </div>
    </div>
  );
};
export default Campeonato;
