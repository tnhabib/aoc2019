
const lineByLine = require('n-readlines');

if (process.argv.length != 3) {
    console.log("Usage : node index.js <file>");
    process.exit(0);
}


const liner = new lineByLine(process.argv[2]);

var desiredOutput = 19690720;
var programOutput = 0;
let line;

let sampleData = '';
while (line = liner.next()) {
    sampleData = line.toString('ascii');

}

// run through various programs replacing noun/verb

var noun = 0;
var verb = 0;
while (programOutput != desiredOutput ) {
    var sampleProgram = sampleData.split(',');
    programOutput = runProgram(sampleProgram, noun, verb);
    if (programOutput == desiredOutput) {
        break;
    }
    verb += 1;
    if (verb > 99) {
        verb = 0;
        noun += 1;
    }
}

console.log("Hit desired output  :" + desiredOutput);
console.log("Noun is " + noun + ". Verb is " + verb);
console.log("Solution is " + (100 * noun + verb));




function runProgram(programData, noun, verb) {
    let opcodePtr = 0;
    let outputPtr = 0;
    let opcode = 0;
    let operand1 = 0;
    let operand2 = 0;
    programData[1] = noun;
    programData[2] = verb;

    do {
        opcode = parseInt(programData[opcodePtr]);
        operand1 = parseInt(programData[programData[opcodePtr+1]]);
        operand2 = parseInt(programData[programData[opcodePtr+2]]);
        outputPtr = parseInt(programData[opcodePtr+3]);
        switch (opcode) {
            case 1:
                programData[outputPtr] = operand1 + operand2;
                break;
            case 2:
                programData[outputPtr] = operand1 * operand2;
                break;
            case 99:
                break;
            
        }
        opcodePtr += 4;
    } while (opcode != 99 && opcodePtr < programData.length)
    return programData[0];
}



