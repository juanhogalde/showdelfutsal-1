import React from 'react';
import {useLocation} from 'react-router';

const RetornaTituloDeNavegacion = () => {
  const locacion = useLocation();

  if (locacion.pathname !== '/') {
    if (locacion.pathname.split('/').length !== 2) {
      return <h4>{`${locacion.pathname.split('/')[2]} ${locacion.pathname.split('/')[1]}`}</h4>;
      /* if (locacion.pathname.split('/').length === 4) {
        return <h4>{`${locacion.pathname.split('/')[2]} ${locacion.pathname.split('/')[1]}`}</h4>;
      } else {
        return <h4>{`${locacion.pathname.split('/')[2]} ${locacion.pathname.split('/')[1]}`}</h4>;
      } */
    } else {
      return <h4>{locacion.pathname.split('/')}</h4>;
    }
  } else {
    return <h4>El show del futsal</h4>;
  }
};
export default RetornaTituloDeNavegacion;
