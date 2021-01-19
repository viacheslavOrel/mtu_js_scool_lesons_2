exports.isAuthorization = async function(req, res, next) {
    const user = await req.app.locals.client.db('mtu_js_school_remove_the_cube').collections('users').findOne({ _id: req.cookies.userId });

    if (user) {
        req.userName = user.name;
        return next();
    } else {
        res.redirect('/login');
    }
}
