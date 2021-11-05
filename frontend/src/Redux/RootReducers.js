import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
import storeLogueo from './UsuarioLogueado/ReducerUsuarioLogueado';
import sotreDatosIniciales from './DatosInciales/ReducerDatosIniciales';
const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
  storeLogueo,
  sotreDatosIniciales,
});
export default RootReducers;
