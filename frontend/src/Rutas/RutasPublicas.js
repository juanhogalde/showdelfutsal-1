import React from 'react';
import {useSelector} from 'react-redux';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import PaginaSomos from '../Componentes/PaginaSomos/PaginaSomos';
import Inicio from '../Componentes/Inicio/Inicio';
const RutasPublicas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Inicio} path="/"></Route>
        <Route component={PaginaSomos} path="/Somos"></Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
