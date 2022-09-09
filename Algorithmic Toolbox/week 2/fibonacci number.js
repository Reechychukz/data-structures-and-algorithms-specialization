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
    // write your code here
    let res = [];
    if(n === 0) return 0;
    if(n === 1) return 1;
    res[0] = 0;
    res[1] = 1;

    for(let i = 2; i <= n; i++){
        res[i] = res[i - 1] + res[i - 2];
    }

    return res[n];
}

module.exports = fib;
