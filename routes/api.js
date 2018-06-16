'use strict';

const { Router } = require('express');
const { userController } = require('./../controllers/user');
const router = new Router();

//USER ROUTES
router.get('/user', userController.getUsers);
router.post('/user/signup', userController.signup);
router.post('/user/login', userController.login);
router.post('/user/login/social', userController.socialLogin);
router.post('/user/profile', userController.profile);
router.get('/user/logout', userController.logout);
router.post('/user/login/check', userController.checkLogin);
router.get('/user/verify-email', userController.verifyEmail);


router.get("/test", function (req, res) {
    res.send({ success: true });
});

module.exports = router;