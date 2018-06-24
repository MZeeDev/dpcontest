const { mongoose } = require('./mongoose')
var CompetitionSchema = new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        candidate1: mongoose.Schema.Types.ObjectId,
        candidate2: mongoose.Schema.Types.ObjectId,
        hours: {
            type: Number,
            default: 24
        }
    },
    {
        timestamps: true
    }
);

let Competition = mongoose.model('Competition', CompetitionSchema);

module.exports = { Competition }