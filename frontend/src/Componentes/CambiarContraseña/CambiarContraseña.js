import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import '../CambiarContraseña/CambiarContraseña.css';
import {cambiarContraseña} from '../../Redux/UsuarioLogueado/AccionesUsuarioLogueado';
const CambiarContraseña = () => {
  const dispatch = useDispatch();
  const [typeNuevaPass, setTypeNuevaPass] = useState('password');
  const [typeRepetidaPass, setTypeRepetidaPass] = useState('password');
  const {usuarioLogueado, isCambiandoContraseña} = useSelector(state => state.storeLogueo);
  const [contraseñasNoCoinciden, setContraseñasNoCoinciden] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const escucharCambios = (name, value) => {
    setContraseñasNoCoinciden(false);
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };
  const ModificarContraseña = () => {
    if (valueInput.password.trim() === valueInput.passwordRepetida.trim()) {
      dispatch(cambiarContraseña({usuario: usuarioLogueado, passwordNueva: valueInput.password}));
    } else {
      setContraseñasNoCoinciden(true);
    }
  };
  const mostrarPasswordNueva = () => {
    console.log('ejecturo mostrarContraseña');
    if (typeNuevaPass === 'password') {
      setTypeNuevaPass('text');
    } else {
      setTypeNuevaPass('password');
    }
  };
  const mostrarPasswordRepetida = () => {
    console.log('ejecturo mostrarContraseña');
    if (typeRepetidaPass === 'password') {
      setTypeRepetidaPass('text');
    } else {
      setTypeRepetidaPass('password');
    }
  };
  return (
    <div className="CP-Login-Cambiar-Psw">
      <div className="CI-Logo-Login-Cambiar-Psw">
        <img alt="Marca" src={marca} className="marca-Login-Cambiar-Psw"></img>
        <img alt="Iso" src={iso} className="iso-Login-Cambiar-Psw"></img>
      </div>
      <div className="CI-Inputs-Login-Cambiar-Psw">
        <h4>Cambiar contraseña</h4>
        <InputLowa
          type={typeNuevaPass}
          placeholder="Ingrese Nueva Contraseña"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="password"
          inputConIcono={typeNuevaPass === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
          funcionDeIcono={() => mostrarPasswordNueva()}
        ></InputLowa>
        <InputLowa
          type={typeRepetidaPass}
          placeholder="Repita Nueva Contraseña"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="passwordRepetida"
          inputConIcono={typeRepetidaPass === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
          funcionDeIcono={() => mostrarPasswordRepetida()}
        ></InputLowa>
        {contraseñasNoCoinciden && (
          <h6 className="CI-texto-error-contraseña-usurio-Cambiar-Psw">
            Las contraseñas no coinciden
          </h6>
        )}
        {isCambiandoContraseña.tipo === 'error' && (
          <h6 className="CI-texto-error-contraseña-usurio-Cambiar-Psw">
            {isCambiandoContraseña.mensaje}
          </h6>
        )}

        <BotonLowa tituloboton={'Guardar'} onClick={() => ModificarContraseña()}></BotonLowa>
      </div>
    </div>
  );
};

export default CambiarContraseña;
