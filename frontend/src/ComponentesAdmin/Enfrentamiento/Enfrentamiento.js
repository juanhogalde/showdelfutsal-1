import React, {useLayoutEffect, useState} from 'react';
import './Enfrentamiento.css';
import iconoFlecha from '../../Static/Admin/iconoAtras.svg';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import Selector from '../Selector/Selector';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Alertas from '../Alertas/Alertas';
import {useDispatch, useSelector} from 'react-redux';
import {
  agregarPartidoDefault_accion,
  agregarPartido_accion,
} from '../../Redux/Partidos/AccionPartidos';

const Enfrentamiento = ({equipos = [], torneoId = '', zonaId = ''}) => {
  const dispatch = useDispatch();
  const {isAgregarPartido} = useSelector(state => state.storePartidos);
  const [isMostrarCuerpo, setIsMostrarCuerpo] = useState(false);
  const [equiposSelector, setEquiposSelector] = useState(equipos);
  const [datosEnfrentamiento, setDatosEnfrentamiento] = useState({
    equipoLocal: '',
    equipoVisitante: '',
    fechaPorJugar: '',
    idZona: '',
    idTorneo: '',
  });
  const [alertaValidacion, setAlertaValidacion] = useState({
    tipo: '',
    isMostrar: false,
    mensaje: '',
  });

  const escucharSelector = (value, name) => {
    switch (name) {
      case 'local':
        setDatosEnfrentamiento({
          ...datosEnfrentamiento,
          equipoLocal: value,
        });
        break;
      case 'visitante':
        setDatosEnfrentamiento({
          ...datosEnfrentamiento,
          equipoVisitante: value,
        });
        break;
      default:
        break;
    }
    let auxEquiposSelector = equipos.filter(equipo => equipo.data._id !== value.data._id);
    setEquiposSelector(auxEquiposSelector);
  };

  const escucharInput = (value, name) => {
    if (name === 'fechaPorJugar') {
      setDatosEnfrentamiento({
        ...datosEnfrentamiento,
        [name]: parseInt(value),
      });
    } else {
      setDatosEnfrentamiento({
        ...datosEnfrentamiento,
        [name]: value,
      });
    }
  };

  const validarCamposCrearEnfrentamiento = () => {
    if (datosEnfrentamiento.equipoLocal) {
      if (datosEnfrentamiento.equipoVisitante) {
        if (datosEnfrentamiento.fechaPorJugar) {
          let auxEnfrentamiento = {
            idEquipoLocal: datosEnfrentamiento.equipoLocal.data._id,
            idEquipoVisitante: datosEnfrentamiento.equipoVisitante.data._id,
            fechaPorJugar: datosEnfrentamiento.fechaPorJugar,
            fechaPartido: datosEnfrentamiento.fechaPartido,
            estadio: datosEnfrentamiento.estadio,
            idZona: zonaId,
            idTorneo: torneoId,
          };
          dispatch(agregarPartido_accion(auxEnfrentamiento));
        } else {
          setAlertaValidacion({
            tipo: 'error',
            isMostrar: true,
            mensaje: 'Debe ingresar fecha por jugar.',
          });
        }
      } else {
        setAlertaValidacion({
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Debe seleccionar equipo visitante.',
        });
      }
    } else {
      setAlertaValidacion({
        tipo: 'error',
        isMostrar: true,
        mensaje: 'Debe seleccionar equipo local.',
      });
    }
  };

  const valoresPorDefecto = () => {
    setDatosEnfrentamiento({
      equipoLocal: '',
      equipoVisitante: '',
      fechaPartido: '',
      fechaPorJugar: '',
      idZona: '',
      idTorneo: '',
    });
    setEquiposSelector(equipos);
  };
  const obtenerRespuestaAlertaValidacion = respuesta => {
    if (respuesta) {
      setAlertaValidacion({
        tipo: '',
        isMostrar: false,
        mensaje: '',
      });
    } else {
    }
  };
  const obtenerRespuestaAgregarPartido = respuesta => {
    if (respuesta) {
      valoresPorDefecto();
      dispatch(agregarPartidoDefault_accion());
    }
  };
  return (
    <div className="CP-Enfrentamiento">
      <div
        onClick={() => setIsMostrarCuerpo(!isMostrarCuerpo)}
        className={
          isMostrarCuerpo ? 'CI-Cabecera-Enfrentamiento borde' : 'CI-Cabecera-Enfrentamiento'
        }
      >
        <p>Crear Enfrentamiento</p>
        <img
          alt=""
          src={iconoFlecha}
          className={
            isMostrarCuerpo ? 'iconoFlecha-Enfrentamiento-Apertura' : 'iconoFlecha-Enfrentamiento'
          }
        ></img>
      </div>
      <div
        className={
          isMostrarCuerpo
            ? 'CI-Cuerpo-Enfrentamiento aperutra-Enfrentamiento'
            : 'CI-Cuerpo-Enfrentamiento'
        }
      >
        <div className="I-Datos-Enfrentamiento">
          <Selector
            placeholder="Seleccione Equipo Local"
            options={equiposSelector ? equiposSelector : []}
            opcionSeleccionada={
              datosEnfrentamiento.equipoLocal ? datosEnfrentamiento.equipoLocal : ''
            }
            onChange={value => escucharSelector(value, 'local')}
            noOptionsMessage={
              !equiposSelector
                ? 'Debe seleccionar un torneo.'
                : 'No hay equipos cargados en la zona'
            }
          ></Selector>
          <Selector
            options={equiposSelector ? equiposSelector : []}
            opcionSeleccionada={
              datosEnfrentamiento.equipoVisitante ? datosEnfrentamiento.equipoVisitante : ''
            }
            onChange={value => escucharSelector(value, 'visitante')}
            noOptionsMessage={
              !equiposSelector
                ? 'Debe seleccionar un torneo.'
                : 'No hay equipos cargados en la zona'
            }
            placeholder="Seleccione Equipo Visitante"
          ></Selector>
          <InputLowa
            name="fechaPorJugar"
            type="number"
            min="0"
            max="30"
            placeholder="Fecha por Jugar"
            value={datosEnfrentamiento.fechaPorJugar ? datosEnfrentamiento.fechaPorJugar : ''}
            onChange={e => escucharInput(e.target.value, e.target.name)}
          ></InputLowa>
          {/* TODO: no vuelve por defecto */}
          <InputDateLowa
            name="fechaPartido"
            type="datetime-local"
            placeholder="Fecha de Enfrentamiento"
            onChange={e => escucharInput(e.target.value, e.target.name)}
          ></InputDateLowa>

          <InputLowa
            name="estadio"
            type="text"
            placeholder="Ingrese Estadio"
            value={datosEnfrentamiento.estadio ? datosEnfrentamiento.estadio : ''}
            onChange={e => escucharInput(e.target.value, e.target.name)}
          ></InputLowa>
          <BotonLowa tituloboton="Eliminar Valores" onClick={() => valoresPorDefecto()}></BotonLowa>

          <BotonLowa
            tituloboton="Crear Enfrentamiento"
            onClick={() => validarCamposCrearEnfrentamiento()}
          ></BotonLowa>
        </div>
      </div>
      <Alertas
        tipoDeSweet={alertaValidacion.tipo}
        mostrarSweet={alertaValidacion.isMostrar}
        subtitulo={alertaValidacion.mensaje}
        RespuestaDeSweet={obtenerRespuestaAlertaValidacion}
      ></Alertas>
      <Alertas
        tipoDeSweet={isAgregarPartido.tipo}
        mostrarSweet={isAgregarPartido.isMostrar}
        subtitulo={isAgregarPartido.mensaje}
        RespuestaDeSweet={obtenerRespuestaAgregarPartido}
      ></Alertas>
    </div>
  );
};
export default Enfrentamiento;
