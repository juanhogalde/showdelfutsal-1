import React from 'react';
import InputLowa from '../InputLowa/InputLowa';
import './PaginaPublicidadAdmin.css';
import {BsSearch} from 'react-icons/bs';
// import FiltroActivo from '../FiltroActivo/FiltroActivo';
import ItemPublicidad from '../ItemPublicidad/ItemPublicidad';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import Alertas from '../Alertas/Alertas';
import {modalPaginaPublicidad_accion} from '../../Redux/Publicidades/AccionesPublicidades';

const PaginaPublicidadAdmin = () => {
  const {publicidades, modalPaginaPublicidad} = useSelector(state => state.storePublicidades);
  const {medidasPublicidad} = useSelector(state => state.sotreDatosIniciales);
  const dispatch = useDispatch();

  const historialDeNavegacion = useHistory();
  const redireccionarNuevaPublicidad = () => {
    historialDeNavegacion.push('/Publicidad/Nueva');
  };

  return (
    <div className="CP-PaginaPublicidadAdmin">
      {medidasPublicidad.length &&
      medidasPublicidad.filter(element => element.disponible).length ? (
        <BotonLowa onClick={redireccionarNuevaPublicidad} tituloboton={'Agregar'} />
      ) : null}
      <InputLowa placeholder={'Buscar'} inputConIcono={<BsSearch></BsSearch>} />

      {publicidades.map((publicidad, i) => {
        return (
          <ItemPublicidad
            key={i}
            publicidad={publicidad}
            linkTo={'/Publicidad/Editar'}
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
  );
};
export default PaginaPublicidadAdmin;
