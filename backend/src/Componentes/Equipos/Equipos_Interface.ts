import {Document} from 'mongoose';

export default interface IEquipos extends Document {
  nombreClub: string;
  escudo: string;
  keySubcategorias: Array<string>;
  idSubcategorias: Array<string>;
}
