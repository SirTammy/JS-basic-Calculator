let var1 = parseInt(prompt("Enter First number"));
    while (isNaN(var1)){
     var1 = parseInt(prompt("Enter a valid number"));
    }

let operator = prompt("Select an operator from the options: '+, -, *, /");
    
let var2 = parseInt(prompt("Enter Second number"));
while (isNaN(var2)){
    var2 = parseInt(prompt("Enter a valid number"));
   }

if (operator === "+"){
    sol = parseInt(var1 + var2);
} else if (operator === "-"){
    sol = parseInt(var1 - var2);
} else if (operator==="*"){
    sol = parseInt(var1 * var2);
} else if (operator === "/"){
    sol = parseInt(var1 / var2);
}
alert(`${var1} ${operator} ${var2} = ${sol}`);