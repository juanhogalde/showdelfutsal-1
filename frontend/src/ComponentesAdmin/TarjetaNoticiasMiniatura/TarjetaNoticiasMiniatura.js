import React from 'react';
import {useSelector} from 'react-redux';
import './TarjetaNoticiasMiniatura.css';

const TarjetaNoticiasMiniatura = ({noticiaRecibida}) => {
  const {categorias} = useSelector(state => state.sotreDatosIniciales);
  var categoriaFiltrada = categorias.find(
    categoria => categoria.value === noticiaRecibida.idCategoria
  );
  return (
    <div className="CP-Tarjeta-Noticia-Miniatura">
      <div className="CP-Tarjeta-Noticia-Miniatura-Contenedor">
        <div className="CI-Tarjeta-Noticia-Miniatura">
          <div className="CI-Tarjeta-Noticia-Miniatura-Titulo">
            <h6>{noticiaRecibida.titulo}</h6>
          </div>
          <div className="CI-Tarjeta-Noticia-Miniatura-Categoria">
            <div className="I-Tarjeta-Noticia-Categoria">
              <h6>Division</h6> <h6>{categoriaFiltrada ? categoriaFiltrada.label : ''}</h6>
            </div>
          </div>
          <div>
            <h6>{noticiaRecibida.fecha.substr(0, 10)}</h6>
          </div>
          <div className="CI-Tarjeta-Noticia-Miniatura-Cuerpo">
            <div className="I-Tarjeta-Noticia-cuerpo">
              <p>{noticiaRecibida.copete}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaNoticiasMiniatura;
