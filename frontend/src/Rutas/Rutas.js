import React from 'react';
/* import RutasPrivadas from './RutasPrivadas';
 */ import {useSelector} from 'react-redux';
import RutasPublicas from './RutasPublicas';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
const Rutas = () => {
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  return <React.Fragment>{usuarioLogueado ? <HomePrivada /> : <RutasPublicas />}</React.Fragment>;
};

export default Rutas;
