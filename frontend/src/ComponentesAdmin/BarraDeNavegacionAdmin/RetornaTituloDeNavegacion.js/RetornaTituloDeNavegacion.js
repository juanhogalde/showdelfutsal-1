import React from 'react';
import {useLocation} from 'react-router';

const RetornaTituloDeNavegacion = () => {
  const locacion = useLocation();

  if (locacion.pathname !== '/') {
    if (
      locacion.pathname.split('/')[1] === 'Noticia' &&
      locacion.pathname.split('/')[2] === 'Agregar'
    ) {
      return <h4>Nueva Noticia</h4>;
    } else {
      return <h4>{locacion.pathname.split('/')[1]}</h4>;
    }
  } else {
    return <h4>El show del futsal</h4>;
  }
};
export default RetornaTituloDeNavegacion;
