import {Document} from 'mongoose';

export default interface IImagenes extends Document {
  // _id: string;
  fuente: string;
  alto: number;
  ancho: number;
  descripcion: string;
  isGaleria: boolean;
  // galeria: string;
  fechaCarga: Date;
}
