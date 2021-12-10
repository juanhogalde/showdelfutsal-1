import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
import storeLogueo from './UsuarioLogueado/ReducerUsuarioLogueado';
import sotreDatosIniciales from './DatosInciales/ReducerDatosIniciales';
import storeImagenes from './Imagenes/ReducerImagenes';
import storePartidos from './Partidos/ReducerPartidos';
import storePublicidades from './Publicidades/ReducerPublicidades';
import storeGalerias from './Galerias/ReducerGalerias';

const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
  storeLogueo,
  sotreDatosIniciales,
  storeImagenes,
  storePartidos,
  storePublicidades,
  storeGalerias,
});
export default RootReducers;
