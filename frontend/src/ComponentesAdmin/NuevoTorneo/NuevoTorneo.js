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
import {obtenerDatosDeTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';

const Torneo = [
  {value: 1, label: 'Campeonato'},
  {value: 2, label: 'Liga'},
  {value: 3, label: 'Copa'},
];

const NuevoTorneo = ({datosParaEditar = {}, isEditarTorneo = false}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [datosTorneo, setDatosTorneo] = useState({});
  const [alertaFechas, setAlertaFechas] = useState(false);

  const escucharCambios = (name, value) => {
    if (name === 'fechaInicio' || name === 'fechaFin') {
      setDatosTorneo({...datosTorneo, [name]: new Date(value)});
    } else {
      setDatosTorneo({...datosTorneo, [name]: value});
    }
  };

  const escucharSelector = (value, name) => {
    setDatosTorneo({...datosTorneo, [name]: value});
  };

  const siguientePantallaNuevoTorneo = datosTorneo => {
    switch (datosTorneo.tipoTorneo) {
      case 1:
        /* dispatch(agregarTorneo_accion(datosTorneo)); */
        dispatch(obtenerDatosDeTorneo_accion(datosTorneo));
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
        name="tipoTorneo"
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
