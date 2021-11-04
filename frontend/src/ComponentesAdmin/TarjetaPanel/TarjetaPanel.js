import React from 'react';
import './TarjetaPanel.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TarjetaPanel = ({
  url = '',
  tituloPanel = 'Titulo',
  linkTo = '',
  cargandoDatosIniciales = '',
}) => {
  console.log(cargandoDatosIniciales);
  return (
    <div className="CP-TarjetaPanel">
      <h5>
        {cargandoDatosIniciales ? (
          <Skeleton baseColor="rgb(241, 241, 241)" highlightColor="rgb(216, 216, 216)"></Skeleton>
        ) : (
          tituloPanel
        )}
      </h5>
      {cargandoDatosIniciales ? (
        <div className="imagen-TarjetaPanel-Cargando">
          <Skeleton
            containerClassName="imagen-TarjetaPanel-Cargando"
            baseColor="rgb(241, 241, 241)"
            highlightColor="rgb(216, 216, 216)"
            width="100%"
            height="100%"
          ></Skeleton>
        </div>
      ) : (
        <img className="imagen-TarjetaPanel" alt="" src={url}></img>
      )}
    </div>
  );
};
export default TarjetaPanel;
