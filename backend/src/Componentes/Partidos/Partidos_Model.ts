import {model, Schema} from 'mongoose';
import IPartidos from './Partidos_Interface';

const PartidosSchema = new Schema({});

export default model<IPartidos>('modeloPartidos', PartidosSchema);
