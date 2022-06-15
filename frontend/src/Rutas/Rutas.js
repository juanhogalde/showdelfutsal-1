import React, { useEffect } from "react";
/* import RutasPrivadas from './RutasPrivadas';
 */ import { useDispatch, useSelector } from "react-redux";
import RutasPublicas from "./RutasPublicas";
import HomePrivada from "../ComponentesAdmin/HomePrivada/HomePrivada";
import { obtenerDatosIniciales, obtenerDatosInicialesPublicos } from "../Redux/DatosInciales/AccionesDatosIniciales";
// /* import {listarImagenes_accion} from '../Redux/Imagenes/AccionesImagenes'; */
// import {listarGalerias_accion} from '../Redux/Galerias/AccionesGalerias';
// import {listarTorneo_accion} from '../Redux/Torneos/AccionesTorneos';
// import {listarVivo_accion} from '../Redux/Vivo/AccionesVivo';

const Rutas = () => {
  const { usuarioLogueado } = useSelector((state) => state.storeLogueo);

  const dispatch = useDispatch();
  //TODO:FALTA CONTROLAR DATOS INCIALES PRIVADOS
  useEffect(() => {
    if (usuarioLogueado) {
      // dispatch(listarGalerias_accion());
      // dispatch(listarTorneo_accion());
      // dispatch(listarVivo_accion());
      dispatch(obtenerDatosIniciales());
    } else {
      // dispatch(obtenerDatosIniciales());
      dispatch(obtenerDatosInicialesPublicos());
    }
  }, [dispatch, usuarioLogueado]);
  return <React.Fragment>{usuarioLogueado ? <HomePrivada /> : <RutasPublicas />}</React.Fragment>;
};

export default Rutas;
