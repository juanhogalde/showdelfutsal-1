import {model, Schema} from 'mongoose';
import IZonas from './Zonas_Interface';

const ZonasSchema = new Schema({});

export default model<IZonas>('modeloZonas', ZonasSchema);
