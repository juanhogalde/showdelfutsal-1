"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategoriasSchema = new mongoose_1.Schema({
    nombreCategoria: { type: String },
    keyCategoria: { type: Number },
    idSubcategorias: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloSubcategorias' }],
});
exports.default = (0, mongoose_1.model)('modeloCategorias', CategoriasSchema);
