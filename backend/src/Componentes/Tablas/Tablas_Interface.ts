import {Document, ObjectId} from 'mongoose';

export default interface ITablas extends Document {
  _id: string;
  idEquipos: Array<ObjectId>;
  idCampeonato: string;
  zona: string;
  tipoZona: number;
  comentarios: Array<object>;
  division: number;
}
