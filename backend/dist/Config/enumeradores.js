"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = exports.keySubcategoria = exports.keyCategoria = exports.TipoZona = void 0;
var TipoZona;
(function (TipoZona) {
    TipoZona[TipoZona["Eliminatoria"] = 1] = "Eliminatoria";
    TipoZona[TipoZona["EliminatoriaConDG"] = 2] = "EliminatoriaConDG";
    TipoZona[TipoZona["FaseGrupo"] = 3] = "FaseGrupo";
})(TipoZona = exports.TipoZona || (exports.TipoZona = {}));
var keyCategoria;
(function (keyCategoria) {
    keyCategoria[keyCategoria["masculino"] = 1] = "masculino";
    keyCategoria[keyCategoria["femenino"] = 2] = "femenino";
    keyCategoria[keyCategoria["infantil"] = 3] = "infantil";
    keyCategoria[keyCategoria["copa"] = 4] = "copa";
    keyCategoria[keyCategoria["liga"] = 5] = "liga";
})(keyCategoria = exports.keyCategoria || (exports.keyCategoria = {}));
var keySubcategoria;
(function (keySubcategoria) {
    keySubcategoria[keySubcategoria["divA"] = 1] = "divA";
    keySubcategoria[keySubcategoria["divB"] = 2] = "divB";
    keySubcategoria[keySubcategoria["divC"] = 3] = "divC";
    keySubcategoria[keySubcategoria["divD"] = 4] = "divD";
    keySubcategoria[keySubcategoria["divE"] = 5] = "divE";
    keySubcategoria[keySubcategoria["masculino"] = 6] = "masculino";
    keySubcategoria[keySubcategoria["femenino"] = 7] = "femenino";
})(keySubcategoria = exports.keySubcategoria || (exports.keySubcategoria = {}));
var Rol;
(function (Rol) {
    Rol[Rol["sinAcceso"] = 0] = "sinAcceso";
    Rol[Rol["Administrador"] = 1] = "Administrador";
    Rol[Rol["Editor"] = 2] = "Editor";
    Rol[Rol["Anotador"] = 3] = "Anotador";
})(Rol = exports.Rol || (exports.Rol = {}));
