/*  Example of using multiple funtions within funtion also calling global variable*/

let add = "addition"                  //Global variable//
let sub = "subtraction"
let mul = "multiplication"
let div = "Division"

let cal = "calculation"

function addition(){
    let num1 = 2, num2 = 2;              //Scope variable//
    console.log(num1+num2)
    console.log(add)

function subtraction(){
    let num1 = 8, num2 = 2;              //Scope variable//
    console.log(num1-num2)
    console.log(sub)
}

function multiplication(){
        let num1 = 6, num2 = 2;              //Scope variable//
        console.log(num1*num2)
        console.log(mul)
}
function division(){
    let num1 = 10, num2 = 2;              //Scope variable//
    console.log(num1/num2)
    console.log(div)
}
subtraction()

multiplication()

division()
}
addition()

console.log (cal)
