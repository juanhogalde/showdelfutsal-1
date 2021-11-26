import React from 'react';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

// const arrayMasculino = [
//   {
//     categoria1: 'Divisional A',
//   },
//   {
//     categoria2: 'Divisional B',
//   },
//   {
//     categoria3: 'Divisional C',
//   },
//   {
//     categoria4: 'Divisional D',
//   },
// ];
// const arrayFemenino = [
//   {
//     categoria1: 'Divisional A',
//   },
//   {
//     categoria2: 'Divisional B',
//   },
// ];
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
