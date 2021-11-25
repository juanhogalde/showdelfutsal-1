import React, {useEffect} from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import NavegacionLateral from '../NavegacionLateral/NavegacionLateral';
import './HomePrivada.css';

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerDatosIniciales} from '../../Redux/DatosInciales/AccionesDatosIniciales';
import RutasPrivadas from '../../Rutas/RutasPrivadas';
import {listarNoticia_accion} from '../../Redux/Noticias/AccionesNoticias';

const HomePrivada = () => {
  const [isMenuLateralAbierto, setIsAperturaLateral] = useState(false);
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerDatosIniciales());
    dispatch(listarNoticia_accion());
  }, [dispatch]);

  const abrirMenuLateral = () => {
    console.log('Se ejecuto funcion');

    if (isMenuLateralAbierto) {
      setIsAperturaLateral(false);
    } else {
      setIsAperturaLateral(true);
    }
  };
  return (
    <React.Fragment>
      {usuarioLogueado && !usuarioLogueado.isRecuperarContraseña && (
        <BarraDeNavegacionAdmin abrirMenuLateral={abrirMenuLateral}></BarraDeNavegacionAdmin>
      )}
      <NavegacionLateral
        isMenuLateralAbierto={isMenuLateralAbierto}
        abrirMenuLateral={abrirMenuLateral}
      />
      <RutasPrivadas></RutasPrivadas>
    </React.Fragment>
  );
};
export default HomePrivada;
