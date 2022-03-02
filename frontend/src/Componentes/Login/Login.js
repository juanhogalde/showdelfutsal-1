import React, {useState} from 'react';
import './Login.css';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Redux/UsuarioLogueado/AccionesUsuarioLogueado';

const Login = () => {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('password');
  const {isLogueoUsuario} = useSelector(state => state.storeLogueo);
  const escucharCambios = (name, value) => {
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const iniciarSesion = event => {
    if ((event && event === 'click') || event.key === 'Enter') {
      dispatch(login(valueInput));
    }
  };
  const mostrarPassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return (
    <div className="CP-Login">
      <div className="CI-Logo-Login">
        <img alt="Marca" src={marca} className="marca-Login"></img>
        <img alt="Iso" src={iso} className="iso-Login"></img>
      </div>
      <div className="CI-Inputs-Login" onKeyPress={e => iniciarSesion(e)}>
        <h4>Iniciar Sesión</h4>
        <InputLowa
          type="text"
          placeholder="Ingrese Usuario"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="email"
        ></InputLowa>
        <InputLowa
          type={type}
          placeholder="Contraseña"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="password"
          inputConIcono={type === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
          funcionDeIcono={() => mostrarPassword()}
        ></InputLowa>
        {isLogueoUsuario.tipo === 'error' && (
          <h6 className="CI-texto-contraseña-usurio">Usuario o Contraseña Incorrectas</h6>
        )}
        <BotonLowa tituloboton={'Ingresar'} onClick={e => iniciarSesion((e = 'click'))}></BotonLowa>
        <div className="CI-link-Login">
          <Link to="/RecuperarContraseña" className="link-Login">
            Cambiar Contraseña
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
