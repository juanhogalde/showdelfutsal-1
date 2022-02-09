import React, {useState} from 'react';
import './TarjetaTorneo.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {
  consultarPorEliminarTorneo_accion,
  obtenerDatosDeTorneoParaEdicion_accion,
} from '../../Redux/Torneos/AccionesTorneos';

const TarjetaTorneo = ({
  isCampeonato = false,
  torneo = '',
  categoria = '',
  subcategoria = '',
  isExisteSubcategoria = false,
  consultarPorAgregarCategoriaSubcategoria = () => {
    console.log('');
  },
  redireccionarZona = () => {
    console.log('');
  },
}) => {
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();
  const dispatch = useDispatch();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const editarTorneo = id => {
    dispatch(obtenerDatosDeTorneoParaEdicion_accion(torneo));
  };
  const consultaPorEliminarTorneo = id => {
    dispatch(consultarPorEliminarTorneo_accion(id));
  };

  const formatearFechaUTC = dato => {
    let fecha = new Date(dato);
    return `${fecha.getUTCDate()}/${
      fecha.getUTCMonth() < 10 ? `0${fecha.getUTCMonth()}` : fecha.getUTCMonth()
    }/${fecha.getUTCFullYear()}`;
  };

  return (
    <div
      className={`${
        isCampeonato
          ? `${
              isExisteSubcategoria
                ? 'CP-TarjetaTorneo CP-TarjetaTorneo-Campeonato fondoVerde'
                : 'CP-TarjetaTorneo CP-TarjetaTorneo-Campeonato '
            }`
          : 'CP-TarjetaTorneo'
      }`}
    >
      <div
        className={isCampeonato ? 'CI-Cuerpo-Campeonato-TarjetaTorneo' : 'CI-Cuerpo-TarjetaTorneo'}
        onClick={
          !isExisteSubcategoria && isCampeonato
            ? () => consultarPorAgregarCategoriaSubcategoria(categoria.key, subcategoria.key)
            : () => {}
        }
      >
        {!isCampeonato && (
          <div className="titulo-TarjetaTorneo">
            <h5>{torneo.tituloTorneo ? torneo.tituloTorneo : '-'}</h5>
          </div>
        )}

        <div className="imagen-TarjetaTorneo">
          <ImagenAdmin></ImagenAdmin>
        </div>
        <div className="info-TarjetaTorneo">
          {!isCampeonato && (
            <p>
              {torneo.fechaInicio ? formatearFechaUTC(torneo.fechaInicio) : ''} -{' '}
              {torneo.fechaFin ? formatearFechaUTC(torneo.fechaFin) : ''}
            </p>
          )}
          <p>{subcategoria.label}</p>
        </div>
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
        {!isExisteSubcategoria && isCampeonato && <div className="divNoSeleccionable"></div>}
        <FiEdit3
          className={
            isCampeonato
              ? isExisteSubcategoria
                ? 'iconoAcción-ListaImagenes'
                : 'iconoAcción-ListaImagenes elementoNoSeleccionable'
              : ' iconoAcción-ListaImagenes'
          }
          onClick={
            isCampeonato
              ? () => redireccionarZona(categoria.value, subcategoria.value)
              : () => editarTorneo(torneo)
          }
        ></FiEdit3>
        <MdDeleteForever
          onClick={isCampeonato ? () => {} : () => consultaPorEliminarTorneo(torneo._id)}
          className={
            isCampeonato
              ? isExisteSubcategoria
                ? 'iconoAcción-ListaImagenes'
                : 'iconoAcción-ListaImagenes elementoNoSeleccionable'
              : ' iconoAcción-ListaImagenes'
          }
        />
      </div>
    </div>
  );
};
export default TarjetaTorneo;
