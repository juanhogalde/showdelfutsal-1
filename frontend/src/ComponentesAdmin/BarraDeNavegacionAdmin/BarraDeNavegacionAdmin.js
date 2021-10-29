import React from 'react';
import './BarraDeNavegacionAdmin.css';
import iconoMenu from '../../Static/Admin/menuAdmin.svg';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';

const BarraDeNavegacionAdmin = ({
  abrirMenuLateral = () => {
    console.log('No se envió función');
  },
}) => {
  return (
    <div className="CP-BarraDeNavegacionAdmin">
      <div className="CI-IconoMenu" onClick={() => abrirMenuLateral()}>
        <img alt="" src={iconoMenu}></img>
      </div>
      <div className="CI-BarraDeNavegacion">
        <h5 className="">El Show del Futsal</h5>
      </div>
      <div className="CI-Avatar">
        <img alt="" src={iconoAvatar}></img>
      </div>
    </div>
  );
};
export default BarraDeNavegacionAdmin;
