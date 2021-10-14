import {model, Schema} from 'mongoose';
import ICategorias from './Categorias_Interface';

const CategoriasSchema = new Schema({});

export default model<ICategorias>('modeloCategorias', CategoriasSchema);
