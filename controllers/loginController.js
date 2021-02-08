const passwordHash = require('password-hash');
const userModel = require('../models/user');

const title = 'Remove the cube. Login';

exports.getLoginForm = function (req, res) {
    res.render('login', { title });
}

exports.validateLoginForm = async function (req, res) {
    const login = req.body.login.trim();
    const user = await userModel.findOne({ login });

    const validate = {};

    if (user) {
        validate.login = 'is-valid';

        if (passwordHash.verify(req.body.password, user.password)) {
            req.session.user = user;
            res.redirect('/');        
        } else {
            validate.password = 'is-invalid';
        }
    } else {
        validate.login = 'is-invalid';
    }

    res.render('login', { title, login, validate });
}
