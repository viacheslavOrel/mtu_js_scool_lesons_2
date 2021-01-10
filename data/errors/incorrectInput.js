module.exports = class IncorrectInput extends Error {
    constructor(message) {
        super(message || 'Incorrect input value');
        this.name = 'IncorrectInput';
    }
}