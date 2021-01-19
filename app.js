const express = require('express');
const path = require('path');
const cookiesParser = require('cookie-parser');
const { MongoClient } = require('mongodb');

const allController = require('./controllers/allController');

const homeRouter = require('./routes/homeRouter');
const loginRouter = require('./routes/loginRouter');

const PORT = 9090;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());
app.set("view engine", "hbs");

const mongoUrl = 'mongodb+srv://api:1DK9xyQmtGK7gfLq@cluster0.ottfg.mongodb.net/MTU_JS_SCOOL?retryWrites=true&w=majority';
const mtuDbName = 'mtu_js_school_remove_the_cube';
const client = new MongoClient(mongoUrl, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

client.connect((err, db) => {
    if (err) throw new Error('Error connection to db');
    app.locals.client = client;

    app.listen(PORT, () => console.log('Server start'));
});

app.use(allController.isAuthorization);
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', homeRouter);
app.use('/login', loginRouter);

// // express ------------------------------------------------------------------
// const app = express();

// // // middleware ---------------------------------------------------------------
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(cookiesParser());

// // // Game route --------------------------------------------------------------
// // const home = require('./controllers/home');
// // const login = require('./controllers/login');
// // const logout = require('./controllers/logout');
// // const getResults = require('./controllers/getResult');
// // const setResult = require('./controllers/setResult');

// // app.get('/', home);

// // app.post('/login', login);
// // app.get('/logout', logout);

// // app.get('/results', getResults);
// // app.post('/results', setResult);


// app.listen(port);