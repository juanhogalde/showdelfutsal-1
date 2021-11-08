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
    console.log('volver atrás');
    if (locacion.pathname.split('/').length > 2) {
      if (
        locacion.pathname.split('/')[1] === 'Noticia' &&
        locacion.pathname.split('/')[2] === 'Agregar'
      ) {
        historialDeNavegacion.push('/Noticias');
      }
    } else {
      historialDeNavegacion.push('/');
    }
  };
  console.log(locacion.pathname.split('/').length);
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
