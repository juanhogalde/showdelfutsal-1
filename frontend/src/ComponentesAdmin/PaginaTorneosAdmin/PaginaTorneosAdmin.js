import React from 'react';
import './PaginaTorneosAdmin.css';
import PaginasSeccionesAdmin from '../PaginasSeccionesAdmin/PaginasSeccionesAdmin';
import {useHistory} from 'react-router';

const PaginaTorneosAdmin = () => {
  const historialDeNavegacion = useHistory();
  const redireccionarNuevaNoticia = respuesta => {
    if (respuesta) {
      historialDeNavegacion.push('/Torneo/Nuevo');
    }
  };
  return (
    <div className="CP-PaginaTorneosAdmin">
      <PaginasSeccionesAdmin
        funcionDeBotonSecciones={redireccionarNuevaNoticia}
        tituloBotonSecciones="Agregar"
        tituloFiltroSecciones="Todos los torneos"
        isSeccionTorneos={true}
      ></PaginasSeccionesAdmin>
    </div>
  );
};
export default PaginaTorneosAdmin;
