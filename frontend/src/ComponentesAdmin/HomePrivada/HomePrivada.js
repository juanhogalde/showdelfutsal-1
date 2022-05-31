import React from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import './HomePrivada.css';

import {useSelector} from 'react-redux';

import RutasPrivadas from '../../Rutas/RutasPrivadas';

const HomePrivada = () => {
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  return (
    <React.Fragment>
      {usuarioLogueado && !usuarioLogueado.isRecuperarContraseña && (
        <BarraDeNavegacionAdmin></BarraDeNavegacionAdmin>
      )}
      <RutasPrivadas></RutasPrivadas>
    </React.Fragment>
  );
};
export default HomePrivada;
