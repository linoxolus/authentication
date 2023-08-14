class siteController {
    index(req, res, next) {
        res.render('home');
    }
}

module.exports = new siteController();