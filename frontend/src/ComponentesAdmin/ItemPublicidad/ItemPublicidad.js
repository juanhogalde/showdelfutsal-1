import React from 'react';
import './ItemPublicidad.css';
import {FiEdit3} from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';

const ItemPublicidad = () => {
  return (
    <div className="CI-Publicidad-Item">
      <div className="info-Item-Publicidad">
        <p>27/11/1992</p>
        <p>Inicio</p>
      </div>
      <div className="acciones-Item-Publicidad">
        <FiEdit3 className="iconoAcción-ItemPublicidad"></FiEdit3>
        <MdDeleteForever className="iconoAcción-ItemPublicidad" />
      </div>
    </div>
  );
};
export default ItemPublicidad;
