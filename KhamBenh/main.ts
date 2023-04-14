import {Patient} from "./Patient";
import {Queue} from "./Queue";
let queue = new Queue();
let patient1 = new Patient("Smith",5)
let patient2 = new Patient("Jones",4)
let patient3 = new Patient("Fehrenbach",6)
let patient4 = new Patient("Brown",1)
let patient5 = new Patient("Ingram",2)
queue.enqueue(patient1);
queue.enqueue(patient2);
queue.enqueue(patient3);
queue.enqueue(patient4);
queue.enqueue(patient5);
queue.sortList();
queue.nextPatient();
console.log(queue.nextPatient());
console.log(queue.waitPatient());
queue.dequeue();
console.log(queue.listPatient);
console.log(queue.sortList());





