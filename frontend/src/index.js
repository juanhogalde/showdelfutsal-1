import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import Home from './Componentes/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Home></Home>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
