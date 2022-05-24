import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { obtenerDatosParaCargarEnfrentamientos } from '../../Redux/Partidos/AccionPartidos';
import Cargando from '../Cargando/Cargando';
import EditorEnfrentamientos from '../EditorEnfrentamientos/EditorEnfrentamientos';

import './NuevoEnfrentamiento.css';

const CargarEnfrentamiento = () => {
  const {zonaId} = useParams();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {datosEditorEnfrentamiento, isCargandoEditorEnfrentamiento, errrorEditorEnfrentamiento} =
    useSelector(state => state.storePartidos);
  useLayoutEffect(() => {
    if (zonaId) {
      dispatch(obtenerDatosParaCargarEnfrentamientos(zonaId));
    } 
    return () => {};
  }, [zonaId,dispatch]);
  if (isCargandoEditorEnfrentamiento) {
    return (
      <div className="CP-NuevoEnfrentamiento">
        <Cargando />
      </div>
    );
  } else {
    return (
      <div className="CP-NuevoEnfrentamiento">
        {errrorEditorEnfrentamiento ? (
          <span>{errrorEditorEnfrentamiento}</span>
        ) : (
          <EditorEnfrentamientos
            categorias={categorias}
            subcategorias={subcategorias}
            datosSeleccionados={datosEditorEnfrentamiento}
          ></EditorEnfrentamientos>
        )}
      </div>
    );
  }
};
export default CargarEnfrentamiento;
