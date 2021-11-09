import React from 'react';
import {useHistory} from 'react-router';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import './PaginaGaleriaAdmin.css';

const PaginaGaleriaAdmin = () => {
  const historialDeNavegacion = useHistory();
  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Galería/Nueva');
    }
  };
  return (
    <div className="CP-PaginaGaleriaAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones="Agregar"
        tituloFiltroSecciones={'Todas las galerías'}
        isSeccionGaleria={true}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaGaleriaAdmin;
