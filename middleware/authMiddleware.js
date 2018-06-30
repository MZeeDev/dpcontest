const moment = require('moment')
const jwt = require('jwt-simple')
const config = require('./../config')

class AuthMiddleware {
    ensureAuthenticated(req, res, next) {
        if (!req.header('Authorization')) {
            console.log("here");
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
        }
        var token = req.header('Authorization').split(' ')[1];

        var payload = null;
        try {
            
            payload = jwt.decode(token, config.TOKEN_SECRET);
        }
        catch (err) {
            return res.status(401).send({ message: err.message });
        }

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'Token has expired' });
        }
        req.user = payload.sub;
        next();
    }

    createJWT(user) {
        var payload = {
            sub: user._id,
            iat: moment().unix(),
            exp: moment().add(14, 'days').unix()
        };
        return jwt.encode(payload, config.TOKEN_SECRET);
    }

    decodeJWT(token) {
        return jwt.decode(token, config.TOKEN_SECRET);
    }
}

let authMiddleware = new AuthMiddleware();
module.exports = { authMiddleware }