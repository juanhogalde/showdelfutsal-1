import React, {useState} from 'react';
import BotonLowa from '../BotonLowa/BotonLowa';
import InputLowa from '../InputLowa/InputLowa';
import Selector from '../Selector/Selector';
import TarjetaZona from '../TarjetaZona/TarjetaZona';
import './Zonas.css';
import {BsPlusCircle} from 'react-icons/bs';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Alertas from '../Alertas/Alertas';
import {
  // actualizarListaDeTorneosCrearZona_accion,
  // actualizarListaDeZonas_accion,
  // consultarPorEliminarZona_accion,
  controlModalZonas_accion,
  // crearZonaTorneoDefault_accion,
  crearZonaTorneo_accion,
  eliminarZona_accion,
  // volverPorDefectoEliminarZona_accion,
} from '../../Redux/Torneos/AccionesTorneos';

const options = [
  // {value: 1, label: 'Eliminatoria'},
  {value: 2, label: 'Grupo'},
  // {value: 3, label: 'Eliminatoria con Dif. Goles'},
];
const Zonas = ({zonas, categoriaSeleccionada, subCategoriaSeleccionada, idTorneo}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {modalZonas} = useSelector(state => state.storeTorneos);
  const [datosZona, setDatosZona] = useState({
    idSubcategoria: subCategoriaSeleccionada.key,
    idCategoria: categoriaSeleccionada.key,
    idTorneo: idTorneo,
  });
  const [zonasLocales, setZonasLocales] = useState(zonas);
  const [alertaLocal, setAlertaLocal] = useState({
    tipo: '',
    mensaje: '',
    isMostrar: false,
    datos: null,
  });
  const escucharCambios = (name, value) => {
    if (name === 'tipoZona') {
      setDatosZona({
        ...datosZona,
        [name]: options.find(opcion => opcion.value === value),
      });
    } else {
      setDatosZona({...datosZona, [name]: value});
    }
  };
  const agregarZona = () => {
    if (datosZona.nombreZona && datosZona.nombreZona.trim() !== '') {
      if (datosZona.tipoZona) {
        dispatch(crearZonaTorneo_accion({...datosZona, tipoZona: datosZona.tipoZona.value}));
      } else {
        setAlertaLocal({
          tipo: 'error',
          mensaje: 'Debe seleccionar Tipo de Zona.',
          isMostrar: true,
        });
      }
    } else {
      setAlertaLocal({
        tipo: 'error',
        mensaje: 'El campo Nombre de la Zona no puede estar vacío',
        isMostrar: true,
      });
    }
  };

  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (modalZonas.datos.tipo === 'eliminar') {
        console.log(zonasLocales);
        const zonasFiltradas = zonasLocales.filter(zona => zona._id !== modalZonas.datos.id);
        setZonasLocales(zonasFiltradas);
      }
      if (modalZonas.datos.tipo === 'crear') {
        setZonasLocales([...zonasLocales, modalZonas.datos.zona]);
      }

      setDatosZona({
        idSubcategoria: subCategoriaSeleccionada.key,
        idCategoria: categoriaSeleccionada.key,
        idTorneo: idTorneo,
      });
    }
    dispatch(controlModalZonas_accion({isMostrar: false, datos: null, tipo: '', mensaje: ''}));
  };

  const funcionEliminarZona = id => {
    setAlertaLocal({
      tipo: 'warning',
      mensaje: '¿Está seguro de eliminar la Zona?',
      isMostrar: true,
      datos: id,
    });
  };

  const redireccionarAgregarEquipos = zonaId => {
    history.push(`/Equipos/${zonaId}`);
  };
  const redireccionarEnfrentamientos = zonaId => {
    history.push(`/Enfrentamientos/${zonaId}`);
  };
  const obtenerRespuestaDeAlertaCamposVacios = respuesta => {
    if (respuesta) {
      if (alertaLocal.tipo === 'warning') {
        dispatch(eliminarZona_accion(alertaLocal.datos));
      }
      setAlertaLocal({
        tipo: '',
        mensaje: '',
        isMostrar: false,
        datos: null,
      });
    }
  };

  return (
    <div className="CP-Zonas">
      <div>
        <h5>
          {categoriaSeleccionada && categoriaSeleccionada.label ? (
            categoriaSeleccionada.label
          ) : (
            <Skeleton width="15%" />
          )}
        </h5>
        <h6>
          {categoriaSeleccionada && subCategoriaSeleccionada.label ? (
            subCategoriaSeleccionada.label
          ) : (
            <Skeleton width="10%" />
          )}
        </h6>

        <InputLowa
          name="nombreZona"
          value={datosZona.nombreZona ? datosZona.nombreZona : ''}
          placeholder={'Ingrese Nombre/Zona'}
          onChange={e => escucharCambios(e.target.name, e.target.value)}
        ></InputLowa>
        <Selector
          name="tipoZona"
          opcionSeleccionada={datosZona.tipoZona ? datosZona.tipoZona : ''}
          placeholder="Seleccione Tipo"
          selectorConIcono={<BsPlusCircle />}
          options={options ? options : []}
          onChange={e => escucharCambios('tipoZona', e.value)}
        ></Selector>
        <BotonLowa tituloboton="Agregar" onClick={() => agregarZona()}></BotonLowa>

        <div className="CI-ZonasCreadas">
          <p className="titulo-ZonasCreadas">Zonas creadas</p>
          {zonasLocales.length ? (
            zonasLocales.map((zona, index) => {
              return (
                <TarjetaZona
                  redireccionar={
                    zona.tipoZona === 1 || zona.tipoZona === 3
                      ? redireccionarEnfrentamientos
                      : redireccionarAgregarEquipos
                  }
                  key={index}
                  indice={index}
                  categoriaSeleccionada={categoriaSeleccionada ? categoriaSeleccionada : ''}
                  subCategoriaSeleccionada={
                    subCategoriaSeleccionada ? subCategoriaSeleccionada : ''
                  }
                  datos={zona}
                  funcionEliminarZona={funcionEliminarZona}
                ></TarjetaZona>
              );
            })
          ) : (
            <span>Aun no hay zonas creadas</span>
          )}
        </div>
      </div>

      <Alertas
        mostrarSweet={modalZonas.isMostrar}
        tipoDeSweet={modalZonas.tipo}
        subtitulo={modalZonas.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertas}
      ></Alertas>

      <Alertas
        mostrarSweet={alertaLocal.isMostrar}
        tipoDeSweet={alertaLocal.tipo}
        subtitulo={alertaLocal.mensaje}
        RespuestaDeSweet={obtenerRespuestaDeAlertaCamposVacios}
      ></Alertas>
    </div>
  );
};
export default Zonas;
