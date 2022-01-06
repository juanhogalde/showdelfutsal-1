import React, {useState} from 'react';
import './TarjetaTorneo.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useRef} from 'react';
import {useHistory} from 'react-router-dom';

const TarjetaTorneo = ({
  isCampeonato = false,
  torneo = '',
  categoria = '',
  subcategoria = '',
  redireccioarZona = () => {
    console.log('');
  },
}) => {
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();
  const historialDeNavegacion = useHistory();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const editarTorneo = () => {
    historialDeNavegacion.push(`/Torneo/Editar/${1234}`);
  };
  const consultaPorEliminarTorneo = () => {};

  return (
    <div
      className={`${
        isCampeonato ? 'CP-TarjetaTorneo CP-TarjetaTorneo-Campeonato' : 'CP-TarjetaTorneo'
      }`}
      onClick={() => redireccioarZona(categoria.value, subcategoria.value)}
    >
      {!isCampeonato && (
        <div className="CI-Titulo-TarjetaTorneo">
          <h5>{torneo.tituloTorneo ? torneo.tituloTorneo : '-'}</h5>
        </div>
      )}

      <div className="CI-Imagen-TarjetaTorneo">
        <ImagenAdmin></ImagenAdmin>
      </div>
      <div className="CI-Cuerpo-TarjetaTorneo">
        {!isCampeonato && (
          <p>
            {torneo.fechaInicio ? torneo.fechaInicio : ''} -{' '}
            {torneo.fechaFin ? torneo.fechaFin : ''}
          </p>
        )}
        <p>{subcategoria.label}</p>
      </div>

      <div className="CI-Acciones-TarjetaTorneo" onClick={() => mostrarAcciones()}>
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
        <FiEdit3 className="iconoAcción-ListaImagenes" onClick={() => editarTorneo()}></FiEdit3>
        <MdDeleteForever
          onClick={() => consultaPorEliminarTorneo()}
          className="iconoAcción-ListaImagenes"
        />
      </div>
    </div>
  );
};
export default TarjetaTorneo;
