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
exports.medidasPublicidadController = void 0;
const responder_1 = __importDefault(require("../../Middlewares/responder"));
const MedidasPublicidad_Model_1 = __importDefault(require("./MedidasPublicidad_Model"));
class MedidasPublicidadController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listadoMedidasPublicidad = yield MedidasPublicidad_Model_1.default.find();
                responder_1.default.sucess(req, res, listadoMedidasPublicidad);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
    agregar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medidasPublicidades = new MedidasPublicidad_Model_1.default(req.body);
                yield medidasPublicidades.save();
                responder_1.default.sucess(req, res);
            }
            catch (error) {
                responder_1.default.error(req, res, error);
            }
        });
    }
}
exports.medidasPublicidadController = new MedidasPublicidadController();
