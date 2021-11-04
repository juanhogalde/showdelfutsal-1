"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CampeonatosSchema = new mongoose_1.Schema({
    tituloCampeonato: String,
    fechaInicio: Date,
    fechaFin: Date,
    idCategoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloCategorias',
        required: true,
    },
    idSubcategoria: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloSubcategorias',
            required: true,
        },
    ],
});
exports.default = (0, mongoose_1.model)('modeloCampeonatos', CampeonatosSchema);
