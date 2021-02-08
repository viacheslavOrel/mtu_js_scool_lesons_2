const IncorrectInput = require('../../data/errors/incorrectInput');
const romanMethod = require('../../data/tasks/task1');

module.exports = function(req, res) {
    const romanNumber = req.body.input;

    try {
        res.json({result: romanMethod(romanNumber)});
    } catch (e) {
        if (e instanceof IncorrectInput) {
            res.status(400).send('Incorrect type of the incoming data');
        } else {
            res.status(500).send('Sorry, unexpected error occurred');
        }
    }
}