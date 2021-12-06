import React from 'react';
import './ItemPublicidad.css';
import {FiEdit3} from 'react-icons/fi';
import {useHistory} from 'react-router';
import {buscarPublicidadAEditar_accion} from '../../Redux/Publicidades/AccionesPublicidades';
import {useDispatch} from 'react-redux';

const ItemPublicidad = ({idPublicidad = '', linkTo = '/', ubicacion = 'Ubicación'}) => {
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const irAEditarPublicidad = () => {
    dispatch(buscarPublicidadAEditar_accion(idPublicidad));
    historialDeNavegacion.push(linkTo);
  };
  return (
    <div className="CI-Publicidad-Item" onClick={() => irAEditarPublicidad()}>
      <div className="info-Item-Publicidad">
        <p>27/11/1992</p>
        <p>{ubicacion}</p>
      </div>
      <div className="acciones-Item-Publicidad">
        <FiEdit3 className="iconoAcción-ItemPublicidad"></FiEdit3>
        <p className="textoModificar-ItemPublicidad">Modificar</p>
      </div>
    </div>
  );
};
export default ItemPublicidad;
