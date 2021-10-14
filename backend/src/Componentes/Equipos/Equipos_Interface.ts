import {Document} from 'mongoose';

export default interface IEquipos extends Document {
  _id: string;
  nombreClub: string;
  escudo: string;
  idCategorias: [string];
  idSubcategorias: [string];
}
