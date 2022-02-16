import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {Switch} from 'react-router-dom';
import CambiarContraseña from '../Componentes/CambiarContraseña/CambiarContraseña';
import NuevaGaleria from '../ComponentesAdmin/NuevaGaleria/NuevaGaleria';
import EditarNoticia from '../ComponentesAdmin/EditarNoticia/EditarNoticia';
// import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
import InicioAdmin from '../ComponentesAdmin/InicioAdmin/InicioAdmin';
import NuevaNoticia from '../ComponentesAdmin/NuevaNoticia/NuevaNoticia';
import PaginaGaleriaAdmin from '../ComponentesAdmin/PaginaGaleriaAdmin/PaginaGaleriaAdmin';
import PaginaNoticiasAdmin from '../ComponentesAdmin/PaginaNoticiasAdmin/PaginaNoticiasAdmin';
import PaginaPublicidadAdmin from '../ComponentesAdmin/PaginaPublicidadAdmin/PaginaPublicidadAdmin';
/* import PaginasSeccionesAdmin from '../ComponentesAdmin/PaginasSeccionesAdmin/PaginasSeccionesAdmin'; */
import PaginaTablaAdmin from '../ComponentesAdmin/PaginaTablaAdmin/PaginaTablaAdmin';
import PaginaTorneosAdmin from '../ComponentesAdmin/PaginaTorneosAdmin/PaginaTorneosAdmin';
import VistaPreviaNoticia from '../ComponentesAdmin/VistaPreviaNoticia/VistaPreviaNoticia';
import EditarGaleria from '../ComponentesAdmin/EditarGaleria/EditarGaleria';
import EditarPublicidad from '../ComponentesAdmin/EditarPublicidad/EditarPublicidad';
import NuevoTorneo from '../ComponentesAdmin/NuevoTorneo/NuevoTorneo';
import Campeonato from '../ComponentesAdmin/Campeonato/Campeonato';
import NuevaPublicidad from '../ComponentesAdmin/NuevaPublicidad/NuevaPublicidad';
import EditarTorneo from '../ComponentesAdmin/EditarTorneo/EditarTorneo';
import NuevoEnfrentamiento from '../ComponentesAdmin/NuevoEnfrentamiento/NuevoEnfrentamiento';
import Zonas from '../ComponentesAdmin/Zonas/Zonas';
import NuevaGaleriaVideo from '../ComponentesAdmin/NuevaGaleriaVideo/NuevaGaleriaVideo';
import PaginaVivoAdmin from '../ComponentesAdmin/PaginaVivoAdmin/PaginaVivoAdmin';
import NuevoVivo from '../ComponentesAdmin/NuevoVivo/NuevoVivo';
import AgregarEquipos from '../ComponentesAdmin/AgregarEquipos/AgregarEquipos';
import EditorEnfrentamientos from '../ComponentesAdmin/EditorEnfrentamientos/EditorEnfrentamientos';

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
          {/* <Route exact component={PaginasSeccionesAdmin} path="/Secciones"></Route> */}

          <Route exact component={PaginaPublicidadAdmin} path="/Publicidad"></Route>
          <Route exact component={EditarPublicidad} path="/Publicidad/Editar"></Route>
          <Route exact component={NuevaPublicidad} path="/Publicidad/Nueva"></Route>

          <Route exact component={PaginaTorneosAdmin} path="/Torneos"></Route>
          <Route exact component={NuevoTorneo} path="/Torneo/Nuevo"></Route>
          <Route exact component={EditarTorneo} path="/Torneo/Editar/:id"></Route>

          <Route exact component={Campeonato} path="/Torneo/Nuevo/Campeonato"></Route>
          <Route exact component={Campeonato} path="/Torneo/Editar/Campeonato/:id"></Route>
          <Route
            exact
            component={Zonas}
            path="/Torneo/Nuevo/Campeonato/Zonas/:idTorneo/:idCategoria/:idSubcategoria"
          ></Route>
          <Route
            exact
            component={NuevoEnfrentamiento}
            path="/Torneo/Nuevo/Campeonato/Zonas/:idTorneo/:idCategoria/:idSubcategoria/Enfrentamientos"
          ></Route>

          <Route exact component={NuevoEnfrentamiento} path="/Enfrentamientos"></Route>
          <Route exact component={EditorEnfrentamientos} path="/Enfrentamientos/Editor"></Route>

          <Route
            exact
            component={AgregarEquipos}
            path="/Torneo/Nuevo/Campeonato/Zonas/Equipos"
          ></Route>

          <Route exact component={PaginaTablaAdmin} path="/Tablas"></Route>

          <Route exact component={PaginaGaleriaAdmin} path="/Galerías"></Route>
          <Route exact component={NuevaGaleria} path="/Galería/Nueva"></Route>
          <Route exact component={NuevaGaleriaVideo} path="/Galería/Video/:tipo"></Route>
          <Route exact component={EditarGaleria} path="/Galería/Editar/:id"></Route>
          <Route exact component={PaginaNoticiasAdmin} path="/Noticias"></Route>
          <Route exact component={NuevaNoticia} path="/Noticia/Nueva"></Route>
          <Route exact component={VistaPreviaNoticia} path="/Noticia/Ver"></Route>
          <Route exact component={EditarNoticia} path="/Noticia/Editar"></Route>
          <Route exact component={PaginaVivoAdmin} path="/Vivo"></Route>
          <Route exact component={NuevoVivo} path="/Vivo/Nuevo/:tipo"></Route>
          <Route exact component={NuevoVivo} path="/Vivo/Editar/:tipo"></Route>

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
