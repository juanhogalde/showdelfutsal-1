import React, {useLayoutEffect, useState} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
// import {equiposPorSubcategoria_accion} from '../../Redux/Equipos/AccionesEquipos';
import {
  actualizarListaTorneosAgregarEquiposZona_accion,
  actualizarListaTorneosEliminarEquiposZona_accion,
  agregarEquiposZonaTorneoDefault_accion,
  agregarEquiposZonaTorneo_accion,
  // eliminarEquipoDeZonaConsulta_accion,
  eliminarEquipoDeZonaDefault_accion,
  eliminarEquipoDeZona_accion,
  // estadoComponenteAgregarEquipo_accion,
  modalGenericoAgregarEquipos_accion,
  obtenerZonaAgregarEquipos,
  ZonaAgregarEquiposError_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import BotonLowa from '../BotonLowa/BotonLowa';
import Cargando from '../Cargando/Cargando';
import Selector from '../Selector/Selector';
import TarjetaEquipo from '../TarjetaEquipo/TarjetaEquipo';
import './AgregarEquipos.css';

const AgregarEquipos = () => {
  const history = useHistory();
  const {zonaId} = useParams();
  const dispatch = useDispatch();
  const {
    // torneo,
    isAgregarEquiposZona,
    isEliminarEquipoZona,
    // isVerificarAgregarEquipo,
    errorZonaAgregarEquipos,
    entidadZonaAgregarEquipos,
    isCargandoZonaAgregarEquipos,
    modalGenericoAgregarEquipos,
  } = useSelector(state => state.storeTorneos);
  // const {equipos} = useSelector(state => state.storeEquipos);

  const [arrayEquipos, setArrayEquipos] = useState();
  const [modal, setModal] = useState({
    tipo: '',
    mensaje: '',
    isMostrar: false,
  });
  /*  const [equipoSeleccionado, setEquipoSeleccionado] = useState(''); */
  const [equiposAgregados, setEquiposAgregados] = useState([]);
  const [nuevosEquipos, setNuevosEquipos] = useState([]);
  const [isNuevosEquipos, setIsNuevosEquipos] = useState(false);
  const [isGuardarCambios, setIsGuardarCambios] = useState({
    tipo: '',
    isMostrar: false,
    mensaje: '',
  });

  const escucharSelectorEquipos = respuesta => {
    let auxArrayEquipos = arrayEquipos.filter(equipo => equipo.value !== respuesta.value);
    setArrayEquipos(auxArrayEquipos);
    /* setEquipoSeleccionado(respuesta); */
    setNuevosEquipos([...nuevosEquipos, respuesta.data]);
    setIsNuevosEquipos(true);
  };

  const agregarEquipoZona = () => {
    let auxEquiposId = nuevosEquipos.map(equipo => {
      return equipo._id;
    });
    dispatch(agregarEquiposZonaTorneo_accion(zonaId, auxEquiposId));
  };

  const crearEnfrentamiento = () => {
    console.log('revisar redireccionamiento');
    /* history.push('/Enfrentamientos'); */
  };

  const consultaPorEliminarEquipo = (equipoId, isEquipoNuevo) => {
    setModal({
      tipo: 'warning',
      mensaje: '¿Desea eliminar equipo de la zona?',
      isMostrar: true,
      idEquipo: equipoId,
      isNuevo: isEquipoNuevo,
    });
  };

  const funcionEliminarEquipo = () => {
    if (modal.isNuevo) {
      let auxNuevosEquipos = nuevosEquipos.filter(equipo => equipo._id !== modal.idEquipo);
      setNuevosEquipos(auxNuevosEquipos);
      setModal({
        tipo: '',
        mensaje: '',
        isMostrar: false,
      });
      dispatch(eliminarEquipoDeZonaDefault_accion());
    } else {
      dispatch(eliminarEquipoDeZona_accion(entidadZonaAgregarEquipos._id, modal.idEquipo));
      setModal({
        tipo: '',
        mensaje: '',
        isMostrar: false,
      });
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

  const respuestaDeAlertaGuardarCambios = respuesta => {
    setIsGuardarCambios({
      isMostrar: false,
      tipo: '',
      mensaje: '',
    });
    if (respuesta) {
      agregarEquipoZona();
    } else {
      history.goBack();
    }
  };
  useLayoutEffect(() => {
    if (zonaId) {
      dispatch(obtenerZonaAgregarEquipos(zonaId));
    } else {
      dispatch(ZonaAgregarEquiposError_accion('Falta id de Zona'));
    }
    return () => {};
  }, [zonaId, dispatch]);
  // useLayoutEffect(() => {
  //   if (!arrayEquipos && equipos && entidadZonaAgregarEquipos) {
  //     const equiposYaAgregados = entidadZonaAgregarEquipos.equipos.map(equipo => {
  //       return equipo.nombreClub;
  //     });

  //     const equiposObtenidos = equipos.map((equipo, index) => {
  //       return {
  //         label: equipo.nombreClub,
  //         value: index + 1,
  //         data: equipo,
  //       };
  //     });

  //     setArrayEquipos(
  //       equiposObtenidos.filter(equipo => !equiposYaAgregados.includes(equipo.label))
  //     );
  //   } else {
  //     if (entidadZonaAgregarEquipos && !equipos) {
  //       dispatch(equiposPorSubcategoria_accion(entidadZonaAgregarEquipos.idSubcategoria));
  //     }
  //   }
  //   return () => {};
  // }, [equipos, entidadZonaAgregarEquipos, arrayEquipos]);

  const respuestaDeAlertaEliminarEquipo = respuesta => {
    if (respuesta) {
      if (isEliminarEquipoZona.tipo === 'warning') {
        funcionEliminarEquipo();
      }
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
  const respuestaModal = respuesta => {
    if (respuesta) {
      if (modal.tipo === 'warning') {
        funcionEliminarEquipo();
      }
      if (modal.tipo === 'success') {
        let auxListaEquipos = equiposAgregados.filter(equipo => equipo._id !== modal.idEquipo);
        setEquiposAgregados(auxListaEquipos);
        dispatch(actualizarListaTorneosEliminarEquiposZona_accion());
      }
      if (modal.tipo === 'error') {
        dispatch(eliminarEquipoDeZonaDefault_accion());
      }
    } else {
      setModal({
        tipo: '',
        isMostrar: false,
        mensaje: '',
      });
    }
  };

  if (isCargandoZonaAgregarEquipos) {
    return (
      <div className="ContenedorCargandoAgregarEquipos">
        <Cargando />;
      </div>
    );
  } else {
    return errorZonaAgregarEquipos ? (
      <div className="ContenedorCargandoAgregarEquipos">
        <span>{errorZonaAgregarEquipos}</span>
      </div>
    ) : (
      <div className="CP-AgregarEquipos">
        <p>Agregar Equipos</p>
        <h4>{entidadZonaAgregarEquipos ? entidadZonaAgregarEquipos.nombreZona : 'Zona'}</h4>

        <Selector
          name="equipos"
          placeholder="Seleccione Equipos"
          selectorConIcono={<BsPlusCircle />}
          isCerrarMenuAlSeleccionar={true}
          options={arrayEquipos ? arrayEquipos : []}
          noOptionsMessage={'No hay equipos cargados.'}
          onChange={value => escucharSelectorEquipos(value)}
          /* opcionSeleccionada={equipoSeleccionado ? equipoSeleccionado : ''} */
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
                funcionEliminarEquipo={consultaPorEliminarEquipo}
              ></TarjetaEquipo>
            );
          })}

        {entidadZonaAgregarEquipos.equipos.map((equipo, index) => {
          return (
            <TarjetaEquipo
              key={index}
              equipo={equipo}
              isNuevo={false}
              funcionEliminarEquipo={consultaPorEliminarEquipo}
            ></TarjetaEquipo>
          );
        })}

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
        <Alertas
          mostrarSweet={modalGenericoAgregarEquipos.isMostrar}
          tipoDeSweet={modalGenericoAgregarEquipos.tipo}
          subtitulo={modalGenericoAgregarEquipos.mensaje}
          RespuestaDeSweet={() =>
            dispatch(
              modalGenericoAgregarEquipos_accion({
                tipo: '',
                mensaje: '',
                isMostrar: false,
              })
            )
          }
        ></Alertas>

        <Alertas
          mostrarSweet={modal.isMostrar}
          tipoDeSweet={modal.tipo}
          subtitulo={modal.mensaje}
          RespuestaDeSweet={respuestaModal}
        ></Alertas>
      </div>
    );
  }
};
export default AgregarEquipos;
