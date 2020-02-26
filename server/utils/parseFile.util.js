const fs = require('fs')

const parseFileData = (filePath) => {
    const fileEncoding = 'UTF-8'
    const filmsForDatabase = []

    let films = fs.readFileSync(filePath, fileEncoding).toString().trim()

    films = films.split('\r\n\r\n')

    films.forEach(film => {
        const tempFilm = film.split('\r\n')
        const objFilm = {}

        tempFilm.map(data => {
            let key = data.split(':', 1).toString().toLowerCase()
            let value = data.split(': ').slice(1).join(': ').trim()

            objFilm[(key === 'release year') ? 'release_year' : key] = value
        })

        filmsForDatabase.push(objFilm)
    })

    return filmsForDatabase
}

module.exports = {
    parseFileData
}