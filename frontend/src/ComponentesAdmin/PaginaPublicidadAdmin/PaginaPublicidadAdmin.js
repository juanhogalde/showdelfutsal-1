import React from 'react';
import InputLowa from '../InputLowa/InputLowa';
import './PaginaPublicidadAdmin.css';
import {BsSearch} from 'react-icons/bs';
import FiltroActivo from '../FiltroActivo/FiltroActivo';
import ItemPublicidad from '../ItemPublicidad/ItemPublicidad';

const PaginaPublicidadAdmin = () => {
  return (
    <div className="CP-PaginaPublicidadAdmin">
      <InputLowa placeholder={'Buscar'} inputConIcono={<BsSearch></BsSearch>} />
      <FiltroActivo></FiltroActivo>
      <ItemPublicidad ubicacion={'Inicio'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
      <ItemPublicidad ubicacion={'Pagina 1'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
      <ItemPublicidad ubicacion={'Pagina 2'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
      <ItemPublicidad ubicacion={'Pagina 3'} linkTo={'/Publicidad/Editar'}></ItemPublicidad>
    </div>
  );
};
export default PaginaPublicidadAdmin;
