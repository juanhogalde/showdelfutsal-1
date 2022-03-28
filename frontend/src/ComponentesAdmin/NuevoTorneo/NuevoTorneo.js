import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputDateLowa from '../InputDateLowa/InputDateLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import './NuevoTorneo.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory} from 'react-router';
import Alertas from '../Alertas/Alertas';
import {useDispatch, useSelector} from 'react-redux';
import {
  agregarTorneo_accion,
  controlModalNuevoTorneo_accion,
  editarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import compararObjetos from '../../ModulosExternos/CompararObjetos';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';

const tipoTorneoArray = [
  {value: 1, label: 'Campeonato'},
  {value: 2, label: 'Liga'},
  {value: 3, label: 'Copa'},
];

const NuevoTorneo = ({datosParaEditar = {}}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const {isModalNuevoTorneo} = useSelector(state => state.storeTorneos);
  const [datosTorneo, setDatosTorneo] = useState(datosParaEditar);
  const [isFinalizoEdicion, setIsFinalizoEdicion] = useState(true);
  const [alertaFechas, setAlertaFechas] = useState({
    tipo: '',
    mensaje: '',
    isMostrar: false,
  });

  const escucharCambios = (name, value) => {
    setIsFinalizoEdicion(value === datosParaEditar[name]);
    setDatosTorneo({...datosTorneo, [name]: value});
  };

  const escucharSelector = (value, name) => {
    setIsFinalizoEdicion(value === datosParaEditar[name]);
    setDatosTorneo({...datosTorneo, [name]: value});
  };

  const siguientePantallaNuevoTorneo = () => {
    switch (datosTorneo.tipoTorneo) {
      case 1:
        history.push(`/Torneo/Editar/Campeonato/${datosTorneo._id}`);
        break;
      default:
        break;
    }
  };

  const validarCamposNuevoTorneo = () => {
    if (datosTorneo._id) {
      //TODO:si hay cambios hay que llamar al editar torneo  dispatch(editarTorneo_accion(datosTorneo));
      if (compararObjetos(datosTorneo, datosParaEditar)) {
        siguientePantallaNuevoTorneo(datosTorneo._id);
      } else {
        dispatch(editarTorneo_accion(datosTorneo));
      }
    } else {
      if (
        datosTorneo.tipoTorneo &&
        datosTorneo.tituloTorneo &&
        datosTorneo.fechaInicio &&
        datosTorneo.fechaFin
      ) {
        dispatch(agregarTorneo_accion(datosTorneo));
      } else {
        setAlertaFechas({
          tipo: 'error',
          mensaje: `Verifique los siguientes datos:
            ${!datosTorneo.tipoTorneo ? '-Tipo de torneo' : ''} 
            ${!datosTorneo.tituloTorneo ? '-Titulo torneo' : ''} 
            ${!datosTorneo.fechaInicio ? '-Fecha inicio' : ''} ${
            !datosTorneo.fechaFin ? '-Fecha fin' : ''
          } ${
            new Date(datosTorneo.fechaInicio).getTime() > new Date(datosTorneo.fechaFin).getTime()
              ? '-Fechas inválidas'
              : ''
          }
              `,
          isMostrar: true,
        });
      }
    }
  };

  const respuestaDeAlertasAgregarTorneo = respuesta => {
    dispatch(
      controlModalNuevoTorneo_accion({
        isMostrar: false,
        tipo: '',
        datosAdicionales: null,
        mensaje: '',
      })
    );
    if (respuesta) {
      if (isModalNuevoTorneo.tipo === 'success') {
        if (isModalNuevoTorneo.datosAdicionales) {
          history.push(`/Torneo/Editar/${isModalNuevoTorneo.datosAdicionales}`);
        }
        history.push(`/Torneo/Editar/Campeonato/${isModalNuevoTorneo.datosAdicionales}`);
      }
    }
  };
  const respuestaDeAlertaFechas = respuesta => {
    if (respuesta) {
      setAlertaFechas({
        tipo: '',
        mensaje: '',
        isMostrar: true,
      });
    }
  };

  return (
    <div className="CP-NuevoTorneo">
      <Selector
        name="tipoTorneo"
        placeholder="Seleccione Torneo"
        selectorConIcono={<BsPlusCircle />}
        options={tipoTorneoArray ? tipoTorneoArray : []}
        noOptionsMessage={'No hay torneos cargados.'}
        onChange={(opcion, selector) => escucharSelector(opcion.value, selector.name)}
        opcionSeleccionada={tipoTorneoArray[datosTorneo.tipoTorneo - 1]}
      ></Selector>
      <InputLowa
        type="text"
        name="tituloTorneo"
        placeholder="Título de Torneo"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        value={datosTorneo.tituloTorneo ? datosTorneo.tituloTorneo : ''}
      ></InputLowa>

      <InputDateLowa
        name="fechaInicio"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Inicio"
        value={datosTorneo.fechaInicio ? datosTorneo.fechaInicio : ''}
      />
      <InputDateLowa
        name="fechaFin"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
        type="date"
        placeholder="Fecha Fin"
        value={datosTorneo.fechaFin ? datosTorneo.fechaFin : ''}
      />
      {datosParaEditar._id ? (
        <React.Fragment>
          <BotonLowa
            tituloboton={datosParaEditar._id && isFinalizoEdicion ? 'Siguiente' : 'Editar Torneo'}
            onClick={() => validarCamposNuevoTorneo()}
          ></BotonLowa>
          <div className="CP-Campeonato">
            <div className="CI-CampeonatoMasculino">
              <p>Masculino</p>

              {subcategorias.map((subcategoria, index) => {
                return (
                  subcategoria.keyCategoria === 1 && (
                    <TarjetaTorneo
                      isExisteSubcategoria={datosParaEditar.zonas?.some(
                        zona => zona.idSubcategoria.keySubcategoria === subcategoria.key
                      )}
                      // categoria={categoriaMasculino}
                      subcategoria={subcategoria}
                      key={index}
                      isCampeonato={true}
                      // redireccionarZona={redireccionarZona}
                      // consultarPorEliminarZonasDeTorneo={consultarPorEliminarZonasDeTorneo}
                    />
                  )
                );
              })}
            </div>
            <div className="CI-CampeonatoMasculino">
              <p>Femenino</p>
              {subcategorias.map((subcategoria, index) => {
                return (
                  subcategoria.keyCategoria === 2 && (
                    <TarjetaTorneo
                      isExisteSubcategoria={datosParaEditar.zonas?.some(
                        zona => zona.idSubcategoria.keySubcategoria === subcategoria.key
                      )}
                      // categoria={categoriaFemenino}
                      subcategoria={subcategoria}
                      key={index}
                      isCampeonato={true}
                      // redireccionarZona={redireccionarZona}
                      // consultarPorEliminarZonasDeTorneo={consultarPorEliminarZonasDeTorneo}
                    ></TarjetaTorneo>
                  )
                );
              })}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <BotonLowa
          tituloboton={isFinalizoEdicion ? 'Siguiente' : 'Crear Torneo'}
          onClick={() => validarCamposNuevoTorneo()}
        ></BotonLowa>
      )}

      <Alertas
        tipoDeSweet={isModalNuevoTorneo.tipo}
        subtitulo={isModalNuevoTorneo.mensaje}
        mostrarSweet={isModalNuevoTorneo.isMostrar}
        RespuestaDeSweet={respuestaDeAlertasAgregarTorneo}
      ></Alertas>
      <Alertas
        tipoDeSweet={alertaFechas.tipo}
        subtitulo={alertaFechas.mensaje}
        mostrarSweet={alertaFechas.isMostrar}
        RespuestaDeSweet={respuestaDeAlertaFechas}
      ></Alertas>
    </div>
  );
};
export default NuevoTorneo;
