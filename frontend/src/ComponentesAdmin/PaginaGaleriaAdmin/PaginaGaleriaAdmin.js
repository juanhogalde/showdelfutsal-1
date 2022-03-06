import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ModalLowa from '../ModalLowa/ModalLowa';
// import {useHistory} from 'react-router';
import img1 from '../../Static/Admin/iconoImagen.png';
import img2 from '../../Static/Admin/iconoVideo.jpg';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import './PaginaGaleriaAdmin.css';
import {
  actualizarListaDeGalerias_accion,
  eliminarGaleria_accion,
  volverPorDefectoAgregarGaleria_accion,
  volverPorDefectoEliminarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import {IoImageOutline, IoVideocamOutline} from 'react-icons/io5';
import Alertas from '../Alertas/Alertas';

const PaginaGaleriaAdmin = () => {
  // const historialDeNavegacion = useHistory();
  const {isEliminarGaleria} = useSelector(state => state.storeGalerias);

  const {galerias} = useSelector(state => state.storeGalerias);
  const [isMostrarModal, setIsMostrarModal] = useState(false);
  const dispatch = useDispatch();

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      setIsMostrarModal(true);
      dispatch(volverPorDefectoAgregarGaleria_accion());
      // historialDeNavegacion.push('/Galería/Nueva');
    }
  };
  const cerrarModalImagen = () => {
    setIsMostrarModal(false);
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
      <ModalLowa
        isMostrar={isMostrarModal}
        cerrarModalLowa={cerrarModalImagen}
        isPlasmarImagen={true}
      >
        <div className="LI-Tarjetas-Galeria">
          <TarjetaPanel
            tituloPanel={'Imagen'}
            url={img1}
            linkTo="Galería/Nueva"
            icono={<IoImageOutline />}
            tituloCentrado={true}
          />
          <TarjetaPanel
            tituloPanel={'Video '}
            url={img2}
            linkTo={`Galería/Video/${'nuevo'}`}
            icono={<IoVideocamOutline />}
            tituloCentrado={true}
          />
        </div>
      </ModalLowa>
    </div>
  );
};
export default PaginaGaleriaAdmin;
