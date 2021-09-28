import React from 'react';
import EtiquetaCategoria from '../EtiquetaCategoria/EtiquetaCategoria';
import './NoticiasMiniatura.css';
/**
 * Recibe como parametros
 ** datosModelado que es un objeto con los siguiente atributo:
 ** categoria:int , subcategoria:int, fecha:string,
 **fuenteImg:string, isSobreImagen:boolean, copete:string
 **
 */
const NoticiasMiniatura = ({datosModelado = {isSobreImagen: false}}) => {
  return (
    <div className="CP-Noticias">
      <div className="CI-Cabecera">
        <div className="CI-Categoria">
          <EtiquetaCategoria categoriaId={datosModelado.categoria ? datosModelado.categoria : 0} />
        </div>
        <div className="CI-SubCategoria-Fecha">
          <EtiquetaCategoria
            subcategoria={true}
            categoriaId={datosModelado.subcategoria ? datosModelado.subcategoria : 0}
          />
          <p className="fecha-NoticiaMiniatura">{datosModelado.fecha ? datosModelado.fecha : ''}</p>
        </div>
      </div>
      <div className="CI-Cuerpo">
        <img
          src={
            datosModelado.fuenteImg
              ? datosModelado.fuenteImg
              : 'https://images.ole.com.ar/2021/09/27/cccLb7fpG_320x210__1.jpg'
          }
          className="d-inline-block align-top"
          alt=""
        />
        <div className="CI-Titulo-Copoete">
          <h1 className={datosModelado.isSobreImagen ? 'sobreImagen' : 'bajoImagen'}>
            {datosModelado.titulo ? datosModelado.titulo : 'Sin titulo'}
          </h1>
          <h4 className="Copete">{datosModelado.copete ? datosModelado.copete : 'sin copete'}</h4>
        </div>
      </div>
    </div>
  );
};

export default NoticiasMiniatura;
