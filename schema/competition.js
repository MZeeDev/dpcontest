const { mongoose } = require('./mongoose')
var CompetitionSchema = new mongoose.Schema(
    {
        userID:mongoose.Types.ObjectId,
        candidate1: mongoose.Types.ObjectId,
        candidate2: mongoose.Types.ObjectId,
        // candidate1: String,
        // candidate2: String,
        createdAt:timestamps,
        hours: {
            type: timestamps
        }
    },
    {
        timestamps: true
    }
);

let User = mongoose.model('Competition', CompetitionSchema);

module.exports = { Competition }