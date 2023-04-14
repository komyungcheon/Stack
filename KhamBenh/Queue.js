"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.listPatient = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.listPatient.push(item);
    };
    Queue.prototype.dequeue = function () {
        this.listPatient.shift();
    };
    Queue.prototype.sortList = function () {
        this.listPatient.sort(function (a, b) { return a.getCode() - b.getCode(); });
    };
    Queue.prototype.nextPatient = function () {
        return "Xin moi benh nhan ".concat(this.listPatient[0].getName(), " vao kham");
    };
    Queue.prototype.waitPatient = function () {
        return "".concat(this.listPatient[1].getName(), " chuan bi vao kham  ");
    };
    return Queue;
}());
exports.Queue = Queue;
