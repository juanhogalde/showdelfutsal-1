import React, {useLayoutEffect, useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory} from 'react-router';
import Alertas from '../Alertas/Alertas';
import {useDispatch, useSelector} from 'react-redux';
import {
  agregarTorneo_accion,
  volverPorDefectoAgregarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';

const tipoTorneoArray = [
  {value: 1, label: 'Campeonato'},
  {value: 2, label: 'Liga'},
  {value: 3, label: 'Copa'},
];

const NuevoTorneo = ({datosParaEditar = {}, isEditarTorneo = false}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {torneo, isAgregarTorneo} = useSelector(state => state.storeTorneos);

  const [datosTorneo, setDatosTorneo] = useState({});
  const [alertaFechas, setAlertaFechas] = useState({
    tipo: '',
    mensaje: '',
    isMostrar: false,
  });

  const escucharCambios = (name, value) => {
    setDatosTorneo({...datosTorneo, [name]: value});
  };

  const escucharSelector = (value, name) => {
    setDatosTorneo({...datosTorneo, [name]: value});
  };

  const siguientePantallaNuevoTorneo = () => {
    switch (datosTorneo.tipoTorneo) {
      case 1:
        history.push('/Torneo/Nuevo/Campeonato');
        break;
      default:
        break;
    }
  };

  const respuestaDeAlertas = respuesta => {
    if (respuesta) {
      dispatch(volverPorDefectoAgregarTorneo_accion());
    }
  };

  const validarCamposNuevoTorneo = () => {
    if (new Date(datosTorneo.fechaInicio).getTime() > new Date(datosTorneo.fechaFin).getTime()) {
      setAlertaFechas({
        tipo: 'error',
        mensaje: 'Fechas inválidas, por favor verificar.',
        isMostrar: true,
      });
    } else {
      dispatch(agregarTorneo_accion(datosTorneo));
    }
  };
  const respuestaDeAlertaFechas = respuesta => {
    if (respuesta) {
      setAlertaFechas({
        tipo: '',
        mensaje: '',
        isMostrar: true,
      });
    }
  };
  console.log(datosTorneo);
  useLayoutEffect(() => {
    if (Object.keys(torneo).length > 0) {
      setDatosTorneo(torneo);
    }
    return () => {
      setDatosTorneo({});
    };
  }, [torneo]);
  return (
    <div className="CP-NuevoTorneo">
      <Selector
        name="tipoTorneo"
        placeholder="Seleccione Torneo"
        selectorConIcono={<BsPlusCircle />}
        options={tipoTorneoArray ? tipoTorneoArray : []}
        noOptionsMessage={'No hay torneos cargados.'}
        onChange={(opcion, selector) => escucharSelector(opcion.value, selector.name)}
        opcionSeleccionada={tipoTorneoArray[torneo.tipoTorneo - 1]}
      ></Selector>
      <InputLowa
        type="text"
        name="tituloTorneo"
        placeholder="Título de Torneo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosTorneo.tituloTorneo ? datosTorneo.tituloTorneo : ''}
      ></InputLowa>

      <InputDateLowa
        name="fechaInicio"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Inicio"
        value={datosTorneo.fechaInicio ? datosTorneo.fechaInicio : ''}
      />
      <InputDateLowa
        name="fechaFin"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Fin"
        value={datosTorneo.fechaFin ? datosTorneo.fechaFin : ''}
      />
      <BotonLowa
        tituloboton={Object.keys(torneo).length > 0 ? 'Siguiente' : 'Crear Torneo'}
        onClick={
          Object.keys(torneo).length > 0
            ? () => siguientePantallaNuevoTorneo()
            : /* */
              () => validarCamposNuevoTorneo()
        }
        disabled={Object.keys(datosTorneo).length >= 4 ? false : true}
      ></BotonLowa>
      <Alertas
        tipoDeSweet={isAgregarTorneo.tipo}
        subtitulo={isAgregarTorneo.mensaje}
        mostrarSweet={
          isAgregarTorneo.isCargando || isAgregarTorneo.isExito || isAgregarTorneo.isError
        }
        RespuestaDeSweet={respuestaDeAlertas}
      ></Alertas>
      <Alertas
        tipoDeSweet={alertaFechas.tipo}
        subtitulo={alertaFechas.mensaje}
        mostrarSweet={alertaFechas.isMostrar}
        RespuestaDeSweet={respuestaDeAlertaFechas}
      ></Alertas>
    </div>
  );
};
export default NuevoTorneo;
