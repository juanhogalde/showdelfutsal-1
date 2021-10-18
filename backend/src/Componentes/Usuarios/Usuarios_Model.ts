import bcrypt from 'bcrypt';
import {model, Schema} from 'mongoose';
import IUsuarios from './Usuarios_Interface';
import generarClaves from '../../Middlewares/generadorClaves';
const genClaves = new generarClaves();

const UsuariosSchema = new Schema({
  nombreUsuario: {type: String, unique: true},
  email: {type: String, unique: true},
  password: String,
  keyRol: {type: Number},
  token: {type: String},
  isActivo: {type: Boolean, default: true},
});

UsuariosSchema.pre('save', function (next) {
  const data = this;
  const passwordHasheado = genClaves.hashClave(data.password);
  data.password = passwordHasheado;
  const tokenGenerado = genClaves.generarToken(data);
  data.token = tokenGenerado;

  if (tokenGenerado && passwordHasheado) {
    next();
  } else {
    throw new Error('Datos no generados');
  }
});

export default model<IUsuarios>('modeloUsuarios', UsuariosSchema);
