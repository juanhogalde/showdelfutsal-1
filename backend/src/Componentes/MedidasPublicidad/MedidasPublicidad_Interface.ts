import {Document} from 'mongoose';

export default interface IMedidasPublicidad extends Document {
  _id: string;
  ancho: number;
  alto: number;
  ubicacion: string;
  direccion: string;
  keyMedidas: number;
  disponible: boolean;
}
