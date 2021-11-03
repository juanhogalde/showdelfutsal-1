"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PublicidadesSchema = new mongoose_1.Schema({
    nombrePublicidad: { type: String, unique: true, required: true },
    ancho: { type: Number },
    alto: { type: Number },
    isActiva: { type: Boolean, default: false },
    ubicacion: { type: String, unique: true, required: true },
    direccion: { type: String },
});
exports.default = (0, mongoose_1.model)('modeloPublicidades', PublicidadesSchema);
