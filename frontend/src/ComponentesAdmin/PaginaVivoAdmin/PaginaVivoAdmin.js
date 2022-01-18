import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {eliminarVivo_accion, volverDatosPorfecto_accion} from '../../Redux/Vivo/AccionesVivo';
import Alertas from '../Alertas/Alertas';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';

const PaginaVivoAdmin = () => {
  const {vivo, isVivo} = useSelector(state => state.storeVivo);
  const dispatch = useDispatch();
  const historialDeNavegacion = useHistory();
  const redireccionarNuevoVideo = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push(`/Vivo/Nuevo/${'nuevo'}`);
    }
  };
  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isVivo.porEliminar) {
        if (vivo._id) {
          dispatch(eliminarVivo_accion(vivo));
        }
      }
      if (isVivo.isEliminado || isVivo.isError) {
        dispatch(volverDatosPorfecto_accion());
      }
    } else {
      dispatch(volverDatosPorfecto_accion());
    }
  };
  return (
    <div className="CP-PaginaGaleriaAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevoVideo}
        tituloBotonSecciones="Nuevo vivo"
        tituloFiltroSecciones={'Todas los vivos'}
        isSeccionVivo={true}
        mostrarBotonNuevo={vivo.urlVivo ? false : true}
        datosDeSeccion={vivo.urlVivo ? vivo : {}}
        mostrarFiltros={false}
      ></PaginasSeccionesAdmin>

      <Alertas
        tipoDeSweet={isVivo.tipo}
        mostrarSweet={
          isVivo.porEliminar || isVivo.isEliminado || isVivo.isError || isVivo.isMostrar
        }
        subtitulo={isVivo.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertas}
      ></Alertas>
    </div>
  );
};

export default PaginaVivoAdmin;
