import React from 'react';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';

const PaginaVivoAdmin = () => {
  // const {vivo} = useSelector(state => state.storeVivo);
  const vivo = [];
  const redireccionarNuevoVideo = respuesta => {
    if (respuesta) {
      //   setIsMostrarModal(true);
      //   dispatch(volverPorDefectoAgregarVivo_accion());
      //   historialDeNavegacion.push('/Vivo/Nuevo');
    }
  };
  return (
    <div className="CP-PaginaGaleriaAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevoVideo}
        tituloBotonSecciones="Nuevo vivo"
        tituloFiltroSecciones={'Todas los vivos'}
        isSeccionVivo={true}
        datosDeSeccion={vivo}
      ></PaginasSeccionesAdmin>
      {/* <Alertas
        tipoDeSweet={isEliminarGaleria.tipo}
        mostrarSweet={
          isEliminarGaleria.isConsulta ||
          isEliminarGaleria.isCargando ||
          isEliminarGaleria.isExito ||
          isEliminarGaleria.isError
        }
        subtitulo={isEliminarGaleria.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertas}
      ></Alertas> */}
    </div>
  );
};

export default PaginaVivoAdmin;
