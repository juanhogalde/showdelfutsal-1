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
    state.storePrueba.categorias.find(element => element._id === categoriaId)
  );
  const subcategoriaSeleccionada = useSelector(state =>
    state.storePrueba.subCategorias.find(element => element._id === categoriaId)
  );
  return (
    <div>
      {subcategoria ? (
        <p className="textoEtiquetaCategoria ">
          {subcategoriaSeleccionada ? subcategoriaSeleccionada.nombreCategoria : 'sin subcategoria'}
        </p>
      ) : (
        <p className="textoEtiquetaCategoria ">
          {categoriaSeleccionada ? categoriaSeleccionada.nombreCategoria : 'sin categoria'}
        </p>
      )}
    </div>
  );
};

export default EtiquetaCategoria;
