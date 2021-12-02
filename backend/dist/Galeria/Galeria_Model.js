"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GaleriaSchema = new mongoose_1.Schema({
    tituloGaleria: String,
    imagenesId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloImagenes' }],
    videosId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloVideos' }],
    fechaCarga: Date,
    fechaModificacion: Date,
});
exports.default = (0, mongoose_1.model)('modeloGaleria', GaleriaSchema);
