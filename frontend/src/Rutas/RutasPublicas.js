import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import Marcador from '../Componentes/Marcador/Marcador';

const RutasPublicas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <h1>Home Ruta Publica /</h1>
        </Route>
        {/* <Route exact path="/**">
          <h1>Home Ruta Publica /</h1>
        </Route> */}
        <Route path="/marcador" component={Marcador} exact></Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
