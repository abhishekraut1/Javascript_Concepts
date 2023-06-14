    function HouseKeeper (name,age){
        this.name = name;
        this.age = age;
        this.sayHello = function(){
            console.log("Hello I am",this.name);
    }
    }
let h1 = new HouseKeeper("Abhi",19);
console.log(h1.name);
h1.sayHello();
