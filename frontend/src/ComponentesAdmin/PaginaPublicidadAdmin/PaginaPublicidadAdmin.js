import React from 'react';
import InputLowa from '../InputLowa/InputLowa';
import './PaginaPublicidadAdmin.css';
import {BsSearch} from 'react-icons/bs';
import FiltroActivo from '../FiltroActivo/FiltroActivo';
import ItemPublicidad from '../ItemPublicidad/ItemPublicidad';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useHistory} from 'react-router';
import {useSelector} from 'react-redux';

const PaginaPublicidadAdmin = () => {
  const {publicidades} = useSelector(state => state.storePublicidades);
  const historialDeNavegacion = useHistory();
  const redireccionarNuevaPublicidad = () => {
    historialDeNavegacion.push('/Publicidad/Nueva');
  };
  return (
    <div className="CP-PaginaPublicidadAdmin">
      <BotonLowa onClick={redireccionarNuevaPublicidad} tituloboton={'Agregar'} />
      <InputLowa placeholder={'Buscar'} inputConIcono={<BsSearch></BsSearch>} />
      <FiltroActivo></FiltroActivo>
      {publicidades.map(publicidad => {
        return (
          <ItemPublicidad
            ubicacion={publicidad.ubicacion ? publicidad.ubicacion : ''}
            linkTo={'/Publicidad/Editar'}
          ></ItemPublicidad>
        );
      })}

      {/* <ItemPublicidad ubicacion={'Pagina 1'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
      <ItemPublicidad ubicacion={'Pagina 2'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
      <ItemPublicidad ubicacion={'Pagina 3'} linkTo={'/Publicidad/Editar'}></ItemPublicidad> */}
    </div>
  );
};
export default PaginaPublicidadAdmin;
