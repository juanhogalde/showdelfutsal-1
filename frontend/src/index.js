import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import './index.css';
import Rutas from './Rutas/Rutas';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Rutas />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
