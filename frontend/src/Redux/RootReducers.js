import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
});
export default RootReducers;
