import {Patient} from "./Patient";

export class Queue {
    listPatient: Patient [] = [];

    constructor() {
    }

    enqueue(item: Patient) {
        this.listPatient.push(item);
    }

    dequeue() {
        this.listPatient.shift();
    }

    sortList() {
        this.listPatient.sort((a: Patient, b: Patient) => a.getCode() - b.getCode())
    }
    nextPatient(){
        return `Xin moi benh nhan ${this.listPatient[0].getName()} vao kham`
    }
    waitPatient(){
        return `${this.listPatient[1].getName()} chuan bi vao kham  `
    }
}


