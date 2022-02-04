import React, {useState} from 'react';
import './TarjetaEquipo.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useRef} from 'react';

const TarjetaEquipo = () => {
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };

  return (
    <div className="CP-Tarjeta">
      <div className="CI-Cuerpo-Tarjeta">
        <div className="imagen-Tarjeta">
          <ImagenAdmin></ImagenAdmin>
        </div>
        <div className="info-Tarjeta">
          <h5>Alianza</h5>
          <p>Masculino</p>
          <p>Divisional A</p>
        </div>
      </div>
      <div className="CI-Icono-Acciones-Tarjeta" onClick={() => mostrarAcciones()}>
        <HiDotsVertical />
      </div>

      <div
        ref={elementoAcciones}
        className={`${
          isAcciones ? 'CI-Acciones-Tarjeta CI-Acciones-Tarjeta-Apertura' : 'CI-Acciones-Tarjeta'
        }`}
        tabIndex="1"
        onBlur={() => ocultarAcciones()}
      >
        <FiEdit3 className={' iconoAcción-ListaImagenes'}></FiEdit3>
        <MdDeleteForever className={' iconoAcción-ListaImagenes'} />
      </div>
    </div>
  );
};
export default TarjetaEquipo;
