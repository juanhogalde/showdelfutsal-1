"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Usuarios_Model_1 = __importDefault(require("./Usuarios_Model"));
const generadorClaves_1 = __importDefault(require("../../Middlewares/generadorClaves"));
const gestionMail_1 = require("../../Config/gestionMail");
const gestionPass_1 = require("../../Config/gestionPass");
const enumeradores_1 = require("../../Config/enumeradores");
const sendMail = new gestionMail_1.envioMail();
const genClaves = new generadorClaves_1.default();
const proyeccion = { password: 0, token: 0 };
class UsuariosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoUsuarios = yield Usuarios_Model_1.default.find({}, proyeccion);
                responder_1.default.sucess(req, res, listadoUsuarios);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = new Usuarios_Model_1.default(req.body);
                yield usuario.save();
                responder_1.default.sucess(req, res);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datosUsuario = req.body;
                if (datosUsuario && datosUsuario.email) {
                    const usuarioBD = yield Usuarios_Model_1.default
                        .findOne({ $and: [{ email: datosUsuario.email }, { isActivo: true }] })
                        .exec();
                    if (usuarioBD) {
                        const match = genClaves.compararClave(usuarioBD.password, datosUsuario.password);
                        if (match) {
                            let { password } = usuarioBD, usuarioSinPass = __rest(usuarioBD, ["password"]);
                            const tokenGenerado = genClaves.generarToken(usuarioSinPass);
                            if (tokenGenerado) {
                                responder_1.default.sucess(req, res, tokenGenerado);
                            }
                            else {
                                throw new Error('Error al generar el token');
                            }
                        }
                        else {
                            throw new Error('Clave incorrecta');
                        }
                    }
                    else {
                        throw new Error('Usuario no encontrado o desactivado.');
                    }
                }
                else {
                    throw new Error('No se ingresaron datos de usuario');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioBody = req.body;
                if (usuarioBody._id) {
                    Usuarios_Model_1.default.findById(usuarioBody._id).then((usuario) => __awaiter(this, void 0, void 0, function* () {
                        if (usuario) {
                            usuario.nombreUsuario = usuarioBody.nombreUsuario;
                            usuario.email = usuarioBody.email;
                            usuario.keyRol = usuarioBody.keyRol;
                            usuario.token = usuarioBody.token;
                            usuario.isActivo = usuarioBody.isActivo;
                            const resultado = yield usuario.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Usuario no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Usuario no encontrado');
                    responder_1.default.error(req, res, error);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioBody = req.body;
                if (usuarioBody.idUsuraio && usuarioBody.passwordNueva) {
                    Usuarios_Model_1.default.findById(usuarioBody.idUsuraio).then((usuario) => __awaiter(this, void 0, void 0, function* () {
                        if (usuario) {
                            usuario.nombreUsuario = usuario.nombreUsuario;
                            usuario.email = usuario.email;
                            usuario.keyRol = usuario.keyRol;
                            usuario.token = usuario.token;
                            usuario.isActivo = usuario.isActivo;
                            usuario.password = usuarioBody.passwordNueva;
                            usuario.isRecuperarContraseña = false;
                            const resultado = yield usuario.save({ new: true });
                            const token = genClaves.generarToken(Object.assign(Object.assign({}, resultado), { password: '' }));
                            responder_1.default.sucess(req, res, token);
                        }
                        else {
                            let error = new Error('Usuario no encontrado');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Faltan datos');
                    responder_1.default.error(req, res, error);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.body.id;
                if (!id) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    const usuario = yield Usuarios_Model_1.default.findOne({ _id: id });
                    if (usuario) {
                        if (usuario.keyRol === enumeradores_1.Rol.Administrador) {
                            usuario.isActivo = false;
                            const resultado = yield usuario.save();
                            if (resultado) {
                                responder_1.default.sucess(req, res, 'Usuario administrador desactivado.');
                            }
                            else {
                                console.info(resultado);
                                responder_1.default.error(req, res, 'Ocurrio un error al cambiar el estado del usuario');
                            }
                        }
                        else {
                            const valor = yield usuario.deleteOne({ _id: id });
                            if (valor) {
                                responder_1.default.sucess(req, res, 'Usuario eliminado.');
                            }
                            else {
                                console.info(valor);
                                responder_1.default.error(req, res, 'Ocurrio un error al eliminar el usuario');
                            }
                        }
                    }
                    else {
                        responder_1.default.error(req, res, 'Usuario no encontrado');
                    }
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    recuperarPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datosBody = req.body;
                if (datosBody) {
                    const usuario = yield Usuarios_Model_1.default.findOne({ email: datosBody.email });
                    if (usuario) {
                        const nuevaContrasenia = yield (0, gestionPass_1.generatePasswordRand)(8);
                        if (nuevaContrasenia && usuario.email) {
                            sendMail.recuperarPassword(usuario.email, nuevaContrasenia);
                            Usuarios_Model_1.default.findById(usuario._id).then((usuario) => __awaiter(this, void 0, void 0, function* () {
                                if (usuario) {
                                    usuario.nombreUsuario = usuario.nombreUsuario;
                                    usuario.email = usuario.email;
                                    usuario.keyRol = usuario.keyRol;
                                    usuario.token = usuario.token;
                                    usuario.isActivo = usuario.isActivo;
                                    usuario.isRecuperarContraseña = true;
                                    usuario.password = nuevaContrasenia;
                                    const resultado = yield usuario.save({ new: true });
                                    responder_1.default.sucess(req, res, 'Correo de reestablecimiento enviado');
                                }
                                else {
                                    let error = new Error('Usuario no encontrado');
                                    responder_1.default.error(req, res, error);
                                }
                            }));
                        }
                        else {
                            console.log(usuario.email);
                            console.log(nuevaContrasenia);
                            responder_1.default.error(req, res);
                        }
                    }
                    else {
                        responder_1.default.sucess(req, res, 'El email ingresado no está registrado.');
                    }
                }
                else {
                    responder_1.default.error(req, res, 'No se ingresaron datos.');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.usuariosController = new UsuariosController();
