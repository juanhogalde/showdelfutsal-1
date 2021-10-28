import React from 'react';
import './NavegacionLateral.css';
import {NavLink} from 'react-router-dom';
import iconoPlus from '../../Static/Admin/plus.svg';
import iconoAvatar from '../../Static/Admin/iconoAvatar.svg';

const NavegacionLateral = () => {
  return (
    <div className="CP-Navegacion-lateral">
      <div className="CI-Usuario">
        <div className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoAvatar}></img>
          <div className="I-Usuario">
            <h4>Nombre usuario</h4>
            <h6>Rol</h6>
          </div>
        </div>
      </div>
      <div className="CI-Navegacion-Lateral">
        <NavLink exact to="/a" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoPlus}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Fixture</h6>
          </div>
        </NavLink>
        <NavLink exact to="/" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoPlus}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Tabla de posiciones</h6>
          </div>
        </NavLink>
        <NavLink exact to="/" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoPlus}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Publicidad</h6>
          </div>
        </NavLink>
        <NavLink exact to="/" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoPlus}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Agregar Noticia</h6>
          </div>
        </NavLink>
        <NavLink exact to="/" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoPlus}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Agregar Imagen</h6>
          </div>
        </NavLink>
        <NavLink exact to="/" className="I-Navegacion-Lateral-Menu">
          <img className="icon-navegacion-lateral" alt="" src={iconoAvatar}></img>
          <div className="I-Navegacion-Lateral-Link">
            <h6>Mi Perfil</h6>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default NavegacionLateral;
