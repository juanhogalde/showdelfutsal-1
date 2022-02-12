import React, {useLayoutEffect, useState} from 'react';
import Selector from '../Selector/Selector';
/* import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento'; */
import './EditorEnfrentamientos.css';
import {useDispatch, useSelector} from 'react-redux';
import Cargando from '../Cargando/Cargando';
import {
  obtenerDatosDeTorneoParaEdicionDefault_accion,
  obtenerDatosDeTorneoParaEdicion_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import Enfrentamiento from '../Enfrentamiento/Enfrentamiento';

const EditorEnfrentamientos = () => {
  const dispatch = useDispatch();
  const {torneos, torneo, isObtenerDatosEditarTorneo} = useSelector(state => state.storeTorneos);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const [datosFiltrados, setDatosFiltrados] = useState('');
  const [isDatosCargados, setIsDatosCargados] = useState(false);
  const [arrayTorneos, setArrayTorneos] = useState();
  const [arraySubCategorias, setArraySubCategorias] = useState('');
  const [arrayZonas, setArrayZonas] = useState('');

  const escucharSelectorTorneo = value => {
    let auxTorneo = torneos.find(torneo => torneo._id === value.idTorneo);
    dispatch(obtenerDatosDeTorneoParaEdicion_accion(auxTorneo));
    setDatosFiltrados({
      torneo: value,
    });
    setArraySubCategorias('');
    setArrayZonas('');
  };

  const escucharSelectorCategoria = value => {
    console.log(value);
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
    console.log(datosFiltrados);
    let auxZonasCategorias = torneo.zonas.filter(
      zona => zona.idSubcategoria.keyCategoria === value.key
    );

    let auxSubcategorias = [];
    auxZonasCategorias.forEach(zona => {
      subcategorias.forEach(subcategoria => {
        if (subcategoria.key === zona.idSubcategoria.keySubcategoria) {
          auxSubcategorias.push(subcategoria);
        }
      });
    });
    console.log(auxSubcategorias);
    setArraySubCategorias(auxSubcategorias);
    /* let auxSubCategoria = [];
    torneo.zonas.forEach(zona => {
      let aux = subcategorias.filter(subcategoria => {
        if (subcategoria.key === zona.idSubcategoria.keySubcategoria;
      });
      auxSubCategoria.push(aux);
    }); */
    /* setArraySubCategorias(auxSubCategoria); */
  };

  const escucharSelectorSubCategoria = value => {
    setDatosFiltrados({
      ...datosFiltrados,
      subcategoria: value,
    });
    let auxZonas = [];
    console.log(value);
    torneo.zonas.forEach(zonaTorneo => {
      if (zonaTorneo.idSubcategoria.keyCategoria === value.keyCategoria) {
        if (zonaTorneo.idSubcategoria.keySubcategoria === value.key) {
          auxZonas.push(zonaTorneo);
        }
      }
    });
    let auxZonasParaSelector = auxZonas.map((zona, index) => {
      return {
        label: zona.nombreZona,
        value: index + 1,
        zonaId: zona._id,
      };
    });
    setArrayZonas(auxZonasParaSelector);
  };
  const escucharSelectorZona = value => {
    setDatosFiltrados({
      ...datosFiltrados,
      zona: value,
    });
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

    return () => {};
  }, [torneos, arrayTorneos]);

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
              options={categorias ? categorias : []}
              opcionSeleccionada={datosFiltrados.categoria ? datosFiltrados.categoria : ''}
              onChange={value => escucharSelectorCategoria(value)}
              noOptionsMessage={'No hay categorías.'}
            ></Selector>
          )}
          {datosFiltrados.categoria && (
            <Selector
              placeholder="Seleccione Subcategoría"
              options={arraySubCategorias ? arraySubCategorias : []}
              opcionSeleccionada={datosFiltrados.subcategoria ? datosFiltrados.subcategoria : ''}
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
              onChange={value => escucharSelectorZona(value)}
              noOptionsMessage={
                !arrayZonas ? 'Debe seleccionar subcategoría.' : 'No hay zonas creadas'
              }
            ></Selector>
          )}
          {Object.keys(datosFiltrados).length === 4 && (
            <div className="CI-componenteEnfrentamiento">
              <Enfrentamiento></Enfrentamiento>
            </div>
          )}
          {/* <TarjetaEnfrentamiento></TarjetaEnfrentamiento> */}
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
