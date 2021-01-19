const passwordHash = require('password-hash');

exports.hashPassword = function(password) {
    return passwordHash.generate(password);
}

exports.verifyPassword = function(password, hashedPassword) {
    return passwordHash.verify(password, hashedPassword);
}
