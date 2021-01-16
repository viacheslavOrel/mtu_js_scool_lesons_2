const path = require('path');

const pathToGame = path.join(__dirname, '../controllers/..', 'bin', 'index.html');
const pathToLigin = path.join(__dirname, '../controllers/..', 'bin', 'login.html')

module.exports = function(req, res) {
    if (req.cookies.isAuth === 'yes') {
        res.sendFile(pathToGame);
    } else {
        res.sendFile(pathToLigin);
    }
}