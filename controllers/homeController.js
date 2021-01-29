exports.index = function (req, res) {
    res.render('game', {
        title: 'Remove the cube',
        username: req.session.user.username
    });
}