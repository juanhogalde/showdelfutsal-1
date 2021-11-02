"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HomesSchema = new mongoose_1.Schema({
    vivo: String,
    isVivoActivo: Boolean,
    radio: String,
    idPublicidadesInicio: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'modeloPublicidades',
        },
    ],
});
exports.default = (0, mongoose_1.model)('modeloHomes', HomesSchema);
