import React, {useEffect} from 'react';
/* import RutasPrivadas from './RutasPrivadas';
 */ import {useSelector, useDispatch} from 'react-redux';
import RutasPublicas from './RutasPublicas';
import HomePrivada from '../ComponentesAdmin/HomePrivada/HomePrivada';
import {listarImagenes_accion} from '../Redux/Imagenes/AccionesImagenes';
const Rutas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarImagenes_accion());
  }, [dispatch]);
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  return <React.Fragment>{usuarioLogueado ? <HomePrivada /> : <RutasPublicas />}</React.Fragment>;
};

export default Rutas;
