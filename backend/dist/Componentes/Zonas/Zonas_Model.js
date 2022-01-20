"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ZonasSchema = new mongoose_1.Schema({
    nombreZona: String,
    tipo: Number,
    idSubcategoria: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloSubcategorias' },
});
exports.default = (0, mongoose_1.model)('modeloZonas', ZonasSchema);
