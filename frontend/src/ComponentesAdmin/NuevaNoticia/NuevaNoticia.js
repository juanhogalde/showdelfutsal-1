import React from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';

const NuevaNoticia = () => {
  return (
    <div className="CP-NuevaNoticia">
      <Selector placeholder="Seleccione Categoría"></Selector>
      <Selector placeholder="Buscar Subcategoría"></Selector>
      <InputLowa placeholder="Ingrese Título..."></InputLowa>
      <InputLowa placeholder="Ingrese Copete..."></InputLowa>
      <InputLowa type="file" placeholder="Ingrese Imágen"></InputLowa>

      <TextAreaLowa placeholder="Escriba el cuerpo de la noticia"></TextAreaLowa>
    </div>
  );
};
export default NuevaNoticia;
