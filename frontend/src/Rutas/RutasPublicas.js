import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import PaginaSomos from '../Componentes/PaginaSomos/PaginaSomos';
import Inicio from '../Componentes/Inicio/Inicio';
import PaginaNoticias from '../Componentes/PaginaNoticias/PaginaNoticias';
import PaginaSecciones from '../Componentes/PaginaSecciones/PaginaSecciones';
const RutasPublicas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Inicio} path="/"></Route>
        <Route component={PaginaSomos} path="/Somos"></Route>
        <Route component={PaginaNoticias} path="/Noticias"></Route>
        <Route exact path="/Seccion/:id" component={PaginaSecciones}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
