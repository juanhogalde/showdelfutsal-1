import React, {useState} from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useDispatch, useSelector} from 'react-redux';
import {
  guardarNoticia_accion,
  volverPorDefecto_accion,
} from '../../Redux/Noticias/AccionesNoticias';
import Alertas from '../Alertas/Alertas';
import {useHistory} from 'react-router';

const NuevaNoticia = () => {
  const history = useHistory();
  const {isNoticiaGurdada} = useSelector(state => state.storeNoticias);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [categoria, setCategoria] = useState(null);
  const [subCategoria, setSubCategoria] = useState(null);
  const [datosCargados, setdatosCargados] = useState({});
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    setdatosCargados({...datosCargados, [name]: value});
  };

  const GuardarNuevaNoticia = () => {
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
      };
      dispatch(guardarNoticia_accion(datosNoticias, datosCargados));
    } else {
      alert('atencion no ingreso imagen');
    }
  };

  const RespuestaDeAlertaVolverPorDefecto = () => {
    dispatch(volverPorDefecto_accion());
    history.push('/Noticias');
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
      {/* {isImagenNoticiaNueva.isMostrar && <Cargando />} */}
      <TextAreaLowa
        name="cuerpo"
        placeholder="Escriba el cuerpo de la noticia"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></TextAreaLowa>
      <BotonLowa onClick={() => GuardarNuevaNoticia()} tituloboton={'Guardar Noticia'}></BotonLowa>
      <Alertas
        mostrarSweet={isNoticiaGurdada.isMostrar}
        tipoDeSweet={isNoticiaGurdada.tipo}
        subtitulo={isNoticiaGurdada.mensaje}
      />
      <Alertas
        mostrarSweet={isNoticiaGurdada.isExito || isNoticiaGurdada.isError}
        subtitulo={isNoticiaGurdada.mensaje}
        tipoDeSweet={isNoticiaGurdada.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
    </div>
  );
};
export default NuevaNoticia;
