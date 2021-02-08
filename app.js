const express = require('express');
const exphb = require('express-handlebars');
const cookiesParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const expressSanitizer = require('express-sanitizer');

const dbConnection = require('./dbConnection');

const isAutorization = require('./node/isAuthorization');

const homeRouters = require('./routes/homeRoutes');
const loginRoutes = require('./routes/loginRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const registerRouters = require('./routes/registerRouters');
const resultsRouter = require('./routes/resultsRoutes');

// config express ------------------------------------------------------------------------------------------------------
const app = express();

app.use(express.json());
app.use(expressSanitizer());
app.use(cookiesParser());
app.use(express.urlencoded({extended: true}));

// config session ------------------------------------------------------------------------------------------------------
app.use(session({
    secret: 'x77!M=pn&l%7L0%',
    resave: false,
    cookie: {maxAge: 24 * 3600000},
    saveUninitialized: true
}));

// config views --------------------------------------------------------------------------------------------------------
const hbs = exphb.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

dbConnection('api', '1DK9xyQmtGK7gfLq', () => {
    app.listen(9090, () => {
        console.log('Server has been started..');
    });
});

// config routes -------------------------------------------------------------------------------------------------------

app.use('/login', loginRoutes);
app.use('/registration', registerRouters);

app.use(isAutorization);

app.use('/logout', logoutRoutes);

app.use(express.static(path.join(__dirname, 'static')));
app.use('/', homeRouters);

app.use('/results', resultsRouter);