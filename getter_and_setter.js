class Animal{
    constructor(name){
        this._name = name;
    }
    fly=()=>{
        console.log(`${this.name} is flying!`);
    }
    set name(newName){
        this._name = newName;
    }
    get name(){
        return this._name;
    }
}

class Rabbit extends Animal{
    eatCarrot() {
        console.log("Eating carrot")
      }
}

let a = new Animal("bird");
console.log(a.name);
a.fly();
a.name = "peacock";
a.fly()

let b = new Rabbit();
console.log(a instanceof Animal);
console.log(a instanceof Rabbit);

console.log(b instanceof Animal);
console.log(b instanceof Rabbit);