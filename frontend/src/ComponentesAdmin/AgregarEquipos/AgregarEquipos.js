import React, {useEffect, useLayoutEffect, useState} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {listarEquipos_accion} from '../../Redux/Equipos/AccionesEquipos';
import Alertas from '../Alertas/Alertas';
import BotonLowa from '../BotonLowa/BotonLowa';
import Selector from '../Selector/Selector';
import TarjetaEquipo from '../TarjetaEquipo/TarjetaEquipo';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  const history = useHistory();
  const {zonaId} = useParams();
  const dispatch = useDispatch();
  const {equipos, isListarEquipos} = useSelector(state => state.storeEquipos);
  const [arrayEquipos, setArrayEquipos] = useState([]);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState('');
  const [equiposAgregados, setEquiposAgregados] = useState([]);
  /* const [isDatosCargados, setIsDatosCargados] = useState(false); */

  const agregarEquipoZona = () => {
    console.log('func para agregar equipos a zona');
  };
  const escucharSelectorEquipos = respuesta => {
    let auxArrayEquipos = arrayEquipos.filter(equipo => equipo.value !== respuesta.value);
    setArrayEquipos(auxArrayEquipos);
    setEquipoSeleccionado(respuesta);
    setEquiposAgregados([...equiposAgregados, respuesta.data]);
  };

  useEffect(() => {
    if (equipos.length > 0) {
      let auxEquipos = equipos.map((equipo, index) => {
        return {
          label: equipo.nombreClub,
          value: index + 1,
          data: equipo,
        };
      });
      setArrayEquipos(auxEquipos);
    } else {
      dispatch(listarEquipos_accion());
    }
    return () => {};
  }, [equipos, dispatch]);
  const crearEnfrentamiento = () => {
    history.push('/Enfrentamientos');
  };
  const funcionEliminarEquipo = equipoId => {
    let auxEquiposAgregados = equiposAgregados.filter(equipo => equipo._id !== equipoId);
    setEquiposAgregados(auxEquiposAgregados);
  };

  return (
    <div className="CP-AgregarEquipos">
      <p>Agregar Equipos</p>
      <h4>Zona A</h4>

      <Selector
        name="equipos"
        placeholder="Seleccione Equipos"
        selectorConIcono={<BsPlusCircle />}
        isCerrarMenuAlSeleccionar={true}
        /* isMultipleOpcion={true} */
        options={arrayEquipos ? arrayEquipos : []}
        noOptionsMessage={'No hay equipos cargados.'}
        onChange={value => escucharSelectorEquipos(value)}
        opcionSeleccionada={equipoSeleccionado ? equipoSeleccionado : ''}
      ></Selector>
      <BotonLowa tituloboton="Agregar" onClick={() => agregarEquipoZona()}></BotonLowa>
      <BotonLowa
        tituloboton="Crear Enfrentamiento"
        onClick={() => crearEnfrentamiento()}
      ></BotonLowa>
      {equiposAgregados.length > 0 &&
        equiposAgregados.map((equipo, index) => {
          return (
            <TarjetaEquipo
              key={index}
              equipo={equipo}
              funcionEliminarEquipo={funcionEliminarEquipo}
            ></TarjetaEquipo>
          );
        })}
      <Alertas
        mostrarSweet={isListarEquipos.isMostrar}
        tipoDeSweet={isListarEquipos.tipo}
        subtitulo={isListarEquipos.mensaje}
      ></Alertas>
    </div>
  );
};
export default AgregarEquipos;
