import React, {useEffect} from 'react';
/* import RutasPrivadas from './RutasPrivadas';
 */ import {useDispatch, useSelector} from 'react-redux';
import RutasPublicas from './RutasPublicas';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
import {obtenerDatosIniciales} from '../Redux/DatosInciales/AccionesDatosIniciales';
import {listarNoticia_accion} from '../Redux/Noticias/AccionesNoticias';
import {listarImagenes_accion} from '../Redux/Imagenes/AccionesImagenes';

const Rutas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerDatosIniciales());
    dispatch(listarNoticia_accion());
    dispatch(listarImagenes_accion());
  }, [dispatch]);
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  return <React.Fragment>{usuarioLogueado ? <HomePrivada /> : <RutasPublicas />}</React.Fragment>;
};

export default Rutas;
