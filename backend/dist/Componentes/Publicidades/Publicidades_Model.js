"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PublicidadesSchema = new mongoose_1.Schema({
    nombrePublicidad: { type: String, unique: true, required: true },
    isActiva: { type: Boolean, default: false },
    idMedidas: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloMedidasPublicidad',
        },
    ],
    idImagen: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloImagenes',
        },
    ],
    fecha: { type: Date },
});
exports.default = (0, mongoose_1.model)('modeloPublicidades', PublicidadesSchema);
