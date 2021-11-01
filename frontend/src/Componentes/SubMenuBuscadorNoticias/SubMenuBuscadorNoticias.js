import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  buscarNoticia,
  volverProdefectoNoticiasBusqueda_accion,
} from '../../Redux/Noticias/AccionesNoticias';
import './SubMenuBuscadorNoticias.css';

const SubMenuBuscadorNoticias = () => {
  const dispatch = useDispatch();
  const {noticiaDeBusqueda} = useSelector(state => state.storeNoticias);
  const [valorBusqueda, setValorBusqueda] = useState('');
  const escucharCambiosBuscar = (value, onChange) => {
    if (onChange) {
      setValorBusqueda(value);
    } else {
      dispatch(buscarNoticia(valorBusqueda));
    }
    // pone en vacio 'noticiaDeBusqueda' del reducer Noticias cuando esta vacio el input
    if (!valorBusqueda) {
      dispatch(volverProdefectoNoticiasBusqueda_accion());
    }
  };
  return (
    <div className="CP-SN-Noticias-Busquedas">
      <p>NOTICIAS</p>
      <div className="SN-lista-desplegable-noticia-busqueda">
        <input
          type="BusquedaNoticias"
          name="BusquedaNoticias"
          className="Input-busqueda"
          value={valorBusqueda}
          placeholder="Busqueda"
          onChange={e => {
            escucharCambiosBuscar(e.target.value, true);
          }}
          onKeyPress={e => {
            {
              e.charCode === 13 && escucharCambiosBuscar(e, false);
            }
          }}
        />
        {valorBusqueda && (
          <div className="CI-resultado-busqueda-noticias">
            {noticiaDeBusqueda.length !== 0 &&
              noticiaDeBusqueda.map(noticia => {
                return <p>{noticia.titulo}</p>;
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenuBuscadorNoticias;
