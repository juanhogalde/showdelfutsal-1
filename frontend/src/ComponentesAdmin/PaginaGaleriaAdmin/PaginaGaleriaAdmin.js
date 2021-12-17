import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ModalLowa from '../ModalLowa/ModalLowa';
// import {useHistory} from 'react-router';
import img1 from '../../Static/Admin/iconoImagen.png';
import img2 from '../../Static/Admin/iconoVideo.jpg';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import TarjetaPanel from '../TarjetaPanel/TarjetaPanel';
import './PaginaGaleriaAdmin.css';

const PaginaGaleriaAdmin = () => {
  // const historialDeNavegacion = useHistory();
  const {galerias} = useSelector(state => state.storeGalerias);
  const [isMostrarModal, setIsMostrarModal] = useState(false);

  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      setIsMostrarModal(true);
      // historialDeNavegacion.push('/Galería/Nueva');
    }
  };
  const cerrarModalImagen = () => {
    setIsMostrarModal(false);
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
      <ModalLowa
        isMostrar={isMostrarModal}
        cerrarModalLowa={cerrarModalImagen}
        isPlasmarImagen={true}
      >
        <div className="LI-Tarjetas-Galeria">
          <TarjetaPanel tituloPanel={'Imagen'} url={img1} linkTo="Galería/Nueva" />
          <TarjetaPanel tituloPanel={'Video '} url={img2} linkTo="Galería/Viedeo" />
        </div>
      </ModalLowa>
    </div>
  );
};
export default PaginaGaleriaAdmin;
