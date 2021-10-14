import {model, Schema} from 'mongoose';
import IImagenes from './Imagenes_Interface';

const ImagenesSchema = new Schema({});

export default model<IImagenes>('modeloImagenes', ImagenesSchema);
