const incorrectInputException = require('../errors/incorrectInput');

module.exports = (arr1, arr2) => {
    if (arr1.length === 0 || arr2.length === 0) {
        throw new incorrectInputException('Incorrect input data');
    }

    // нет проверки входящих масивов код 500

    arr1.sort((a, b) => sortByArray(arr2, a, b));

    return arr1;
}

function sortByArray(arr, value1, value2) {
    const indexA = getIndex(arr, value1);
    const indexB = getIndex(arr, value2);

    if (indexA === -1 && indexB === -1) return value1 - value2;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
}

function getIndex(arr, value) {
    return arr.findIndex(item => item === value);
}
