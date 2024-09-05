
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the first number: ', firstNumber => {
    readline.question('Enter the second number: ', secondNumber => {
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        console.log(`The sum is: ${sum}`);
        readline.close();
    });
});
