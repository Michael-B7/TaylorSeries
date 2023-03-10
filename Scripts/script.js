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
    let result = calc()
    document.querySelector("p").innerHTML = `\sqrt{x}`
})

function calc(){
    // const parser = math.parser();
    // parser.evaluate(`f(x) = ${equation}`)
    let deriv = equation;
    let polynomial = math.evaluate(equation, {x:center}).toString();
    console.log(deriv)
    for(let i=1; i<=degree; i++){
        // console.log(i)
        deriv = math.derivative(deriv, 'x').toString()
        console.log(deriv)
        polynomial += `+${math.rationalize(((math.chain(deriv).evaluate({x:center}).simplify().done())/math.factorial(i)))}(x-${center})^${i}`
        // `${math.simplify(`(${math.evaluate(deriv, {x:center})}(x-${center})^${i})/${math.factorial(i)}`)}`
    }
    console.log(`sqrt{x}`);
    return math.simplify(polynomial)
}