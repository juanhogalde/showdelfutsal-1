import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import CambiarContraseña from '../Componentes/CambiarContraseña/CambiarContraseña';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';

const RutasPrivadas = () => {
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  if (usuarioLogueado && usuarioLogueado.isRecuperarContraseña) {
    return (
      <React.Fragment>
        <CambiarContraseña />
      </React.Fragment>
    );
  } else {
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
  }
};

export default RutasPrivadas;
