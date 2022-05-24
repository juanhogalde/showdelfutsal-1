import React, {useState} from 'react';
import Selector from '../Selector/Selector';
import TarjetaEnfrentamiento from '../TarjetaEnfrentamiento/TarjetaEnfrentamiento';
import './EditorEnfrentamientos.css';
import {useDispatch, useSelector} from 'react-redux';
import {obtenerDatosDeTorneoParaEdicionDefault_accion} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import Enfrentamiento from '../Enfrentamiento/Enfrentamiento';
import {
  controlModalGenericoEditorEnfrentamiento_accion,
  eliminarPartidoConsultar_accion,
  eliminarPartidoDefault_accion,
  eliminarPartido_accion,
  obtenerPartidosDeZonaDefault_accion,
  obtenerPartidosDeZona_accion,
  obtenerZonasParaEditorEnfrentamiento,
} from '../../Redux/Partidos/AccionPartidos';
import BotonLowa from '../BotonLowa/BotonLowa';

const EditorEnfrentamientos = ({datosSeleccionados, categorias = [], subcategorias = []}) => {
  const dispatch = useDispatch();
  
  const {torneos, isObtenerDatosEditarTorneo} = useSelector(state => state.storeTorneos);
  const {zonas, partidos, isEliminarPartido, isObtenerPartidos, modalEditorEnfrentamiento} =
    useSelector(state => state.storePartidos);
  const [datosFiltrados, setDatosFiltrados] = useState(datosSeleccionados);
  const [arraySubCategorias, setArraySubCategorias] = useState([]);
  const [arrayZonas, setArrayZonas] = useState([]);
  const [isMostrarComponenteEnfrentamiento, setIsMostrarComponenteEnfrentamiento] = useState(datosSeleccionados?true:false);

  const escucharSelectorTorneo = value => {
    setDatosFiltrados({
      torneo: value,
    });
    dispatch(obtenerZonasParaEditorEnfrentamiento(value.idTorneo));
  };

  const escucharSelectorCategoria = value => {
    setDatosFiltrados({
      torneo: datosFiltrados.torneo,
      categoria: value,
    });
    let auxSubcategoria = subcategorias.filter(
      subcategoria => subcategoria.keyCategoria === value.key
    );
    setArraySubCategorias(auxSubcategoria);
  };

  const escucharSelectorSubCategoria = value => {
    setDatosFiltrados({
      torneo: datosFiltrados.torneo,
      categoria: datosFiltrados.categoria,
      subcategoria: value,
    });

    const auxZonas = zonas.filter(
      zonaTorneo =>
        zonaTorneo.idSubcategoria.keyCategoria === value.keyCategoria &&
        zonaTorneo.idSubcategoria.keySubcategoria === value.key
    );
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
    const equiposParaSelector = value.data.equipos.map((equipo, index) => {
      return {
        label: equipo._id,
        value: index + 1,
        data: equipo,
      };
    });
    setDatosFiltrados({
      ...datosFiltrados,
      zona: value,
      equipos: equiposParaSelector,
    });
    setIsMostrarComponenteEnfrentamiento(true);
  };

  const obtenerRespuestaDeAlertaEditarTorneo = respuesta => {
    if (respuesta) {
      if (
        modalEditorEnfrentamiento.tipo === 'error' &&
        modalEditorEnfrentamiento.datos === 'zonas'
      ) {
        setDatosFiltrados({});
        dispatch(
          controlModalGenericoEditorEnfrentamiento_accion({
            isMostrar: false,
            datos: null,
            mensaje: '',
            tipo: '',
          })
        );
      }
      if (isObtenerDatosEditarTorneo.isError) {
        dispatch(obtenerDatosDeTorneoParaEdicionDefault_accion());
      }
    }
  };

  const consultarPorEliminarEnfrentamiento = idPartido => {
    dispatch(eliminarPartidoConsultar_accion(idPartido));
  };
  const obtenerRespuestaDeAlertaEliminarPartido = respuesta => {
    if (respuesta) {
      if (isEliminarPartido.tipo === 'warning') {
        dispatch(eliminarPartido_accion(isEliminarPartido.id));
      }
      if (isEliminarPartido.tipo === 'success') {
        dispatch(eliminarPartidoDefault_accion());
      }
      if (isEliminarPartido.tipo === 'error') {
        dispatch(eliminarPartidoDefault_accion());
      }
    }
  };

  const obtenerPartidosDeZona = () => {
    dispatch(obtenerPartidosDeZona_accion(datosFiltrados.zona.data._id));
  };
  const obtenerRespuestaDeAlertaObtenerEquiposDeZona = respuesta => {
    if (respuesta) {
      if (isObtenerPartidos.tipo === 'error') {
        dispatch(obtenerPartidosDeZonaDefault_accion());
      }
    }
  };
  return (
    <React.Fragment>
      <div className="CP-EditorEnfrentamientos">
        <Selector
          name="torneo"
          placeholder="Seleccione Torneo"
          options={
            torneos
              ? torneos.map(torneo => {
                  return {
                    idTorneo: torneo._id,
                    label: torneo.tituloTorneo,
                    value: torneo._id,
                  };
                })
              : []
          }
          opcionSeleccionada={datosFiltrados?.torneo ? datosFiltrados.torneo : null}
          onChange={value => escucharSelectorTorneo(value)}
          noOptionsMessage={
            torneos.length ? 'Debe seleccionar un torneo.' : 'No hay torneos creados'
          }
        ></Selector>
        {datosFiltrados?.torneo && (
          <Selector
            placeholder="Seleccione Categoría"
            options={categorias}
            opcionSeleccionada={datosFiltrados.categoria ? datosFiltrados.categoria : null}
            onChange={value => escucharSelectorCategoria(value)}
            noOptionsMessage={'No hay categorías.'}
          ></Selector>
        )}
        {datosFiltrados?.categoria && (
          <Selector
            placeholder="Seleccione Subcategoría"
            options={arraySubCategorias ? arraySubCategorias : []}
            opcionSeleccionada={datosFiltrados.subcategoria ? datosFiltrados.subcategoria : null}
            onChange={value => escucharSelectorSubCategoria(value)}
            noOptionsMessage={
              !arraySubCategorias
                ? 'Debe seleccionar una subcategoría.'
                : 'No hay subcategorías para éste torneo.'
            }
          ></Selector>
        )}
        {datosFiltrados?.subcategoria && (
          <Selector
            placeholder="Seleccione Zona"
            options={arrayZonas ? arrayZonas : []}
            opcionSeleccionada={datosFiltrados.zona ? datosFiltrados.zona : ''}
            onChange={value => escucharSelectorZona(value)}
            noOptionsMessage={'No hay Zonas.'}
          ></Selector>
        )}
        {isMostrarComponenteEnfrentamiento && (
          <div className="CI-componenteEnfrentamiento">
            {datosFiltrados?.equipos?.length ? (
              <React.Fragment>
                <Enfrentamiento
                  equipos={datosFiltrados.equipos ? datosFiltrados.equipos : []}
                  torneoId={datosFiltrados.torneo.idTorneo ? datosFiltrados.torneo.idTorneo : ''}
                  zonaId={datosFiltrados.zona.data ? datosFiltrados.zona.data._id : ''}
                ></Enfrentamiento>
                <BotonLowa
                  tituloboton="Mostrar Enfrentamientos"
                  onClick={obtenerPartidosDeZona}
                ></BotonLowa>
              </React.Fragment>
            ) : (
              <div className="CP-EditorEnfrentamientos-sinEquipos">
                <span>No hay equipos en esta zona</span>
              </div>
            )}
          </div>
        )}

        {partidos.length > 0 &&
          partidos.map((partido, index) => {
            return (
              <TarjetaEnfrentamiento
                key={index}
                datos={partido}
                zona={
                  datosFiltrados.zona && datosFiltrados.zona.data ? datosFiltrados.zona.data : {}
                }
                enfrentamiento={partido}
                funcionEliminarEnfrentamiento={consultarPorEliminarEnfrentamiento}
              ></TarjetaEnfrentamiento>
            );
          })}
      </div>
      <Alertas
        tipoDeSweet={modalEditorEnfrentamiento.tipo}
        mostrarSweet={modalEditorEnfrentamiento.isMostrar}
        subtitulo={modalEditorEnfrentamiento.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertaEditarTorneo}
      ></Alertas>
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
      <Alertas
        tipoDeSweet={isEliminarPartido.tipo}
        mostrarSweet={isEliminarPartido.isMostrar}
        subtitulo={isEliminarPartido.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertaEliminarPartido}
      ></Alertas>
      <Alertas
        tipoDeSweet={isObtenerPartidos.tipo}
        mostrarSweet={isObtenerPartidos.isMostrar}
        subtitulo={isObtenerPartidos.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertaObtenerEquiposDeZona}
      ></Alertas>
    </React.Fragment>
  );
};
export default EditorEnfrentamientos;
