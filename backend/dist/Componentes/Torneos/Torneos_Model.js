"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TorneosSchema = new mongoose_1.Schema({
    tituloTorneo: String,
    fechaInicio: Date,
    fechaFin: Date,
    idCategoria: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloCategorias',
        },
    ],
    idSubcategoria: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloSubcategorias',
        },
    ],
    tipoTorneo: Number,
});
TorneosSchema.post('save', function (doc, next) {
    doc.populate('idSubcategoria').then(function () {
        next();
    });
});
exports.default = (0, mongoose_1.model)('modeloTorneos', TorneosSchema);
