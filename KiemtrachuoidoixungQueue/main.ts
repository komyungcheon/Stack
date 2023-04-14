import {Stack} from "./Stack";
import {Queue} from "./Queue";
function Checkladoixung() {
    for (let i = 0; i < string.length; i++) {
        stack1.push(string[i]);
        queue1.enqueue(string[i]);
    }
    for (let i = 0; i < string.length; i++) {
        if(stack1.pop() !== queue1.dequeue()){
            return "khong doi xung"
        }
    }
    return " la doi xung"
}
let string = "able was I ere I saw elba"
let stack1 = new Stack();
let queue1 = new Queue();
console.log(Checkladoixung());




