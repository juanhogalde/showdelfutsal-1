import React, {useState} from 'react';
import './TarjetaTorneo.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import {HiDotsVertical} from 'react-icons/hi';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit3} from 'react-icons/fi';
import {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
  cargarDatosDeTorneoParaEdicion_accion,
  consultarPorEliminarTorneo_accion,
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
  irAgregarZonas = () => {
    console.log('');
  },
}) => {
  console.log(isExisteSubcategoria);
  const [isAcciones, setIsAcciones] = useState(false);
  const elementoAcciones = useRef();
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const mostrarAcciones = () => {
    setIsAcciones(!isAcciones);
    elementoAcciones.current.focus();
  };
  const ocultarAcciones = () => {
    setIsAcciones(false);
  };
  const editarTorneo = id => {
    dispatch(cargarDatosDeTorneoParaEdicion_accion(torneo));
    historialDeNavegacion.push(`/Torneo/Editar/${id}}`);
  };
  const consultaPorEliminarTorneo = id => {
    dispatch(consultarPorEliminarTorneo_accion(id));
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
            ? () => consultarPorAgregarCategoriaSubcategoria(categoria.value, subcategoria.value)
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
              {torneo.fechaInicio ? torneo.fechaInicio : ''} -{' '}
              {torneo.fechaFin ? torneo.fechaFin : ''}
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
        <FiEdit3
          className="iconoAcción-ListaImagenes"
          onClick={isCampeonato ? () => irAgregarZonas() : () => editarTorneo(torneo._id)}
        ></FiEdit3>
        <MdDeleteForever
          onClick={() => consultaPorEliminarTorneo(torneo._id)}
          className="iconoAcción-ListaImagenes"
        />
      </div>
    </div>
  );
};
export default TarjetaTorneo;
