import React from 'react';
import '../EtiquetaCategoria/EtiquetaCategoria.css';
import {useSelector} from 'react-redux';
/**
 * Recibe como parametros
 ** subcategoria indica si mostrar subcategorias encontrada - true
 ** categoriaId:int - id de la categoria o subcategoria a buscar
 **
 */
const EtiquetaCategoria = ({subcategoria = false, categoriaId = 0}) => {
  const categoriaSeleccionada = useSelector(state =>
    state.sotreDatosIniciales.categorias.find(element => element.value === categoriaId)
  );
  const subcategoriaSeleccionada = useSelector(state =>
    state.sotreDatosIniciales.subcategorias.find(element => element.value === categoriaId)
  );
  return (
    <div>
      {subcategoria ? (
        <p>{subcategoriaSeleccionada ? subcategoriaSeleccionada.label : 'sin subcategoria'}</p>
      ) : (
        <p>{categoriaSeleccionada ? categoriaSeleccionada.label : 'sin categoria'}</p>
      )}
    </div>
  );
};

export default EtiquetaCategoria;
