"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.getCode = function () {
        return this.code;
    };
    return Patient;
}());
exports.Patient = Patient;
