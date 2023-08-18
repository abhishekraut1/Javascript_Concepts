// Using destructuring
let {hi, hello} = require("./module1");
hi();
hello("Rushi");

// Without destructuring
let obj = require("./module1");
obj.hi();
obj.hello("Pawan");