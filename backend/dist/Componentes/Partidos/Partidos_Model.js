"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PartidosSchema = new mongoose_1.Schema({
    equipoLocal: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloEquipos' },
    equipoVisitante: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloEquipos' },
    resultadoLocal: { type: Number },
    resultadoVisitante: { type: Number },
    penalesLocal: { type: Number },
    penalesVisitante: { type: Number },
    fechaPartido: { type: Date },
    idEstadio: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloEstadios' },
    posicionFixture: { type: Number },
    comentarios: [
        {
            color: { type: String },
            texto: { type: String },
        },
    ],
    campeonato: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloCampeonatos' },
    idTabla: { type: mongoose_1.Schema.Types.ObjectId, ref: 'modeloTablas' },
});
exports.default = (0, mongoose_1.model)('modeloPartidos', PartidosSchema);
