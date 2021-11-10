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
      <ItemPublicidad></ItemPublicidad>
      <ItemPublicidad></ItemPublicidad>
      <ItemPublicidad></ItemPublicidad>
      <ItemPublicidad></ItemPublicidad>
    </div>
  );
};
export default PaginaPublicidadAdmin;
