import React from 'react';
import './BarraDeNavegacionAdmin.css';
import iconoMenu from '../../Static/Admin/menuAdmin.svg';
import {useHistory, useLocation} from 'react-router';
import {BsPower} from 'react-icons/bs';
import iconoAtras from '../../Static/Admin/iconoAtras.svg';
import RetornaTituloDeNavegacion from './RetornaTituloDeNavegacion.js/RetornaTituloDeNavegacion';
import {ultimaUbicacionEditarTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';
import {useDispatch} from 'react-redux';

const BarraDeNavegacionAdmin = ({
  abrirMenuLateral = () => {
    console.log('No se envió función');
  },
}) => {
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    window.location.href = '/Administrador';
  };

  const locacion = useLocation();
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
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
        if (locacion.pathname.split('/').length === 4) {
          dispatch(ultimaUbicacionEditarTorneo_accion(true));
          historialDeNavegacion.goBack();
        } else {
          historialDeNavegacion.goBack();
        }
      }
      if (locacion.pathname.split('/')[1] === 'Vivo') {
        historialDeNavegacion.goBack();
      }
    } else {
      historialDeNavegacion.push('/');
    }
  };

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
