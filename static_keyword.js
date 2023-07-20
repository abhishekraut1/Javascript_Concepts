class Employee{
    constructor(name){ 
        this.name = Employee.captalize(name);
        console.log("Name:",this.name);
    }
    // static method-> it can be called using class name in which it is defined AND not by any object of class
    static captalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
}

let emp = new Employee("abhi");
let emp2 = new Employee(Employee.captalize("kushal"));
