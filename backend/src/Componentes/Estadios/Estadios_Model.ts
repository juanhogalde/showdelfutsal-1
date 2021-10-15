import {model, Schema} from 'mongoose';
import IEstadios from './Estadios_Interface';

const EstadiosSchema = new Schema({
  nombreEstadio: {type: String},
  direccion: {type: String},
});

export default model<IEstadios>('modeloEstadios', EstadiosSchema);
