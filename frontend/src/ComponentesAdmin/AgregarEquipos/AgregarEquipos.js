import React, {useEffect, useLayoutEffect, useState} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {
  equiposPorSubcategoriaDefault_accion,
  equiposPorSubcategoria_accion,
} from '../../Redux/Equipos/AccionesEquipos';
import {
  actualizarListaTorneosAgregarEquiposZona_accion,
  actualizarListaTorneosEliminarEquiposZona_accion,
  agregarEquiposZonaTorneoDefault_accion,
  agregarEquiposZonaTorneo_accion,
  eliminarEquipoDeZonaDefault_accion,
  eliminarEquipoDeZona_accion,
  estadoComponenteAgregarEquipo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import BotonLowa from '../BotonLowa/BotonLowa';
import Selector from '../Selector/Selector';
import TarjetaEquipo from '../TarjetaEquipo/TarjetaEquipo';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  const history = useHistory();
  const {zonaId} = useParams();
  const dispatch = useDispatch();
  const {torneo, isAgregarEquiposZona, isEliminarEquipoZona, isVerificarAgregarEquipo} =
    useSelector(state => state.storeTorneos);
  const {equipos, isListarEquipos} = useSelector(state => state.storeEquipos);

  const [arrayEquipos, setArrayEquipos] = useState([]);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState('');
  const [equiposAgregados, setEquiposAgregados] = useState([]);
  const [nuevosEquipos, setNuevosEquipos] = useState([]);
  const [isNuevosEquipos, setIsNuevosEquipos] = useState(false);
  const [zonaTorneo, setZonaTorneo] = useState();
  const [isGuardarCambios, setIsGuardarCambios] = useState({
    tipo: '',
    isMostrar: false,
    mensaje: '',
  });

  const agregarEquipoZona = () => {
    let auxEquiposId = nuevosEquipos.map(equipo => {
      return equipo._id;
    });

    dispatch(agregarEquiposZonaTorneo_accion(zonaId, auxEquiposId));
  };

  const escucharSelectorEquipos = respuesta => {
    let auxArrayEquipos = arrayEquipos.filter(equipo => equipo.value !== respuesta.value);
    setArrayEquipos(auxArrayEquipos);
    setEquipoSeleccionado(respuesta);
    setNuevosEquipos([...nuevosEquipos, respuesta.data]);
    setIsNuevosEquipos(true);
  };

  const crearEnfrentamiento = () => {
    console.log('revisar redireccionamiento');
    /* history.push('/Enfrentamientos'); */
  };

  const funcionEliminarEquipo = (equipoId, isEquipoNuevo) => {
    if (isEquipoNuevo) {
      let auxNuevosEquipos = nuevosEquipos.filter(equipo => equipo._id !== equipoId);
      setNuevosEquipos(auxNuevosEquipos);
    } else {
      dispatch(eliminarEquipoDeZona_accion(zonaTorneo._id, equipoId));
    }
  };

  const respuestaDeAlertaAgregarEquipos = respuesta => {
    if (respuesta) {
      if (isAgregarEquiposZona.tipo === 'success') {
        setIsNuevosEquipos(false);
        setNuevosEquipos([]);
        dispatch(actualizarListaTorneosAgregarEquiposZona_accion());
      }
      if (isAgregarEquiposZona.tipo === 'error') {
        dispatch(agregarEquiposZonaTorneoDefault_accion());
      }
    } else {
      dispatch(agregarEquiposZonaTorneoDefault_accion());
    }
  };

  const respuestaDeAlertaObtenerEquiposPorSubcategoria = () => {
    dispatch(equiposPorSubcategoriaDefault_accion());
  };

  const respuestaDeAlertaGuardarCambios = respuesta => {
    if (respuesta) {
      setIsGuardarCambios({
        isMostrar: false,
        tipo: '',
        mensaje: '',
      });
      agregarEquipoZona();
    } else {
      setIsGuardarCambios({
        isMostrar: false,
        tipo: '',
        mensaje: '',
      });
      history.goBack();
    }
  };
  const respuestaDeAlertaEliminarEquipo = respuesta => {
    if (respuesta) {
      if (isEliminarEquipoZona.tipo === 'success') {
        let auxListaEquipos = equiposAgregados.filter(
          equipo => equipo._id !== isEliminarEquipoZona.idEquipo
        );
        setEquiposAgregados(auxListaEquipos);
        dispatch(actualizarListaTorneosEliminarEquiposZona_accion());
      }
      if (isEliminarEquipoZona.tipo === 'error') {
        dispatch(eliminarEquipoDeZonaDefault_accion());
      }
    } else {
      dispatch(eliminarEquipoDeZonaDefault_accion());
    }
  };
  useLayoutEffect(() => {
    let auxZona = torneo.zonas.find(zona => zona._id === zonaId);

    if (!zonaTorneo) {
      setZonaTorneo(auxZona);
      if (equipos.length === 0) {
        dispatch(equiposPorSubcategoria_accion(auxZona.idSubcategoria.keySubcategoria));
      }
    } else {
      if (auxZona.equipos.length > zonaTorneo.equipos.length) {
        setZonaTorneo(auxZona);
      }
    }

    if (equipos.length > 0) {
      let auxEquipos = equipos.map((equipo, index) => {
        return {
          label: equipo.nombreClub,
          value: index + 1,
          data: equipo,
        };
      });
      setArrayEquipos(auxEquipos);
    }
    if (zonaTorneo) {
      let auxEquipos = [];
      if (zonaTorneo.equipos.length > 0) {
        if (
          zonaTorneo.equipos.length ===
          torneo.zonas.find(zona => zona._id === zonaId).equipos.length
        ) {
          zonaTorneo.equipos.forEach(equipoZona => {
            let aux = equipos.find(equipoStatic => equipoStatic._id === equipoZona._id);
            auxEquipos.push(aux);
          });
          setEquiposAgregados(auxEquipos);
        }

        /* zonaTorneo.equipos.forEach(equipoZona => {
          let aux = equipos.find(equipoStatic => equipoStatic._id === equipoZona._id);
          auxEquipos.push(aux);
        });
        setEquiposAgregados(auxEquipos); */
      }
    }
    if (isVerificarAgregarEquipo) {
      if (nuevosEquipos.length > 0) {
        setIsGuardarCambios({
          isMostrar: true,
          tipo: 'warning',
          mensaje: '¿Desea guardar los cambios?',
        });
      } else {
        dispatch(estadoComponenteAgregarEquipo_accion(false));
        history.goBack();
      }
    }
  }, [
    zonaTorneo,
    torneo.zonas,
    zonaId,
    dispatch,
    equipos,
    isVerificarAgregarEquipo,
    nuevosEquipos.length,
    history,
  ]);

  useEffect(() => {
    return () => {
      dispatch(equiposPorSubcategoriaDefault_accion());
    };
  }, [dispatch]);

  return (
    <div className="CP-AgregarEquipos">
      <p>Agregar Equipos</p>
      <h4>{zonaTorneo ? zonaTorneo.nombreZona : 'Zona'}</h4>

      <Selector
        name="equipos"
        placeholder="Seleccione Equipos"
        selectorConIcono={<BsPlusCircle />}
        isCerrarMenuAlSeleccionar={true}
        options={arrayEquipos ? arrayEquipos : []}
        noOptionsMessage={'No hay equipos cargados.'}
        onChange={value => escucharSelectorEquipos(value)}
        opcionSeleccionada={equipoSeleccionado ? equipoSeleccionado : ''}
      ></Selector>
      <BotonLowa
        disabled={nuevosEquipos.length > 0 ? false : true}
        tituloboton="Guardar Cambios"
        onClick={() => agregarEquipoZona()}
      ></BotonLowa>
      <BotonLowa
        disabled={equiposAgregados.length > 0 ? false : true}
        tituloboton="Crear Enfrentamiento"
        onClick={() => crearEnfrentamiento()}
      ></BotonLowa>
      {isNuevosEquipos &&
        nuevosEquipos.length > 0 &&
        nuevosEquipos.map((equipo, index) => {
          return (
            <TarjetaEquipo
              key={index}
              equipo={equipo}
              isNuevo={true}
              funcionEliminarEquipo={funcionEliminarEquipo}
            ></TarjetaEquipo>
          );
        })}

      {equiposAgregados.length > 0 &&
        equiposAgregados.map((equipo, index) => {
          return (
            <TarjetaEquipo
              key={index}
              equipo={equipo}
              isNuevo={false}
              funcionEliminarEquipo={funcionEliminarEquipo}
            ></TarjetaEquipo>
          );
        })}
      <Alertas
        mostrarSweet={isListarEquipos.isMostrar}
        tipoDeSweet={isListarEquipos.tipo}
        subtitulo={isListarEquipos.mensaje}
        RespuestaDeSweet={respuestaDeAlertaObtenerEquiposPorSubcategoria}
      ></Alertas>
      <Alertas
        mostrarSweet={isGuardarCambios.isMostrar}
        tipoDeSweet={isGuardarCambios.tipo}
        subtitulo={isGuardarCambios.mensaje}
        RespuestaDeSweet={respuestaDeAlertaGuardarCambios}
      ></Alertas>
      <Alertas
        mostrarSweet={isAgregarEquiposZona.isMostrar}
        tipoDeSweet={isAgregarEquiposZona.tipo}
        subtitulo={isAgregarEquiposZona.mensaje}
        RespuestaDeSweet={respuestaDeAlertaAgregarEquipos}
      ></Alertas>
      <Alertas
        mostrarSweet={isEliminarEquipoZona.isMostrar}
        tipoDeSweet={isEliminarEquipoZona.tipo}
        subtitulo={isEliminarEquipoZona.mensaje}
        RespuestaDeSweet={respuestaDeAlertaEliminarEquipo}
      ></Alertas>
    </div>
  );
};
export default AgregarEquipos;
