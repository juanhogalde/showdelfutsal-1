"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ZonasSchema = new mongoose_1.Schema({
    nombreZona: String,
    tipoZona: Number,
    idSubcategoria: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloSubcategorias' },
    idCategoria: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloCategorias' },
    equipos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloEquipos' }],
    idTorneo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloTorneos' },
});
ZonasSchema.post('save', function (doc, next) {
    doc.populate('idSubcategoria').then(function () {
        next();
    });
});
exports.default = (0, mongoose_1.model)('modeloZonas', ZonasSchema);
