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
exports.galeriaController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Galeria_Model_1 = __importDefault(require("./Galeria_Model"));
const Imagenes_Controller_1 = require("../Imagenes/Imagenes_Controller");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Videos_Controller_1 = require("../Videos/Videos_Controller");
class GaleriaController {
    listar(req, res) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let datosARetornar = [];
                let galerias = yield Galeria_Model_1.default.find();
                if (galerias && galerias.length) {
                    try {
                        for (var galerias_1 = __asyncValues(galerias), galerias_1_1; galerias_1_1 = yield galerias_1.next(), !galerias_1_1.done;) {
                            const item = galerias_1_1.value;
                            const imagenes = yield Imagenes_Controller_1.imagenesController.obtenerImagenesGaleriaPorId(item._id);
                            const videos = yield Videos_Controller_1.videosController.obtenerVideosGaleriaPorId(item._id);
                            let galeria = {
                                _id: item._id,
                                tituloGaleria: item.tituloGaleria,
                                fechaCarga: item.fechaCarga,
                                fechaModificacion: item.fechaModificacion,
                                imagenesId: imagenes.length ? [...imagenes] : [],
                                videosId: videos.length ? [...videos] : [],
                                idCategoria: item.idCategoria,
                                keyCategoria: item.keyCategoria,
                            };
                            datosARetornar.push(galeria);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (galerias_1_1 && !galerias_1_1.done && (_a = galerias_1.return)) yield _a.call(galerias_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    responder_1.default.sucess(req, res, datosARetornar);
                }
                else {
                    responder_1.default.sucess(req, res, [], 'No hay galerías para mostrar');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    listarGaleriaVideos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                Galeria_Model_1.default
                    .find({})
                    .populate('videosId')
                    .then((galeriaVideos) => {
                    responder_1.default.sucess(req, res, galeriaVideos);
                })
                    .catch((error) => {
                    responder_1.default.error(req, res, error);
                });
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregarGaleriaParaVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    throw new Error('No se ingresaron datos');
                }
                else {
                    const galeria = new Galeria_Model_1.default(req.body);
                    yield galeria.save();
                    responder_1.default.sucess(req, res, galeria);
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    editarGaleriaParaVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const galeriaBody = req.body;
                if (galeriaBody._id) {
                    Galeria_Model_1.default.findById(galeriaBody._id).then((galeria) => __awaiter(this, void 0, void 0, function* () {
                        if (galeria) {
                            galeria.tituloGaleria = galeriaBody.tituloGaleria;
                            galeria.fechaModificacion = galeriaBody.fechaModificacion;
                            const resultado = yield galeria.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            responder_1.default.error(req, res, 'galeria no encontrada');
                        }
                    }));
                }
                else {
                    responder_1.default.error(req, res, 'faltan datos');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let datosARetornar = {
                    tituloGaleria: '',
                    _id: '',
                    imagenesId: [],
                    idCategoria: '',
                    keyCategoria: '',
                };
                let datosAEnviar = { fuente: '', isGaleria: false, galeriaId: '' };
                let pathFile = '';
                let arrayInsercionesImagenes = [];
                let arrayIdImagenes = [];
                let arrayDePath = [];
                const datosBody = req.body;
                if (!datosBody) {
                    throw new Error('No se ingresaron datos');
                }
                if (!datosBody.archivos && !datosBody.archivos.length) {
                    throw new Error('No hay archivos para cargar');
                }
                let nuevaGaleria = new Galeria_Model_1.default();
                if (datosBody.archivos.length) {
                    datosAEnviar.galeriaId = nuevaGaleria._id;
                    try {
                        for (var _b = __asyncValues(datosBody.archivos), _c; _c = yield _b.next(), !_c.done;) {
                            const archivo = _c.value;
                            pathFile = archivo.path;
                            datosAEnviar.fuente = pathFile
                                .replace('public', '')
                                .replace('\\', '/')
                                .replace('\\', '/');
                            datosAEnviar.isGaleria = true;
                            const resultado = yield Imagenes_Controller_1.imagenesController.insertarImagen(datosAEnviar);
                            if (resultado) {
                                arrayInsercionesImagenes.push(resultado);
                                arrayIdImagenes.push(resultado._id);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    pathFile = datosBody.archivos.path;
                    datosAEnviar.fuente = pathFile.replace('public', '').replace('\\', '/').replace('\\', '/');
                    datosAEnviar.isGaleria = true;
                    const resultado = yield Imagenes_Controller_1.imagenesController.insertarImagen(datosAEnviar);
                    if (resultado) {
                        arrayInsercionesImagenes.push(resultado);
                        arrayIdImagenes.push(resultado._id);
                    }
                }
                if (arrayInsercionesImagenes.length) {
                    nuevaGaleria.tituloGaleria = datosBody.descripcion;
                    nuevaGaleria.fechaCarga = new Date();
                    nuevaGaleria.idCategoria = datosBody.idCategoria;
                    nuevaGaleria.keyCategoria = datosBody.keyCategoria;
                    const resultadoOperacion = yield nuevaGaleria.save();
                    if (resultadoOperacion) {
                        datosARetornar.tituloGaleria = resultadoOperacion.tituloGaleria;
                        datosARetornar._id = resultadoOperacion._id;
                        datosARetornar.imagenesId = [...arrayInsercionesImagenes];
                        datosARetornar.idCategoria = datosBody.idCategoria;
                        datosARetornar.keyCategoria = datosBody.keyCategoria;
                        responder_1.default.sucess(req, res, datosARetornar);
                    }
                    else {
                        console.log(resultadoOperacion);
                        responder_1.default.error(req, res, new Error('Error al insertar la galería'));
                    }
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtener(req, res) {
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    let datosARetornar = {
                        _id: '',
                        imagenesId: [],
                        tituloGaleria: '',
                        fechaCarga: '',
                        fechaModificacion: '',
                    };
                    const galeria = yield Galeria_Model_1.default.findById(req.params.id);
                    if (galeria) {
                        datosARetornar._id = galeria._id;
                        datosARetornar.tituloGaleria = galeria.tituloGaleria;
                        datosARetornar.fechaCarga = galeria.fechaCarga;
                        datosARetornar.fechaModificacion = galeria.fechaModificacion;
                        const listadoImagenes = yield Imagenes_Controller_1.imagenesController.obtenerGaleriaPorId(req.params.id);
                        if (listadoImagenes && listadoImagenes.length) {
                            try {
                                for (var listadoImagenes_1 = __asyncValues(listadoImagenes), listadoImagenes_1_1; listadoImagenes_1_1 = yield listadoImagenes_1.next(), !listadoImagenes_1_1.done;) {
                                    const item = listadoImagenes_1_1.value;
                                    datosARetornar.imagenesId.push(item);
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (listadoImagenes_1_1 && !listadoImagenes_1_1.done && (_a = listadoImagenes_1.return)) yield _a.call(listadoImagenes_1);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            responder_1.default.sucess(req, res, datosARetornar);
                        }
                        else {
                            responder_1.default.sucess(req, res, [], 'No hay galerías para mostrar');
                        }
                    }
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
                let datosARetornar = {
                    tituloGaleria: '',
                    _id: '',
                    imagenesId: [],
                };
                let datosAEnviar = { fuente: '', isGaleria: false, galeriaId: '' };
                let pathFile = '';
                let arrayInsercionesImagenes = [];
                let arrayIdImagenes = [];
                const datosBody = req.body;
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    Galeria_Model_1.default
                        .findById(datosBody._id)
                        .then((galeria) => __awaiter(this, void 0, void 0, function* () {
                        var e_4, _a;
                        if (galeria) {
                            datosAEnviar.galeriaId = galeria._id;
                            if (datosBody.archivos) {
                                if (datosBody.archivos.length) {
                                    try {
                                        for (var _b = __asyncValues(datosBody.archivos), _c; _c = yield _b.next(), !_c.done;) {
                                            const archivo = _c.value;
                                            pathFile = archivo.path;
                                            datosAEnviar.fuente = pathFile
                                                .replace('public', '')
                                                .replace('\\', '/')
                                                .replace('\\', '/');
                                            const resultado = yield Imagenes_Controller_1.imagenesController.insertarImagen(datosAEnviar);
                                            if (resultado) {
                                                arrayInsercionesImagenes.push(resultado);
                                                arrayIdImagenes.push(resultado._id);
                                            }
                                        }
                                    }
                                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                    }
                                }
                                else {
                                    pathFile = datosBody.archivos.path;
                                    datosAEnviar.fuente = pathFile
                                        .replace('public', '')
                                        .replace('\\', '/')
                                        .replace('\\', '/');
                                    datosAEnviar.isGaleria = true;
                                    const resultado = yield Imagenes_Controller_1.imagenesController.insertarImagen(datosAEnviar);
                                    if (resultado) {
                                        arrayInsercionesImagenes.push(resultado);
                                        arrayIdImagenes.push(resultado._id);
                                    }
                                }
                            }
                            galeria.tituloGaleria = datosBody.descripcion;
                            galeria.fechaModificacion = new Date();
                            galeria.idCategoria = datosBody.idCategoria;
                            galeria.keyCategoria = datosBody.keyCategoria;
                            const resultado = yield galeria.save();
                            if (resultado) {
                                const imagenes = yield Imagenes_Controller_1.imagenesController.obtenerImagenesGaleriaPorId(galeria._id);
                                let dato = {
                                    _id: resultado._id,
                                    tituloGaleria: resultado.tituloGaleria,
                                    fechaCarga: resultado.fechaCarga,
                                    fechaModificacion: resultado.fechaModificacion,
                                    imagenesId: imagenes.length ? [...imagenes] : [],
                                    idCategoria: datosBody.idCategoria,
                                    keyCategoria: datosBody.keyCategoria,
                                };
                                responder_1.default.sucess(req, res, dato, 'Galeria actualizada');
                            }
                            else {
                                console.log(resultado);
                                responder_1.default.error(req, res, '', 'Ocurrio un error al intentar actualizar la galería', 500);
                            }
                        }
                        else {
                            responder_1.default.error(req, res, '', 'Galería no encontrada', 400);
                        }
                    }))
                        .catch((error) => {
                        console.log(error);
                        responder_1.default.error(req, res);
                    });
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
                const datosBody = req.body;
                if (!datosBody) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                Galeria_Model_1.default
                    .findByIdAndDelete(datosBody._id)
                    .then((galeria) => __awaiter(this, void 0, void 0, function* () {
                    var e_5, _a;
                    if (galeria) {
                        const listadoImagenes = yield Imagenes_Controller_1.imagenesController.obtenerGaleriaPorId(datosBody._id);
                        if (listadoImagenes && listadoImagenes.length) {
                            try {
                                for (var listadoImagenes_2 = __asyncValues(listadoImagenes), listadoImagenes_2_1; listadoImagenes_2_1 = yield listadoImagenes_2.next(), !listadoImagenes_2_1.done;) {
                                    const item = listadoImagenes_2_1.value;
                                    const imagenEliminadaBD = yield Imagenes_Controller_1.imagenesController.eliminarImagen(item._id);
                                    if (imagenEliminadaBD && imagenEliminadaBD.fuente) {
                                        let pathArchivoEliminar = path_1.default.join(__dirname, '../../../public', imagenEliminadaBD.fuente);
                                        if (fs_1.default.existsSync(pathArchivoEliminar)) {
                                            fs_1.default.unlinkSync(pathArchivoEliminar);
                                        }
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (listadoImagenes_2_1 && !listadoImagenes_2_1.done && (_a = listadoImagenes_2.return)) yield _a.call(listadoImagenes_2);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        responder_1.default.sucess(req, res, '', 'Galería eliminada');
                    }
                    else {
                        responder_1.default.error(req, res, 'Galería no encontrada');
                    }
                }))
                    .catch((error) => {
                    console.log(error);
                    responder_1.default.error(req, res);
                });
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerGaleria(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    obtenerGaleriaVideo(nombreGaleria) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.galeriaController = new GaleriaController();
