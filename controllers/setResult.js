const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, '../controllers/..', 'data', 'result.json');

module.exports = function (req, res) {
    const newResult = req.body;

    fs.readFile(resultPath, 'utf8', (err, data) => {
        let result;

        if (err) {
            result = [newResult];
        } else {
            result = [newResult, ...JSON.parse(data)];
        }

        fs.writeFile(resultPath, JSON.stringify(result), err => {
            if (err) {
                throw err;
            }

            res.json(result);
        });
    });
}

function sortResult(a, b) {
    return b.point - a.point;
}