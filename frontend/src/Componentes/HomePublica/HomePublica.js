import React from 'react';
import RutasPublicas from '../../Rutas/RutasPublicas';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import {useSelector} from 'react-redux';

export const HomePublica = () => {
  const {logueado} = useSelector(state => state.storePrueba);

  return (
    <React.Fragment>
      {logueado && <BarraDeNavegacion></BarraDeNavegacion>}
      <RutasPublicas />
    </React.Fragment>
  );
};
