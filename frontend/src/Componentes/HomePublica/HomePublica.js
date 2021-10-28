import React from 'react';
import RutasPublicas from '../../Rutas/RutasPublicas';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';

export const HomePublica = () => {
  return (
    <React.Fragment>
      <BarraDeNavegacion></BarraDeNavegacion>
      <RutasPublicas />
    </React.Fragment>
  );
};
