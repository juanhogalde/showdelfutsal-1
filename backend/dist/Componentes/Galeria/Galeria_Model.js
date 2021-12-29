"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GaleriaSchema = new mongoose_1.Schema({
    tituloGaleria: String,
    fechaCarga: Date,
    fechaModificacion: Date,
});
exports.default = (0, mongoose_1.model)('modeloGaleria', GaleriaSchema);
