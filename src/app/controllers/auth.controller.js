const users = require('../models/User.model');

class authController {
    // [POST] /auth/login
    login(req, res, next) {
        const { username, password } = req.body;
        users.findOne({ username })
        .then((user) => {
            if(!username || !password) {
                return res.status(400).json({
                    message: "Username or Password not present"
                })
            } else {
                if (user.password === password) {
                    res.redirect('https://github.com/linoxolus');
                } else {
                    res.status(400).json({
                        message: "Login Failed"
                    })
                }
            }
        })
    }

    // [POST] /auth/register
    register(req, res, next) {
        // req.body.id =  
        users.create(req.body);
        res.status(201).send('created')
    }
}

module.exports = new authController();