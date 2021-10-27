import React from 'react';
import './Login.css';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import InputLowa from '../Input/InputLowa';
import BotonLowa from '../BotonLowa/BotonLowa';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="CP-Login">
      <div className="CI-Logo-Login">
        <img alt="Marca" src={marca} className="marca-Login"></img>
        <img alt="Iso" src={iso} className="iso-Login"></img>
      </div>
      <div className="CI-Inputs-Login">
        <h4>Iniciar Sesión</h4>
        <InputLowa type="text" placeholder="Ingrese Usuario" autocomplete="off"></InputLowa>
        <InputLowa type="password" placeholder="Ingrese Usuario"></InputLowa>
        <BotonLowa></BotonLowa>
        <Link>Cambiar Contraseña</Link>
      </div>
    </div>
  );
};
export default Login;
