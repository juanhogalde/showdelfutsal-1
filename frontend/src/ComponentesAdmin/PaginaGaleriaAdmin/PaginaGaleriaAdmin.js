import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import './PaginaGaleriaAdmin.css';

const PaginaGaleriaAdmin = () => {
  const historialDeNavegacion = useHistory();
  const {galerias} = useSelector(state => state.storeGalerias);

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
        datosDeSeccion={galerias}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaGaleriaAdmin;
