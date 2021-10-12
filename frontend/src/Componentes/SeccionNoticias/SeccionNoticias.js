import React from 'react';
import '../SeccionNoticias/SeccionNoticias.css';
import NoticiaDesarrollada from '../NoticiaDesarrollada/NoticiaDesarrollada';
import NoticiasMiniatura from '../NoticiasMiniatura/NoticiasMiniatura';
// import {useSelector} from 'react-redux';
const SeccionNoticias = ({
  titulo = 'Masculino',
  noticias1 = {},
  noticias2 = {},
  noticias3 = {},
}) => {
  // const {noticias, noticias2, noticias3} = useSelector(state => state.storePrueba);
  return (
    <div class="grid-container-Seccion-Noticias">
      <div className="item1"></div>
      <div className="item2">
        <p>{titulo}</p>
      </div>
      <div className="item3">
        <NoticiaDesarrollada datosModelado={noticias1} />
      </div>
      <div className="item4">
        <div className="item41">
          <NoticiasMiniatura datosModelado={noticias2} />
        </div>
        <div className="item42">
          <NoticiasMiniatura datosModelado={noticias3} />
        </div>
      </div>
      <div className="item5">GALERIA DE NOTICIAS MINIATURAS</div>
      <div className="item6"></div>
    </div>
  );
};

export default SeccionNoticias;
