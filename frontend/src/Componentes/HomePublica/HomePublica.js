import React from 'react';
import RutasPublicas from '../../Rutas/RutasPublicas';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
/* import PieDepagina from '../PieDePagina/PieDepagina'; */

export const HomePublica = () => {
  return (
    <React.Fragment>
      <BarraDeNavegacion></BarraDeNavegacion>
      <RutasPublicas />
      {/* <PieDepagina></PieDepagina> */}
    </React.Fragment>
  );
};
