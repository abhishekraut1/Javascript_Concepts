// Inheritance
class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(`${this.name} is running!`);
    }
    shout(){
        console.log(`${this.name} is shouting!`);
    }
}
class Monkey extends Animal{
    eatBanana(){
        console.log(`${this.name} is eating banana!`);
    }
}

let cow = new Animal("Cow","red");
cow.run();
cow.shout();
// cow.eatBanana(); --> throws error
console.log("------");

let monkey = new Monkey("Chimp","brown");
monkey.run();
monkey.shout();
monkey.eatBanana();