import React from 'react';
import RutasPrivadas from './RutasPrivadas';
import {useSelector} from 'react-redux';
import RutasPublicas from './RutasPublicas';
const Rutas = () => {
  const {usuarioLogueado} = useSelector(state => state.sotreLogueo);
  return <React.Fragment>{usuarioLogueado ? <RutasPrivadas /> : <RutasPublicas />}</React.Fragment>;
};

export default Rutas;
