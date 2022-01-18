import React, {useLayoutEffect} from 'react';
import './PaginaTorneosAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {
  actualizarListaDeTorneos_accion,
  eliminarTorneo_accion,
  volverPorDefectoEliminarTorneo_accion,
  volverPorDefectoUnTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';

const PaginaTorneosAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {torneos, torneo, isEliminarTorneo} = useSelector(state => state.storeTorneos);
  const dispatch = useDispatch();

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Torneo/Nuevo');
    }
  };
  useLayoutEffect(() => {
    if (Object.keys(torneo).length > 0) {
      dispatch(volverPorDefectoUnTorneo_accion());
    }
    return () => {};
  }, [dispatch, torneo]);

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
    </div>
  );
};
export default PaginaTorneosAdmin;
