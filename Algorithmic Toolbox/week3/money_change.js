const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(money_change(parseInt(line, 10)));
    process.exit();
}

function money_change(n) {
    // write your code here
    let count = 0;
    while(n > 0) {
        if (n - 10 >= 0) {
            n -= 10;
            count++;
        } else if(n - 5 >= 0) {
            n -= 5;
            count++;
        } else {
            n -= 1;
            count++;
        }
    }
    return count;
}

module.exports = money_change;
