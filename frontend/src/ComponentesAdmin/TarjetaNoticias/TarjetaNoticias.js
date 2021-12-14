import React from 'react';
import './TarjetaNoticias.css';
import ImagenAdmin from '../ImagenAdmin/ImagenAdmin';
import TarjetaNoticiasMiniatura from '../TarjetaNoticiasMiniatura/TarjetaNoticiasMiniatura';
import {/*BiDotsVerticalRounded*/ BiPen, BiTrash} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {guardarNoticiaParaEditar_accion} from '../../Redux/Noticias/AccionesNoticias';
// import {useSelector} from 'react-redux';

export const TarjetaNoticias = ({noticia = {}}) => {
  const historialDeNavegacion = useHistory();
  const dispatch = useDispatch();
  const accionesOpciones = (noticia, tipoAccion) => {
    if (tipoAccion === 'editar') {
      console.log(tipoAccion);
      dispatch(guardarNoticiaParaEditar_accion(noticia));
      historialDeNavegacion.push(`/Noticia/Editar`);
    } else {
    }
  };
  // const {noticias} = useSelector(state => state.storeNoticias);

  // return noticias.map(noticia => {
  return (
    <div key={noticia._id} className="CP-Tarjeta-Noticias-Admin">
      <div className="CI-Tarjeta-Noticias-Admin">
        <div className="I-Tarjeta-Noticias-Imagen">
          <ImagenAdmin noticiaImagen={noticia} />
        </div>
        <div className="I-Tarjeta-Noticias-Cuerpo">
          <TarjetaNoticiasMiniatura noticiaRecibida={noticia} />
        </div>
        <div className="I-Tarjeta-Noticias-Opciones">
          <BiPen
            onClick={() => {
              accionesOpciones(noticia, 'editar');
            }}
            size={40}
          />
          <BiTrash
            onClick={() => {
              accionesOpciones(noticia, 'eliminar');
            }}
            size={40}
          />
        </div>
      </div>
    </div>
  );
  // });
};

export default TarjetaNoticias;
