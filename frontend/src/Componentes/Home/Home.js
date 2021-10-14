import React from 'react';
import {useSelector} from 'react-redux';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import {HomePublica} from '../HomePublica/HomePublica';

const Home = () => {
  const {logueado} = useSelector(state => state.storePrueba);
  return <div>{logueado ? <RutasPrivadas /> : <HomePublica></HomePublica>}</div>;
};

export default Home;
