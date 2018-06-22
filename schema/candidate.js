const { mongoose } = require('./mongoose')
var CandidateSchema = new mongoose.Schema(
    {
        name:String,
        email: String,
        picUrl: String,
        address:timestamps,
        userId:mongoose.Types.ObjectId,
        votes:Number
    },
    {
        timestamps: true
    }
);

let Candidate = mongoose.model('Candidate', CandidateSchema);

module.exports = { Candidate }