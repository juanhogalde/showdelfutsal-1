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
exports.zonasController = void 0;
const Zonas_Model_1 = __importDefault(require("./Zonas_Model"));
class ZonasController {
    crearZona(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pr = new Promise((resolve, reject) => {
                    Zonas_Model_1.default
                        .findOne({ nombreZona: data.nombreZona })
                        .then((zona) => {
                        if (zona) {
                            zona.nombreZona = data.nombreZona;
                            zona.tipo = data.tipo;
                            zona.idSubcategoria = data.idSubcategoria;
                            resolve(zona.save());
                        }
                        else {
                            const nuevaZona = new Zonas_Model_1.default(data);
                            resolve(nuevaZona.save());
                        }
                    })
                        .catch((error) => {
                        console.log(error);
                        reject(error);
                    });
                });
                return pr;
            }
            catch (error) {
                return new Promise((reject) => {
                    reject(error);
                });
            }
        });
    }
}
exports.zonasController = new ZonasController();
