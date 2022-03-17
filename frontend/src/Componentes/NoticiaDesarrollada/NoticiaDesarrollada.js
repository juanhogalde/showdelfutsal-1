import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import '../NoticiaDesarrollada/NoticiaDesarrollada.css';
import {server, dominio} from '../../Entorno';
import formatearFecha from '../../ModulosExternos/FormatearFecha';
import MetaTags from 'react-meta-tags';
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
      <MetaTags>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'}
        />
        <meta
          property="og:description"
          content={datosModelado.copete ? datosModelado.copete : 'Sin Descripción'}
        />
        <meta property="og:url" content={`https://${dominio}`} />
        <meta property="og:site_name" content="El Show del Futsal" />

        <meta
          property="og:image"
          content={
            datosModelado.idImagen
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            datosModelado.idImagen
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
          }
        />
        <meta property="og:image:width" content="670" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="El Show del Futsal" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={datosModelado.copete ? datosModelado.copete : 'Sin Descripción'} />
        <meta name="twitter:title" content={datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'} />
        <meta
          name="twitter:image"
          content={
            datosModelado.idImagen
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
          }
        />

        <meta
          property="og:image"
          content={
            datosModelado.idImagen
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            datosModelado.idImagen
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
          }
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </MetaTags>
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
              ? server + datosModelado.idImagen[0].fuente
              : 'https://' + dominio + '/LogoShowDelFutsal.png'
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
