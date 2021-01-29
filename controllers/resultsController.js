const userModel = require('../models/user');

exports.getResults = async function(req, res) {
    const users = await userModel.find({ gameResult: { $gt: 0 } })
        .sort('gameResult')
        .limit(10);

    const topResults = users.map(getResultInfo);

    res.json(topResults);
}

function getResultInfo(user) {
    return {
        'name': user.username,
        'point': user.gameResult
    }
}

exports.setResult = async function(req, res) {
    await userModel.updateOne({ _id: req.session.user._id }, {
        gameResult: req.body.gameResult,
        gameQuantity: req.session.user.gameQuantity + 1
    });

    res.redirect('/results');
}
