import React, {useEffect} from 'react';
import BarraDeNavegacionAdmin from '../BarraDeNavegacionAdmin/BarraDeNavegacionAdmin';
import NavegacionLateral from '../NavegacionLateral/NavegacionLateral';
import './HomePrivada.css';

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerDatosIniciales} from '../../Redux/DatosInciales/AccionesDatosIniciales';
import RutasPrivadas from '../../Rutas/RutasPrivadas';

const HomePrivada = () => {
  const [isMenuLateralAbierto, setIsAperturaLateral] = useState(false);
  const {usuarioLogueado} = useSelector(state => state.sotreLogueo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (usuarioLogueado) {
      dispatch(obtenerDatosIniciales(usuarioLogueado));
    }
  }, [dispatch, usuarioLogueado]);

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
      <BarraDeNavegacionAdmin abrirMenuLateral={abrirMenuLateral}></BarraDeNavegacionAdmin>
      <NavegacionLateral
        isMenuLateralAbierto={isMenuLateralAbierto}
        abrirMenuLateral={abrirMenuLateral}
      />
      <RutasPrivadas></RutasPrivadas>
    </React.Fragment>
  );
};
export default HomePrivada;