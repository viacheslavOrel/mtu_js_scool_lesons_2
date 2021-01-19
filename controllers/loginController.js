const path = require('path');
const { verifyPassword } = require('./helper');

const loginFormView = path.join(__dirname, '../controllers/..', 'views', 'login.handlebars');

exports.getForm = function(req, res) {
    res.render(loginFormView, {
        validate: {
            login: '',
            password: ''
        },
        login: ''
    });
}

exports.login = async function(req, res) {
    const login = req.body.login.trim();
    const password = req.body.password;

    const user = await req.app.locals.db.collections('users').findOne({ login });
    const validate = {
        login: '',
        password: '',
    }

    if (user) {
        validate.login = 'is-valid';

        if (verifyPassword(password, user.password)) {
            res.cookie('userId', user._id, { expires: new Date(Date.now() + 24 * 3600000) } )
                .redirect('/');
        } else {
            validate.password = 'is-invalid';
        }
    } else {
        validate.login = 'is-invalid';
    }

    res.render()

    
    if (user && verifyPassword(password, user.password)) {
        res.cookie('userId', user._id, { expires: new Date(Date.now() + 24 * 3600000) })
            .redirect('/');
    } else {
        res.render(loginFormView, { validate , login });
    }
}