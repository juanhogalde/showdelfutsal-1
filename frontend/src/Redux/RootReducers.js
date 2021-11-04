import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
import sotreLogueo from './UsuarioLogueado/ReducerUsuarioLogueado';
import sotreDatosIniciales from './DatosInciales/ReducerDatosIniciales';
const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
  sotreLogueo,
  sotreDatosIniciales,
});
export default RootReducers;
