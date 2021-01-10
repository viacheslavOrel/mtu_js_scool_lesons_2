const incorrectInputException = require('../errors/incorrectInput');

module.exports = (arr, value) => {
    if (arr.length === 0 || value) {
        throw new incorrectInputException('Incorrect input data');
    }

    let currIndex = arr.findIndex(item => item === value);

    if (currIndex !== -1) return currIndex;

    return findNewIndex(arr, value);
}


function findNewIndex(arr, value) {
    const currIndex = arr.findIndex(item => item > value);

    if (currIndex !== -1) return currIndex;
    return arr.length;
}
