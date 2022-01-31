import React, {useEffect, useLayoutEffect, useState} from 'react';
import './PaginaSecciones.css';
import SeccionNoticias from '../SeccionNoticias/SeccionNoticias';
import SeccionFixture from '../SeccionFixture/SeccionFixture';
import SeccionTablaDePosiciones from '../SeccionTablaDePosiciones/SeccionTablaDePosiciones';
import SubMenuSecciones from '../SubMenuSecciones/SubMenuSecciones';
import {useParams} from 'react-router';
import PieDepagina from '../PieDePagina/PieDepagina';
import {useSelector} from 'react-redux';

const PaginaSecciones = () => {
  let {id} = useParams();
  console.log(id);
  const {categoriaSeleccionada, subcategorias} = useSelector(state => state.sotreDatosIniciales);

  const [categoria, setCategoria] = useState(null);
  const [isSeccionNoticias, setIsSeccionNoticias] = useState(false);
  const [isSeccionFixture, setIsSeccionFixture] = useState(false);
  const [isSeccionTabla, setIsSeccionTabla] = useState(false);
  useLayoutEffect(() => {
    setCategoria(categoriaSeleccionada);
  }, [categoriaSeleccionada]);
  const obtenerSeccion = respuesta => {
    switch (respuesta) {
      case 1:
        setIsSeccionFixture(true);
        setIsSeccionNoticias(false);
        setIsSeccionTabla(false);
        break;
      case 2:
        setIsSeccionTabla(true);
        setIsSeccionFixture(false);
        setIsSeccionNoticias(false);
        break;

      case 3:
        setIsSeccionNoticias(true);
        setIsSeccionTabla(false);
        setIsSeccionFixture(false);
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
      <SubMenuSecciones
        obtenerSeccion={obtenerSeccion}
        subcategoria={subcategorias.find(element => element.key === parseInt(id))}
      />

      <div className="CI-Cuerpo-PaginaSecciones">
        {isSeccionNoticias && (
          <div className="componente-SeccionNoticias">
            <SeccionNoticias
              categoriaNoticia={categoria}
              subcategoriaNoticia={id}
              isTitulo={false}
            ></SeccionNoticias>
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
      <PieDepagina></PieDepagina>
    </div>
  );
};
export default PaginaSecciones;
