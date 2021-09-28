import React from 'react';
import './BarraDeNavegacion.css';
import LogoInicio from '../../Static/Img/isologo.png';

const BarraDeNavegacion = () => {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="menu-toggle" id="mobile-menu">
          <span classNameName="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="nav-menu">
          <p className="nav-link">NOTICIAS</p>

          <p className="nav-link">FEMENINO</p>

          <p className="nav-link">MASCULINO</p>
          <div className="CI-logo-inicio">
            <img className="Logo-inicio" src={LogoInicio}></img>
          </div>

          <p className="nav-link">INFERIORES</p>

          <p className="nav-link">COPA</p>

          <p className="nav-link">LIGA</p>
        </div>
      </div>
    </div>
  );
};

export default BarraDeNavegacion;
