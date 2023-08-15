// 1)
class Complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
    }

    set real(newReal){
        this._real = newReal;
    }
    get real(){
        return this._real;
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
    get imaginary(){
        return this._imaginary;
    }
}

let c1 = new Complex(4,7);
let c2 = new Complex(2,3);

console.log(`c1 = ${c1.real}+${c1.imaginary}i`);
c1.add(c2);
console.log(`c1 = ${c1.real}+${c1.imaginary}i`);

c1.real = 10;
c1.imaginary = 20;
console.log(c1.real);
console.log(c1.imaginary);

// 2)
// class Human{
//     constructor(name){
//         this.name = name;
//     }
//     walk(){
//         console.log("Human "+this.name+" is walking!");
//     }
// }

// class Student extends Human{
//     walk(){
//         super.walk()
//         console.log("Student "+this.name+" is walking!");
//     }
// }

// let o = new Student("Abhi");
// o.walk()