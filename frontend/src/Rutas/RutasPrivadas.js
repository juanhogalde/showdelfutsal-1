import React from 'react';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import InicioAdmin from '../ComponentesAdmin/InicioAdmin/InicioAdmin';
import PaginaNoticiasAdmin from '../ComponentesAdmin/PaginaNoticiasAdmin/PaginaNoticiasAdmin';
import PaginasSeccionesAdmin from '../ComponentesAdmin/PaginasSeccionesAdmin/PaginasSeccionesAdmin';

const RutasPrivadas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={InicioAdmin} path="/"></Route>
        <Route exact component={PaginasSeccionesAdmin} path="/Secciones"></Route>
        <Route exact component={PaginaNoticiasAdmin} path="/Noticias"></Route>

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
