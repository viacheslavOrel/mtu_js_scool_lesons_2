const { Schema, model } = require('mongoose');
const passwordHash = require('password-hash');

const user = new Schema({
    login: {
        type: String,
        required: true,
        index: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        set: value => passwordHash.generate(value)
    },
    registerData: {
        type: Date,
        required: true,
        default: Date.now
    },
    registerIp: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        default: 'gamer'
    },
    gameQuantity: {
        type: Number,
        default: 0
     },
     gameResult: {
        type: Number,
         default: 0
     }
});

module.exports = model('User', user);