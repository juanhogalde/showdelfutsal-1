import React from 'react';
import {Redirect, Route, useLocation} from 'react-router';
import {Switch} from 'react-router-dom';
import PaginaSomos from '../Componentes/PaginaSomos/PaginaSomos';

import Inicio from '../Componentes/Inicio/Inicio';
import PaginaNoticias from '../Componentes/PaginaNoticias/PaginaNoticias';
import PaginaSecciones from '../Componentes/PaginaSecciones/PaginaSecciones';
import PaginaNoticiaDesarrollada from '../Componentes/PaginaNoticiaDesarrollada/PaginaNoticiaDesarrollada';
import NoticiasFiltradas from '../Componentes/NoticiasFiltradas/NoticiasFiltradas';
import BarraDeNavegacion from '../Componentes/BarraDeNavegacion/BarraDeNavegacion';
import Home from '../Componentes/Home/Home';
import RecuperarContraseña from '../Componentes/RecuperarContraseña/RecuperarContraseña';

const RutasPublicas = () => {
  return (
    <React.Fragment>
      {!['/Administrador', '/RecuperarContraseña'].includes(useLocation().pathname) && (
        <BarraDeNavegacion />
      )}
      {/* {!useLocation().pathname.includes('/Administrador') && <BarraDeNavegacion />} */}
      <Switch>
        <Route exact component={Inicio} path="/"></Route>
        <Route exact component={Home} path="/Administrador"></Route>
        <Route exact component={RecuperarContraseña} path="/RecuperarContraseña"></Route>
        <Route exact component={PaginaSomos} path="/Somos"></Route>
        <Route exact component={PaginaNoticias} path="/Noticias"></Route>
        <Route exact component={PaginaNoticiaDesarrollada} path="/Noticia/Desarrollada/:id"></Route>

        <Route exact component={PaginaSecciones} path="/Seccion"></Route>
        <Route exact component={PaginaSecciones} path="/Seccion/:id"></Route>
        <Route exact component={NoticiasFiltradas} path="/Noticias/Filtradas"></Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
