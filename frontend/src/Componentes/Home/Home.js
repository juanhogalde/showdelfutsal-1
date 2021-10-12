import React from 'react';
/* import {useSelector} from 'react-redux';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import RutasPublicas from '../../Rutas/RutasPublicas'; */
import Inicio from '../Inicio/Inicio';

const Home = () => {
  // const {logueado} = useSelector(state => state.storePrueba);
  // return <div>{logueado ? <RutasPrivadas /> : <RutasPublicas />}</div>;
  return (
    <React.Fragment>
      <Inicio />
    </React.Fragment>
  );
};

export default Home;
