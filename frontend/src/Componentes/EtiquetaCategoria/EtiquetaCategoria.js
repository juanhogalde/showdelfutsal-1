import React from 'react';
import '../EtiquetaCategoria/EtiquetaCategoria.css';
import {useSelector} from 'react-redux';
/**
 * Recibe como parametros
 ** subcategoria indica si mostrar subcategorias encontrada - true
 ** categoriaId:int - id de la categoria o subcategoria a buscar
 **
 */
const EtiquetaCategoria = ({subcategoria = false, categoriaId = 0, buscarPorKey = false}) => {
  const categoriaSeleccionada = useSelector(state =>
    buscarPorKey
      ? state.sotreDatosIniciales.categorias.find(element => element.key === categoriaId)
      : state.sotreDatosIniciales.categorias.find(element => element.value === categoriaId)
  );
  const subcategoriaSeleccionada = useSelector(state =>
    buscarPorKey
      ? state.sotreDatosIniciales.subcategorias.find(element => element.key === categoriaId)
      : state.sotreDatosIniciales.subcategorias.find(element => element.value === categoriaId)
  );
  return (
    <div className="CP-EtiquetaCategoria">
      {subcategoria ? (
        <p>{subcategoriaSeleccionada ? subcategoriaSeleccionada.label : 'sin subcategoria'}</p>
      ) : (
        <p>{categoriaSeleccionada ? categoriaSeleccionada.label : 'sin categoria'}</p>
      )}
    </div>
  );
};

export default EtiquetaCategoria;
