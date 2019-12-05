
const lineByLine = require('n-readlines');

if (process.argv.length != 3) {
    console.log("Usage : node index.js <file>");
}


const liner = new lineByLine(process.argv[2]);



let line;
let totalFuelRequired = 0;
let sampleData = '';
while (line = liner.next()) {
    sampleData = line.toString('ascii');

}
// console.log(sampleData);
var sampleDataArray = sampleData.split(',');
let opcode = 0;
let operand1 = 0;
let operand2 = 0;

let opcodePtr = 0;
let outputPtr = 0;

console.log(sampleDataArray[0]);
do {
    opcode = parseInt(sampleDataArray[opcodePtr]);
    console.log("opcode is " + opcode);
    operand1 = parseInt(sampleDataArray[sampleDataArray[opcodePtr+1]]);
    operand2 = parseInt(sampleDataArray[sampleDataArray[opcodePtr+2]]);
    outputPtr = parseInt(sampleDataArray[opcodePtr+3]);
    switch (opcode) {
        case 1:
            console.log("adding");
            sampleDataArray[outputPtr] = operand1 + operand2;
            break;
        case 2:
            console.log("multiplying");
            sampleDataArray[outputPtr] = operand1 * operand2;
            break;
        case 99:
            break;
        
    }
    opcodePtr += 4;
} while (opcode != 99 && opcodePtr < sampleData.length)

console.log(sampleDataArray[0]);
