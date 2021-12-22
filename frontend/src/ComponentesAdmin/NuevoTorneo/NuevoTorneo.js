import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory} from 'react-router';
import Alertas from '../Alertas/Alertas';
import {useDispatch} from 'react-redux';
import {agregarTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';

const Torneo = [
  {value: 'Campeonato', label: 'Campeonato'},
  {value: 'Liga', label: 'Liga'},
  {value: 'Copa', label: 'Copa'},
];

const NuevoTorneo = ({datosParaEditar = {}, isEditarTorneo = false}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [datosTorneo, setDatosTorneo] = useState({});
  const [alertaFechas, setAlertaFechas] = useState(false);

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
    setDatosTorneo(datosTorneo => {
      return {...datosTorneo, torneo: value};
    });
  };

  const siguientePantallaNuevoTorneo = datosTorneo => {
    switch (datosTorneo.torneo) {
      case 'Campeonato':
        dispatch(agregarTorneo_accion(datosTorneo));
        history.push('/Torneo/Nuevo/Campeonato');
        break;

      default:
        break;
    }
  };

  const validarCampos = () => {
    var auxFechaInicio = datosTorneo.fechaInicio.getTime();
    var auxFechaFin = datosTorneo.fechaFin.getTime();
    if (auxFechaFin < auxFechaInicio) {
      alert('Fechas Inválidas- Fin menor a Inicio');
      setAlertaFechas(true);
    } else {
      siguientePantallaNuevoTorneo(datosTorneo);
    }
  };
  const respuestaAlertaFechas = respuesta => {
    if (respuesta) {
      setAlertaFechas(false);
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
        onClick={() => validarCampos()}
        disabled={Object.keys(datosTorneo).length === 4 ? false : true}
      ></BotonLowa>
      <Alertas mostrarSweet={alertaFechas} RespuestaDeSweet={respuestaAlertaFechas}></Alertas>
    </div>
  );
};
export default NuevoTorneo;
