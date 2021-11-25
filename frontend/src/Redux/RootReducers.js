import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
import storeLogueo from './UsuarioLogueado/ReducerUsuarioLogueado';
import sotreDatosIniciales from './DatosInciales/ReducerDatosIniciales';
import storeImagenes from './Imagenes/ReducerImagenes';
const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
  storeLogueo,
  sotreDatosIniciales,
  storeImagenes,
});
export default RootReducers;
