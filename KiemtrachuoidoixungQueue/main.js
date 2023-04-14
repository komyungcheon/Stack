"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function Checkladoixung() {
    for (var i = 0; i < string.length; i++) {
        stack1.push(string[i]);
        queue1.enqueue(string[i]);
    }
    for (var i = 0; i < string.length; i++) {
        if (stack1.pop() !== queue1.dequeue()) {
            return "khong doi xung";
        }
    }
    return " doi xung";
}
var string = "able was I ere I saw elba";
var stack1 = new Stack_1.Stack();
var queue1 = new Queue_1.Queue();
console.log(Checkladoixung());
