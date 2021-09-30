import React from 'react';
import {useSelector} from 'react-redux';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import ImagenesVideo from '../Componentes/ImagenesVideo/ImagenesVideo';

const RutasPublicas = () => {
  const {DatosDePruebaImagenes} = useSelector(state => state.storePrueba);
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/Imagenes">
          <ImagenesVideo
            DatosDeEntrada={DatosDePruebaImagenes}
            tipoDeSliderFlecha={false}
            tipoVideo={false}
          ></ImagenesVideo>
        </Route>
        {/* <Route exact path="/**">
          <h1>Home Ruta Publica /</h1>
        </Route> */}
      </Switch>
    </React.Fragment>
  );
};

export default RutasPublicas;
