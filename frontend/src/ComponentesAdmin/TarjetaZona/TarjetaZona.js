import React, {useRef, useState} from 'react';
import {FiEdit3} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import './TarjetaZona.css';

const TarjetaZona = ({
  indice = '',
  datos = '',
  categoria = '',
  subcategoria = '',
  redireccionar = () => {
    console.log('');
  },
  funcionEliminarZona = () => {
    console.log('');
  },
}) => {
  const elementoAcciones = useRef();
  const [isAcciones, setIsAcciones] = useState(false);
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  console.log(datos);
  return (
    <div className="CP-TarjetaZona elementoSombreado">
      <div className="CI-Cuerpo-TarjetaZona">
        <div className="CI-Indice">
          <h3>{indice + 1}</h3>
        </div>
        <div className="Zona-Tipo">
          {datos && (
            <React.Fragment>
              <h5>{datos.nombreZona}</h5>
              {datos.tipoZona === 1 && <p>Eliminatoria</p>}
              {datos.tipoZona === 2 && <p>Grupo</p>}
              {datos.tipoZona === 3 && <p>Eliminatoria con diferencia de goles.</p>}
            </React.Fragment>
          )}
        </div>
        <div className="Categoria-Division">
          <p>{categoria.label}</p>
          <p>{subcategoria.label}</p>
        </div>
      </div>
      <div className="acciones-TarjetaZona" onClick={() => mostrarAcciones()}>
        <HiDotsVertical />
      </div>
      <div
        ref={elementoAcciones}
        className={`${
          isAcciones
            ? 'CI-Acciones-TarjetaGaleria CI-Acciones-TarjetaGaleria-Apertura'
            : 'CI-Acciones-TarjetaGaleria'
        }`}
        tabIndex="1"
        onBlur={() => ocultarAcciones()}
      >
        <FiEdit3
          className={'iconoAcción-ListaImagenes'}
          onClick={() => redireccionar(datos._id)}
        ></FiEdit3>
        <MdDeleteForever
          onClick={() => funcionEliminarZona(datos._id)}
          className={' iconoAcción-ListaImagenes'}
        />
      </div>
    </div>
  );
};
export default TarjetaZona;
