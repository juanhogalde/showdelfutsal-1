import React from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
const NuevaNoticia = () => {
  const funcionParaIcono = () => {
    console.log('EJECUTO');
  };
  return (
    <div className="CP-NuevaNoticia">
      <Selector placeholder="Seleccione Categoría"></Selector>
      <Selector placeholder="Buscar Subcategoría"></Selector>
      <InputLowa placeholder="Ingrese Título..."></InputLowa>
      <InputLowa placeholder="Ingrese Copete..."></InputLowa>
      <InputLowa
        type="file"
        placeholder="Ingrese Imágen"
        inputConIcono={<BsFillArrowDownCircleFill />}
        funcionDeIcono={funcionParaIcono}
      ></InputLowa>

      <TextAreaLowa placeholder="Escriba el cuerpo de la noticia"></TextAreaLowa>
    </div>
  );
};
export default NuevaNoticia;
