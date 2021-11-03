import React from 'react';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';

const RutasPrivadas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={HomePrivada} path="/"></Route>
        <Route exact path="/fixture">
          <h1>Fixture</h1>
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPrivadas;
