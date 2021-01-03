const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const jsPath = path.join(__dirname, 'public', 'javascript');
const cssPath = path.join(__dirname, 'public', 'stylesheets');
const resultPath = path.join(__dirname, 'data', 'result.json');

app.use(express.static(jsPath));
app.use(express.static(cssPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'bin', 'index.html'));
});

app.get('/results', (req, res) => {
    fs.readFile(resultPath, 'utf8', (err, data) => {
        if (err) {
            res.json([]);
        } else {
            const results = JSON.parse(data);
            results.sort((a, b) => b.point - a.point);
            res.json(results);
        }
    })
});

app.use(express.json());

app.post('/results', (req, res) => {
    const result = req.body;

    let results = [result];
    fs.readFile(resultPath, 'utf8', (err, data) => {
        if (err) {
            //
        } else {
            results = [...results, ...JSON.parse(data)];
        }

        fs.writeFile(resultPath, JSON.stringify(results), err => {
            if (err) {
                throw err;
            } else {
                res.send(JSON.stringify(results.sort((a, b) => b.point - a.point)));
            }
        });
    });
})

app.listen(port);