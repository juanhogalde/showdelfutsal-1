import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Home from './Componentes/Home/Home';

import './index.css';
import HomePrivada from './ComponentesAdmin/HomePrivada/HomePrivada';
import {LayoutCargaDeDatos} from './ComponentesAdmin/LayoutCargaDeDatos/LayoutCargaDeDatos';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Home></Home>
      {/* <LayoutCargaDeDatos></LayoutCargaDeDatos> */}
      {/* <HomePrivada></HomePrivada> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
