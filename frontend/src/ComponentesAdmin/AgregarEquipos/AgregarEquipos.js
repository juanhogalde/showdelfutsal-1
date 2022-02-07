import React, {useEffect} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import {listarEquipos_accion} from '../../Redux/Equipos/AccionesEquipos';
import BotonLowa from '../BotonLowa/BotonLowa';
import Selector from '../Selector/Selector';
import TarjetaEquipo from '../TarjetaEquipo/TarjetaEquipo';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  const dispatch = useDispatch();
  const agregarEquipoZona = () => {
    console.log('func para agregar equipos a zona');
  };
  useEffect(() => {
    dispatch(listarEquipos_accion());
    return () => {};
  }, [dispatch]);

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
