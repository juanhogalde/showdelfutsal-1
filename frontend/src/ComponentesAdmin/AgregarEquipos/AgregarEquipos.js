import React from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import Selector from '../Selector/Selector';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  return (
    <div className="CP-AgregarEquipos">
      <h6>Agregar Equipos a Zona A</h6>
      <Selector name="equipos" placeholder="Seleccione Equipos"></Selector>
      <BotonLowa></BotonLowa>
    </div>
  );
};
export default AgregarEquipos;
