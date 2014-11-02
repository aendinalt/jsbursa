var sourceArray = [1, '37', 45, 'котик', undefined, null, '44', '22.3'];

function cleanArray (arr) {
    return arr.filter(isNumber);
}

function isNumber(element) {
    return +element;
}

function mult(a, b) {
    return a * b
}

function average(arr) {
    var multiplication = arr.reduce(mult, 1);
    return Math.pow(multiplication, 1 / arr.length);
}

var cleanedArray = cleanArray(sourceArray);
console.log(cleanedArray);
console.log(average(cleanedArray));