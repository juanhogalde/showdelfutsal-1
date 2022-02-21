import React, {useState} from 'react';
import './TarjetaEquipo.css';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {useRef} from 'react';
import {urlEscudos} from '../../Entorno';
const TarjetaEquipo = ({
  equipo = '',
  funcionEliminarEquipo = () => {
    console.log('');
  },
}) => {
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
          <img alt="" src={urlEscudos + equipo.escudo}></img>
        </div>
        <div className="info-Tarjeta">
          <h5>{equipo ? equipo.nombreClub : ''}</h5>
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
        <MdDeleteForever
          className={' iconoAcción-ListaImagenes'}
          onClick={() => funcionEliminarEquipo(equipo._id)}
        />
      </div>
    </div>
  );
};
export default TarjetaEquipo;
