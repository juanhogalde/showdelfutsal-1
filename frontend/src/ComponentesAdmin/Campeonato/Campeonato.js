import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  actualizarListaDeTorneosConSubcategoria_accion,
  agregarCategoriaSubcategoriaTorneo_accion,
  consultarPoragregarCategoriaSubcategoriaTorneo_accion,
  volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';

import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {torneo, isAgregarCategoriaSubcategoria} = useSelector(state => state.storeTorneos);
  const categoriaMasculino = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.key === 1)
  );
  const categoriaFemenino = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.key === 2)
  );
  const consultarPorAgregarCategoriaSubcategoria = (keyCategoria, keySubcategoria) => {
    let auxKeyCategoria = keyCategoria;
    let auxKeySubCategoria = keySubcategoria;
    dispatch(
      consultarPoragregarCategoriaSubcategoriaTorneo_accion(auxKeyCategoria, auxKeySubCategoria)
    );
  };
  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isAgregarCategoriaSubcategoria.isConsulta) {
        let auxDatosDeTorneo = {};
        Object.assign(auxDatosDeTorneo, torneo);
        auxDatosDeTorneo.nuevaCategoria = isAgregarCategoriaSubcategoria.categoria;
        auxDatosDeTorneo.nuevaSubcategoria = isAgregarCategoriaSubcategoria.subcategoria;
        dispatch(agregarCategoriaSubcategoriaTorneo_accion(auxDatosDeTorneo));
      }
      if (isAgregarCategoriaSubcategoria.isExito) {
        dispatch(actualizarListaDeTorneosConSubcategoria_accion());
        redireccionarZona(
          isAgregarCategoriaSubcategoria.categoria,
          isAgregarCategoriaSubcategoria.subcategoria
        );
      }
      if (isAgregarCategoriaSubcategoria.isError) {
        dispatch(volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion());
    }
  };
  const redireccionarZona = (categoria, subcategoria) => {
    history.push(`/Torneo/Nuevo/Campeonato/Zonas/${torneo._id}/${categoria}/${subcategoria}`);
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
      dispatch(volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion());
    };
  }, [dispatch]);

  if (categorias.length > 0 && subcategorias.length > 0) {
    return (
      <div className="CP-Campeonato">
        <div className="CI-CampeonatoMasculino">
          <p>{categoriaMasculino.label ? categoriaMasculino.label : ''}</p>

          {subcategorias.map((subcategoria, index) => {
            if (subcategoria.keyCategoria === 1) {
              const aux = obtenerExistenciaDeSubcategoria(subcategoria);
              return (
                <TarjetaTorneo
                  isExisteSubcategoria={aux}
                  categoria={categoriaMasculino}
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
          <p>{categoriaFemenino.label ? categoriaFemenino.label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            if (subcategoria.keyCategoria === 2) {
              const aux = obtenerExistenciaDeSubcategoria(subcategoria);
              return (
                <TarjetaTorneo
                  isExisteSubcategoria={aux}
                  categoria={categoriaFemenino}
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
            isAgregarCategoriaSubcategoria.isConsulta ||
            isAgregarCategoriaSubcategoria.isCargando ||
            isAgregarCategoriaSubcategoria.isExito ||
            isAgregarCategoriaSubcategoria.isError
          }
          tipoDeSweet={isAgregarCategoriaSubcategoria.tipo}
          subtitulo={isAgregarCategoriaSubcategoria.mensaje}
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
