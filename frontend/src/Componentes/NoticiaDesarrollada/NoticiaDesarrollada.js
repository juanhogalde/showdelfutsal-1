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
//TODO: quitar este lote de prueba y asignarle objeto vacio {}
const datosDePueba = {
  titulo: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
  copete:
    'Los juveniles ganaron 3-1, con parciales de 25-21, 23-25, 25-19, 25-21. Este miércoles Argentina se medirá con República Checa.',
  cuerpo: `El seleccionado argentino, con los jugadores de UPCN Manuel Armoa, Lucas Ibazeta y Agustín Gallardo, masculino Sub 21 de vóleibol le ganó hoy a Bélgica por 3 a 1 (25-21, 23-25, 25-19 y 25-21) por la segunda fase del Mundial de la categoría, con sede conjunta en Italia y Bulgaria.

  En Cagliari, por el grupo E, el equipo dirigido por Martín López se impuso ante Bélgica (que lo había superado en el cierre de la primera ronda) con 19 puntos de Manuel Armoa Morel, máximo anotador, y 17 de Valentino Vidoni.
  
  Los argentinos, que ayer perdieron 3-0 (25-22, 26-24 y 25-20) ante Italia, cerrarán mañana -a las 11, hora de nuestro país- esta segunda etapa frente a República Checa, en el partido que definirá a los semifinalistas del Mundial.
  
  Los checos vencieron 3-2 a Bélgica en la primera fecha de la zona E y más tarde enfrentarán a Italia. Los dos primeros de este grupo se clasificarán a semifinales.`,
  epigrafe: 'Los 3 jugadores de UPCN y la selección de vóley se tomaron revancha ante Bélgica',
  categoria: 1,
  subcategoria: 2,
  fecha: '28/9/2021',
};
const NoticiaDesarrollada = ({datosModelado = datosDePueba}) => {
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
      <div className="CI-Imagen-Epigrafe">
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
      <div className="CI-Cuerpo">
        <h4 className="Cuerpo-Noticia-Desarrollada">
          {datosModelado.cuerpo ? datosModelado.cuerpo : 'sin cuerpo'}
        </h4>
      </div>
    </div>
  );
};

export default NoticiaDesarrollada;
