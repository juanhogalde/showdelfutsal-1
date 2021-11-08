"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const generadorClaves_1 = __importDefault(require("../../Middlewares/generadorClaves"));
const genClaves = new generadorClaves_1.default();
const UsuariosSchema = new mongoose_1.Schema({
    nombreUsuario: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    keyRol: { type: Number },
    token: { type: String },
    isRecuperarContraseña: { type: Boolean, default: false },
    isActivo: { type: Boolean, default: true },
});
UsuariosSchema.pre('save', function (next) {
    const data = this;
    const passwordHasheado = genClaves.hashClave(data.password);
    data.password = passwordHasheado;
    if (passwordHasheado) {
        next();
    }
    else {
        throw new Error('Datos no generados');
    }
});
exports.default = (0, mongoose_1.model)('modeloUsuarios', UsuariosSchema);
