const fs = require('fs');
const path = require('path');
const resultPath = path.join(__dirname, '../controllers/..', 'data', 'result.json');

module.exports = function(req, res) {
    fs.readFile(resultPath, 'utf8', (err, data) => {
        if (err) {
            res.json([]);
        } else {
            const results = JSON.parse(data);
            results.sort((a, b) => b.point - a.point);
            res.json(results);
        }
    })
}
