import {model, Schema} from 'mongoose';
import IEtiquetas from './Etiquetas_Interface';

const EtiquetasSchema = new Schema({
  tag: {type: String, unique: true},
});

export default model<IEtiquetas>('modeloEtiquetas', EtiquetasSchema);
