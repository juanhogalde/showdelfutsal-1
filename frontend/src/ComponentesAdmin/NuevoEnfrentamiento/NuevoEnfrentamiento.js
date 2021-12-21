import React from 'react';
import Marcador from '../../Componentes/Marcador/Marcador';
import Enfrentamiento from '../Enfrentamiento/Enfrentamiento';
import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import './NuevoEnfrentamiento.css';

const NuevoEnfrentamiento = () => {
  return (
    <div className="CP-NuevoEnfrentamiento">
      <Enfrentamiento></Enfrentamiento>
      <TarjetaEnfrentamiento></TarjetaEnfrentamiento>
    </div>
  );
};
export default NuevoEnfrentamiento;
