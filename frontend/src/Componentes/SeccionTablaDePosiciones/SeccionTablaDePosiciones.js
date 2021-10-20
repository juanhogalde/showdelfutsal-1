import React from 'react';
import InfoPartido from '../InfoPartido/InfoPartido';
import TablaDeposiciones from '../TablaDePosiciones/TablaDeposiciones';
import './SeccionTablaDePosiciones.css';
const SeccionTablaDePosiciones = () => {
  return (
    <div className="CP-SeccionTablaDePosiciones">
      <div className="CI-componente-InfoPartido-SeccionTabla">
        <InfoPartido isSoloTitulo={true}></InfoPartido>
      </div>
      <div className="CI-componente-TablaDePosiciones">
        <TablaDeposiciones></TablaDeposiciones>
        <TablaDeposiciones></TablaDeposiciones>
        <TablaDeposiciones></TablaDeposiciones>
        <TablaDeposiciones></TablaDeposiciones>
      </div>
    </div>
  );
};
export default SeccionTablaDePosiciones;
