import React from 'react';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import PaginaSomos from '../Componentes/PaginaSomos/PaginaSomos';
import Inicio from '../Componentes/Inicio/Inicio';
import PaginaNoticias from '../Componentes/PaginaNoticias/PaginaNoticias';
import PaginaSecciones from '../Componentes/PaginaSecciones/PaginaSecciones';
import PaginaNoticiaDesarrollada from '../Componentes/PaginaNoticiaDesarrollada/PaginaNoticiaDesarrollada';
import Login from '../Componentes/Login/Login';
import NoticiasFiltradas from '../Componentes/NoticiasFiltradas/NoticiasFiltradas';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
const RutasPublicas = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Inicio} path="/"></Route>
        <Route exact component={PaginaSomos} path="/Somos"></Route>
        <Route exact component={PaginaNoticias} path="/Noticias"></Route>
        <Route exact component={PaginaNoticiaDesarrollada} path="/Noticia/Desarrollada"></Route>
        <Route exact component={PaginaSecciones} path="/Seccion"></Route>
        <Route exact component={PaginaSecciones} path="/Seccion/:id"></Route>
        <Route exact component={NoticiasFiltradas} path="/Noticias/Filtradas"></Route>
        <Route exact component={Login} path="/Login"></Route>
        <Route exact component={HomePrivada} path="/Administrador"></Route>
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
