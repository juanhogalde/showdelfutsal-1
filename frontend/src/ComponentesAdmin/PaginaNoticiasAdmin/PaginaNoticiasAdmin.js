import React from 'react';
import './PaginaNoticiasAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';
import {useSelector} from 'react-redux';

const PaginaNoticiasAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {noticias} = useSelector(state => state.storeNoticias);
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
        tituloFiltroSecciones={'Todas las noticias'}
        isSeccionNoticias={true}
        datosDeSeccion={noticias}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaNoticiasAdmin;
