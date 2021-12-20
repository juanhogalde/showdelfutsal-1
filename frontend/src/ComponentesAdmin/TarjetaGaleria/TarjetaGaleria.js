import React, {useRef, useState} from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';
import {useHistory} from 'react-router';

import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useDispatch, useSelector} from 'react-redux';
import {
  consultaEliminarGaleria_accion,
  actualizarListaDeGalerias_accion,
  eliminarGaleria_accion,
  volverPorDefectoEliminarGaleria_accion,
} from '../../Redux/Galerias/AccionesGalerias';
import Alertas from '../Alertas/Alertas';
import PlasmarImagen from '../PlasmarImagen/PlasmarImagen';
import ModalLowa from '../ModalLowa/ModalLowa';
import VideosAdmin from '../VideosAdmin/VideosAdmin';

const TarjetaGaleria = ({galeria = {}}) => {
  const {isEliminarGaleria} = useSelector(state => state.storeGalerias);
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
  const editarGaleria = id => {
    historialDeNavegacion.push(`/Galería/Editar/${id}`);
  };
  const consultaPorEliminarGaleria = id => {
    dispatch(consultaEliminarGaleria_accion(id));
  };
  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isEliminarGaleria.isConsulta) {
        eliminarGaleria(isEliminarGaleria.datos);
      }
      if (isEliminarGaleria.isExito) {
        dispatch(actualizarListaDeGalerias_accion(galeria._id));
      }
      if (isEliminarGaleria.isError) {
        dispatch(volverPorDefectoEliminarGaleria_accion());
      }
    } else {
      dispatch(volverPorDefectoEliminarGaleria_accion());
    }
  };
  const eliminarGaleria = id => {
    dispatch(eliminarGaleria_accion(id));
  };
  const mostrarModalImagen = (respuesta, imagen) => {
    let auxDatosImg = {
      isMostrar: respuesta,
      datos: imagen,
    };
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
                      mostrarModalImagen={mostrarModalImagen}
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
                      mostrarModalImagen={mostrarModalImagen}
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
              onClick={() => editarGaleria(galeria._id)}
            ></FiEdit3>
            <MdDeleteForever
              onClick={() => consultaPorEliminarGaleria(galeria._id)}
              className="iconoAcción-ListaImagenes"
            />
          </div>
        </div>
      </div>
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
        isMostrar={isMostrarModal.isMostrar}
        cerrarModalLowa={cerrarModalImagen}
        isPlasmarImagen={true}
      >
        <PlasmarImagen datosImagen={isMostrarModal.datos}></PlasmarImagen>
      </ModalLowa>
    </React.Fragment>
  );
};
export default TarjetaGaleria;
