"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ImagenesSchema = new mongoose_1.Schema({
    fuente: { type: String },
    alto: { type: Number },
    ancho: { type: Number },
    descripcion: { type: String },
    isGaleria: { type: Boolean, default: false },
    galeriaId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloGaleria' },
    fechaCarga: { type: Date },
});
exports.default = (0, mongoose_1.model)('modeloImagenes', ImagenesSchema);
