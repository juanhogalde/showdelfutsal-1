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
exports.categoriasController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const Categorias_Model_1 = __importDefault(require("./Categorias_Model"));
class CategoriasController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoCategorias = yield Categorias_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoCategorias);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoria = new Categorias_Model_1.default(req.body);
                yield categoria.save();
                responder_1.default.sucess(req, res);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    obtener(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let idCategoria = req.params.id;
                const categoria = yield Categorias_Model_1.default.find({ _id: idCategoria });
                responder_1.default.sucess(req, res, categoria);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    modificar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaBody = req.body;
                if (categoriaBody._id) {
                    Categorias_Model_1.default.findById(categoriaBody._id).then((categoria) => __awaiter(this, void 0, void 0, function* () {
                        if (categoria) {
                            categoria.nombreCategoria = categoriaBody.nombreCategoria;
                            categoria.keyCategoria = categoriaBody.keyCategoria;
                            categoria.idSubcategorias = categoriaBody.idSubacategorias;
                            const resultado = yield categoria.save({ new: true });
                            responder_1.default.sucess(req, res, resultado);
                        }
                        else {
                            let error = new Error('Categoría no encontrada');
                            responder_1.default.error(req, res, error);
                        }
                    }));
                }
                else {
                    let error = new Error('Categoría no encontrada');
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
                const categoriaEliminada = yield Categorias_Model_1.default.findOneAndDelete({ _id: id }, { new: true });
                responder_1.default.sucess(req, res, categoriaEliminada);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.categoriasController = new CategoriasController();
