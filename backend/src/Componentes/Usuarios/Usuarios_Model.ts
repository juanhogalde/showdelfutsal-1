import {model, Schema} from 'mongoose';
import IUsuarios from './Usuarios_Interface';

const UsuariosSchema = new Schema({
  nombreUsuario: {type: String, unique: true},
  email: {type: String, unique: true},
  keyRol: {type: Number},
  token: {type: String},
  isActivo: {type: Boolean, default: true},
});

export default model<IUsuarios>('modeloUsuarios', UsuariosSchema);
