import React from 'react';
import {useSelector} from 'react-redux';
import TarjetaTorneo from '../TarjetaTorneo/TarjetaTorneo';
import './Campeonato.css';

const Campeonato = () => {
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  if (categorias.length > 0 && subcategorias.length > 0) {
    return (
      <div className="CP-Campeonato">
        <div className="CI-CampeonatoMasculino">
          <p>{categorias[0].label ? categorias[0].label : ''}</p>
          {subcategorias.map((subcategoria, index) => {
            return (
              <TarjetaTorneo
                datos={subcategoria.label}
                key={index}
                isCampeonato={true}
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
