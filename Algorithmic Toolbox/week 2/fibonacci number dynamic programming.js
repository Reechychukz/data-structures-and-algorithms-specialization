// by Alexander Nikolskiy

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

function fib(n, mem = {}) {
    // write your code here
    if(n in mem) return mem[n];
    if (n === 0) return 0;
    if (n === 1) return 1;

    mem[n] = fib(n - 1, mem) + fib(n - 2, mem);
    return mem[n];
}

module.exports = fib;
