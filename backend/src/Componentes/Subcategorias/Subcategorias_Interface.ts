import {Document} from 'mongoose';

export default interface ISubcategorias extends Document {
  Subcategoria: string;
  keyCategoria: number;
  idCategoria: string;
}
