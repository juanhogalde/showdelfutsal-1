import React from 'react';
import './TarjetaPanel.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Link} from 'react-router-dom';

const TarjetaPanel = ({
  url = '',
  tituloPanel = 'Titulo',
  linkTo = '',
  cargandoDatosIniciales = '',
}) => {
  /* const redireccionar =()=>{
    window.redirec
  } */
  return (
    <Link className="link-Paneles" to={`/${linkTo}`}>
      <div className="CP-TarjetaPanel" /* onClick={()=>redireccionar()} */>
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
    </Link>
  );
};
export default TarjetaPanel;
