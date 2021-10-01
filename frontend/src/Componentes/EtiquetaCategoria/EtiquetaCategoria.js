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
    state.storePrueba.categorias.find(element => element.key_categoria === categoriaId)
  );
  const subcategoriaSeleccionada = useSelector(state =>
    state.storePrueba.subcategorias.find(element => element.key_subcategoria === categoriaId)
  );
  return (
    <div>
      {subcategoria ? (
        <p className="textoEtiquetaCategoria ">
          {subcategoriaSeleccionada ? subcategoriaSeleccionada.subcategoria : 'sin subcategoria'}
        </p>
      ) : (
        <p className="textoEtiquetaCategoria ">
          {categoriaSeleccionada ? categoriaSeleccionada.categoria : 'sin categoria'}
        </p>
      )}
    </div>
  );
};

export default EtiquetaCategoria;
