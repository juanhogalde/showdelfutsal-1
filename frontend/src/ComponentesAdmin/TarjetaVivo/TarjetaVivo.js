import React, {useLayoutEffect, useRef} from 'react';
import {useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {preguntarPorEliminarVivo_accion} from '../../Redux/Vivo/AccionesVivo';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import ModalLowa from '../ModalLowa/ModalLowa';
import PlasmarImagen from '../PlasmarImagen/PlasmarImagen';
import '../TarjetaVivo/TarjetaVivo.css';

const TarjetaVivo = ({vivo = {}}) => {
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const [isAcciones, setIsAcciones] = useState(false);
  const [isMostrarModal, setIsMostrarModal] = useState('');
  const [vivoAMostrar, setVivoAMostrar] = useState({});
  const elementoAcciones = useRef();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const editarVivo = () => {
    historialDeNavegacion.push(`/Vivo/Editar/${'editar'}`);
  };
  const eliminarVivo = () => {
    dispatch(preguntarPorEliminarVivo_accion());
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
  useLayoutEffect(() => {
    let urlFinal;
    if (vivo.urlVivo) {
      if (vivo.urlVivo.indexOf('video') !== -1) {
        let posinicial = vivo.urlVivo.indexOf('video') + 6;
        let posicionFinal = vivo.urlVivo.indexOf('/livestreaming');
        urlFinal = vivo.urlVivo.substr(posinicial, posicionFinal - posinicial);
      } else {
        let posinicial = vivo.urlVivo.indexOf('be/') + 3;
        urlFinal = vivo.urlVivo.substr(posinicial, vivo.urlVivo.length - posinicial);
      }

      setVivoAMostrar({...vivo, urlVivo: urlFinal});
    }
  }, [vivo]);
  return (
    <React.Fragment>
      <div className="CP-TarjetaVivo">
        <p>
          {vivoAMostrar.nombreVivo && vivoAMostrar.isActivo
            ? `${vivoAMostrar.nombreVivo} - ACTIVO`
            : `${vivoAMostrar.nombreVivo} - DESACTIVADO`}
        </p>
        <div className="CI-Cuerpo-TarjetaVivo">
          <div className="imagenes-TarjetaVivo">
            {vivoAMostrar.urlVivo && (
              <ImagenAdmin
                key={0}
                isVideo={true}
                dataVideo={{fuente: vivoAMostrar.urlVivo, descripcion: ''}}
                isTarjetaGaleria={true}
                mostrarModalImagen={mostrarContenidoEnModal}
              ></ImagenAdmin>
            )}
          </div>
          <div className="acciones-TarjetaVivo" onClick={() => mostrarAcciones()}>
            <HiDotsVertical />
          </div>
          <div
            ref={elementoAcciones}
            id="acciones-TarjetaVivo"
            className={`${
              isAcciones
                ? 'CI-Acciones-TarjetaVivo CI-Acciones-TarjetaVivo-Apertura'
                : 'CI-Acciones-TarjetaVivo'
            }`}
            tabIndex="1"
            onBlur={() => ocultarAcciones()}
          >
            <FiEdit3 className="iconoAcción-ListaImagenesVivo" onClick={editarVivo}></FiEdit3>
            <MdDeleteForever
              onClick={() => eliminarVivo()}
              className="iconoAcción-ListaImagenesVivo"
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

export default TarjetaVivo;
