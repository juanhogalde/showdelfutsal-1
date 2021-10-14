import {model, Schema} from 'mongoose';
import IPublicidades from './Publicidades_Interface';

const PublicidadesSchema = new Schema({});

export default model<IPublicidades>('modeloPublicidades', PublicidadesSchema);
