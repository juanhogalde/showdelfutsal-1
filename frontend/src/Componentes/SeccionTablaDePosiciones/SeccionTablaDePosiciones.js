import React from 'react';
import InfoPartido from '../InfoPartido/InfoPartido';
import TablaDeposiciones from '../TablaDePosiciones/TablaDeposiciones';
import './SeccionTablaDePosiciones.css';
const SeccionTablaDePosiciones = () => {
  return (
    <div className="CP-SeccionTablaDePosiciones">
      <div className="CI-componente-InfoPartido-SeccionTabla">
        <div className="componente-InfoPartdo-SeccionTabla">
          <InfoPartido isSoloTitulo={true} isTablaDePosiciones={true}></InfoPartido>
        </div>
      </div>
      <div className="CI-componente-TablaDePosiciones">
        <TablaDeposiciones categoria="Primera"></TablaDeposiciones>
        <TablaDeposiciones categoria="Reserva"></TablaDeposiciones>
        {/* <TablaDeposiciones></TablaDeposiciones>
        <TablaDeposiciones></TablaDeposiciones> */}
      </div>
    </div>
  );
};
export default SeccionTablaDePosiciones;
