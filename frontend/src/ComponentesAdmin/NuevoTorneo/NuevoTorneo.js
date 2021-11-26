import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory} from 'react-router';

const Torneo = [
  {value: 'Campeonato', label: 'Campeonato'},
  {value: 'Liga', label: 'Liga'},
  {value: 'Copa', label: 'Copa'},
];

const NuevoTorneo = () => {
  const history = useHistory();

  const [datosTorneo, setDatosTorneo] = useState({});

  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);

    if (name === 'fechaInicio' || name === 'fechaFin') {
      setDatosTorneo(datosTorneo => {
        return {...datosTorneo, [name]: new Date(value)};
      });
    } else {
      setDatosTorneo(datosTorneo => {
        return {...datosTorneo, [name]: value};
      });
    }
  };

  const escucharSelector = (value, name) => {
    console.log(name);
    console.log(value);

    setDatosTorneo(datosTorneo => {
      return {...datosTorneo, torneo: value};
    });
  };

  const siguientePantallaNuevoTorneo = pantalla => {
    switch (pantalla) {
      case 'Campeonato':
        history.push('/Torneo/Nuevo/Campeonato');
        break;

      default:
        break;
    }
  };
  const validarCampos = () => {
    console.log('Validar');

    var auxFechaInicio = datosTorneo.fechaInicio.getTime();
    var auxFechaFin = datosTorneo.fechaFin.getTime();
    if (auxFechaFin < auxFechaInicio) {
      alert('Fechas Inválidas- Fin menor a Inicio');
    } else {
      siguientePantallaNuevoTorneo(datosTorneo.torneo);
    }
  };
  return (
    <div className="CP-NuevoTorneo">
      <Selector
        name="torneo"
        placeholder="Seleccione Torneo"
        selectorConIcono={<BsPlusCircle />}
        options={Torneo ? Torneo : []}
        noOptionsMessage={'No hay torneos cargados.'}
        onChange={(opcion, selector) => escucharSelector(opcion.value, selector.name)}
      ></Selector>
      {/* {isErrores && errorDatosTorneo.torneo ? <p>Complete este campo</p> : null} */}
      <InputLowa
        type="text"
        name="tituloTorneo"
        placeholder="Título de Torneo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>

      <InputDateLowa
        name="fechaInicio"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Inicio"
      />
      <InputDateLowa
        name="fechaFin"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Fin"
      />
      <BotonLowa
        tituloboton={'Siguiente'}
        /* onClick={() => siguientePantallaNuevoTorneo(datosTorneo && datosTorneo.torneo)} */
        onClick={() => validarCampos()}
        disabled={Object.keys(datosTorneo).length === 4 ? false : true}
      ></BotonLowa>
      {/* <Cargando /> */}
    </div>
  );
};
export default NuevoTorneo;
