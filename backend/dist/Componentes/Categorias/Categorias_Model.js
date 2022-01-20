"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategoriasSchema = new mongoose_1.Schema({
    nombreCategoria: { type: String },
    keyCategoria: { type: Number },
});
exports.default = (0, mongoose_1.model)('modeloCategorias', CategoriasSchema);
