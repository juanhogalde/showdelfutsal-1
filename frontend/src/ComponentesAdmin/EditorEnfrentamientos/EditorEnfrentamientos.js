import React, {useLayoutEffect, useState} from 'react';
import Selector from '../Selector/Selector';
import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import './EditorEnfrentamientos.css';
import {useDispatch, useSelector} from 'react-redux';
import Cargando from '../Cargando/Cargando';
import {
  obtenerDatosDeTorneoParaEdicionDefault_accion,
  obtenerDatosDeTorneoParaEdicion_accion,
  obtenerEquiposDeZona_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import Enfrentamiento from '../Enfrentamiento/Enfrentamiento';
import {listarEquipos_accion} from '../../Redux/Equipos/AccionesEquipos';
/* import {listarPartidos_accion} from '../../Redux/Partidos/AccionPartidos'; */

const EditorEnfrentamientos = () => {
  const dispatch = useDispatch();
  const {torneos, torneo, isObtenerDatosEditarTorneo} = useSelector(state => state.storeTorneos);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {equipos} = useSelector(state => state.storeEquipos);
  const {partidos} = useSelector(state => state.storePartidos);

  const [datosFiltrados, setDatosFiltrados] = useState('');
  const [isDatosCargados, setIsDatosCargados] = useState(false);
  const [arrayTorneos, setArrayTorneos] = useState();
  const [arraySubCategorias, setArraySubCategorias] = useState('');
  const [arrayZonas, setArrayZonas] = useState('');
  const [arrayEquiposZona, setArrayEquiposZona] = useState([]);

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

    let auxSubcategoria = subcategorias.filter(
      subcategoria => subcategoria.keyCategoria === value.key
    );
    setArraySubCategorias(auxSubcategoria);
  };

  const escucharSelectorSubCategoria = value => {
    setDatosFiltrados({
      ...datosFiltrados,
      subcategoria: value,
      zona: '',
    });
    let auxZonas = [];
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
        data: zona,
      };
    });
    setArrayZonas(auxZonasParaSelector);
  };
  const escucharSelectorZona = value => {
    setDatosFiltrados({
      ...datosFiltrados,
      zona: value,
    });
    console.log(value);
    dispatch(listarEquipos_accion());
    /* dispatch(obtenerEquiposDeZona_accion(value.data._id)); */
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
          console.log('ejecuta carga de torneos');
          setArrayTorneos(auxTorneos);
          setIsDatosCargados(true);
        }
      }
    }
    if (equipos.length > 0) {
      let auxArrayEquiposZona = [];
      if (datosFiltrados) {
        if (datosFiltrados.zona) {
          datosFiltrados.zona.data.equipos.forEach(equipoZona => {
            let auxEquipo = equipos.find(equipo => equipo._id === equipoZona._id);
            auxArrayEquiposZona.push(auxEquipo);
          });
          console.log('ejecuta carga de equipos');

          setArrayEquiposZona(auxArrayEquiposZona);
          /* dispatch(listarPartidos_accion()); */
        }
      }
    }
    return () => {};
  }, [torneos, arrayTorneos, equipos, datosFiltrados]);

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
          {/* {Object.keys(datosFiltrados).length === 4 && (
            <div className="CI-componenteEnfrentamiento">
              <Enfrentamiento
                equipos={arrayEquiposZona}
                torneoId={datosFiltrados.zona.data.idTorneo}
                zonaId={datosFiltrados.zona.data._id}
              ></Enfrentamiento>
            </div>
          )} */}
          {partidos.length > 0 &&
            partidos.map((partido, index) => {
              return <TarjetaEnfrentamiento key={index} datos={partido}></TarjetaEnfrentamiento>;
            })}
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
