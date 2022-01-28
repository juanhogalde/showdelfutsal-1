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
  actualizarListaDeTorneos_accion,
  agregarTorneo_accion,
  consultarPorEditarTorneo_accion,
  editarTorneo_accion,
  volverPorDefectoAgregarTorneo_accion,
  volverPorDefectoEditarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import compararObjetos from '../../ModulosExternos/CompararObjetos';
import {useParams} from 'react-router-dom';

const tipoTorneoArray = [
  {value: 1, label: 'Campeonato'},
  {value: 2, label: 'Liga'},
  {value: 3, label: 'Copa'},
];

const NuevoTorneo = ({isEditarTorneoProps = false}) => {
  const {id} = useParams();
  console.log(id);
  const history = useHistory();
  const dispatch = useDispatch();
  const {torneo, isAgregarTorneo, isEditarTorneo} = useSelector(state => state.storeTorneos);

  const [datosTorneo, setDatosTorneo] = useState({});
  const [isFinalizoEdicion, setIsFinalizoEdicion] = useState(false);
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
        history.push(`/Torneo/Nuevo/Campeonato/${id}`);
        break;
      default:
        break;
    }
  };

  const respuestaDeAlertasAgregarTorneo = respuesta => {
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
      if (isEditarTorneoProps) {
        dispatch(consultarPorEditarTorneo_accion('', '', '¿Desea editar torneo?'));
      } else {
        dispatch(agregarTorneo_accion(datosTorneo));
      }
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
  const validarCamposEditarTorneo = () => {
    if (compararObjetos(torneo, datosTorneo)) {
      siguientePantallaNuevoTorneo();
    } else {
      validarCamposNuevoTorneo();
    }
  };

  const obtenerRespuestaDeAlertasEditarTorneo = respuesta => {
    if (respuesta) {
      if (isEditarTorneo.isConsulta) {
        dispatch(editarTorneo_accion(datosTorneo));
      }
      if (isEditarTorneo.isExito) {
        dispatch(actualizarListaDeTorneos_accion());
        setIsFinalizoEdicion(true);
      }
      if (isEditarTorneo.isError) {
        dispatch(volverPorDefectoEditarTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoEditarTorneo_accion());
    }
  };

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
      {isEditarTorneoProps ? (
        <BotonLowa
          tituloboton={isFinalizoEdicion ? 'Siguiente' : 'Guardar'}
          onClick={
            isFinalizoEdicion
              ? () => siguientePantallaNuevoTorneo()
              : () => validarCamposEditarTorneo()
          }
          disabled={Object.keys(datosTorneo).length >= 4 ? false : true}
        ></BotonLowa>
      ) : (
        <BotonLowa
          tituloboton={Object.keys(torneo).length > 0 ? 'Siguiente' : 'Crear Torneo'}
          onClick={
            Object.keys(torneo).length > 0
              ? () => siguientePantallaNuevoTorneo()
              : () => validarCamposNuevoTorneo()
          }
          disabled={Object.keys(datosTorneo).length >= 4 ? false : true}
        ></BotonLowa>
      )}
      {/* <BotonLowa
        tituloboton={
          Object.keys(torneo).length > 0
            ? isEditarTorneo
              ? 'Guardar'
              : 'Siguiente'
            : 'Crear Torneo'
        }
        onClick={
          Object.keys(torneo).length > 0
            ? () => siguientePantallaNuevoTorneo()
            : () => validarCamposNuevoTorneo()
        }
        disabled={Object.keys(datosTorneo).length >= 4 ? false : true}
      ></BotonLowa> */}
      <Alertas
        tipoDeSweet={isAgregarTorneo.tipo}
        subtitulo={isAgregarTorneo.mensaje}
        mostrarSweet={
          isAgregarTorneo.isCargando || isAgregarTorneo.isExito || isAgregarTorneo.isError
        }
        RespuestaDeSweet={respuestaDeAlertasAgregarTorneo}
      ></Alertas>
      <Alertas
        tipoDeSweet={alertaFechas.tipo}
        subtitulo={alertaFechas.mensaje}
        mostrarSweet={alertaFechas.isMostrar}
        RespuestaDeSweet={respuestaDeAlertaFechas}
      ></Alertas>
      <Alertas
        mostrarSweet={true}
        tipoDeSweet={isEditarTorneo.tipo}
        subtitulo={isEditarTorneo.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertasEditarTorneo}
      ></Alertas>
    </div>
  );
};
export default NuevoTorneo;
