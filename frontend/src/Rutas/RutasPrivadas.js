import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';

const RutasPrivadas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <h1>Home Ruta Privada /</h1>
        </Route>
        <Route exact path="/**">
          <h1>Home Ruta Privada /</h1>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPrivadas;
