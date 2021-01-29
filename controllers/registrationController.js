const validator = require('validator');
const userModel = require('../models/user');

exports.getForm = function (req, res) {
    res.render('registr', { title: 'Remove the cube. New user' });
}

exports.register = async function (req, res) {
    const formBody = {
        login: req.sanitize(req.body.login),
        username: req.sanitize(req.body.name),
        password: req.body.password,
        registerIp: req.ip
    }

    const validation = {};
    let isValid = true;

    if (!validator.isAlphanumeric(formBody.login)) {
        validation.login = 'is-invalid';
        isValid = false;
    }

    if (!validator.isLength(formBody.password, { min: 8 })) {
        validation.password = 'is-invalid';
        isValid = false;
    } else if (formBody.password !== req.body.passwordConfirm) {
        validator.passwordConfirm = 'is-invalid';
        isValid = false;
    }

    const dbUsers = await userModel.find({ login: formBody.login });

    if (!isValid) {
        return res.render('registr', {
            title: 'Remove the cube. New user',
            validation
        });
    }

    const user = new userModel(formBody);

    try {
        await user.save();
    } catch(e) {
        console.error(e);
        res.status(500);
    }
    
    req.session.user = user;
    res.redirect('/');
}