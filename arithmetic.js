let num1 = 14;
let num2 = 56;
let sum = num1 + num2;
console.log(`Addition: ${num1} + ${num2} = ${sum}`);

// Subtraction
let difference = num1 - num2;
console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);

// Multiplication
let product = num1 * num2;
console.log(`Multiplication: ${num1} * ${num2} = ${product}`);

// Division
let quotient = num1 / num2;
console.log(`Division: ${num1} / ${num2} = ${quotient}`);

// Modulus
let remainder = num1 % num2;
console.log(`Modulus: ${num1} % ${num2} = ${remainder}`);

// Increment
let incrementedNum = num1;
incrementedNum++; // Postfix increment
console.log(`Increment (postfix): ${num1}++ results in ${incrementedNum}`);

let prefixIncrementedNum = num2;
++prefixIncrementedNum; // Prefix increment
console.log(`Increment (prefix): ++${num2} results in ${prefixIncrementedNum}`);

// Decrement
let decrementedNum = num1;
decrementedNum--; // Postfix decrement
console.log(`Decrement (postfix): ${num1}-- results in ${decrementedNum}`);

let prefixDecrementedNum = num2;
--prefixDecrementedNum; // Prefix decrement
console.log(`Decrement (prefix): --${num2} results in ${prefixDecrementedNum}`);

// Exponentiation
let power = num1 ** 2; // num1 raised to the power of 2
console.log(`Exponentiation: ${num1} ** 2 = ${power}`);