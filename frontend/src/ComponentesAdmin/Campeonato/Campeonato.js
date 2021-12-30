import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {obtenerCategoriaSubcategoriaDatosDeTorneo_accion} from '../../Redux/Torneos/AccionesTorneos';

import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const redireccionarZona = (categoria, subcategoria) => {
    dispatch(obtenerCategoriaSubcategoriaDatosDeTorneo_accion(categoria, subcategoria));
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
                redireccioarZona={redireccionarZona}
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
                  redireccionarZona={redireccionarZona}
                ></TarjetaTorneo>
              );
            } else return '';
          })}
        </div>
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
