import { create, all } from 'mathjs'

let equation;
let degree;
let center;

let equInput = document.querySelector("input.equation");
let degInput = document.querySelector("input.degree");
let cenInput = document.querySelector("input.center");
let submitButton = document.querySelector(".submit")

submitButton.addEventListener("click", function(){
    equation = equInput.value;
    degree = degInput.value;
    center = cenInput.value;
    calc()
})

function calc(){
    for(let i=0; i<=degree; i++){
        let deriv = math.derivative(equation, x);
        console.log(deriv);
    }
    
}