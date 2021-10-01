import React from 'react';
import {useSelector} from 'react-redux';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import Filtros from '../Componentes/Filtros/Filtros';
import NoticiaDesarrollada from '../Componentes/NoticiaDesarrollada/NoticiaDesarrollada';
import NoticiasMiniatura from '../Componentes/NoticiasMiniatura/NoticiasMiniatura';
const Filtro = [
  {nombre: 'Femenino', link: '/link'},
  {nombre: 'Masculino', link: '/link'},
  {nombre: 'Inferiores', link: '/NoticiaDesarrollada'},
];
const RutasPublicas = () => {
  const {noticias} = useSelector(state => state.storePrueba);
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <NoticiasMiniatura datosModelado={noticias} isSobreImagen={true}></NoticiasMiniatura>
        </Route>
        <Route exact path="/NoticiaDesarrollada">
          <NoticiaDesarrollada datosModelado={noticias}></NoticiaDesarrollada>
        </Route>
        <Route exact path="/Filtros">
          <Filtros filtros={Filtro}></Filtros>
        </Route>
        <Route exact path="/**">
          <h1>Home Ruta Publica /</h1>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
