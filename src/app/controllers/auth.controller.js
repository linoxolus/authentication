class authController {
    // [POST] /auth/login
    login(req, res, next) {
        console.log(req.body);
    }
}

module.exports = new authController();