"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SubcategoriasSchema = new mongoose_1.Schema({
    nombreSubcategoria: { type: String },
    keySubcategoria: { type: Number },
    idCategoria: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloCategorias' },
});
exports.default = (0, mongoose_1.model)('modeloSubcategorias', SubcategoriasSchema);
