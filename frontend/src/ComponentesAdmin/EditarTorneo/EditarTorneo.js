import React, {useLayoutEffect, useState} from 'react';
import './EditarTorneo.css';
import Cargando from '../Cargando/Cargando';
import {useParams} from 'react-router-dom';
import NuevoTorneo from '../NuevoTorneo/NuevoTorneo';

import {useDispatch, useSelector} from 'react-redux';
import {
  obtenerDatosDeTorneoParaEdicion,
  obtenerDatosDeTorneoParaEdicionError_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Zonas from '../Zonas/Zonas';
const EditarTorneo = () => {
  const {id} = useParams();
  const {torneoEditar, isCargandoTorneoEditar, isErrorTorneoEditar, torneos} = useSelector(
    state => state.storeTorneos
  );
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [datosZonas, setDatosZonas] = useState({isMostrar: false, zonas: []});
  const dispatch = useDispatch();
  const mostrarZonas = datos => {
    const zonasFiltradas = torneoEditar.zonas.filter(
      zona => zona.idSubcategoria._id === datos.subcategoria
    );
    const categoriaEncontrada = categorias.find(
      categoria => categoria.key === parseInt(datos.categoria)
    );
    const subcategoriaEncontrada = subcategorias.find(
      subcategoria => subcategoria.key === parseInt(datos.subcategoria)
    );

    setDatosZonas({
      isMostrar: true,
      zonas: zonasFiltradas,
      categoriaSeleccionada: categoriaEncontrada,
      subCategoriaSeleccionada: subcategoriaEncontrada,
    });
  };
  useLayoutEffect(() => {
    if (id && torneos.length && !torneoEditar) {
      let auxTorneo = torneos.find(torneo => torneo._id === id);
      if (auxTorneo) {
        dispatch(obtenerDatosDeTorneoParaEdicion(auxTorneo));
      } else {
        dispatch(
          obtenerDatosDeTorneoParaEdicionError_accion('No se encontro el torneo solicitado')
        );
      }
    }

    return () => {};
  }, [dispatch, id, torneos, torneoEditar]);

  if (isCargandoTorneoEditar) {
    return (
      <div className="CP-EditarTorneo-Cargando ">
        <Cargando></Cargando>
      </div>
    );
  } else {
    return isErrorTorneoEditar ? (
      <div className="CP-EditarTorneo-Cargando">
        <span>{isErrorTorneoEditar}</span>
      </div>
    ) : (
      <div className="CP-EditarGaleria">
        {datosZonas.isMostrar ? (
          <Zonas
            zonas={datosZonas.zonas}
            categoriaSeleccionada={datosZonas.categoriaSeleccionada}
            subCategoriaSeleccionada={datosZonas.subCategoriaSeleccionada}
            idTorneo={id}
          />
        ) : (
          <NuevoTorneo
            mostrarZonas={mostrarZonas}
            datosParaEditar={torneoEditar}
            isEditarTorneoProps={true}
          ></NuevoTorneo>
        )}
      </div>
    );
  }
};
export default EditarTorneo;
