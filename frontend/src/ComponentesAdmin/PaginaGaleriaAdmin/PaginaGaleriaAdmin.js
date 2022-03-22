import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import './PaginaGaleriaAdmin.css';
import {
  actualizarListaDeGalerias_accion,
  eliminarGaleria_accion,
  volverPorDefectoEliminarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import Alertas from '../Alertas/Alertas';

const PaginaGaleriaAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {isEliminarGaleria} = useSelector(state => state.storeGalerias);

  const {galerias} = useSelector(state => state.storeGalerias);
  const dispatch = useDispatch();

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Galería/Nueva');
    }
  };

  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isEliminarGaleria.isConsulta) {
        dispatch(eliminarGaleria_accion(isEliminarGaleria.id));
      }
      if (isEliminarGaleria.isExito) {
        dispatch(actualizarListaDeGalerias_accion());
      }
      if (isEliminarGaleria.isError) {
        dispatch(volverPorDefectoEliminarGaleria_accion());
      }
    } else {
      dispatch(volverPorDefectoEliminarGaleria_accion());
    }
  };
  return (
    <div className="CP-PaginaGaleriaAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones="Agregar"
        tituloFiltroSecciones={'Todas las galerías'}
        isSeccionGaleria={true}
        datosDeSeccion={galerias}
      ></PaginasSeccionesAdmin>
      <Alertas
        tipoDeSweet={isEliminarGaleria.tipo}
        mostrarSweet={
          isEliminarGaleria.isConsulta ||
          isEliminarGaleria.isCargando ||
          isEliminarGaleria.isExito ||
          isEliminarGaleria.isError
        }
        subtitulo={isEliminarGaleria.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertas}
      ></Alertas>
    </div>
  );
};
export default PaginaGaleriaAdmin;
