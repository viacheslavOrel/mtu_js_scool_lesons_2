const mongoose = require('mongoose');

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

module.exports = async function (dbUser, dbPassword, cb) {
    const dbPath = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ottfg.mongodb.net/remove_the_cube?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(dbPath, connectionOptions);
        cb();
    } catch (err) {
        console.error(err);
    }
}

// 'mongodb+srv://api:1DK9xyQmtGK7gfLq@cluster0.ottfg.mongodb.net/mtu_js_school_remove_the_cube?retryWrites=true&w=majority'