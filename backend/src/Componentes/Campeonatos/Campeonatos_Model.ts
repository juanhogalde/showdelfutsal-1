import {model, Schema} from 'mongoose';
import ICampeonatos from './Campeonatos_Interface';

const CampeonatosSchema = new Schema({});

export default model<ICampeonatos>('modeloCampeonatos', CampeonatosSchema);
