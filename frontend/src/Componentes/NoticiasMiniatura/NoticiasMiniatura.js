import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import './NoticiasMiniatura.css';
import marca from '../../Static/Cargando.gif';
import {urlImagenes} from '../../urlImagenes';
/**
 * Recibe como parametros
 ** datosModelado que es un objeto con los siguiente atributo:
 ** categoria:int , subcategoria:int, fecha:string,
 **fuenteImg:string, isSobreImagen:boolean, copete:string
 **
 */
//TODO: luego de probar quitar datosDePrueba

const NoticiasMiniatura = ({
  datosModelado = {},
  isSobreImagen = false,
  isSeccionNoticias = false,
  isParaSlider = false,
  isConCopete = false,
}) => {
  return (
    <div
      id="slide"
      className={`${
        isParaSlider ? 'CP-Noticias-NoticiaMiniatura paddingSlider' : 'CP-Noticias-NoticiaMiniatura'
      }`}
    >
      <div className="cuerpo-NoticiaMiniatura">
        {isSeccionNoticias && (
          <div className="CI-Cabecera-NoticiaMiniatura">
            {isSobreImagen && (
              <div className="CI-Categoria-NoticiaMiniatura-Principal">
                <EtiquetaCategoria
                  categoriaId={datosModelado.idCategoria ? datosModelado.idCategoria : 0}
                />
              </div>
            )}
            <div className="CI-SubCategoria-Fecha-NoticiaMiniatura">
              <EtiquetaCategoria
                subcategoria={true}
                categoriaId={datosModelado.idSubcategoria ? datosModelado.idSubcategoria : 0}
              />
              <p className="fecha-NoticiaMiniatura-NoticiaMiniatura">
                {datosModelado.fecha ? datosModelado.fecha.substr(0, 10) : 'dd/mm/aaaa'}
              </p>
            </div>
          </div>
        )}

        <div className="CI-Cuerpo-NoticiaMiniatura">
          <div
            className={`${
              isSobreImagen
                ? 'contenedor-Imagen-NoticiaMiniatura-Principal'
                : 'contenedor-Imagen-NoticiaMiniatura'
            }`}
          >
            <img
              className={`${
                isSobreImagen ? 'imagenNoticia-Miniatura-Principal' : 'imagenNoticia-Miniatura'
              }`}
              src={
                JSON.stringify(datosModelado) !== '{}'
                  ? urlImagenes + datosModelado.idImagen[0].fuente
                  : marca
              }
              alt="imagen"
            />
            {!isSobreImagen && (
              <div className="CI-Categoria-NoticiaMiniatura">
                <EtiquetaCategoria
                  categoriaId={datosModelado.idCategoria ? datosModelado.idCategoria : 0}
                />
              </div>
            )}
            {isSobreImagen && (
              <h5 className={'sobreImagen-NoticiaMiniatura'}>
                {datosModelado.titulo
                  ? `${datosModelado.titulo.substring(0, 100)} ...`
                  : 'Sin titulo'}
              </h5>
            )}
          </div>
          {!isSobreImagen && (
            <h5>
              {datosModelado.titulo ? `${datosModelado.titulo.substring(0, 90)}...` : 'Sin titulo'}
            </h5>
          )}

          {isConCopete && (
            <p className="Copete-NoticiaMiniatura">
              {datosModelado.copete ? datosModelado.copete.substring(0, 60) : 'sin copete'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoticiasMiniatura;
