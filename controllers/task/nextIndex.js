const IncorrectInput = require('../../data/errors/incorrectInput');
const nexIndex = require('../../data/tasks/task5');

module.exports = function(req, res) {
    try {
        const {nums, target} = req.body;

        res.json({result: nexIndex(nums, target)});
    } catch(e) {
        if (e instanceof IncorrectInput) {
            res.status(400).send('Incorrect type of the incoming data');
        } else {
            res.status(500).send('Sorry, unexpected error occurred');
        }
    }
}