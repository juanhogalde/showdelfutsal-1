import {Document} from 'mongoose';

export default interface ICampeonatos extends Document {
  _id: string;
  tituloCampeonato: string;
  fechaInicio: Date;
  fechaFin: Date;
  idCategoria: string;
  idSubcategoria: Array<string>;
}
