const { FILMS_ROUTE } = require('../config/base.config')

module.exports = app => {
    app.use(FILMS_ROUTE, require('../routes/film.routes'))
}