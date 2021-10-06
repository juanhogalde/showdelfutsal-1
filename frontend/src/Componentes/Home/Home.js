import React from 'react';
import {useSelector} from 'react-redux';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import RutasPublicas from '../../Rutas/RutasPublicas';
import BarraDeNavegacion from '../BarraDeNavegacion/BarraDeNavegacion';
import Inicio from '../Inicio/Inicio';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
import PaginaSomos from '../PaginaSomos/PaginaSomos';
const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Inferiores', link: '/NoticiaDesarrollada'},
];
const Home = () => {
  // const {logueado} = useSelector(state => state.storePrueba);
  // return <div>{logueado ? <RutasPrivadas /> : <RutasPublicas />}</div>;
  return (
    <React.Fragment>
      {/* <BarraDeNavegacion /> */}
      {/* <PaginaSomos /> */}
      <Inicio />
    </React.Fragment>
  );
};

export default Home;
