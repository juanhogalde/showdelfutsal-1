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
  actualizarListaDeTorneos_accion,
  actualizarListaDeZonas_accion,
  consultarPorEliminarZona_accion,
  crearZonaTorneo_accion,
  eliminarZona_accion,
  volverPorDefectoEditarTorneo_accion,
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
  const {torneo, torneos, isEditarTorneo, isEliminarZona} = useSelector(
    state => state.storeTorneos
  );

  const categoria = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.value === idCategoria)
  );
  const subcategoria = useSelector(state =>
    state.sotreDatosIniciales.subcategorias.find(
      subcategoria => subcategoria.value === idSubcategoria
    )
  );

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
      if (isEditarTorneo.isExito) {
        dispatch(actualizarListaDeTorneos_accion());
      }
      if (isEditarTorneo.isError) {
        dispatch(volverPorDefectoEditarTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoEditarTorneo_accion());
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
      }
      if (isEliminarZona.isError) {
        /* dispatch(volverPorDefectoEditarTorneo_accion()); */
      }
    } else {
      dispatch(volverPorDefectoEliminarZona_accion());
    }
  };

  const redireccionarAgregarEquipos = () => {
    history.push('/Torneo/Nuevo/Campeonato/Zonas/Equipos');
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
            zona.idSubcategoria.keyCategoria === categoria.key &&
            zona.idSubcategoria.keySubcategoria === subcategoria.key
        );
        setArrayZonasCreadas(auxZonas);
      }
    }
    return () => {};
  }, [
    dispatch,
    torneos,
    torneo,
    idTorneo,
    isEditarTorneo.isExito,
    categoria.key,
    subcategoria.key,
  ]);
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
                    redireccionarEnfrentamiento={redireccionarAgregarEquipos}
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
          mostrarSweet={
            isEditarTorneo.isConsulta ||
            isEditarTorneo.isCargando ||
            isEditarTorneo.isExito ||
            isEditarTorneo.isError
          }
          tipoDeSweet={isEditarTorneo.tipo}
          subtitulo={isEditarTorneo.mensaje}
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
