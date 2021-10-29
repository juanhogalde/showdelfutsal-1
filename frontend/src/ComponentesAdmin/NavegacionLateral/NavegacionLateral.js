import React from 'react';
import './NavegacionLateral.css';
import {NavLink} from 'react-router-dom';
import iconoPlus from '../../Static/Admin/plus.svg';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';
import {BsCalendarWeek} from 'react-icons/bs';
import {BsTable} from 'react-icons/bs';
import {BsCardImage} from 'react-icons/bs';
import {BsPlusCircle} from 'react-icons/bs';
import {BsPersonCircle} from 'react-icons/bs';
import {BsXCircle} from 'react-icons/bs';
import {useState} from 'react';
import {BsPower} from 'react-icons/bs';

const NavegacionLateral = props => {
  const {isMenuLateralAbierto, abrirMenuLateral} = props;

  console.log(isMenuLateralAbierto);

  return (
    <div
      className={`${
        isMenuLateralAbierto ? 'CP-Navegacion-lateral-apertura' : 'CP-Navegacion-lateral'
      }`}
    >
      <div className="CI-Usuario">
        <div className="I-Navegacion-Lateral-usuario">
          <div className="I-Usuario">
            <img className="icon-navegacion-lateral" alt="" src={iconoAvatar}></img>
            <h4>Nombre Apellido</h4>
          </div>
          <div className="I-Rol">
            <h6>Administrativo</h6>
          </div>
        </div>
        <div className="I-Navegacion-Lateral-cerrar">
          <div className="icon-close-latera">
            <BsXCircle size={22} onClick={() => abrirMenuLateral()} />
          </div>
        </div>
      </div>
      <div className="CI-Navegacion-Lateral">
        <div exact to="/a" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsCalendarWeek />
            <h6>Fixture</h6>
          </div>
        </div>
        <div exact to="/" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsTable />
            <h6>Tabla de posiciones</h6>
          </div>
        </div>
        <div exact to="/" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsCardImage />
            <h6>Publicidad</h6>
          </div>
        </div>
        <div exact to="/" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsPlusCircle />
            <h6>Agregar Noticia</h6>
          </div>
        </div>
        <div exact to="/" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsPlusCircle />
            <h6>Agregar Imagen</h6>
          </div>
        </div>
        <div exact to="/" className="I-Navegacion-Lateral-Menu">
          <div className="I-Navegacion-Lateral-Link">
            <BsPersonCircle />
            <h6>Mi Perfil</h6>
          </div>
        </div>
      </div>
      <div className="CI-Navegacion-Sesion">
        <div exact to="/a" className="I-Cerrar-sesion">
          <div className="I-Navegacion-Lateral-Link">
            <h6>Salir</h6>
            <BsPower />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavegacionLateral;
