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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagenesController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Imagenes_Model_1 = __importDefault(require("./Imagenes_Model"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ImagenesController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoImagenes = yield Imagenes_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoImagenes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body.archivos.length) {
                    let arregloDePath = [];
                    req.body.archivos.forEach((archivo) => __awaiter(this, void 0, void 0, function* () {
                        let path = archivo.path;
                        let imagen = new Imagenes_Model_1.default(Object.assign(Object.assign({}, archivo), { fuente: path.replace('public', '').replace('\\', '/').replace('\\', '/'), galeria: true, descripcion: req.body.descripcion }));
                        arregloDePath.push(imagen);
                        yield imagen.save();
                    }));
                    responder_1.default.sucess(req, res, arregloDePath);
                }
                else {
                    let path = req.body.archivos.path;
                    const imagen = new Imagenes_Model_1.default(Object.assign(Object.assign({}, req.body), { fuente: path.replace('public', '').replace('\\', '/').replace('\\', '/') }));
                    yield imagen.save();
                    responder_1.default.sucess(req, res, imagen);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idImagen = req.params.id;
                const imagen = yield Imagenes_Model_1.default.find({ _id: idImagen });
                responder_1.default.sucess(req, res, imagen);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imagenBody = req.body;
                if (imagenBody._id) {
                    Imagenes_Model_1.default.findById(imagenBody._id).then((imagen) => __awaiter(this, void 0, void 0, function* () {
                        if (imagen) {
                            imagen.fuente = imagenBody.fuente;
                            imagen.alto = imagenBody.alto;
                            imagen.ancho = imagenBody.ancho;
                            imagen.descripcion = imagenBody.descripcion;
                            imagen.galeria = imagenBody.galeria;
                            imagen.fechaCarga = imagenBody.fechaCarga;
                            const resultado = yield imagen.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Imagen no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Imagen no encontrada');
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
                const imagenEliminada = yield Imagenes_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                if (imagenEliminada && imagenEliminada.fuente) {
                    let pathFile = path_1.default.join(__dirname, '../../../public', imagenEliminada.fuente);
                    if (fs_1.default.existsSync(pathFile)) {
                        fs_1.default.unlinkSync(pathFile);
                    }
                }
                responder_1.default.sucess(req, res, '', 'Imagen eliminada');
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    eliminarImagen(idImagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pr = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    const imagen = yield Imagenes_Model_1.default.findOneAndDelete({ _id: idImagen }, { new: true });
                    if (imagen) {
                        if (imagen.fuente) {
                            let pathFile = path_1.default.join(__dirname, '../../../public', imagen.fuente);
                            if (fs_1.default.existsSync(pathFile)) {
                                fs_1.default.unlinkSync(pathFile);
                            }
                        }
                        resolve(imagen);
                    }
                    else {
                        reject(new Error('No se encontro imagen'));
                    }
                }));
                return pr;
            }
            catch (error) {
                return error;
            }
        });
    }
    obtenerGaleria(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
            return Imagenes_Model_1.default.find({ galeria: nombreGaleria }).sort({ fechaCarga: 'desc' }).limit(3);
        });
    }
    obtenerGaleriaVideo(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
            return Imagenes_Model_1.default.find({ galeriaVideo: nombreGaleria }).sort({ fechaCarga: 'desc' }).limit(2);
        });
    }
    insertarImagen(imagen) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let imagenNew = new Imagenes_Model_1.default();
                imagenNew.fuente = imagen.fuente;
                imagenNew.isGaleria = imagen.isGaleria;
                if (imagen.galeriaId) {
                    imagenNew.galeriaId = imagen.galeriaId;
                }
                imagenNew.fechaCarga = new Date();
                const resultado = yield imagenNew.save();
                return resultado;
            }
            catch (error) {
                return error;
            }
        });
    }
    listarImagenesGaleria(idGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let arrayImagenes = [];
                const pr = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    var e_1, _a;
                    const imagenes = yield Imagenes_Model_1.default.find({
                        $and: [{ galeriaId: idGaleria, isGaleria: true }],
                    });
                    if (imagenes && imagenes.length) {
                        try {
                            for (var imagenes_1 = __asyncValues(imagenes), imagenes_1_1; imagenes_1_1 = yield imagenes_1.next(), !imagenes_1_1.done;) {
                                const imagen = imagenes_1_1.value;
                                arrayImagenes.push(imagen);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (imagenes_1_1 && !imagenes_1_1.done && (_a = imagenes_1.return)) yield _a.call(imagenes_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        resolve(arrayImagenes);
                    }
                    else {
                        reject(new Error('La galería no posee imagenes'));
                    }
                }));
                return pr;
            }
            catch (error) {
                return new Promise((reject) => {
                    reject(error);
                });
            }
        });
    }
    obtenerImagenesGaleria() {
        return __awaiter(this, void 0, void 0, function* () {
            return Imagenes_Model_1.default.find({ galeriaId: { $exists: true } }).populate('galeriaId');
        });
    }
    obtenerImagenesGaleriaPorId(galeriaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Imagenes_Model_1.default.find({ $and: [{ galeriaId: { $exists: true } }, { galeriaId: galeriaId }] }, { galeriaId: 0 });
        });
    }
    obtenerGaleriaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Imagenes_Model_1.default.find({ galeriaId: id });
        });
    }
}
exports.imagenesController = new ImagenesController();
