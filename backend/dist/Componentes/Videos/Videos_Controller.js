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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Videos_Model_1 = __importDefault(require("./Videos_Model"));
class VideosController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoImagenes = yield Videos_Model_1.default.find();
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
                    console.log(req.body);
                    let arregloDePath = [];
                    req.body.archivos.forEach((archivo) => {
                        let path = archivo.path.split('\\');
                        let pathFile = `${path[0]}/${path[1]}/${path[2]}`;
                        let imagen = new Videos_Model_1.default(Object.assign(Object.assign({}, archivo), { fuente: pathFile.replace('public', ''), galeria: true, descripcion: req.body.descripcion }));
                        arregloDePath.push(imagen);
                        imagen.save();
                    });
                    responder_1.default.sucess(req, res, arregloDePath);
                }
                else {
                    let path = req.body.archivos.path.split('\\');
                    let pathFile = `${path[0]}/${path[1]}/${path[2]}`;
                    const imagen = new Videos_Model_1.default(Object.assign(Object.assign({}, req.body), { fuente: pathFile.replace('public', '') }));
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
                const imagen = yield Videos_Model_1.default.find({ _id: idImagen });
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
                    Videos_Model_1.default.findById(imagenBody._id).then((imagen) => __awaiter(this, void 0, void 0, function* () {
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
                const imagenEliminada = yield Videos_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, imagenEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerGaleria(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
            return Videos_Model_1.default.find({ galeria: nombreGaleria }).sort({ fechaCarga: 'desc' }).limit(3);
        });
    }
    obtenerGaleriaVideo(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
            return Videos_Model_1.default.find({ galeriaVideo: nombreGaleria }).sort({ fechaCarga: 'desc' }).limit(2);
        });
    }
}
exports.videosController = new VideosController();