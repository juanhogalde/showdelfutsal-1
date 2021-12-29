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
exports.noticiasController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Noticias_Model_1 = __importDefault(require("./Noticias_Model"));
const mongoose_1 = __importDefault(require("mongoose"));
const enumeradores_1 = require("../../Config/enumeradores");
class NoticiasController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                Noticias_Model_1.default
                    .find({})
                    .populate('idImagen')
                    .then((noticias) => {
                    responder_1.default.sucess(req, res, noticias);
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
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tituloBody = req.body.titulo;
                if (tituloBody) {
                    const listadoNoticias = yield Noticias_Model_1.default
                        .find({
                        titulo: { $regex: `${tituloBody}`, $options: 'i' },
                    })
                        .populate('idImagen');
                    if (listadoNoticias.length) {
                        responder_1.default.sucess(req, res, listadoNoticias);
                    }
                    else {
                        responder_1.default.sucess(req, res, 'No existen coincidencias con el título ingresado.');
                    }
                }
                else {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    listardestacadas(req, res) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var contNoticiaMasc = 0;
                var contNoticiaFem = 0;
                var contNoticiaInf = 0;
                var objetoFinal = {
                    noticias: [],
                };
                const filtrosBody = req.body;
                let filtrosBD = { isDestacada: true };
                if (filtrosBody) {
                    if (filtrosBody.idCategoria) {
                        let _id = new mongoose_1.default.Types.ObjectId(filtrosBody.idCategoria);
                        filtrosBD.idCategoria = _id;
                    }
                    if (filtrosBody.fecha) {
                        filtrosBD.fecha = { $gte: new Date(filtrosBody.fecha) };
                    }
                }
                const listadoNoticias = yield Noticias_Model_1.default.find(filtrosBD);
                if (listadoNoticias.length) {
                    try {
                        for (var listadoNoticias_1 = __asyncValues(listadoNoticias), listadoNoticias_1_1; listadoNoticias_1_1 = yield listadoNoticias_1.next(), !listadoNoticias_1_1.done;) {
                            const noticia = listadoNoticias_1_1.value;
                            if (noticia.keyCategoria) {
                                if (noticia.keyCategoria === enumeradores_1.keyCategoria.masculino) {
                                    contNoticiaMasc++;
                                    if (contNoticiaMasc !== 3) {
                                        objetoFinal.noticias.push(noticia);
                                    }
                                }
                                else if (noticia.keyCategoria === enumeradores_1.keyCategoria.femenino) {
                                    contNoticiaFem++;
                                    if (contNoticiaFem !== 3) {
                                        objetoFinal.noticias.push(noticia);
                                    }
                                }
                                else if (noticia.keyCategoria === enumeradores_1.keyCategoria.infantil) {
                                    contNoticiaInf++;
                                    if (contNoticiaInf !== 3) {
                                        objetoFinal.noticias.push(noticia);
                                    }
                                }
                            }
                            else {
                                objetoFinal.noticias.push(noticia);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (listadoNoticias_1_1 && !listadoNoticias_1_1.done && (_a = listadoNoticias_1.return)) yield _a.call(listadoNoticias_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    responder_1.default.sucess(req, res, objetoFinal);
                }
                else {
                    responder_1.default.sucess(req, res, 'No hay noticias destacadas');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerNoticiasDestacadas() {
        return Noticias_Model_1.default.find({ isDestacada: true }).populate('idCategoria').sort({ fecha: 'desc' });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticia = new Noticias_Model_1.default(req.body);
                yield noticia.save();
                Noticias_Model_1.default
                    .findById(noticia._id)
                    .populate('idImagen')
                    .then((noticiaImg) => {
                    responder_1.default.sucess(req, res, noticiaImg);
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
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idNoticia = req.params.id;
                const noticia = yield Noticias_Model_1.default.find({ _id: idNoticia });
                responder_1.default.sucess(req, res, noticia);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticiaBody = req.body;
                if (noticiaBody._id) {
                    Noticias_Model_1.default.findById(noticiaBody._id).then((noticia) => __awaiter(this, void 0, void 0, function* () {
                        if (noticia) {
                            noticia.fecha = noticiaBody.fecha;
                            noticia.titulo = noticiaBody.titulo;
                            noticia.copete = noticiaBody.copete;
                            noticia.cuerpo = noticiaBody.cuerpo;
                            noticia.idCategoria = noticiaBody.idCategoria;
                            noticia.idSubcategoria = noticiaBody.idSubcategoria;
                            noticia.keyCategoria = noticiaBody.keyCategoria;
                            noticia.keySubcategoria = noticiaBody.keySubcategoria;
                            noticia.isDestacada = noticiaBody.isDestacada;
                            noticia.idImagen = noticiaBody.idImagen;
                            const resultado = yield noticia.save({ new: true });
                            Noticias_Model_1.default
                                .findById(resultado._id)
                                .populate('idImagen')
                                .then((noticia) => {
                                responder_1.default.sucess(req, res, noticia);
                            })
                                .catch((error) => {
                                responder_1.default.error(req, res, error);
                            });
                        }
                        else {
                            let error = new Error('Noticia no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Noticia no encontrada');
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
                const noticiaEliminada = yield Noticias_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, noticiaEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    destacar(req, res) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cont = 0;
                if (!req.body.data) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    try {
                        for (var _b = __asyncValues(req.body.data), _c; _c = yield _b.next(), !_c.done;) {
                            const idNoticia = _c.value;
                            const noticia = yield Noticias_Model_1.default
                                .findById(idNoticia)
                                .then((value) => {
                                return value;
                            })
                                .catch((error) => {
                                console.log(error);
                                responder_1.default.error(req, res);
                            });
                            if (noticia) {
                                noticia.isDestacada = true;
                                const resultado = yield noticia.save();
                                if (resultado) {
                                    cont++;
                                }
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
                    if (cont) {
                        responder_1.default.sucess(req, res, `Se actualizaron ${cont} noticia/s.`);
                    }
                    else {
                        responder_1.default.error(req, res, 'No se pudieron actualizar las noticias ingresadas.');
                    }
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    destacarNoticia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticiaBody = req.body;
                if (!noticiaBody._id) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    Noticias_Model_1.default.findById(noticiaBody._id).then((noticia) => __awaiter(this, void 0, void 0, function* () {
                        if (noticia) {
                            noticia.isDestacada = true;
                            const resultado = yield noticia.save({ new: true });
                            Noticias_Model_1.default
                                .findById(resultado._id)
                                .populate('idImagen')
                                .then((noticia) => {
                                responder_1.default.sucess(req, res, noticia);
                            })
                                .catch((error) => {
                                responder_1.default.error(req, res, error);
                            });
                        }
                    }));
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    desestacarNoticia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const noticiaBody = req.body;
                if (!noticiaBody._id) {
                    responder_1.default.error(req, res, 'No se ingresaron datos');
                }
                else {
                    Noticias_Model_1.default.findById(noticiaBody._id).then((noticia) => __awaiter(this, void 0, void 0, function* () {
                        if (noticia) {
                            noticia.isDestacada = false;
                            const resultado = yield noticia.save({ new: true });
                            Noticias_Model_1.default
                                .findById(resultado._id)
                                .populate('idImagen')
                                .then((noticia) => {
                                responder_1.default.sucess(req, res, noticia);
                            })
                                .catch((error) => {
                                responder_1.default.error(req, res, error);
                            });
                        }
                    }));
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    filtrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filtrosBody = req.body;
                let filtrosBD = {};
                if (filtrosBody) {
                    if (filtrosBody.idCategoria) {
                        let _id = new mongoose_1.default.Types.ObjectId(filtrosBody.idCategoria);
                        filtrosBD.idCategoria = _id;
                    }
                    if (filtrosBody.fecha) {
                        filtrosBD.fecha = { $gte: new Date(filtrosBody.fecha) };
                    }
                    if (filtrosBody.isDestacada) {
                        filtrosBD.isDestacada = filtrosBody.isDestacada;
                    }
                    const datos = yield Noticias_Model_1.default.find(filtrosBD);
                    if (datos.length) {
                        responder_1.default.sucess(req, res, datos);
                    }
                    else {
                        responder_1.default.sucess(req, res, 'No existen datos para los filtros ingresados');
                    }
                }
                else {
                    responder_1.default.error(req, res, 'No se ingresaron filtros');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    importarNoticias(datos, req, res) {
        var datos_1, datos_1_1;
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cantNoticiasGuardadas = 0;
                const totalDatos = datos.length;
                if (datos.length) {
                    const buscarNoticias = yield Noticias_Model_1.default.find({});
                    if (!buscarNoticias.length) {
                        try {
                            for (datos_1 = __asyncValues(datos); datos_1_1 = yield datos_1.next(), !datos_1_1.done;) {
                                const item = datos_1_1.value;
                                const nuevaNoticia = new Noticias_Model_1.default();
                                nuevaNoticia.fecha = item.post_date ? item.post_date : new Date();
                                nuevaNoticia.urlNoticia = item.post_name
                                    ? `http://elshowdelfutsal.com/noticias/${item.post_name}`
                                    : '';
                                nuevaNoticia.titulo = item.post_title ? item.post_title : 'Noticia sin titulo';
                                nuevaNoticia.cuerpo = item.post_content ? item.post_content : '';
                                nuevaNoticia.autor = 'Editorial El Show del Futsal';
                                const resultado = yield nuevaNoticia.save();
                                if (resultado) {
                                    cantNoticiasGuardadas++;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (datos_1_1 && !datos_1_1.done && (_a = datos_1.return)) yield _a.call(datos_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        console.log(`Se insertaron ${cantNoticiasGuardadas} noticias de un total de ${totalDatos} noticias.`);
                        responder_1.default.sucess(req, res);
                    }
                    else {
                        responder_1.default.sucess(req, res, 'Ya se cargaron las noticias');
                    }
                }
                else {
                    responder_1.default.error(req, res, 'No existen datos para importar');
                }
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.noticiasController = new NoticiasController();
