const IncorrectInput = require('../../data/errors/incorrectInput');
const isPalindrome = require('../../data/tasks/task2');

module.exports = function(req, res) {
    try {
        const inputString = req.body.input;

        res.json({result: isPalindrome(inputString)});
    } catch(e) {
        if (e instanceof IncorrectInput) {
            res.status(400).send('Incorrect type of the incoming data');
        } else {
            res.status(500).send('Sorry, unexpected error occurred');
        }
    }
}