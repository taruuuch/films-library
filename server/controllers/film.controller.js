const Film = require('../models/Film')
const { parseFileData } = require('../utils/parseFile.util')

const getAll = async (searchParams, reqPage) => {
    const films = await Film.find(searchParams).sort({ title: 1 })
    const pageCount = Math.ceil(films.length / 10)
    let page = parseInt(reqPage) || 1

    if (page > pageCount) {
      page = pageCount
    }

    const filmsPage = {
        page,
        pageCount,
        films: films.slice(page * 10 - 10, page * 10)
    }

    return filmsPage
}

const get = async (req, res) => {
    try {
        const searchParams = {}
        const { page } = req.query

        if (Object.entries(req.query).length !== 0) {
            Object.entries(req.query).forEach(item => {
                if (item[0] === 'page') {
                    return
                } else if (item[0] === 'star') {
                    searchParams['stars'] = { $elemMatch: { first_name : new RegExp(item[1], 'i') } }
                } else {
                    searchParams[item[0]] = new RegExp(item[1], 'i')
                }
            })
        }

        const films = await getAll(searchParams, page)

        if (films.length === 0) {
            return res.status(400).json({ message: 'Films not found!' })
        }

        res.json(films)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getInfo = async (req, res) => {
    try {
        const { filmId } = req.params

        const film = await Film.findOne({ _id: filmId })

        if (!film) {
            return res.status(400).json({ message: 'Film not found! '})
        }

        res.json(film)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const addFilm = async (req, res) => {
    try {
        const body = req.body

        const film = new Film(body)

        await film.save()
            .then(film => res.status(201).json(film))
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const updateFilm = async (req, res) => {
    try {
        const { filmId } = req.params
        const body = req.body

        await Film.findOneAndUpdate(filmId, body, { new: true })
            .then(film => res.json(film))
            .catch(error => res.status(500).json({
                message: 'Film update error',
                error
            }))
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const deleteFilm = async (req, res) => {
    try {
        const { filmId } = req.params

        const result = await Film.deleteOne({ _id: filmId })
        const films = await getAll()

        if (!result) {
            return res.status(400).json({ message: 'Film delete error!' })
        }

        res.json({
            message: 'Film delete success!',
            films
        })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const importFilm = async (req, res) => {
    try {
        const fileData = parseFileData(req.file.path)

        fileData.forEach(async (film, index) => {
            await Film.findOneAndUpdate(film, film, {
                new: true,
                upsert: true
            })

            if (index === fileData.length - 1) {
                const films = await getAll()

                res.status(201).json({
                    message: 'All films imported!',
                    films
                })
            }
        })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = {
    get,
    getInfo,
    addFilm,
    updateFilm,
    deleteFilm,
    importFilm
}