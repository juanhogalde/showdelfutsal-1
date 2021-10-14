import {Document} from 'mongoose';

export default interface ISubcategorias extends Document {
  _id: string;
  nombreSubcategoria: string;
  keySubcategoria: number;
}
