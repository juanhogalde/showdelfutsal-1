import React, {useLayoutEffect} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
  agregarEquiposZonaTorneo_accion,
  eliminarEquipoDeZona_accion,
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
  // const history = useHistory();
  const {zonaId} = useParams();
  const dispatch = useDispatch();
  const {
    errorZonaAgregarEquipos,
    entidadZonaAgregarEquipos,
    isCargandoZonaAgregarEquipos,
    modalGenericoAgregarEquipos,
  } = useSelector(state => state.storeTorneos);

  //******Seccion Funciones*****//

  useLayoutEffect(() => {
    if (zonaId) {
      dispatch(obtenerZonaAgregarEquipos(zonaId));
    } else {
      dispatch(ZonaAgregarEquiposError_accion('Falta id de Zona'));
    }
    return () => {};
  }, [zonaId, dispatch]);

  const escucharSelectorEquipos = respuesta => {
    dispatch(agregarEquiposZonaTorneo_accion(zonaId, [respuesta.data._id]));
  };

  const crearEnfrentamiento = () => {
    console.log('revisar redireccionamiento');
    /* history.push('/Enfrentamientos'); */
  };

  const respuestaModalGenerico = respuesta => {
    if (modalGenericoAgregarEquipos.eliminarEquipo && respuesta) {
      funcionEliminarEquipo();
    }
    dispatch(
      modalGenericoAgregarEquipos_accion({
        mensaje: '',
        tipo: '',
        isMostrar: false,
      })
    );
  };
  const funcionEliminarEquipo = () => {
    dispatch(
      eliminarEquipoDeZona_accion(entidadZonaAgregarEquipos._id, modalGenericoAgregarEquipos.equipo)
    );
  };

  //******fin Seccion Funciones*****//
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
          opcionSeleccionada={null}
          options={
            entidadZonaAgregarEquipos.equiposDisponibles
              ? entidadZonaAgregarEquipos.equiposDisponibles
              : []
          }
          noOptionsMessage={'No hay equipos cargados.'}
          onChange={value => escucharSelectorEquipos(value)}
        ></Selector>

        <BotonLowa
          disabled={!entidadZonaAgregarEquipos.equipos.length}
          tituloboton="Crear Enfrentamiento"
          onClick={() => crearEnfrentamiento()}
        ></BotonLowa>

        {entidadZonaAgregarEquipos.equipos.map((equipo, index) => {
          return (
            <TarjetaEquipo
              key={index}
              equipo={equipo}
              isNuevo={false}
              funcionEliminarEquipo={() =>
                dispatch(
                  modalGenericoAgregarEquipos_accion({
                    tipo: 'warning',
                    mensaje: '¿Desea eliminar equipo de la zona?',
                    isMostrar: true,
                    equipo: equipo,
                    eliminarEquipo: true,
                  })
                )
              }
            ></TarjetaEquipo>
          );
        })}

        <Alertas
          mostrarSweet={modalGenericoAgregarEquipos.isMostrar}
          tipoDeSweet={modalGenericoAgregarEquipos.tipo}
          subtitulo={modalGenericoAgregarEquipos.mensaje}
          RespuestaDeSweet={respuestaModalGenerico}
        ></Alertas>
      </div>
    );
  }
};
export default AgregarEquipos;
