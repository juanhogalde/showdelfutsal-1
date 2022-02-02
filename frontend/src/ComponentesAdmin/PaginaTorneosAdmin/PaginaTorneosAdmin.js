import React from 'react';
import './PaginaTorneosAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {
  actualizarListaDeTorneos_accion,
  eliminarTorneo_accion,
  obtenerDatosDeTorneoParaEdicionDefault_accion,
  volverPorDefectoEliminarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';

const PaginaTorneosAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {torneos, torneo, isEliminarTorneo, isObtenerDatosEditarTorneo} = useSelector(
    state => state.storeTorneos
  );
  const dispatch = useDispatch();

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Torneo/Nuevo');
    }
  };

  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isEliminarTorneo.isConsulta) {
        dispatch(eliminarTorneo_accion(isEliminarTorneo.id));
      }
      if (isEliminarTorneo.isExito) {
        dispatch(actualizarListaDeTorneos_accion());
      }
      if (isEliminarTorneo.isError) {
        dispatch(volverPorDefectoEliminarTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoEliminarTorneo_accion());
    }
  };

  const obtenerRespuestaDeAlertaEditarTorneo = respuesta => {
    if (respuesta) {
      if (isObtenerDatosEditarTorneo.isExito) {
        historialDeNavegacion.push(`/Torneo/Editar/${torneo._id}}`);
        dispatch(obtenerDatosDeTorneoParaEdicionDefault_accion());
      }
      if (isObtenerDatosEditarTorneo.isError) {
        dispatch(obtenerDatosDeTorneoParaEdicionDefault_accion());
      }
    }
  };
  /* useLayoutEffect(() => {
    if (torneo) {
      if (Object.keys(torneo).length > 0) {
        dispatch(volverPorDefectoUnTorneo_accion());
      }
    }
    return () => {};
  }, [dispatch, torneo]); */

  return (
    <div className="CP-PaginaTorneosAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones="Agregar"
        tituloFiltroSecciones="Todos los torneos"
        isSeccionTorneos={true}
        datosDeSeccion={torneos}
      ></PaginasSeccionesAdmin>
      <Alertas
        tipoDeSweet={isEliminarTorneo.tipo}
        mostrarSweet={
          isEliminarTorneo.isConsulta ||
          isEliminarTorneo.isCargando ||
          isEliminarTorneo.isExito ||
          isEliminarTorneo.isError
        }
        subtitulo={isEliminarTorneo.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertas}
      ></Alertas>
      <Alertas
        tipoDeSweet={isObtenerDatosEditarTorneo.tipo}
        mostrarSweet={
          isObtenerDatosEditarTorneo.isCargando ||
          isObtenerDatosEditarTorneo.isExito ||
          isObtenerDatosEditarTorneo.isError
        }
        subtitulo={isObtenerDatosEditarTorneo.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertaEditarTorneo}
      ></Alertas>
    </div>
  );
};
export default PaginaTorneosAdmin;
