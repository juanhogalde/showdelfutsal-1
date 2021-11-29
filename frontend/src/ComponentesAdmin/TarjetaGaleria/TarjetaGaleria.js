import React, {useRef, useState} from 'react';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import './TarjetaGaleria.css';
import {HiDotsVertical} from 'react-icons/hi';
import {useHistory} from 'react-router';

const TarjetaGaleria = ({datosTarjetaGaleria = {}, tituloGaleria = 'Titulo'}) => {
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
  const editarGaleria = () => {
    historialDeNavegacion.push(`/Galería/Editar/:${1234}`);
  };
  const eliminarGaleria = () => {
    console.log('Eliminar Galeria');
  };

  return (
    <div className="CP-TarjetaGaleria">
      <p>{tituloGaleria}</p>
      <div className="CI-Cuerpo-TarjetaGaleria">
        <div className="imagenes-TarjetaGaleria">
          {datosTarjetaGaleria.map((imagen, index) => {
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
            <p onClick={() => editarGaleria()}>Editar</p>
            <p onClick={() => eliminarGaleria()}>Eliminar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarjetaGaleria;
