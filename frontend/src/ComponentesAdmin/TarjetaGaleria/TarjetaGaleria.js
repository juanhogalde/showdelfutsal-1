import React, {useRef, useState} from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';
import {useHistory} from 'react-router';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useDispatch} from 'react-redux';
import {
  consultaEliminarGaleria_accion,
  cargarVideoGaleriaParaEditar_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import PlasmarImagen from '../PlasmarImagen/PlasmarImagen';
import ModalLowa from '../ModalLowa/ModalLowa';
// import VideosAdmin from '../VideosAdmin/VideosAdmin';

const TarjetaGaleria = ({galeria = {}}) => {
  const dispatch = useDispatch();

  const historialDeNavegacion = useHistory();
  const [isAcciones, setIsAcciones] = useState(false);
  const [isMostrarModal, setIsMostrarModal] = useState('');
  const elementoAcciones = useRef();

  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const editarGaleria = galeria => {
    if (galeria.imagenesId.length !== 0) {
      historialDeNavegacion.push(`/Galería/Editar/${galeria._id}`);
    } else {
      if (galeria.videosId.length !== 0) {
        dispatch(cargarVideoGaleriaParaEditar_accion(galeria));
        historialDeNavegacion.push(`/Galería/Viedeo/${'editar'}`);
      }
    }
  };
  const consultaPorEliminarGaleria = id => {
    dispatch(consultaEliminarGaleria_accion(id));
  };

  const mostrarContenidoEnModal = (respuesta, imagen, isVideo, video) => {
    var auxDatosImg = {};
    if (isVideo) {
      auxDatosImg = {
        isMostrar: respuesta,
        datos: video,
        isVideo: isVideo,
      };
    } else {
      auxDatosImg = {
        isMostrar: respuesta,
        datos: imagen,
        isVideo: isVideo,
      };
    }
    setIsMostrarModal(auxDatosImg);
  };
  const cerrarModalImagen = () => {
    setIsMostrarModal({isMostrar: false, datos: {}});
  };
  return (
    <React.Fragment>
      <div className="CP-TarjetaGaleria">
        <p>{galeria.tituloGaleria}</p>
        <div className="CI-Cuerpo-TarjetaGaleria">
          <div className="imagenes-TarjetaGaleria">
            {galeria.imagenesId.length
              ? galeria.imagenesId.map((imagen, index) => {
                  return (
                    <ImagenAdmin
                      key={index}
                      noticiaImagen={imagen}
                      isTarjetaGaleria={true}
                      mostrarModalImagen={mostrarContenidoEnModal}
                    ></ImagenAdmin>
                  );
                })
              : galeria.videosId.length
              ? galeria.videosId.map((videos, index) => {
                  return (
                    <ImagenAdmin
                      key={index}
                      isVideo={true}
                      dataVideo={videos}
                      isTarjetaGaleria={true}
                      mostrarModalImagen={mostrarContenidoEnModal}
                    ></ImagenAdmin>
                  );
                })
              : null}
          </div>
          <div className="acciones-TarjetaGaleria" onClick={() => mostrarAcciones()}>
            <HiDotsVertical />
          </div>
          <div
            ref={elementoAcciones}
            id="acciones-TarjetaGaleria"
            className={`${
              isAcciones
                ? 'CI-Acciones-TarjetaGaleria CI-Acciones-TarjetaGaleria-Apertura'
                : 'CI-Acciones-TarjetaGaleria'
            }`}
            tabIndex="1"
            onBlur={() => ocultarAcciones()}
          >
            <FiEdit3
              className="iconoAcción-ListaImagenes"
              onClick={() => editarGaleria(galeria)}
            ></FiEdit3>
            <MdDeleteForever
              onClick={() => consultaPorEliminarGaleria(galeria._id)}
              className="iconoAcción-ListaImagenes"
            />
          </div>
        </div>
      </div>

      <ModalLowa
        isMostrar={isMostrarModal.isMostrar}
        cerrarModalLowa={cerrarModalImagen}
        isPlasmarImagen={true}
      >
        <PlasmarImagen
          datosImagen={isMostrarModal.datos}
          isVideo={isMostrarModal.isVideo}
        ></PlasmarImagen>
      </ModalLowa>
    </React.Fragment>
  );
};
export default TarjetaGaleria;
