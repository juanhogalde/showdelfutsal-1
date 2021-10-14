import {model, Schema} from 'mongoose';
import IUsuarios from './Usuarios_Interface';

const UsuariosSchema = new Schema({});

export default model<IUsuarios>('modeloUsuarios', UsuariosSchema);
