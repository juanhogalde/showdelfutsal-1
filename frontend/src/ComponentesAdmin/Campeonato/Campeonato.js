import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
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
    dispatch(consultarPorEditarTorneo_accion(auxIdCategoria, auxIdSubCategoria));
  };
  const obtenerRespuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isEditarTorneo.isConsulta) {
        dispatch(
          editarTorneo_accion(torneo, isEditarTorneo.categoria, isEditarTorneo.subcategoria)
        );
      }
      if (isEditarTorneo.isExito) {
        /* dispatch(actualizarListaDeTorneos_accion()); */
      }
      if (isEditarTorneo.isError) {
        dispatch(volverPorDefectoEditarTorneo_accion());
      }
    } else {
      dispatch(volverPorDefectoEditarTorneo_accion());
    }
  };
  const redireccionarZona = () => {
    /* dispatch(obtenerCategoriaSubcategoriaDatosDeTorneo_accion(categoria, subcategoria)); */
    history.push('/Torneo/Nuevo/Campeonato/Zonas');
  };

  if (categorias.length > 0 && subcategorias.length > 0) {
    return (
      <div className="CP-Campeonato">
        <div className="CI-CampeonatoMasculino">
          <p>{categorias[1].label ? categorias[1].label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            return (
              <TarjetaTorneo
                categoria={categorias[1]}
                subcategoria={subcategoria}
                key={index}
                isCampeonato={true}
                consultarPorAgregarCategoriaSubcategoria={consultarPorAgregarCategoriaSubcategoria}
              ></TarjetaTorneo>
            );
          })}
        </div>
        <div className="CI-CampeonatoMasculino">
          <p>{categorias[2].label ? categorias[2].label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            if (subcategoria.key === 1 || subcategoria.key === 2) {
              return (
                <TarjetaTorneo
                  datos={subcategoria.label}
                  key={index}
                  isCampeonato={true}
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
