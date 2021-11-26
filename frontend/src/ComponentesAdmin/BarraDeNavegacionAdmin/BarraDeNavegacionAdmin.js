import React from 'react';
import './BarraDeNavegacionAdmin.css';
import iconoMenu from '../../Static/Admin/menuAdmin.svg';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';
import {useHistory, useLocation} from 'react-router';
import iconoAtras from '../../Static/Admin/iconoAtras.svg';
import RetornaTituloDeNavegacion from './RetornaTituloDeNavegacion.js/RetornaTituloDeNavegacion';

const BarraDeNavegacionAdmin = ({
  abrirMenuLateral = () => {
    console.log('No se envió función');
  },
}) => {
  const locacion = useLocation();
  const historialDeNavegacion = useHistory();

  const volverAtras = () => {
    if (locacion.pathname.split('/').length !== 2) {
      if (locacion.pathname.split('/')[1] === 'Noticia') {
        historialDeNavegacion.push('/Noticias');
      }
      if (locacion.pathname.split('/')[1] === 'Galería') {
        historialDeNavegacion.push('/Galerías');
      }
      if (locacion.pathname.split('/')[1] === 'Publicidad') {
        historialDeNavegacion.push('/Publicidad');
      }
      if (locacion.pathname.split('/')[1] === 'Torneo') {
        if (locacion.pathname.split('/')[3] === 'Campeonato') {
          historialDeNavegacion.push('/Torneo/Nuevo');
        } else {
          historialDeNavegacion.push('/Torneos');
        }
      }
    } else {
      historialDeNavegacion.push('/');
    }
  };
  // console.log(locacion.pathname.split('/'));

  return (
    <div className="CP-BarraDeNavegacionAdmin">
      <div
        className="CI-IconoMenu"
        onClick={locacion.pathname !== '/' ? () => volverAtras() : () => abrirMenuLateral()}
      >
        <img alt="" src={`${locacion.pathname !== '/' ? iconoAtras : iconoMenu}`}></img>
      </div>
      <div className="CI-BarraDeNavegacion">
        <RetornaTituloDeNavegacion></RetornaTituloDeNavegacion>
      </div>
      <div className="CI-Avatar">
        <img alt="" src={iconoAvatar}></img>
      </div>
    </div>
  );
};
export default BarraDeNavegacionAdmin;
