import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  actualizarListaDeTorneosEliminarZonas_accion,
  consultarEliminarZonasDeTorneo_accion,
  eliminarZonasDeTorneoDefault_accion,
  eliminarZonasDeTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
/* import {
  actualizarListaDeTorneosConSubcategoria_accion,
  agregarCategoriaSubcategoriaTorneo_accion,
  consultarPoragregarCategoriaSubcategoriaTorneo_accion,
  volverPorDefectoAgregarCategoriaSubcategoriaTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas'; */

import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {torneoEditar, isEliminarZonasDeTorneo} = useSelector(state => state.storeTorneos);
  const categoriaMasculino = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.key === 1)
  );
  const categoriaFemenino = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(categoria => categoria.key === 2)
  );

  const redireccionarZona = (categoria, subcategoria) => {
    history.push(
      `/Torneo/Editar/Campeonato/Zonas/${torneoEditar._id}/${categoria}/${subcategoria}`
    );
  };

  const consultarPorEliminarZonasDeTorneo = subcategoria => {
    dispatch(consultarEliminarZonasDeTorneo_accion(subcategoria.key));
  };
  const obtenerRespuestasAlertaEliminarZonas = respuesta => {
    if (respuesta) {
      if (isEliminarZonasDeTorneo.tipo === 'warning') {
        dispatch(
          eliminarZonasDeTorneo_accion(torneoEditar._id, isEliminarZonasDeTorneo.subcategoria)
        );
      }
      if (isEliminarZonasDeTorneo.tipo === 'success') {
        dispatch(actualizarListaDeTorneosEliminarZonas_accion());
      }
      if (isEliminarZonasDeTorneo.tipo === 'error') {
        dispatch(eliminarZonasDeTorneoDefault_accion());
      }
    } else {
      dispatch(eliminarZonasDeTorneoDefault_accion());
    }
  };
  if (categorias.length > 0 && subcategorias.length > 0) {
    return (
      <div className="CP-Campeonato">
        <div className="CI-CampeonatoMasculino">
          <p>{categoriaMasculino.label ? categoriaMasculino.label : ''}</p>

          {subcategorias.map((subcategoria, index) => {
            return (
              subcategoria.keyCategoria === 1 && (
                <TarjetaTorneo
                  isExisteSubcategoria={torneoEditar.zonas?.some(
                    zona => zona.idSubcategoria.keySubcategoria === subcategoria.key
                  )}
                  categoria={categoriaMasculino}
                  subcategoria={subcategoria}
                  key={index}
                  isCampeonato={true}
                  redireccionarZona={redireccionarZona}
                  consultarPorEliminarZonasDeTorneo={consultarPorEliminarZonasDeTorneo}
                />
              )
            );
          })}
        </div>
        <div className="CI-CampeonatoMasculino">
          <p>{categoriaFemenino.label ? categoriaFemenino.label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            return (
              subcategoria.keyCategoria === 2 && (
                <TarjetaTorneo
                  isExisteSubcategoria={torneoEditar.zonas?.some(
                    zona => zona.idSubcategoria.keySubcategoria === subcategoria.key
                  )}
                  categoria={categoriaFemenino}
                  subcategoria={subcategoria}
                  key={index}
                  isCampeonato={true}
                  redireccionarZona={redireccionarZona}
                  consultarPorEliminarZonasDeTorneo={consultarPorEliminarZonasDeTorneo}
                ></TarjetaTorneo>
              )
            );
          })}
        </div>
        <Alertas
          mostrarSweet={isEliminarZonasDeTorneo.isMostrar}
          tipoDeSweet={isEliminarZonasDeTorneo.tipo}
          subtitulo={isEliminarZonasDeTorneo.mensaje}
          RespuestaDeSweet={obtenerRespuestasAlertaEliminarZonas}
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
