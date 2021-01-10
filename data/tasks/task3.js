const incorrectInputException = require('../errors/incorrectInput');

module.exports = str => {
    if (str.length === 0) {
        throw new incorrectInputException('Input string is empty');
    }

    const arr = [];

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '[':
            case '{':
            case '(':
                arr.push(str[i]);
                break;
            case ')':
                if (arr.pop() !== '(') return false;
                break;
            case '}':
                if (arr.pop() !== '{') return false;
                break;
            case ']':
                if (arr.pop() !== '[') return false;
                break;
            default:
                throw new incorrectInputException(`Symbol ${str[i]} is incorrect`);
        }
    }

    return true;
}
