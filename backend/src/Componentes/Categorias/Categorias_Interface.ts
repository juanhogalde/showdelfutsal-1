import {Document} from 'mongoose';

export default interface ICategorias extends Document {
  _id: string;
  nombreCategoria: string;
  keyCategoria: number;
  // idSubcategoria: Array<string>;
}
