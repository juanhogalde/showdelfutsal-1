import {Document} from 'mongoose';

export default interface IPartidos extends Document {
  _id: string;
  equipoLocal: string;
  equipoVisitante: string;
  fechaPartido: Date;
  idEstadio: string;
  posicionFixture: number;
  comentarios: Array<object>;
  campeonato: string;
  idTabla: string;
  resultadoLocal: number;
  resultadoVisitante: number;
  penalesLocal: number;
  penalesVisitante: number;
}
