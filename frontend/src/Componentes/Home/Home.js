import React from 'react';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import {useSelector} from 'react-redux';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import RutasPublicas from '../../Rutas/RutasPublicas';
import Inicio from '../Inicio/Inicio';
import PaginaSomos from '../PaginaSomos/PaginaSomos';
import {HomePublica} from '../HomePublica/HomePublica';

const Home = () => {
  const {logueado} = useSelector(state => state.storePrueba);
  return <div>{logueado ? <RutasPrivadas /> : <HomePublica></HomePublica>}</div>;
};

export default Home;
