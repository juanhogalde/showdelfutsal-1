import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import marca from '../../Static/Img/marca.png';
import iso from '../../Static/Img/iso.png';
import BotonLowa from '../../ComponentesAdmin/BotonLowa/BotonLowa';
import InputLowa from '../../ComponentesAdmin/InputLowa/InputLowa';
import '../CambiarContraseña/CambiarContraseña.css';
import {cambiarContraseña} from '../../Redux/UsuarioLogueado/AccionesUsuarioLogueado';
const CambiarContraseña = () => {
  const dispatch = useDispatch();
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
  return (
    <div className="CP-Login-Cambiar-Psw">
      <div className="CI-Logo-Login-Cambiar-Psw">
        <img alt="Marca" src={marca} className="marca-Login-Cambiar-Psw"></img>
        <img alt="Iso" src={iso} className="iso-Login-Cambiar-Psw"></img>
      </div>
      <div className="CI-Inputs-Login-Cambiar-Psw">
        <h4>Cambiar contraseña</h4>
        <InputLowa
          type="password"
          placeholder="Ingrese Nueva Contraseña"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="password"
        ></InputLowa>
        <InputLowa
          type="password"
          placeholder="Repita Nueva Contraseña"
          autocomplete="off"
          onChange={e => escucharCambios(e.target.name, e.target.value)}
          name="passwordRepetida"
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

        <BotonLowa onClick={() => ModificarContraseña()}></BotonLowa>
      </div>
    </div>
  );
};

export default CambiarContraseña;
