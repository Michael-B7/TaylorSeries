let equation;
let input = document.querySelector("input")

input.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        equation = input.value
        
    }
})