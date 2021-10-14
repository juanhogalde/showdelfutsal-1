import {model, Schema} from 'mongoose';
import IUsuarios from './Usuarios_Interface';

const UsuariosSchema = new Schema({
  nombreUsuario: {type: String, unique: true},
  email: {type: String, unique: true},
  keyRol: Number,
  token: String,
});

export default model<IUsuarios>('modeloUsuarios', UsuariosSchema);
