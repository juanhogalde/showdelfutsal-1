import React from 'react';
import {useSelector} from 'react-redux';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import RutasPublicas from '../../Rutas/RutasPublicas';

const Home = () => {
  const {logueado} = useSelector(state => state.storePrueba);
  return <div>{logueado ? <RutasPrivadas /> : <RutasPublicas />}</div>;
};

export default Home;
