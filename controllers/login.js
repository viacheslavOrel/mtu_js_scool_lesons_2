const path = require('path');
const fs = require('fs');

const loginPath = path.join(__dirname, '../controllers/..', 'data', 'regData.json');

module.exports = function(req, res) {
    fs.readFile(loginPath, 'utf8', (err, data) => {
        if (!err) {
            const user = JSON.parse(data);
            if (req.body.login === user.login && req.body.password === user.password){
                res.cookie('isAuth', 'yes', { expires: new Date(Date.now() + 24 * 3600000)});
            }
        }
        res.redirect('/');
    });
}