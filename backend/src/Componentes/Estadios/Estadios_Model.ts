import {model, Schema} from 'mongoose';
import IEstadios from './Estadios_Interface';

const EstadiosSchema = new Schema({
  nombreEstadio: String,
  direccion: String,
});

export default model<IEstadios>('modeloEstadios', EstadiosSchema);
