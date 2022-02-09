import React, {useEffect, useLayoutEffect, useState} from 'react';
import Selector from '../Selector/Selector';
import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import './EditorEnfrentamientos.css';
import {useDispatch, useSelector} from 'react-redux';
import Cargando from '../Cargando/Cargando';
import {
  obtenerDatosDeTorneoParaEdicionDefault_accion,
  obtenerDatosDeTorneoParaEdicion_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';

const EditorEnfrentamientos = () => {
  const dispatch = useDispatch();
  const {torneos, torneo, isObtenerDatosEditarTorneo} = useSelector(state => state.storeTorneos);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const [torneoSeleccionado, setTorneoSeleccionado] = useState('');
  const [datosFiltrados, setDatosFiltrados] = useState('');
  const [isDatosCargados, setIsDatosCargados] = useState(false);
  const [arrayTorneos, setArrayTorneos] = useState('');
  const [arrayCategorias, setArrayCategorias] = useState('');
  const [arraySubCategorias, setArraySubCategorias] = useState('');
  const [arrayZonas, setArrayZonas] = useState('');

  const escucharSelectorTorneo = value => {
    console.log(value);
    let auxTorneo = torneos.find(torneo => torneo._id === value.idTorneo);
    dispatch(obtenerDatosDeTorneoParaEdicion_accion(auxTorneo));
    setDatosFiltrados({
      torneo: value,
    });
    setArrayCategorias('');
    setArraySubCategorias('');
    setArrayZonas('');
  };

  const escucharSelectorCategoria = value => {
    setDatosFiltrados({
      ...datosFiltrados,
      categoria: value,
    });
    if (datosFiltrados.subcategoria) {
      setDatosFiltrados({
        ...datosFiltrados,
        subcategoria: '',
      });
    }
    let auxSubCategoria = [];
    torneoSeleccionado.idSubcategoria.forEach(subcategoriaTorneo => {
      if (subcategoriaTorneo.keyCategoria === value.key) {
        let aux = subcategorias.find(
          subcategoria => subcategoria.key === subcategoriaTorneo.keySubcategoria
        );
        auxSubCategoria.push(aux);
      }
    });
    setArraySubCategorias(auxSubCategoria);
  };
  const escucharSelectorSubCategoria = value => {
    console.log(value);
    setDatosFiltrados({
      ...datosFiltrados,
      subcategoria: value,
    });
    let auxZonas = [];

    torneoSeleccionado.zonas.forEach(zonaTorneo => {
      if (zonaTorneo.idSubcategoria.keyCategoria === value.keyCategoria) {
        if (zonaTorneo.idSubcategoria.keySubcategoria === value.key) {
          auxZonas.push(zonaTorneo);
        }
      }
    });
    console.log(auxZonas);
    let auxZonasParaSelector = auxZonas.map((zona, index) => {
      return {
        label: zona.nombreZona,
        value: index + 1,
        zonaId: zona._id,
      };
    });
    setArrayZonas(auxZonasParaSelector);
  };

  const obtenerRespuestaDeAlertaEditarTorneo = respuesta => {
    if (respuesta) {
      if (isObtenerDatosEditarTorneo.isExito) {
        dispatch(obtenerDatosDeTorneoParaEdicionDefault_accion());
      }
      if (isObtenerDatosEditarTorneo.isError) {
        dispatch(obtenerDatosDeTorneoParaEdicionDefault_accion());
      }
    }
  };

  useLayoutEffect(() => {
    if (!arrayTorneos) {
      if (torneos) {
        let auxTorneos = [];
        if (torneos.length > 0) {
          auxTorneos = torneos.map((torneo, index) => {
            return {
              idTorneo: torneo._id,
              label: torneo.tituloTorneo,
              value: index + 1,
            };
          });
          setArrayTorneos(auxTorneos);
          setIsDatosCargados(true);
        }
      }
    }

    if (Object.keys(torneo).length > 0) {
      setTorneoSeleccionado(torneo);
    }

    /* if (torneoSeleccionado) {
      if (!arrayZonas) {
        let auxZonas = [];
        auxZonas = torneoSeleccionado.zonas.map((zona, index) => {
          return {
            label: zona.nombreZona,
            value: index + 1,
            datosZona: zona,
          };
        });
      }
    } */

    return () => {};
  }, [
    setArrayTorneos,
    setIsDatosCargados,
    torneos,
    torneo,
    torneoSeleccionado,
    arrayTorneos,
    arrayCategorias,
    arrayZonas,
    categorias,
  ]);

  useEffect(() => {
    if (torneoSeleccionado) {
      if (!arrayCategorias) {
        let auxCategorias = [];
        torneoSeleccionado.idCategoria.forEach(keyCategoria => {
          let aux = categorias.find(categoria => categoria.value === keyCategoria);
          auxCategorias.push(aux);
        });
        setArrayCategorias(auxCategorias);
      }
    }
    return () => {};
  }, [torneoSeleccionado, arrayCategorias, categorias]);

  if (isDatosCargados) {
    return (
      <React.Fragment>
        <div className="CP-EditorEnfrentamientos">
          <Selector
            name="torneo"
            placeholder="Seleccione Torneo"
            options={arrayTorneos ? arrayTorneos : []}
            opcionSeleccionada={datosFiltrados.torneo}
            onChange={value => escucharSelectorTorneo(value)}
            noOptionsMessage={
              !arrayTorneos ? 'Debe seleccionar un torneo.' : 'No hay torneos creados'
            }
          ></Selector>
          {datosFiltrados && (
            <Selector
              placeholder="Seleccione Categoría"
              options={arrayCategorias ? arrayCategorias : []}
              opcionSeleccionada={datosFiltrados.categoria ? datosFiltrados.categoria : ''}
              onChange={value => escucharSelectorCategoria(value)}
              noOptionsMessage={
                !arrayCategorias
                  ? 'Debe seleccionar una categoría.'
                  : 'No hay categorías para éste torneo.'
              }
            ></Selector>
          )}
          {datosFiltrados.categoria && (
            <Selector
              placeholder="Seleccione Subcategoría"
              options={arraySubCategorias ? arraySubCategorias : []}
              opcionSeleccionada={datosFiltrados.subcategoria ? datosFiltrados.subcategoria : ''}
              noOptionsMessage="Debe seleccionar categoría."
              onChange={value => escucharSelectorSubCategoria(value)}
              noOptionsMessage={
                !arraySubCategorias
                  ? 'Debe seleccionar una subcategoría.'
                  : 'No hay subcategorías para éste torneo.'
              }
            ></Selector>
          )}
          {datosFiltrados.subcategoria && (
            <Selector
              placeholder="Seleccione Zona"
              options={arrayZonas ? arrayZonas : []}
              opcionSeleccionada={datosFiltrados.zona ? datosFiltrados.zona : ''}
              noOptionsMessage={
                !arrayZonas ? 'Debe seleccionar subcategoría.' : 'No hay zonas creadas'
              }
            ></Selector>
          )}

          <TarjetaEnfrentamiento></TarjetaEnfrentamiento>
        </div>
        <Alertas
          tipoDeSweet={isObtenerDatosEditarTorneo.tipo}
          mostrarSweet={
            isObtenerDatosEditarTorneo.isCargando ||
            isObtenerDatosEditarTorneo.isExito ||
            isObtenerDatosEditarTorneo.isError
          }
          subtitulo={isObtenerDatosEditarTorneo.mensaje}
          RespuestaDeSweet={obtenerRespuestaDeAlertaEditarTorneo}
        ></Alertas>
      </React.Fragment>
    );
  } else {
    return (
      <div className="CP-Cargando-EditorEnfrentamientos">
        <Cargando></Cargando>
        <h5>Obteniendo Datos...</h5>
      </div>
    );
  }
};
export default EditorEnfrentamientos;
