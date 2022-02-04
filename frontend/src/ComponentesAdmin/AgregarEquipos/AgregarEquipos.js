import React from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import Selector from '../Selector/Selector';
import TarjetaEquipo from '../TarjetaEquipo/TarjetaEquipo';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  const agregarEquipoZona = () => {
    console.log('func para agregar equipos a zona');
  };

  return (
    <div className="CP-AgregarEquipos">
      <p>Agregar Equipos</p>
      <h4>Zona A</h4>

      <Selector
        name="equipos"
        placeholder="Seleccione Equipos"
        selectorConIcono={<BsPlusCircle />}
        /* options={tipoTorneoArray ? tipoTorneoArray : []}
        noOptionsMessage={'No hay torneos cargados.'}
        onChange={(opcion, selector) => escucharSelector(opcion.value, selector.name)}
        opcionSeleccionada={tipoTorneoArray[datosTorneo.tipoTorneo - 1]} */
      ></Selector>
      <BotonLowa tituloboton="Agregar" onClick={() => agregarEquipoZona()}></BotonLowa>

      <TarjetaEquipo></TarjetaEquipo>
    </div>
  );
};
export default AgregarEquipos;
