let equation;
let degree;
let equInput = document.querySelector("input.equation");
let degInput = document.querySelector("input.degree");
console.log(9)
equInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        equation = equInput.value
        console.log(equation)
    }
})

degInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        degree = degInput.value
        console.log(degree)
    }
})

