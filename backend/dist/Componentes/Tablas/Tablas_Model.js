"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TablasSchema = new mongoose_1.Schema({
    idEquipos: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloEquipos',
        },
    ],
    idCampeonato: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'modeloCampeonatos',
    },
    zona: { type: String },
    tipoZona: { type: Number },
    comentarios: [
        {
            color: { type: String },
            texto: { type: String },
        },
    ],
});
exports.default = (0, mongoose_1.model)('modeloTablas', TablasSchema);
