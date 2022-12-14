import {combineReducers} from 'redux';
import storePrueba from './Prueba/ReducerPrueba';
import storeNoticias from './Noticias/ReducerNoticias';
import storeLogueo from './UsuarioLogueado/ReducerUsuarioLogueado';
import sotreDatosIniciales from './DatosInciales/ReducerDatosIniciales';
import storeImagenes from './Imagenes/ReducerImagenes';
import storePartidos from './Partidos/ReducerPartidos';
import storePublicidades from './Publicidades/ReducerPublicidades';
import storeGalerias from './Galerias/ReducerGalerias';
import storeTorneos from './Torneos/ReducerTorneos';
import storeVivo from './Vivo/ReducerVivo';
import storeEquipos from './Equipos/ReducerEquipos';
import storeEstadios from './Estadios/ReducerEstadios';

const RootReducers = combineReducers({
  storePrueba,
  storeNoticias,
  storeLogueo,
  sotreDatosIniciales,
  storeImagenes,
  storePartidos,
  storePublicidades,
  storeGalerias,
  storeTorneos,
  storeVivo,
  storeEquipos,
  storeEstadios,
});
export default RootReducers;
