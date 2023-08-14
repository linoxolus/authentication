class siteController {
    // [GET] /
    index(req, res, next) {
        res.render('login');
    }

    // [GET] /register
    register(req, res, next) {
        res.render('register');
    }
}

module.exports = new siteController();