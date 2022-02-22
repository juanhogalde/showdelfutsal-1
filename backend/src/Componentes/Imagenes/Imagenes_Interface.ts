import {Document} from 'mongoose';
import IGaleria from '../Galeria/Galeria_Interface';

export default interface IImagenes extends Document {
  // _id: string;
  fuente: string;
  alto: number;
  ancho: number;
  descripcion: string;
  isGaleria: boolean;
  galeriaId: string;
  fechaCarga: Date;
}
