/*  Example of using multiple funtions within funtion also calling global variable*/
var add = "addition"; //Global variable//
var sub = "subtraction";
var mul = "multiplication";
var div = "Division";
var cal = "calculation";
function addition() {
    var num1 = 2, num2 = 2; //Scope variable//
    console.log(num1 + num2);
    console.log(add);
    function subtraction() {
        var num1 = 8, num2 = 2; //Scope variable//
        console.log(num1 - num2);
        console.log(sub);
    }
    function multiplication() {
        var num1 = 6, num2 = 2; //Scope variable//
        console.log(num1 * num2);
        console.log(mul);
    }
    function division() {
        var num1 = 10, num2 = 2; //Scope variable//
        console.log(num1 / num2);
        console.log(div);
    }
    subtraction();
    multiplication();
    division();
}
addition();
console.log(cal);
