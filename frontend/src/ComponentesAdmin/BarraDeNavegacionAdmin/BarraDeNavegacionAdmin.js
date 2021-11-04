import React from 'react';
import './BarraDeNavegacionAdmin.css';
import iconoMenu from '../../Static/Admin/menuAdmin.svg';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';
import {useHistory, useLocation} from 'react-router';
import iconoAtras from '../../Static/Admin/iconoAtras.svg';

const BarraDeNavegacionAdmin = ({
  abrirMenuLateral = () => {
    console.log('No se envió función');
  },
}) => {
  const historialDeNavegacion = useHistory();
  const volverAtras = () => {
    console.log('volver atrás');
    historialDeNavegacion.push('/');
  };
  const locacion = useLocation();
  console.log(locacion.pathname.split('/'));
  return (
    <div className="CP-BarraDeNavegacionAdmin">
      <div
        className="CI-IconoMenu"
        onClick={locacion.pathname !== '/' ? () => volverAtras() : () => abrirMenuLateral()}
      >
        <img alt="" src={`${locacion.pathname !== '/' ? iconoAtras : iconoMenu}`}></img>
      </div>
      <div className="CI-BarraDeNavegacion">
        <h4 className="">{`${
          locacion.pathname !== '/' ? locacion.pathname.split('/')[1] : 'El show del futsal'
        }`}</h4>
      </div>
      <div className="CI-Avatar">
        <img alt="" src={iconoAvatar}></img>
      </div>
    </div>
  );
};
export default BarraDeNavegacionAdmin;
