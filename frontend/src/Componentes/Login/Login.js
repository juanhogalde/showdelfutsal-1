import React, {useState} from 'react';
import './Login.css';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';

import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Redux/UsuarioLogueado/AccionesUsuarioLogueado';

const Login = () => {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');
  const {isLogueoUsuario} = useSelector(state => state.sotreLogueo);
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);

    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const iniciarSesion = () => {
    console.log(valueInput);
    console.log('click en botón');
    dispatch(login(valueInput));
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
          name="email"
        ></InputLowa>
        <InputLowa
          type="password"
          placeholder="Contraseña"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="password"
        ></InputLowa>
        {isLogueoUsuario.tipo === 'error' && (
          <h6 className="CI-texto-contraseña-usurio">Usuario o Contraseña Incorrectas</h6>
        )}
        <BotonLowa onClick={() => iniciarSesion()}></BotonLowa>
        <div className="CI-link-Login">
          <Link to="/Administrador" className="link-Login">
            Cambiar Contraseña
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
