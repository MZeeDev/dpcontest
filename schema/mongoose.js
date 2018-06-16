var mongoose = require('mongoose');
const mongoConnection = process.env.MONGO_CONNECTION || require('./../config').MONGO_CONNECTION;
mongoose.connect(mongoConnection, (err) => {
    if (err)
        console.log(err)
    else console.log("Db Connected")
});
module.exports = { mongoose };