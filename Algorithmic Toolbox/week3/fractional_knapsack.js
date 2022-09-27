// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    // write your code here
    let idx = 0;
    let profits = [];
    let knapsack = [];
    let itemsWeight = 0;
    let maxProfit = 0;
    while(idx < count) {
        profits.push(parseFloat(values[idx] / weights[idx]));
        idx++;
    }
    
    while(itemsWeight < capacity && profits.reduce((a,b) => a+b,0) !== 0) {
        maxProfit = Math.max(...profits);
        maxProfitIdx = profits.indexOf(maxProfit);

        if(weights[maxProfitIdx] > capacity - itemsWeight) {
            knapsack.push(parseFloat((capacity - itemsWeight) / weights[maxProfitIdx]) * values[maxProfitIdx])
            itemsWeight += capacity - itemsWeight
        } else {
            knapsack.push(values[maxProfitIdx]);
            itemsWeight += weights[maxProfitIdx]
        }

        profits[maxProfitIdx] = 0;
         
    }
    return parseFloat(knapsack.reduce((a, b) => a + b, 0)).toFixed(4);
}

module.exports = max;
