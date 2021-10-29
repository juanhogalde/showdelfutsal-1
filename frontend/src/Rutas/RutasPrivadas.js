import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import Login from '../Componentes/Login/Login';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';

const RutasPrivadas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Login} path="/Login"></Route>
        <Route exact component={HomePrivada} path="/Administrador"></Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPrivadas;
