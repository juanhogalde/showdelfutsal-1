import React from 'react';
import './ItemPublicidad.css';
import {FiEdit3} from 'react-icons/fi';
import {useHistory} from 'react-router';

const ItemPublicidad = ({linkTo = '/', ubicacion = 'Ubicación'}) => {
  const historialDeNavegacion = useHistory();
  const irAEditarPublicidad = () => {
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
