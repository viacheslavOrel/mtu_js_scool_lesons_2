module.exports = function(req, res) {
    res.clearCookie('isAuth');
    res.redirect('/');
}