import React, {useLayoutEffect, useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import TarjetaZona from '../TarjetaZona/TarjetaZona';
import './Zonas.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Alertas from '../Alertas/Alertas';
import {
  actualizarListaDeTorneosCrearZona_accion,
  actualizarListaDeZonas_accion,
  consultarPorEliminarZona_accion,
  crearZonaTorneoDefault_accion,
  crearZonaTorneo_accion,
  eliminarZona_accion,
  volverPorDefectoEliminarZona_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Cargando from '../Cargando/Cargando';

const options = [
  {value: 1, label: 'Eliminatoria'},
  {value: 2, label: 'Grupo'},
  {value: 3, label: 'Eliminatoria con Dif. Goles'},
];
const Zonas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {idTorneo, idCategoria, idSubcategoria} = useParams();
  const {torneo, torneos, isAgregarZona, isEliminarZona} = useSelector(state => state.storeTorneos);
  const [categoria, setCategoria] = useState();
  const [subcategoria, setSubcategoria] = useState();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [datosZona, setDatosZona] = useState('');
  const [tipo, setTipo] = useState('');
  const [arrayZonasCreadas, setArrayZonasCreadas] = useState([]);
  const [alertaCamposVacios, setAlertaCamposVacios] = useState({
    tipo: '',
    mensaje: '',
    isMostrar: false,
  });
  const escucharCambios = (name, value) => {
    setDatosZona({...datosZona, [name]: value});
  };
  const agregarZona = () => {
    let auxDatosZona = {};
    if (datosZona !== '') {
      if (tipo !== '') {
        Object.assign(auxDatosZona, torneo);
        auxDatosZona.nombreZona = datosZona.nombreZona;
        auxDatosZona.tipoZona = tipo.value;
        auxDatosZona.idCategoria = idCategoria;
        auxDatosZona.idSubcategoria = idSubcategoria;

        dispatch(crearZonaTorneo_accion(auxDatosZona));
        setDatosZona('');
        setTipo('');
      } else {
        setAlertaCamposVacios({
          tipo: 'error',
          mensaje: 'Debe seleccionar Tipo de Zona.',
        });
      }
    } else {
      setAlertaCamposVacios({
        tipo: 'error',
        mensaje: 'Debe completar el Nombre/Zona.',
      });
    }

    Object.assign(auxDatosZona, torneo);
    auxDatosZona.nombreZona = datosZona.nombreZona;
    auxDatosZona.tipoZona = tipo.value;
    auxDatosZona.idCategoria = idCategoria;
    auxDatosZona.idSubcategoria = idSubcategoria;
  };

  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isAgregarZona.isExito) {
        dispatch(actualizarListaDeTorneosCrearZona_accion());
      }
      if (isAgregarZona.isError) {
        dispatch(crearZonaTorneoDefault_accion());
      }
    } else {
      dispatch(crearZonaTorneoDefault_accion());
    }
  };

  const funcionEliminarZona = id => {
    dispatch(consultarPorEliminarZona_accion(torneo._id, id));
  };
  const obtenerRespuestaDeAlertaEliminarZona = respuesta => {
    if (respuesta) {
      if (isEliminarZona.isConsulta) {
        dispatch(eliminarZona_accion(isEliminarZona.idZona));
      }
      if (isEliminarZona.isExito) {
        dispatch(actualizarListaDeZonas_accion());
        setDatosZona('');
        setTipo('');
      }
      if (isEliminarZona.isError) {
        dispatch(volverPorDefectoEliminarZona_accion());
      }
    } else {
      dispatch(volverPorDefectoEliminarZona_accion());
    }
  };

  const redireccionarAgregarEquipos = zonaId => {
    history.push(`/Torneo/Nuevo/Campeonato/Zonas/Equipos/${zonaId}`);
  };
  const redireccionarEnfrentamientos = () => {
    history.push(
      `/Torneo/Nuevo/Campeonato/Zonas/${torneo._id}/${idCategoria}/${idSubcategoria}/Enfrentamientos`
    );
  };
  const obtenerRespuestaDeAlertaCamposVacios = respuesta => {
    if (respuesta) {
      setAlertaCamposVacios({
        tipo: '',
        mensaje: '',
        isMostrar: false,
      });
    }
  };

  useLayoutEffect(() => {
    if (Object.keys(torneo).length > 0) {
      if (torneo.zonas) {
        let auxZonas = torneo.zonas.filter(
          zona =>
            zona.idSubcategoria.keyCategoria === parseInt(idCategoria) &&
            zona.idSubcategoria.keySubcategoria === parseInt(idSubcategoria)
        );
        setArrayZonasCreadas(auxZonas);
      }
    }

    let auxCategoria = categorias.find(categoria => categoria.key === parseInt(idCategoria));

    setCategoria(auxCategoria);
    let auxSubCategoria = subcategorias.find(
      subcategoria => subcategoria.key === parseInt(idSubcategoria)
    );
    setSubcategoria(auxSubCategoria);

    return () => {};
  }, [dispatch, torneos, torneo, idTorneo, idCategoria, idSubcategoria, categorias, subcategorias]);

  if (Object.keys(torneo).length > 0) {
    return (
      <div className="CP-Zonas">
        <div>
          <h5>{categoria && categoria.label ? categoria.label : <Skeleton width="15%" />}</h5>
          <h6>{categoria && subcategoria.label ? subcategoria.label : <Skeleton width="10%" />}</h6>

          <InputLowa
            name="nombreZona"
            placeholder={'Ingrese Nombre/Zona'}
            onChange={e => escucharCambios(e.target.name, e.target.value)}
          ></InputLowa>
          <Selector
            name="tipoZona"
            placeholder="Seleccione Tipo"
            selectorConIcono={<BsPlusCircle />}
            options={options ? options : []}
            onChange={setTipo}
          ></Selector>
          <BotonLowa tituloboton="Agregar" onClick={() => agregarZona()}></BotonLowa>
          {arrayZonasCreadas && (
            <div className="CI-ZonasCreadas">
              <p className="titulo-ZonasCreadas">Zonas creadas</p>

              {arrayZonasCreadas.map((zona, index) => {
                return (
                  <TarjetaZona
                    redireccionar={
                      zona.tipoZona === 1 || zona.tipoZona === 3
                        ? redireccionarEnfrentamientos
                        : redireccionarAgregarEquipos
                    }
                    key={index}
                    indice={index}
                    categoria={categoria ? categoria : ''}
                    subcategoria={subcategoria ? subcategoria : ''}
                    datos={zona}
                    funcionEliminarZona={funcionEliminarZona}
                  ></TarjetaZona>
                );
              })}
            </div>
          )}
        </div>

        <Alertas
          mostrarSweet={isAgregarZona.isCargando || isAgregarZona.isExito || isAgregarZona.isError}
          tipoDeSweet={isAgregarZona.tipo}
          subtitulo={isAgregarZona.mensaje}
          RespuestaDeSweet={obtenerRespuestaDeAlertas}
        ></Alertas>
        <Alertas
          mostrarSweet={
            isEliminarZona.isConsulta ||
            isEliminarZona.isCargando ||
            isEliminarZona.isExito ||
            isEliminarZona.isError
          }
          tipoDeSweet={isEliminarZona.tipo}
          subtitulo={isEliminarZona.mensaje}
          RespuestaDeSweet={obtenerRespuestaDeAlertaEliminarZona}
        ></Alertas>
        <Alertas
          mostrarSweet={alertaCamposVacios.isMostrar}
          tipoDeSweet={alertaCamposVacios.tipo}
          subtitulo={alertaCamposVacios.mensaje}
          RespuestaDeSweet={obtenerRespuestaDeAlertaCamposVacios}
        ></Alertas>
      </div>
    );
  } else {
    return (
      <div className="CP-EditarTorneo-Cargando">
        <Cargando></Cargando>
      </div>
    );
  }
};
export default Zonas;
