const express = require('express');
const path = require('path');

const app = express();
const port = 9090;

// Static data -------------------------------------------------------------
const jsPath = path.join(__dirname, 'public', 'javascript');
const cssPath = path.join(__dirname, 'public', 'stylesheets');

app.use(express.static(jsPath));
app.use(express.static(cssPath));
app.use(express.json());

// Game route --------------------------------------------------------------
const home = require('./controllers/home');
const getResults = require('./controllers/getResult');
const setResult = require('./controllers/setResult');

app.get('/', home);
app.get('/results', getResults);
app.post('/results', setResult);


// api routs -------------------------------------------------------------------
const romanConvert = require('./controllers/task/roman');
const palindrome = require('./controllers/task/palindrome');
const brackets = require('./controllers/task/brackets');
const arraySort = require('./controllers/task/arraySort');
const nexIndex = require('./controllers/task/nextIndex');


app.post('/api/tasks/roman', romanConvert);
app.post('/api/tasks/palindrome', palindrome);
app.post('/api/tasks/brackets', brackets);
app.post('/api/tasks/arraySort', arraySort);
app.post('/api/tasks/nextIndex', nexIndex);


app.listen(port);