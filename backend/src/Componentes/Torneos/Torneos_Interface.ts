import {Document} from 'mongoose';
import ICategorias from '../Categorias/Categorias_Interface';
import ISubcategorias from '../Subcategorias/Subcategorias_Interface';

export default interface ITorneos extends Document {
  _id: string;
  tituloTorneo: string;
  fechaInicio: Date;
  fechaFin: Date;
  idCategoria: Array<string>;
  idSubcategoria: Array<string>;
  tipoTorneo: number;
}
