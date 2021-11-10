import React from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import InputSwitchLowa from '../InputSwitchLowa/InputSwitchLowa';
import './EditarPublicidad.css';

const EditarPublicidad = () => {
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);
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
      <InputLowa type="file" onChange={(name, value) => escucharCambios(name, value)}></InputLowa>
      <BotonLowa tituloboton={'Guardar Publicidad'}></BotonLowa>
    </div>
  );
};
export default EditarPublicidad;
