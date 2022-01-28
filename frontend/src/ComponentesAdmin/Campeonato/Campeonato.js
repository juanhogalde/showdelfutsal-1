import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  actualizarListaDeTorneos_accion,
  consultarPorEditarTorneo_accion,
  editarTorneo_accion,
  volverPorDefectoEditarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
/* import {obtenerCategoriaSubcategoriaDatosDeTorneo_accion} from '../../Redux/Torneos/AccionesTorneos'; */
import Alertas from '../Alertas/Alertas';

import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {torneo, isEditarTorneo} = useSelector(state => state.storeTorneos);

  const consultarPorAgregarCategoriaSubcategoria = (idCategoria, idSubcategoria) => {
    let auxIdCategoria = idCategoria;
    let auxIdSubCategoria = idSubcategoria;
    dispatch(
      consultarPorEditarTorneo_accion(
        auxIdCategoria,
        auxIdSubCategoria,
        '¿Desea agregar categoría y subcategoría?'
      )
    );
  };
  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isEditarTorneo.isConsulta) {
        let auxDatosDeTorneo = {};
        Object.assign(auxDatosDeTorneo, torneo);
        auxDatosDeTorneo.nuevaCategoria = isEditarTorneo.categoria;
        auxDatosDeTorneo.nuevaSubcategoria = isEditarTorneo.subcategoria;
        dispatch(editarTorneo_accion(auxDatosDeTorneo));
      }
      if (isEditarTorneo.isExito) {
        dispatch(actualizarListaDeTorneos_accion());
        redireccionarZona(isEditarTorneo.categoria, isEditarTorneo.subcategoria);
      }
      if (isEditarTorneo.isError) {
        dispatch(volverPorDefectoEditarTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoEditarTorneo_accion());
    }
  };
  const redireccionarZona = (categoria, subcategoria) => {
    history.push(`/Torneo/Nuevo/Campeonato/Zonas/${categoria}/${subcategoria}`);
  };

  const obtenerExistenciaDeSubcategoria = subcategoria => {
    let resultadoDeBusqueda = false;
    torneo.idSubcategoria.forEach(subCategoriaTorneo => {
      if (subcategoria.keyCategoria === subCategoriaTorneo.keyCategoria) {
        if (subcategoria.key === subCategoriaTorneo.keySubcategoria) resultadoDeBusqueda = true;
      }
    });
    return resultadoDeBusqueda;
  };

  useEffect(() => {
    return () => {
      dispatch(volverPorDefectoEditarTorneo_accion());
    };
  }, [dispatch]);

  if (categorias.length > 0 && subcategorias.length > 0) {
    return (
      <div className="CP-Campeonato">
        <div className="CI-CampeonatoMasculino">
          <p>{categorias[0].label ? categorias[0].label : ''}</p>

          {subcategorias.map((subcategoria, index) => {
            if (subcategoria.keyCategoria === 1) {
              const aux = obtenerExistenciaDeSubcategoria(subcategoria);
              return (
                <TarjetaTorneo
                  isExisteSubcategoria={aux}
                  categoria={categorias[0]}
                  subcategoria={subcategoria}
                  key={index}
                  isCampeonato={true}
                  redireccionarZona={redireccionarZona}
                  consultarPorAgregarCategoriaSubcategoria={
                    consultarPorAgregarCategoriaSubcategoria
                  }
                />
              );
            } else return '';
          })}
        </div>
        <div className="CI-CampeonatoMasculino">
          <p>{categorias[2].label ? categorias[2].label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            if (subcategoria.keyCategoria === 2) {
              const aux = obtenerExistenciaDeSubcategoria(subcategoria);
              return (
                <TarjetaTorneo
                  isExisteSubcategoria={aux}
                  categoria={categorias[2]}
                  subcategoria={subcategoria}
                  key={index}
                  isCampeonato={true}
                  redireccionarZona={redireccionarZona}
                  consultarPorAgregarCategoriaSubcategoria={
                    consultarPorAgregarCategoriaSubcategoria
                  }
                ></TarjetaTorneo>
              );
            } else return '';
          })}
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
      </div>
    );
  } else {
    return (
      <div className="CP-Campeonato">
        <h6>Cargando</h6>
      </div>
    );
  }
};
export default Campeonato;
