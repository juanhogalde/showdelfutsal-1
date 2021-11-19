import React from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
const NuevoTorneo = () => {
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);
  };
  return (
    <div className="CP-NuevoTorneo">
      <Selector></Selector>
      <InputLowa type="text" placeholder="Título de Torneo"></InputLowa>

      <InputDateLowa
        name="FechaInicio"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Inicio"
      />
      <InputDateLowa
        name="FechaFin"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Fin"
      />
      <BotonLowa></BotonLowa>
    </div>
  );
};
export default NuevoTorneo;
