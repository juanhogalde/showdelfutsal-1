import React, { useLayoutEffect, useState } from 'react';
import InputLowa from '../InputLowa/InputLowa';
import './PaginaPublicidadAdmin.css';
import {BsSearch} from 'react-icons/bs';
// import FiltroActivo from '../FiltroActivo/FiltroActivo';
import ItemPublicidad from '../ItemPublicidad/ItemPublicidad';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {modalPaginaPublicidad_accion, obtenerDatosPaginaPublicidadAdmin} from '../../Redux/Publicidades/AccionesPublicidades';
import Cargando from '../Cargando/Cargando';
import EditarPublicidad from '../EditarPublicidad/EditarPublicidad';

const PaginaPublicidadAdmin = () => {
  const {publicidadesPaginaPublicidad, modalPaginaPublicidad,isCargandoPaginaPublicidad,isErrorPaginaPublicidad} = useSelector(state => state.storePublicidades);
  const [editarPublicidad, setEditarPublicidad] = useState()
  const dispatch = useDispatch();

  const historialDeNavegacion = useHistory();
  const redireccionarNuevaPublicidad = () => {
    historialDeNavegacion.push('/Publicidad/Nueva');
  };
 useLayoutEffect(() => {
  dispatch(obtenerDatosPaginaPublicidadAdmin())

   return () => {
     
   };
 },[dispatch])
 if(isCargandoPaginaPublicidad){
   return <Cargando/>
 }
 if(isErrorPaginaPublicidad){
  <span>{isErrorPaginaPublicidad}</span>
 }
 else{
   return (
     editarPublicidad?
     <EditarPublicidad publicidadParaEditar={editarPublicidad} eventoCancelar={setEditarPublicidad}/>:
     
       <div className="CP-PaginaPublicidadAdmin">
       <BotonLowa onClick={redireccionarNuevaPublicidad} tituloboton={'Agregar'} />
      <InputLowa placeholder={'Buscar'} inputConIcono={<BsSearch></BsSearch>} />

      {publicidadesPaginaPublicidad.map((publicidad, i) => {
        return (
          <ItemPublicidad
            key={i}
            publicidad={publicidad}
            seleccionEditar={setEditarPublicidad}
          ></ItemPublicidad>
        );
      })}

      <Alertas
        mostrarSweet={modalPaginaPublicidad.isMostrar}
        tipoDeSweet={modalPaginaPublicidad.tipo}
        subtitulo={modalPaginaPublicidad.mensaje}
        RespuestaDeSweet={() => {
          dispatch(modalPaginaPublicidad_accion({isMostrar: false, tipo: '', mensaje: ''}));
        }}
        />
        </div>
     )

 }
}
export default PaginaPublicidadAdmin;