
var cowsay = require("cowsay");
const student = require('./information');
console.log(student)

console.log(cowsay.say({
    text : `I am ${student.myName} my campus ${student.campus}` ,
    e : "oO",
    T : "U "
}));