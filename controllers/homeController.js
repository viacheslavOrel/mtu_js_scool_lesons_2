exports.index = function ({ session: { user } }, res) {
    res.render('game', {
        title: 'Remove the cube',
        username: user.username,
        isAdmin: user.userRole === 'admin'
    });
}