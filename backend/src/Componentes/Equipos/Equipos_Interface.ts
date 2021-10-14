import {Document} from 'mongoose';

export default interface IEquipos extends Document {
  nombreClub: string;
  escudo: string;
  idCategoria: [string];
  idSubcategorias: [string];
}
