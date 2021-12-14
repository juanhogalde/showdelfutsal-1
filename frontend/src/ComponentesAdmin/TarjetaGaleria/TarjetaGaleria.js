import React, {useRef, useState} from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';
import {useHistory} from 'react-router';

import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useDispatch} from 'react-redux';
import {eliminarGaleria_accion} from '../../Redux/Galerias/AccionesGalerias';

const TarjetaGaleria = ({galeria = {}}) => {
  const dispatch = useDispatch();

  const historialDeNavegacion = useHistory();
  const [isAcciones, setIsAcciones] = useState(false);
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
  const eliminarGaleria = id => {
    dispatch(eliminarGaleria_accion(id));
  };

  return (
    <div className="CP-TarjetaGaleria">
      <p>{galeria.tituloGaleria}</p>
      <div className="CI-Cuerpo-TarjetaGaleria">
        <div className="imagenes-TarjetaGaleria">
          {galeria.imagenesId.map((imagen, index) => {
            return (
              <ImagenAdmin key={index} noticiaImagen={imagen} isTarjetaGaleria={true}></ImagenAdmin>
            );
          })}
        </div>
        <div className="acciones-TarjetaGaleria">
          <HiDotsVertical onClick={() => mostrarAcciones()} />
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
              onClick={() => eliminarGaleria(galeria._id)}
              className="iconoAcción-ListaImagenes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarjetaGaleria;
