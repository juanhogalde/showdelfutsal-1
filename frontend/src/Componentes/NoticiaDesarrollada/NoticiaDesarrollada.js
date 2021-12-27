import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import '../NoticiaDesarrollada/NoticiaDesarrollada.css';
import {urlImagenes} from '../../urlImagenes';
import formatearFecha from '../../ModulosExternos/FormatearFecha';
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
  /* const formatearFecha = formatearFecha(); */
  return (
    <div className="CP-Noticias-Desarrollada">
      <div className="CI-Cabecera-Noticia-Desarrollada">
        <div className="Categoria-Titulo-Noticia-Desarrollada">
          <div className="Fondo-Categorias-Noticia-Desarrollada">
            <div className="Etiqueta-Categorias-Noticia-Desarrollada ">
              <EtiquetaCategoria
                categoriaId={datosModelado.idCategoria ? datosModelado.idCategoria : 0}
              />
            </div>
          </div>
          <h4 className="Titulo-Noticia-Desarrollada">
            {datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'}
          </h4>
        </div>

        <EtiquetaCategoria
          subcategoria={true}
          categoriaId={datosModelado.idSubcategoria ? datosModelado.idSubcategoria : 0}
        />

        <div className="CI-Autor-Fecha-Noticia-Desarrollada">
          <h5 className="Autor-Noticia-Desarrollada">
            {datosModelado.autor ? datosModelado.autor : '-'}
          </h5>
          <p className="fecha-Noticia-Desarrollada">
            {/* {datosModelado.fecha ? datosModelado.fecha : 'dd/mm/aaaa'} */}
            {`${formatearFecha(datosModelado.fecha, 'fecha')} ${formatearFecha(
              datosModelado.fecha,
              'hora'
            )}`}
          </p>
        </div>
        <h4 className="Copete-Noticia-Desarrollada">
          {datosModelado.copete ? datosModelado.copete : 'sin copete'}
        </h4>
      </div>
      <div className="CI-Imagen-Epigrafe-Noticia-Desarrollada">
        <img
          src={
            datosModelado.idImagen
              ? urlImagenes + datosModelado.idImagen[0].fuente
              : 'https://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'
          }
          className="imagen-NoticiaDesarrollada"
          alt="imagen"
        />
        <h6 className="Epigrafe-NoticiaDesarrollada">
          {datosModelado.epigrafe ? datosModelado.epigrafe : '-'}
        </h6>
      </div>
      <div className="CI-Cuerpo-Noticia-Desarrollada">
        <h5 className="Cuerpo-Noticia-Desarrollada">
          {datosModelado.cuerpo ? datosModelado.cuerpo : 'sin cuerpo'}
        </h5>
      </div>
    </div>
  );
};

export default NoticiaDesarrollada;
