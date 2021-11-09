import React from 'react';
import './PaginaNoticiasAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';

const PaginaNoticiasAdmin = () => {
  const historialDeNavegacion = useHistory();
  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Noticia/Nueva');
    }
  };

  return (
    <div className="CP-PaginaNoticiasAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones={'Agregar'}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaNoticiasAdmin;
