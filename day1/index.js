
const lineByLine = require('n-readlines');

if (process.argv.length != 3) {
    console.log("Usage : node index.js <file>");
}


const liner = new lineByLine(process.argv[2]);



let line;
let totalFuelRequired = 0;
while (line = liner.next()) {
    var sampleMass = line.toString('ascii');
     totalFuelRequired += fuelRequiredwithFuel(sampleMass);
}

console.log("Total fuel required is " + totalFuelRequired);

function fuelRequired(mass) {
    let result =  Math.floor(mass / 3) - 2;
    return result;
}

function fuelRequiredwithFuel(mass) {
    let totalReq = 0;
    let result = 0;
    result = fuelRequired(mass)
    totalReq += result;
    while (result >  0) {
        result = fuelRequired(result);
        if (result > 0) {
            totalReq += result
        }
    }
    return totalReq;
}