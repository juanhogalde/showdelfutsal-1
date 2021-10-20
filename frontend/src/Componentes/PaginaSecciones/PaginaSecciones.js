import React, {useEffect, useState} from 'react';
import './PaginaSecciones.css';
import SubMenuNoticias from '../SubMenuNoticias/SubMenuNoticias';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SeccionFixture from '../SeccionFixture/SeccionFixture';
import SeccionTablaDePosiciones from '../SeccionTablaDePosiciones/SeccionTablaDePosiciones';

const PaginaSecciones = () => {
  const [isSeccionNoticias, setIsSeccionNoticias] = useState(false);
  const [isSeccionFixture, setIsSeccionFixture] = useState(false);
  const [isSeccionTabla, setIsSeccionTabla] = useState(false);

  const obtenerSeccion = respuesta => {
    console.log(respuesta);
    switch (respuesta) {
      case 1:
        {
          setIsSeccionFixture(true);
          setIsSeccionNoticias(false);
          setIsSeccionTabla(false);
        }
        break;
      case 2:
        {
          setIsSeccionTabla(true);
          setIsSeccionFixture(false);
          setIsSeccionNoticias(false);
        }
        break;

      case 3:
        {
          setIsSeccionNoticias(true);
          setIsSeccionTabla(false);
          setIsSeccionFixture(false);
        }
        break;
      default:
        console.log('default');
    }
  };
  useEffect(() => {
    setIsSeccionNoticias(true);
    return () => {
      setIsSeccionNoticias(true);
    };
  }, []);
  return (
    <div className="CP-PaginaSecciones">
      <SubMenuNoticias obtenerSeccion={obtenerSeccion} />

      <div className="CI-Cuerpo-PaginaSecciones">
        {isSeccionNoticias && (
          <div className="componente-SeccionNoticias">
            <SeccionNoticias></SeccionNoticias>
          </div>
        )}
        {isSeccionFixture && (
          <div className="fondo-Tabla-Fixture">
            <SeccionFixture></SeccionFixture>
          </div>
        )}
        {isSeccionTabla && (
          <div className="fondo-Tabla-Fixture">
            <SeccionTablaDePosiciones></SeccionTablaDePosiciones>
          </div>
        )}
      </div>
    </div>
  );
};
export default PaginaSecciones;
