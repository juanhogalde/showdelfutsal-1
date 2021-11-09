import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import CambiarContraseña from '../Componentes/CambiarContraseña/CambiarContraseña';
import AgregarImagenes from '../ComponentesAdmin/AgregarImagenes/AgregarImagenes';
// import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
import InicioAdmin from '../ComponentesAdmin/InicioAdmin/InicioAdmin';
import NuevaNoticia from '../ComponentesAdmin/NuevaNoticia/NuevaNoticia';
import PaginaGaleriaAdmin from '../ComponentesAdmin/PaginaGaleriaAdmin/PaginaGaleriaAdmin';
import PaginaNoticiasAdmin from '../ComponentesAdmin/PaginaNoticiasAdmin/PaginaNoticiasAdmin';
import PaginaPublicidadAdmin from '../ComponentesAdmin/PaginaPublicidadAdmin/PaginaPublicidadAdmin';
import PaginasSeccionesAdmin from '../ComponentesAdmin/PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import PaginaTablaAdmin from '../ComponentesAdmin/PaginaTablaAdmin/PaginaTablaAdmin';
import PaginaTorneosAdmin from '../ComponentesAdmin/PaginaTorneosAdmin/PaginaTorneosAdmin';
import VistaPreviaNoticia from '../ComponentesAdmin/VistaPreviaNoticia/VistaPreviaNoticia';

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
          <Route exact component={InicioAdmin} path="/"></Route>
          <Route exact component={PaginasSeccionesAdmin} path="/Secciones"></Route>
          <Route exact component={PaginaNoticiasAdmin} path="/Noticias"></Route>
          <Route exact component={PaginaPublicidadAdmin} path="/Publicidad"></Route>
          <Route exact component={PaginaGaleriaAdmin} path="/Galerías"></Route>
          <Route exact component={PaginaTorneosAdmin} path="/Torneos"></Route>
          <Route exact component={PaginaTablaAdmin} path="/Tablas"></Route>
          <Route exact component={NuevaNoticia} path="/Noticia/Nueva"></Route>
          <Route exact component={AgregarImagenes} path="/Galería/Nueva"></Route>
          <Route exact component={VistaPreviaNoticia} path="/Noticia/Editar/:id"></Route>

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
