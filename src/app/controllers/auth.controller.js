const users = require('../models/User.model');

class authController {
    // [POST] /auth/login
    login(req, res, next) {
        console.log(req.body);
    }

    // [POST] /auth/register
    register(req, res, next) {
        // req.body.id =  
        users.create(req.body);
        res.status(201).send('created')
    }
}

module.exports = new authController();