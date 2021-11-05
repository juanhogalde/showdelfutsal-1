import React from 'react';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import InicioAdmin from '../ComponentesAdmin/InicioAdmin/InicioAdmin';
import NuevaNoticia from '../ComponentesAdmin/NuevaNoticia/NuevaNoticia';
import PaginaGaleriaAdmin from '../ComponentesAdmin/PaginaGaleriaAdmin/PaginaGaleriaAdmin';
import PaginaNoticiasAdmin from '../ComponentesAdmin/PaginaNoticiasAdmin/PaginaNoticiasAdmin';
import PaginaPublicidadAdmin from '../ComponentesAdmin/PaginaPublicidadAdmin/PaginaPublicidadAdmin';
import PaginasSeccionesAdmin from '../ComponentesAdmin/PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import PaginaTablaAdmin from '../ComponentesAdmin/PaginaTablaAdmin/PaginaTablaAdmin';
import PaginaTorneosAdmin from '../ComponentesAdmin/PaginaTorneosAdmin/PaginaTorneosAdmin';

const RutasPrivadas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={InicioAdmin} path="/"></Route>
        <Route exact component={PaginasSeccionesAdmin} path="/Secciones"></Route>
        <Route exact component={PaginaNoticiasAdmin} path="/Noticias"></Route>
        <Route exact component={PaginaPublicidadAdmin} path="/Publicidad"></Route>
        <Route exact component={PaginaGaleriaAdmin} path="/Galería"></Route>
        <Route exact component={PaginaTorneosAdmin} path="/Torneos"></Route>
        <Route exact component={PaginaTablaAdmin} path="/Tablas"></Route>
        <Route exact component={NuevaNoticia} path="/Noticia/Agregar"></Route>

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
