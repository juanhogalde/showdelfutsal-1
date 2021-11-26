import React from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import NavegacionLateral from '../NavegacionLateral/NavegacionLateral';
import './HomePrivada.css';

import {useState} from 'react';
import {useSelector} from 'react-redux';

import RutasPrivadas from '../../Rutas/RutasPrivadas';

const HomePrivada = () => {
  const [isMenuLateralAbierto, setIsAperturaLateral] = useState(false);
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);

  const abrirMenuLateral = () => {
    console.log('Se ejecuto funcion');

    if (isMenuLateralAbierto) {
      setIsAperturaLateral(false);
    } else {
      setIsAperturaLateral(true);
    }
  };
  return (
    <React.Fragment>
      {usuarioLogueado && !usuarioLogueado.isRecuperarContraseña && (
        <BarraDeNavegacionAdmin abrirMenuLateral={abrirMenuLateral}></BarraDeNavegacionAdmin>
      )}
      <NavegacionLateral
        isMenuLateralAbierto={isMenuLateralAbierto}
        abrirMenuLateral={abrirMenuLateral}
      />
      <RutasPrivadas></RutasPrivadas>
    </React.Fragment>
  );
};
export default HomePrivada;
