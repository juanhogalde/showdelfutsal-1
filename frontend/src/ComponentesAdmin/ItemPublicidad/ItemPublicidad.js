import React from 'react';
import './ItemPublicidad.css';
import {FiEdit3} from 'react-icons/fi';

const ItemPublicidad = () => {
  return (
    <div className="CI-Publicidad-Item">
      <div className="info-Item-Publicidad">
        <p>27/11/1992</p>
        <p>Inicio</p>
      </div>
      <div className="acciones-Item-Publicidad">
        <FiEdit3 className="iconoAcción-ItemPublicidad"></FiEdit3>
        <p className="textoModificar-ItemPublicidad">Modificar</p>
      </div>
    </div>
  );
};
export default ItemPublicidad;
