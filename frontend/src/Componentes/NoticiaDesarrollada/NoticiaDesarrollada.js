import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import '../NoticiaDesarrollada/NoticiaDesarrollada.css';
/**
 * Recibe como parametros
 ** datosModelado que es un objeto con los siguiente atributo:
 ** categoria: int
 ** titulo: string
 ** subcategoria: int
 ** autor: string
 ** fecha: date
 ** copete: string
 ** fuenteImg: string
 ** epigrafe: string
 ** cuerpo: string
 **/
const NoticiaDesarrollada = ({datosModelado = {}}) => {
  return (
    <div className="CP-Noticias-Desarrollada">
      <div className="CI-Cabecera-Noticia-Desarrollada">
        <div className="Categoria-Titulo-Noticia-Desarrollada">
          <span className="Etiqueta-Categorias-Noticia-Desarrollada">
            <EtiquetaCategoria
              categoriaId={datosModelado.categoria ? datosModelado.categoria : 0}
            />
          </span>
          <h1 className="Titulo-Noticia-Desarrollada">
            {datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'}
          </h1>
        </div>

        <EtiquetaCategoria
          subcategoria={true}
          categoriaId={datosModelado.subcategoria ? datosModelado.subcategoria : 0}
        />

        <div className="CI-Autor-Fecha-Noticia-Desarrollada">
          <h4 className="Autor-Noticia-Desarrollada">
            {datosModelado.autor ? datosModelado.autor : 'sin autor'}
          </h4>
          <p className="fecha-Noticia-Desarrollada">
            {datosModelado.fecha ? datosModelado.fecha : 'dd/mm/aaaa'}
          </p>
        </div>
        <h4 className="Copete-Noticia-Desarrollada">
          {datosModelado.copete ? datosModelado.copete : 'sin copete'}
        </h4>
      </div>
      <div className="CI-Imagen-Epigrafe-Noticia-Desarrollada">
        <img
          src={
            datosModelado.fuenteImg
              ? datosModelado.fuenteImg
              : 'https://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'
          }
          alt="imagen"
        />
        <h6 className="Epigrafe-NoticiaDesarrollada">
          {datosModelado.epigrafe ? datosModelado.epigrafe : 'sin epigrafe'}
        </h6>
      </div>
      <div className="CI-Cuerpo-Noticia-Desarrollada">
        <h4 className="Cuerpo-Noticia-Desarrollada">
          {datosModelado.cuerpo ? datosModelado.cuerpo : 'sin cuerpo'}
        </h4>
      </div>
    </div>
  );
};

export default NoticiaDesarrollada;