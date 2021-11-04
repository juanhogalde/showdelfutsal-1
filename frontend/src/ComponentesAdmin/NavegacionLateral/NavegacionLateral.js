import React from 'react';
import './NavegacionLateral.css';
import {Link} from 'react-router-dom';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';
import {BsCalendarWeek} from 'react-icons/bs';
import {BsTable} from 'react-icons/bs';
import {BsCardImage} from 'react-icons/bs';
import {BsPlusCircle} from 'react-icons/bs';
import {BsPersonCircle} from 'react-icons/bs';
import {BsXCircle} from 'react-icons/bs';
import {BsPower} from 'react-icons/bs';

const NavegacionLateral = props => {
  const {isMenuLateralAbierto, abrirMenuLateral} = props;

  // console.log(isMenuLateralAbierto);
  const cerrarSesion = () => {
    localStorage.removeItem('token');
    window.location.href = '/Administrador';
  };
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
        <Link to="/fixture">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsCalendarWeek />
              <h6>Fixture</h6>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsTable />
              <h6>Tabla de posiciones</h6>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsCardImage />
              <h6>Publicidad</h6>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsPlusCircle />
              <h6>Agregar Noticia</h6>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsPlusCircle />
              <h6>Agregar Imagen</h6>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="I-Navegacion-Lateral-Menu">
            <div className="I-Navegacion-Lateral-Link">
              <BsPersonCircle />
              <h6>Mi Perfil</h6>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="CI-Navegacion-Sesion"
        onClick={() => {
          cerrarSesion();
        }}
      >
        <div className="I-Cerrar-sesion">
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
