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
exports.importarDatos = void 0;
const fs_1 = __importDefault(require("fs"));
const Noticias_Controller_1 = require("../Componentes/Noticias/Noticias_Controller");
const path = require('path');
const importarDatos = (req, res) => {
    const rutaArchivo = path.join(__dirname, '../../archivos/wp_posts.json');
    fs_1.default.readFile(rutaArchivo, 'utf-8', (error, data) => __awaiter(void 0, void 0, void 0, function* () {
        var e_1, _a, e_2, _b;
        if (error)
            throw new Error(error);
        const dataJSON = JSON.parse(data);
        let arregloDatos = [];
        try {
            for (var dataJSON_1 = __asyncValues(dataJSON), dataJSON_1_1; dataJSON_1_1 = yield dataJSON_1.next(), !dataJSON_1_1.done;) {
                const item = dataJSON_1_1.value;
                if (item.type === 'table' && item.data) {
                    try {
                        for (var _c = (e_2 = void 0, __asyncValues(item.data)), _d; _d = yield _c.next(), !_d.done;) {
                            const data = _d.value;
                            arregloDatos.push(data);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) yield _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dataJSON_1_1 && !dataJSON_1_1.done && (_a = dataJSON_1.return)) yield _a.call(dataJSON_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (arregloDatos.length) {
            Noticias_Controller_1.noticiasController.importarNoticias(arregloDatos, req, res);
        }
    }));
};
exports.importarDatos = importarDatos;
