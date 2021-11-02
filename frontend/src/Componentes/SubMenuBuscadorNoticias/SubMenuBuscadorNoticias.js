import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  buscarNoticia,
  guardarNoticiaSeleccionada_accion,
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
  const setearNoticiaSeleccionada = noticia => {
    dispatch(guardarNoticiaSeleccionada_accion(noticia));
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
                return (
                  <Link
                    to="/Noticia/Desarrollada/"
                    className="link-buscar-noticias"
                    onClick={() => setearNoticiaSeleccionada(noticia)}
                    key={noticia._id}
                  >
                    <p>{noticia.titulo}</p>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenuBuscadorNoticias;
