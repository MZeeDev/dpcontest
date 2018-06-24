const { mongoose } = require('./mongoose');

var CandidateSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        picUrl: String,
        address: String,
        userId: mongoose.Schema.Types.ObjectId,
        votes: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

let Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = { Candidate }