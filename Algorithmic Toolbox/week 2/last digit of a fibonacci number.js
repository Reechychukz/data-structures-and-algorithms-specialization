const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {

    let res = [];
    res[0] = 0;
    res[1] = 1;

    for (let i = 2; i <= 59; i++) {
        res[i] = (res[i - 1] + res[i - 2]);
    }

    let index = ((n) % 60);

    return res[index] % 10;
}
module.exports = fib;
