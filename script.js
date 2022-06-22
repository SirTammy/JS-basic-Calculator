let var1 = parseInt(prompt("Enter First number"));
let operator = prompt("Select an operator from the options: '+, -, *, /");
let var2 = parseInt(prompt("Enter Second number"));

if (operator === "+"){
    console.log(var1 + var2);
} else if (operator === "-"){
    console.log(var1 - var2);
} else if (operator==="*"){
    console.log(var1 * var2);
} else if (operator === "/"){
    console.log(var1 / var2);
}