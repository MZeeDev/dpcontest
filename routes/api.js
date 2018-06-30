'use strict';

const { Router } = require('express');
const { userController } = require('../controllers/userController');
const { competitionController } = require('./../controllers/competitionController');
const { candidateController } = require('./../controllers/candidateController');
const router = new Router();

//USER ROUTES
router.get('/user', userController.getUsers);
router.get('/user/getbyID', userController.getUserbyId);
router.get('/user/competition', userController.getUserCompetitions);
router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.post('/user/login/social', userController.socialLogin);
router.post('/user/profile', userController.profile);
router.get('/user/logout', userController.logout);
router.post('/user/login/check', userController.checkLogin);
router.get('/user/verify-email', userController.verifyEmail);



//COMPETITION ROUTES
router.get('/competition', competitionController.getCompetitions);
router.get('/competition/:competitionId', competitionController.getCompetitionById);
router.post('/competition', competitionController.addCompetition);
router.delete('/competition/:competitionId', competitionController.deleteCompetition);

//CANDIDATE ROUTES
router.put('/candidate/vote', candidateController.addVote);


router.get("/test", function (req, res) {
    res.send({ success: true });
});

module.exports = router;