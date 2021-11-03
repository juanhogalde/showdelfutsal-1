"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class baseMongo {
    constructor(cadenaNueva) {
        this.db = mongoose_1.default.connection;
        this._options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        this._cadenaDeConexion = 'mongodb://localhost:29017/Desarrollo';
        this._cadenaDeConexion = cadenaNueva ? cadenaNueva : this._cadenaDeConexion;
        this.conectar();
        this.configEventos();
    }
    conectar() {
        mongoose_1.default.connect(this._cadenaDeConexion, this._options);
    }
    configEventos() {
        this.db.once('open', _ => {
            console.info('BD de ' + process.env.NODE_ENV + ' conectada');
        });
        this.db.on('error', err => {
            this.db.close();
            console.error(`BD ERROR:${err}`);
        });
    }
}
exports.baseMongo = baseMongo;
