import React, {useState} from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useDispatch, useSelector} from 'react-redux';
import {agregarNoticia, guardarNoticia_accion} from '../../Redux/Noticias/AccionesNoticias';

const NuevaNoticia = ({isEditarNoticia = false}) => {
  const {isImagenNoticiaNueva, isNoticiaGurdada} = useSelector(state => state.storeNoticias);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [categoria, setCategoria] = useState(null);
  const [subCategoria, setSubCategoria] = useState(null);
  const [datosCargados, setdatosCargados] = useState({});
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    console.log(name);
    setdatosCargados({...datosCargados, [name]: value});
    if (name === 'imagen') {
      dispatch(agregarNoticia(value));
    }
  };

  const GuardarNuevaNoticia = () => {
    console.log(datosCargados);
    console.log(categoria);
    console.log(subCategoria);
    if (datosCargados.imagen) {
      var datosNoticias = {
        fecha: new Date(),
        titulo: datosCargados.titulo ? datosCargados.titulo : '',
        copete: datosCargados.copete ? datosCargados.copete : '',
        cuerpo: datosCargados.cuerpo ? datosCargados.cuerpo : '',
        idCategoria: categoria ? categoria.value : '',
        idSubcategoria: subCategoria ? subCategoria.value : '',
        keyCategoria: categoria ? categoria.key : '',
        keySubcategoria: subCategoria ? subCategoria.key : '',
        idImagen: isImagenNoticiaNueva.imagen._id,
      };
      dispatch(guardarNoticia_accion(datosNoticias));
    } else {
      alert('atencion no ingreso imagen');
    }
  };

  return (
    <div className="CP-NuevaNoticia">
      <Selector
        name="categoria"
        placeholder="Seleccione Categoría"
        selectorConIcono={<BsPlusCircle />}
        options={categorias ? categorias : []}
        onChange={setCategoria}
      ></Selector>
      <Selector
        name="subcategoria"
        placeholder="Buscar Subcategoría"
        selectorConIcono={<BsSearch />}
        options={subcategorias ? subcategorias : []}
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
      {isImagenNoticiaNueva.isMostrar && <h6>subiendo imagen</h6>}
      <TextAreaLowa
        name="cuerpo"
        placeholder="Escriba el cuerpo de la noticia"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></TextAreaLowa>
      <BotonLowa onClick={() => GuardarNuevaNoticia()} tituloboton={'Guardar Noticia'}></BotonLowa>
      {isNoticiaGurdada.isMostrar && <h6>Guardando Noticia</h6>}
      {isNoticiaGurdada.isExito && <h6>Noticia Guardada</h6>}
      {isNoticiaGurdada.tipo === 'error' && <h6>Error al guardar noticia</h6>}
    </div>
  );
};
export default NuevaNoticia;
