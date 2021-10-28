import React from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import './HomePrivada.css';

const HomePrivada = () => {
  return (
    <div className="LP-HomePrivada">
      <BarraDeNavegacionAdmin></BarraDeNavegacionAdmin>
      <div className="LI-Tarjetas">
        <TarjetaPanel></TarjetaPanel>
        <TarjetaPanel></TarjetaPanel>
        <TarjetaPanel></TarjetaPanel>
        <TarjetaPanel></TarjetaPanel>
        <TarjetaPanel></TarjetaPanel>
      </div>
    </div>
  );
};
export default HomePrivada;
