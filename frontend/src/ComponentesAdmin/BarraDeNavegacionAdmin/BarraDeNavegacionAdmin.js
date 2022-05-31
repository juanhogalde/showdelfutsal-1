import React from 'react';
import './BarraDeNavegacionAdmin.css';
import {useHistory, useLocation} from 'react-router';
import {BsPower} from 'react-icons/bs';
import iconoAtras from '../../Static/Admin/iconoAtras.svg';
import RetornaTituloDeNavegacion from './RetornaTituloDeNavegacion.js/RetornaTituloDeNavegacion';

const BarraDeNavegacionAdmin = () => {
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    window.location.href = '/Administrador';
  };
  const locacion = useLocation();
  const historialDeNavegacion = useHistory();
  return (
    <div className="CP-BarraDeNavegacionAdmin">
      <div
        className="CI-IconoMenu"
        style={{visibility:locacion.pathname === "/"? 'collapse':'visible'}}
        onClick={
           () => historialDeNavegacion.goBack()
        }
      >
        <img alt="" src={iconoAtras}></img>
      </div>
      <div className="CI-BarraDeNavegacion">
        <RetornaTituloDeNavegacion></RetornaTituloDeNavegacion>
      </div>
      <div className="CI-Avatar">
        <BsPower
          className="Boton-salir"
          onClick={() => {
            cerrarSesion();
          }}
        />
      </div>
    </div>
  );
};
export default BarraDeNavegacionAdmin;
