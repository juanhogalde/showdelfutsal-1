import {Document} from 'mongoose';

export default interface IEquipos extends Document {
  _id: string;
  nombreClub: string;
  escudo: string;
  keySubcategorias: Array<number>;
  idSubcategorias: Array<string>;
}
