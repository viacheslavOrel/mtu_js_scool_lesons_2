const incorrectInputException = require('../errors/incorrectInput');

module.exports = number => {
    if (!Number.isInteger(number)) {
        throw new incorrectInputException('Input value is not int');
    }

    return number.toString() === number.toString().split("").reverse().join("")
};
