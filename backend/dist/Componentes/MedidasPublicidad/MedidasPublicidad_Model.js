"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MedidasPublicidadSchema = new mongoose_1.Schema({
    ancho: { type: Number },
    alto: { type: Number },
    ubicacion: { type: String },
    direccion: { type: String },
    keyMedidas: { type: Number },
    disponible: { type: Boolean, default: true },
});
exports.default = (0, mongoose_1.model)('modeloMedidasPublicidad', MedidasPublicidadSchema);
