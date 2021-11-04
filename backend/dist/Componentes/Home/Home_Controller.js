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
exports.homesController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Home_Model_1 = __importDefault(require("./Home_Model"));
const Noticias_Controller_1 = require("../Noticias/Noticias_Controller");
const Partidos_Controller_1 = require("../Partidos/Partidos_Controller");
const Imagenes_Controller_1 = require("../Imagenes/Imagenes_Controller");
const enumeradores_1 = require("../../Config/enumeradores");
class HomesController {
    obtenerDatosIniciales(req, res) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var contNoticiaMasc = 0;
                var contNoticiaFem = 0;
                var contNoticiaInf = 0;
                var objetoFinal = {
                    noticias: [],
                    vivo: {},
                    partidos: [],
                    galeriaFoto: {},
                    galeriaVideo: {},
                };
                const noticiasDestacadas = yield Noticias_Controller_1.noticiasController.obtenerNoticiasDestacadas();
                if (noticiasDestacadas && noticiasDestacadas.length) {
                    try {
                        for (var noticiasDestacadas_1 = __asyncValues(noticiasDestacadas), noticiasDestacadas_1_1; noticiasDestacadas_1_1 = yield noticiasDestacadas_1.next(), !noticiasDestacadas_1_1.done;) {
                            const noticia = noticiasDestacadas_1_1.value;
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
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (noticiasDestacadas_1_1 && !noticiasDestacadas_1_1.done && (_a = noticiasDestacadas_1.return)) yield _a.call(noticiasDestacadas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                const vivo = yield Home_Model_1.default.find({ isVivoActivo: true });
                if (vivo && vivo.length) {
                    objetoFinal.vivo = Object.assign({}, vivo);
                }
                const partidos = yield Partidos_Controller_1.partidosController.obtenerPartidos();
                if (partidos && partidos.lenght) {
                    objetoFinal.partidos = [...partidos];
                }
                if (req.body.galeria) {
                    const galeria = yield Imagenes_Controller_1.imagenesController.obtenerGaleria(req.body.galeria);
                    if (galeria && galeria.length) {
                        objetoFinal.galeriaFoto = [...galeria];
                    }
                }
                if (req.body.galeriaVideo) {
                    const galeriaVideo = yield Imagenes_Controller_1.imagenesController.obtenerGaleriaVideo(req.body.galeriaVideo);
                    if (galeriaVideo && galeriaVideo.length) {
                        objetoFinal.galeriaVideo = [...galeriaVideo];
                    }
                }
                responder_1.default.sucess(req, res, objetoFinal);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerVivoHome() {
        return Home_Model_1.default.find({ isVivoActivo: true });
    }
    obtenerVivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerRadio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerPartidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerDestacadas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerGaleriasImagenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtenerGaleriasVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoHomes = yield Home_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoHomes);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const home = new Home_Model_1.default(req.body);
                yield home.save();
                responder_1.default.sucess(req, res);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.homesController = new HomesController();
