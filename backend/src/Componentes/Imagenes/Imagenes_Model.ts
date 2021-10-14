import {model, Schema} from 'mongoose';
import IImagenes from './Imagenes_Interface';

const ImagenesSchema = new Schema({
  fuente: String,
  alto: Number,
  ancho: Number,
  descripcion: String,
  galeria: {type: String, unique: true},
});

export default model<IImagenes>('modeloImagenes', ImagenesSchema);
