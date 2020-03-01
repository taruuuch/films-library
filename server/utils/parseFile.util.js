const fs = require('fs')

const splitLine = (line, length) => line.replace(/\r\n|\n\r|\n|\r/g, '\n').split('\n'.repeat(length))

const parseFileData = (filePath) => {
    const fileEncoding = 'UTF-8'
    const filmsForDatabase = []
    const fileData = fs.readFileSync(filePath, fileEncoding).toString().trim()

    if (fileData.length === 0) {
        return false
    }

    let films = splitLine(fileData, 2)

    films.forEach(film => {
        const tempFilm = splitLine(film, 1)
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