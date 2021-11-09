import React, {useState} from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';

const NuevaNoticia = ({isEditarNoticia = false}) => {
  const [categoria, setCategoria] = useState(null);
  const [subCategoria, setSubCategoria] = useState(null);
  const escucharCambios = (name, value) => {
    console.log(name);
    console.log(value);
  };
  /* Datos de Selector */
  console.log(categoria);
  console.log(subCategoria);

  return (
    <div className="CP-NuevaNoticia">
      <Selector
        name="categoria"
        placeholder="Seleccione Categoría"
        selectorConIcono={<BsPlusCircle />}
        onChange={setCategoria}
      ></Selector>
      <Selector
        name="subcategoria"
        placeholder="Buscar Subcategoría"
        selectorConIcono={<BsSearch />}
        onChange={setSubCategoria}
      ></Selector>
      <InputLowa
        name="titulo"
        placeholder="Ingrese Título..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="copete"
        placeholder="Ingrese Copete..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        type="file"
        name="imagen"
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      <TextAreaLowa
        name="cuerpo"
        placeholder="Escriba el cuerpo de la noticia"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></TextAreaLowa>
      <BotonLowa tituloboton={'Guardar Noticia'}></BotonLowa>
    </div>
  );
};
export default NuevaNoticia;
