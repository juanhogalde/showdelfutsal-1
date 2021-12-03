import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './EditarPublicidad.css';

const EditarPublicidad = () => {
  const [datosCargados, setdatosCargados] = useState({});
  // const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);
    setdatosCargados({...datosCargados, [name]: value});
  };
  const guardarPublicidad = () => {
    if (datosCargados.imagen) {
      // dispatch(guardarPublicidad_accion(datosCargados));
    } else {
      alert('atencion no ingreso imagen');
    }
  };
  return (
    <div className="CP-EditarPublicidad">
      <h5>Publicidad Inicio</h5>
      <div className="CI-DesactivarPublicidad">
        <p>Desactivar</p>
        <InputSwitchLowa
          name="checkbox"
          onChange={e => escucharCambios(e.target.name, e.target.checked)}
        ></InputSwitchLowa>
      </div>
      <InputLowa
        name="imagen"
        type="file"
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      <BotonLowa tituloboton={'Guardar Publicidad'} onClick={() => guardarPublicidad()}></BotonLowa>
    </div>
  );
};
export default EditarPublicidad;
