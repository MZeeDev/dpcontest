const { Candidate } = require('./../schema/candidate');
const { errorHandler } = require('./../utils/errorHandler');

class CandidateController {
    async addVote(req, res) {
        try {
            let candidateId = req.body.candidateId;
            let candidate = await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } });
            candidate = await Candidate.findById(candidateId);
            res.send(candidate);
        } catch (error) {
            errorHandler.sendError(res, error);
        }
    }
}

const candidateController = new CandidateController();
module.exports = { candidateController };