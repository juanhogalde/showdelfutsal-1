import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import NoticiasMiniatura from '../Componentes/NoticiasMiniatura/NoticiasMiniatura';

const RutasPublicas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <NoticiasMiniatura></NoticiasMiniatura>
        </Route>
        <Route exact path="/**">
          <h1>Home Ruta Publica /</h1>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
