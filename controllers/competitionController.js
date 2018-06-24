const { Competition } = require('./../schema/competition');
const { Candidate } = require('./../schema/candidate');
const { errorHandler } = require('./../utils/errorHandler');
const moment = require('moment');
const mongoose = require('mongoose')

class CompetitionController {
    async getCompetitions(req, res) {
        try {
            let competitions = await Competition.aggregate(CompetitionController.prototype.competitionPipeline());
            res.send(competitions);
        } catch (error) {
            errorHandler.sendError(res, error);
        }
    }

    async addCompetition(req, res) {
        try {
            let candidate1 = req.body.candidate1;
            let candidate2 = req.body.candidate2;
            candidate1.userId = req.body.userId;
            candidate2.userId = req.body.userId;
            let candidate1Obj = new Candidate(candidate1);
            let candidate2Obj = new Candidate(candidate2);
            candidate1Obj = await candidate1Obj.save();
            candidate2Obj = await candidate2Obj.save();
            let competition = {
                userId: req.body.userId,
                candidate1: candidate1Obj._id,
                candidate2: candidate2Obj._id,
                hours: req.body.hours
            }
            let competitionObj = new Competition(competition);
            competitionObj = await competitionObj.save();
            res.send(competitionObj);
        } catch (error) {
            errorHandler.sendError(res, error);
        }
    }

    async deleteCompetition(req, res) {
        try {
            let competitionId = req.params.competitionId;
            let competition = await Competition.findByIdAndRemove(competitionId);
            if (competition == null)
                throw { code: 400, message: "Competition not found!" };
            else res.send({ success: true });
        } catch (error) {
            errorHandler.sendError(res, error);
        }
    }

    async getCompetitionById(req, res) {
        try {
            let competitionId = mongoose.Types.ObjectId(req.params.competitionId);
            let competitions = await Competition.aggregate([
                {
                    $match: {
                        _id: competitionId
                    }
                }
            ].concat(CompetitionController.prototype.competitionPipeline())
            );
            let competition = competitions[0];
            if (competition == null)
                throw { code: 400, message: "Competition not found!" };
            else {
                let returnObj = {
                    expired: false
                };
                let end = moment();
                let startTime = moment(competition.createdAt);
                let duration = moment.duration(end.diff(startTime));
                let hours = duration.asHours();
                if (hours > competition.hours) {
                    returnObj.expired = true;
                }
                returnObj.competitionDetails = competition;
                res.send(returnObj);
            }
        } catch (error) {
            errorHandler.sendError(res, error);
        }
    }

    competitionPipeline() {
        return [
            {
                $lookup: {
                    from: 'candidates',
                    localField: 'candidate1',
                    foreignField: '_id',
                    as: 'candidate1'
                }
            },
            {
                $unwind: {
                    path: "$candidate1"
                }
            },
            {
                $lookup: {
                    from: 'candidates',
                    localField: 'candidate2',
                    foreignField: '_id',
                    as: 'candidate2'
                }
            },
            {
                $unwind: {
                    path: "$candidate2"
                }
            }
        ];
    }
}

const competitionController = new CompetitionController();
module.exports = { competitionController };