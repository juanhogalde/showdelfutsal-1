import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import './NoticiasMiniatura.css';
import imagenNoticia from '../../Static/Img/noticia.jfif';
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
}) => {
  console.log(isSeccionNoticias);
  return (
    <div className="CP-Noticias-NoticiaMiniatura">
      <div className="cuerpo-NoticiaMiniatura">
        {isSeccionNoticias && (
          <div className="CI-Cabecera-NoticiaMiniatura">
            {isSobreImagen && (
              <div className="CI-Categoria-NoticiaMiniatura-Principal">
                <EtiquetaCategoria
                  categoriaId={datosModelado.categoria ? datosModelado.categoria : 0}
                />
              </div>
            )}
            <div className="CI-SubCategoria-Fecha-NoticiaMiniatura">
              <EtiquetaCategoria
                subcategoria={true}
                categoriaId={datosModelado.subcategoria ? datosModelado.subcategoria : 0}
              />
              <p className="fecha-NoticiaMiniatura-NoticiaMiniatura">
                {datosModelado.fecha ? datosModelado.fecha : 'dd/mm/aaaa'}
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
              src={datosModelado.fuenteImg ? datosModelado.fuenteImg : imagenNoticia}
              alt="imagen"
            />
            {!isSobreImagen && (
              <div className="CI-Categoria-NoticiaMiniatura">
                <EtiquetaCategoria
                  categoriaId={datosModelado.categoria ? datosModelado.categoria : 0}
                />
              </div>
            )}
            {isSobreImagen && (
              <p className={'sobreImagen-NoticiaMiniatura m-0'}>
                {datosModelado.titulo
                  ? `${datosModelado.titulo.substring(0, 100)} ...`
                  : 'Sin titulo largo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
              </p>
            )}
          </div>
          {!isSobreImagen && (
            <p className={'m-0 titulo-NoticiaMiniatura'}>
              {datosModelado.titulo
                ? `${datosModelado.titulo.substring(0, 90)}...`
                : 'Sin titulo largo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
            </p>
          )}

          {/* <h4 className="Copete-NoticiaMiniatura">
            {datosModelado.copete ? datosModelado.copete : 'sin copete'}
          </h4> */}
        </div>
      </div>
    </div>
  );
};

export default NoticiasMiniatura;
