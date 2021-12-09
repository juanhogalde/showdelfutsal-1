import React from 'react';
import './ItemPublicidad.css';
import {FiEdit3} from 'react-icons/fi';
import {useHistory} from 'react-router';
import {buscarPublicidadAEditar_accion} from '../../Redux/Publicidades/AccionesPublicidades';
import {useDispatch} from 'react-redux';

const ItemPublicidad = ({publicidad = {}, linkTo = '/', ubicacion = 'Ubicación'}) => {
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const irAEditarPublicidad = () => {
    dispatch(buscarPublicidadAEditar_accion(publicidad._id));
    historialDeNavegacion.push(linkTo);
  };
  return (
    <div className="CI-Publicidad-Item" onClick={() => irAEditarPublicidad()}>
      <div className="info-Item-Publicidad">
        <p>{publicidad.fecha ? publicidad.fecha.substr(0, 10) : ''}</p>
        <p>{publicidad ? publicidad.nombrePublicidad : ''}</p>
      </div>
      <div className="acciones-Item-Publicidad">
        <FiEdit3 className="iconoAcción-ItemPublicidad"></FiEdit3>
        <p className="textoModificar-ItemPublicidad">Modificar</p>
      </div>
    </div>
  );
};
export default ItemPublicidad;
