"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EquiposSchema = new mongoose_1.Schema({
    nombreClub: { type: String },
    escudo: { type: String },
    idCategorias: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloCategorias', required: true }],
    idSubcategorias: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloSubcategorias', required: true }],
});
exports.default = (0, mongoose_1.model)('modeloEquipos', EquiposSchema);
