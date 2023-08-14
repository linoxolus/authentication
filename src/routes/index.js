const siteRouter = require('./site.route');
const authRouter = require('./auth.route');

function route(app) {
    app.use('/', siteRouter);
    app.use('/auth', authRouter)
}

module.exports = route;