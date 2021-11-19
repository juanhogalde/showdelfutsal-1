import React from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
const NuevoTorneo = () => {
  return (
    <div className="CP-NuevoTorneo">
      <Selector></Selector>
      <InputLowa type="text" placeholder="Título de Torneo"></InputLowa>
      <InputLowa type="date" placeholder="Seleccionar Fecha Inicio"></InputLowa>
      <InputLowa type="date" placeholder="Seleccionar Fecha Fin"></InputLowa>

      <BotonLowa></BotonLowa>
    </div>
  );
};
export default NuevoTorneo;
