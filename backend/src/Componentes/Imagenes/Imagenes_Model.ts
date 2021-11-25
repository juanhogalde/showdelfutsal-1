import {model, Schema} from 'mongoose';
import IImagenes from './Imagenes_Interface';

const ImagenesSchema = new Schema({
  fuente: {type: String},
  alto: {type: Number},
  ancho: {type: Number},
  descripcion: {type: String},
  galeria: {type: Boolean},
  galeriaVideo: String,
  fechaCarga: {type: Date},
});

export default model<IImagenes>('modeloImagenes', ImagenesSchema);
