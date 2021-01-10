const IncorrectInput = require('../../data/errors/incorrectInput');
const arraySort = require('../../data/tasks/task4');

module.exports = function(req, res) {
    try {
        const {arr1, arr2} = req.body;

        res.json({result: arraySort(arr1, arr2)});
    } catch(e) {
        if (e instanceof IncorrectInput) {
            res.status(400).send('Incorrect type of the incoming data');
        } else {
            res.status(500).send('Sorry, unexpected error occurred');
        }
    }
}
