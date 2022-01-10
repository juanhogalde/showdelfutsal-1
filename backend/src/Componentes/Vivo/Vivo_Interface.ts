import {Document} from 'mongoose';
export default interface IVivo extends Document {
  urlVivo: string;
  urlChat: string;
  nombreVivo: string;
  isActivo: boolean;
  fechaCreacion: Date;
  fechaModificacion: Date;
}
