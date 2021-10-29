import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Home from './Componentes/Home/Home';

import './index.css';
import HomePrivada from './ComponentesAdmin/HomePrivada/HomePrivada';
import Selector from './ComponentesAdmin/Selector/Selector';
/* import Login from './Componentes/Login/Login'; */

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <HomePrivada></HomePrivada> */}
      <Home></Home>
      {/* <Selector></Selector> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
