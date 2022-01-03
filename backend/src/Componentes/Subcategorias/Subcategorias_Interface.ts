import {Document} from 'mongoose';
import ICategorias from '../Categorias/Categorias_Interface';

export default interface ISubcategorias extends Document {
  _id: string;
  nombreSubcategoria: string;
  keySubcategoria: number;
  idCategoria: ICategorias['_id'];
}
