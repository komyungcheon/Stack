export class Patient {
    name :string;
    code : number;
    constructor(name :string,code :number) {
        this.name = name;
        this.code = code;
    }
    getName(){
        return this.name
    }
    getCode(){
        return this.code;
    }
}