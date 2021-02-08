const IncorrectInput = require('../../data/errors/incorrectInput');
const brackets = require('../../data/tasks/task3');

module.exports = function(req, res) {
    try {
        const inputString = req.body.input;

        res.json({result: brackets(inputString)});
    } catch(e) {
        if (e instanceof IncorrectInput) {
            res.status(400).send('Incorrect type of the incoming data');
        } else {
            res.status(500).send('Sorry, unexpected error occurred');
        }
    }
}