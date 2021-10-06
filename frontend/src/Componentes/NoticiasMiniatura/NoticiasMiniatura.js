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

const NoticiasMiniatura = ({datosModelado = {}, isSobreImagen = false}) => {
  return (
    <div className="CP-Noticias-NoticiaMiniatura">
      {/* <div className="CI-Cabecera-NoticiaMiniatura">
        <div className="CI-Categoria-NoticiaMiniatura">
          <EtiquetaCategoria categoriaId={datosModelado.categoria ? datosModelado.categoria : 0} />
        </div>
        <div className="CI-SubCategoria-Fecha-NoticiaMiniatura">
          <EtiquetaCategoria
            subcategoria={true}
            categoriaId={datosModelado.subcategoria ? datosModelado.subcategoria : 0}
          />
          <p className="fecha-NoticiaMiniatura-NoticiaMiniatura">
            {datosModelado.fecha ? datosModelado.fecha : 'dd/mm/aaaa'}
          </p>
        </div>
      </div> */}
      <div className="CI-Cuerpo-NoticiaMiniatura">
        <img src={datosModelado.fuenteImg ? datosModelado.fuenteImg : imagenNoticia} alt="imagen" />

        <p className={isSobreImagen ? 'sobreImagen-NoticiaMiniatura' : ''}>
          {datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'}
        </p>
        {/* <h4 className="Copete-NoticiaMiniatura">
          {datosModelado.copete ? datosModelado.copete : 'sin copete'}
        </h4> */}
      </div>
    </div>
  );
};

export default NoticiasMiniatura;
