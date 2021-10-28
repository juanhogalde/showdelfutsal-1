import React, {useState} from 'react';
import './Login.css';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';

import {Link} from 'react-router-dom';

const Login = () => {
  const [valueInput, setValueInput] = useState('');

  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);

    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const iniciarSesion = () => {
    console.log('click en botón');
  };
  return (
    <div className="CP-Login">
      <div className="CI-Logo-Login">
        <img alt="Marca" src={marca} className="marca-Login"></img>
        <img alt="Iso" src={iso} className="iso-Login"></img>
      </div>
      <div className="CI-Inputs-Login">
        <h4>Iniciar Sesión</h4>
        <InputLowa
          type="text"
          placeholder="Ingrese Usuario"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="usuario"
        ></InputLowa>
        <InputLowa
          type="password"
          placeholder="Contraseña"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="contraseña"
        ></InputLowa>
        <BotonLowa onClick={() => iniciarSesion()}></BotonLowa>
        <div className="CI-link-Login">
          <Link className="link-Login">Cambiar Contraseña</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
