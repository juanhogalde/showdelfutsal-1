"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EstadiosSchema = new mongoose_1.Schema({
    nombreEstadio: { type: String },
    direccion: { type: String },
});
exports.default = (0, mongoose_1.model)('modeloEstadios', EstadiosSchema);
