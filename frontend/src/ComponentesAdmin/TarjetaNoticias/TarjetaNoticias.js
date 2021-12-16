import React, {useState} from 'react';
import './TarjetaNoticias.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import TarjetaNoticiasMiniatura from '../TarjetaNoticiasMiniatura/TarjetaNoticiasMiniatura';

import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  actualizarListaNoticias_accion,
  desestacarNoticia_accion,
  destacarNoticia_accion,
  eliminarNoticia_accion,
  guardarNoticiaParaEditar_accion,
  volverPorDefecto_accion,
} from '../../Redux/Noticias/AccionesNoticias';
import {useRef} from 'react';
import {FiEdit3, FiEye, FiStar} from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import {HiDotsVertical} from 'react-icons/hi';
import Alertas from '../Alertas/Alertas';
import {BsStarFill} from 'react-icons/bs';
// import {useSelector} from 'react-redux';

export const TarjetaNoticias = ({noticia = {}}) => {
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const [isAcciones, setIsAcciones] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState({});
  const {isNoticiaGurdada, noticiaEliminada} = useSelector(state => state.storeNoticias);
  const [mostrarAlertEliminar, setMostrarAlertEliminar] = useState(false);
  const elementoAcciones = useRef();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const desestacar = noticia => {
    dispatch(desestacarNoticia_accion(noticia));
  };
  const destacar = noticia => {
    dispatch(destacarNoticia_accion(noticia));
  };
  const accionesOpciones = (tipoAccion, noticia) => {
    setNoticiaSeleccionada(noticia);
    if (tipoAccion === 'editar') {
      dispatch(guardarNoticiaParaEditar_accion(noticia));
      historialDeNavegacion.push(`/Noticia/Editar`);
    } else {
      setMostrarAlertEliminar(true);
    }
  };
  const consultarNoticia = () => {
    dispatch(guardarNoticiaParaEditar_accion(noticia));
    historialDeNavegacion.push(`/Noticia/Ver`);
  };
  const opcionSeleccionada = respuesta => {
    if (respuesta) {
      setMostrarAlertEliminar(false);
      dispatch(eliminarNoticia_accion(noticiaSeleccionada));
    } else {
      setMostrarAlertEliminar(false);
    }
  };
  const respuestaDeAlerta = () => {
    if (isNoticiaGurdada.isEliminado) {
      dispatch(actualizarListaNoticias_accion(noticiaEliminada._id));
    } else {
      dispatch(volverPorDefecto_accion());
    }
  };

  return (
    <div key={noticia._id} className="CP-Tarjeta-Noticias-Admin">
      <div className="CI-Tarjeta-Noticias-Admin ">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin noticiaImagen={noticia} />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura noticiaRecibida={noticia} />
        </div>
        {noticia.isDestacada ? (
          <div className="I-Tarjeta-Noticias-Destacada I-Tarjeta-Noticias-Destacada-Dorada">
            <BsStarFill onClick={() => desestacar(noticia)} size={18}></BsStarFill>
          </div>
        ) : (
          <div className="I-Tarjeta-Noticias-Destacada">
            <FiStar onClick={() => destacar(noticia)}></FiStar>
          </div>
        )}
        <div className="acciones-TarjetaNoticia">
          <HiDotsVertical onClick={() => mostrarAcciones()} />
          <div
            ref={elementoAcciones}
            id="acciones-TarjetaNoticia"
            className={`${
              isAcciones
                ? 'CI-Acciones-TarjetaNoticia CI-Acciones-TarjetaNoticia-Apertura'
                : 'CI-Acciones-TarjetaNoticia'
            }`}
            tabIndex="1"
            onBlur={() => ocultarAcciones()}
          >
            <FiEdit3
              className="iconoAcción-ListaImagenes"
              onClick={() => accionesOpciones('editar', noticia)}
            ></FiEdit3>
            <FiEye className="iconoAcción-ListaImagenes" onClick={() => consultarNoticia()}></FiEye>
            <MdDeleteForever
              onClick={() => accionesOpciones('eliminar', noticia)}
              className="iconoAcción-ListaImagenes"
            />
          </div>
        </div>
      </div>
      <Alertas
        mostrarSweet={mostrarAlertEliminar}
        tipoDeSweet="info"
        subtitulo="Eliminar noticia"
        RespuestaDeSweet={opcionSeleccionada}
      />
      <Alertas
        mostrarSweet={
          isNoticiaGurdada.isEliminado || isNoticiaGurdada.isError || isNoticiaGurdada.isMostrar
        }
        tipoDeSweet={isNoticiaGurdada.tipo}
        subtitulo={isNoticiaGurdada.mensaje}
        RespuestaDeSweet={respuestaDeAlerta}
      />
    </div>
  );
};

export default TarjetaNoticias;
