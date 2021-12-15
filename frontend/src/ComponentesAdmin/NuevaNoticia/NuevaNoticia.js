import React, {useState} from 'react';
import './NuevaNoticia.css';
import Selector from '../Selector/Selector';
import TextAreaLowa from '../TextAreaLowa/TextAreaLowa';
import InputLowa from '../InputLowa/InputLowa';
import {BsSearch, BsPlusCircle} from 'react-icons/bs';
import BotonLowa from '../BotonLowa/BotonLowa';
import {useDispatch, useSelector} from 'react-redux';
import {
  editarNoticia_accion,
  guardarNoticia_accion,
  volverPorDefecto_accion,
} from '../../Redux/Noticias/AccionesNoticias';
import Alertas from '../Alertas/Alertas';
import {useHistory} from 'react-router';
import {useLayoutEffect} from 'react';
import {urlImagenes} from '../../urlImagenes';

const NuevaNoticia = ({tituloBoton = 'Guardar', isNueva = true, isConsulta = false}) => {
  const history = useHistory();
  const {isNoticiaGurdada, noticiaSeleccionada} = useSelector(state => state.storeNoticias);
  const {categorias, subcategorias} = useSelector(state => state.sotreDatosIniciales);
  const [datosRequeridos, setDatosRequeridos] = useState(false);
  const [categoria, setCategoria] = useState();
  const [subCategoria, setSubCategoria] = useState();
  const [datosCargados, setdatosCargados] = useState({});
  const dispatch = useDispatch();
  const escucharCambios = (name, value) => {
    setdatosCargados({...datosCargados, [name]: value});
  };
  useLayoutEffect(() => {
    if (!isNueva) {
      setdatosCargados(noticiaSeleccionada);
      setCategoria(
        noticiaSeleccionada.idCategoria
          ? categorias.find(elemnt => elemnt.value === noticiaSeleccionada.idCategoria)
          : ''
      );
      setSubCategoria(
        noticiaSeleccionada.idSubcategoria
          ? subcategorias.find(elemnt => elemnt.value === noticiaSeleccionada.idSubcategoria)
          : ''
      );
    }
  }, [noticiaSeleccionada, setCategoria, setSubCategoria, isNueva, categorias, subcategorias]);
  const eventoGuardar = () => {
    if ((datosCargados.imagen || datosCargados.idImagen) && categoria && subCategoria) {
      var TresHoraMilisegundos = 1000 * 60 * 60 * 3;
      var fechaActual = new Date();
      var fechaMenosTresHoras = fechaActual.getTime() - TresHoraMilisegundos;
      var datosNoticias = {
        fecha: new Date(fechaMenosTresHoras),
        titulo: datosCargados.titulo ? datosCargados.titulo : '',
        copete: datosCargados.copete ? datosCargados.copete : '',
        cuerpo: datosCargados.cuerpo ? datosCargados.cuerpo : '',
        idCategoria: categoria ? categoria.value : '',
        idSubcategoria: subCategoria ? subCategoria.value : '',
        keyCategoria: categoria ? categoria.key : '',
        keySubcategoria: subCategoria ? subCategoria.key : '',
        isDestacada: datosCargados.isDestacada ? datosCargados.isDestacada : false,
      };
      if (isNueva) {
        dispatch(guardarNoticia_accion(datosNoticias, datosCargados));
      } else {
        dispatch(editarNoticia_accion({...datosNoticias, _id: datosCargados._id}, datosCargados));
      }
    } else {
      setDatosRequeridos(true);
    }
  };
  const RespuestaDeFaltaDatosRequeridos = () => {
    setDatosRequeridos(false);
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
        opcionSeleccionada={categoria}
        isDisabled={isConsulta}
        selectorConIcono={<BsPlusCircle />}
        options={categorias ? categorias : []}
        onChange={setCategoria}
      ></Selector>
      <Selector
        name="subcategoria"
        placeholder="Buscar Subcategoría"
        isDisabled={isConsulta}
        opcionSeleccionada={subCategoria}
        ocultarIconoLateral={isConsulta}
        selectorConIcono={<BsSearch />}
        options={subcategorias ? subcategorias : []}
        onChange={setSubCategoria}
      ></Selector>
      <InputLowa
        name="titulo"
        ocultarIconoLateral={isConsulta}
        disabled={isConsulta}
        placeholder="Ingrese Título..."
        value={datosCargados.titulo ? datosCargados.titulo : ''}
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        name="copete"
        disabled={isConsulta}
        ocultarIconoLateral={isConsulta}
        value={datosCargados.copete ? datosCargados.copete : ''}
        placeholder="Ingrese Copete..."
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></InputLowa>
      <InputLowa
        type="file"
        disabled={isConsulta}
        ocultarIconoLateral={isConsulta}
        name="imagen"
        src={datosCargados.idImagen ? urlImagenes + datosCargados.idImagen[0].fuente : ''}
        onChange={(name, value) => escucharCambios(name, value)}
      ></InputLowa>
      {/* {isImagenNoticiaNueva.isMostrar && <Cargando />} */}
      <TextAreaLowa
        name="cuerpo"
        readOnly={isConsulta}
        value={datosCargados.cuerpo ? datosCargados.cuerpo : ''}
        placeholder="Escriba el cuerpo de la noticia"
        onChange={e => escucharCambios(e.target.name, e.target.value)}
      ></TextAreaLowa>
      {!isConsulta && (
        <BotonLowa onClick={() => eventoGuardar()} tituloboton={tituloBoton}></BotonLowa>
      )}
      <Alertas
        mostrarSweet={isNoticiaGurdada.isMostrar}
        tipoDeSweet={isNoticiaGurdada.tipo}
        subtitulo={isNoticiaGurdada.mensaje}
      />
      <Alertas
        mostrarSweet={datosRequeridos}
        tipoDeSweet="warning"
        subtitulo="Faltan datos requeridos"
        RespuestaDeSweet={RespuestaDeFaltaDatosRequeridos}
      />
      <Alertas
        mostrarSweet={
          isNoticiaGurdada.isExito || isNoticiaGurdada.isError || isNoticiaGurdada.isEditada
        }
        subtitulo={isNoticiaGurdada.mensaje}
        tipoDeSweet={isNoticiaGurdada.tipo}
        RespuestaDeSweet={RespuestaDeAlertaVolverPorDefecto}
      />
    </div>
  );
};
export default NuevaNoticia;
