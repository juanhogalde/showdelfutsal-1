import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {
  agregarTorneo_accion,
  volverPorDefectoAgregarTorneo_accion,
} from '../../Redux/Torneos/AccionesTorneos';
import Alertas from '../Alertas/Alertas';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const {torneo, isAgregarTorneo} = useSelector(state => state.storeTorneos);

  const redireccioarZona = (categoria, subcategoria) => {
    let auxDatosDeTorneo = Object.assign(torneo);
    auxDatosDeTorneo.idCategoria = categoria;
    auxDatosDeTorneo.idSubcategoria = subcategoria;
    dispatch(agregarTorneo_accion(auxDatosDeTorneo));
    /* history.push('/Torneo/Nuevo/Campeonato/Zonas'); */
  };
  const respuestaDeAlertas = respuesta => {
    if (respuesta) {
      if (isAgregarTorneo.isExito) {
        dispatch(volverPorDefectoAgregarTorneo_accion());
        history.push('/Torneo/Nuevo/Campeonato/Zonas');
      }
      if (isAgregarTorneo.isError) {
        dispatch(volverPorDefectoAgregarTorneo_accion());
      }
    }
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
                redireccioarZona={redireccioarZona}
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
                  redireccioarZona={redireccioarZona}
                ></TarjetaTorneo>
              );
            } else return '';
          })}
        </div>
        <Alertas
          tipoDeSweet={isAgregarTorneo.tipo}
          subtitulo={isAgregarTorneo.mensaje}
          mostrarSweet={
            isAgregarTorneo.isCargando || isAgregarTorneo.isExito || isAgregarTorneo.isError
          }
          RespuestaDeSweet={respuestaDeAlertas}
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
