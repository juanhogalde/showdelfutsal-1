import React, {useEffect, useState} from 'react';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';
import '../RecuperarContraseña/RecuperarContraseña.css';
import {useDispatch, useSelector} from 'react-redux';
import {
  recuperarPsw,
  volverPorDefectoRecuperarPsw_accion,
} from '../../Redux/UsuarioLogueado/AccionesUsuarioLogueado';

const RecuperarContraseña = () => {
  const [valueInput, setValueInput] = useState('');
  const dispatch = useDispatch();
  const {isRecuperarContraseña, isEmailRecuperarContraseñaExito} = useSelector(
    state => state.storeLogueo
  );
  const escucharCambios = (name, value) => {
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  useEffect(() => {
    dispatch(volverPorDefectoRecuperarPsw_accion);
    return () => {};
  }, [dispatch]);
  const recuperarContraseña = () => {
    dispatch(recuperarPsw(valueInput));
  };
  return (
    <div className="CP-Login-Recuperar-Psw">
      <div className="CI-Logo-Login-Recuperar-Psw">
        <img alt="Marca" src={marca} className="marca-Login-Recuperar-Psw"></img>
        <img alt="Iso" src={iso} className="iso-Login-Recuperar-Psw"></img>
      </div>
      <div className="CI-Inputs-Login-Recuperar-Psw">
        <h4>Recuperar contraseña</h4>
        <InputLowa
          type="text"
          placeholder="Ingrese su correo electrónico"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="email"
        ></InputLowa>
        {isRecuperarContraseña.tipo === 'error' && (
          <h6 className="CI-texto-error-contraseña-usurio-Recuperar-Psw">
            {isRecuperarContraseña.mensaje}
          </h6>
        )}
        <BotonLowa onClick={() => recuperarContraseña()}></BotonLowa>
        <h6 className="CI-texto-contraseña-usurio-Recuperar-Psw">
          Se le enviara un email con una nueva clave para que pueda acceder al sistema
        </h6>
        {isEmailRecuperarContraseñaExito && (
          <h6 className="CI-texto-exito-contraseña-usurio-Recuperar-Psw">
            se envio la clave a su correo!
          </h6>
        )}
      </div>
    </div>
  );
};

export default RecuperarContraseña;
