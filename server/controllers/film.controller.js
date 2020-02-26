const Film = require('../models/Film')

const get = async (req, res) => {
    try {
        const queryParams = Object.entries(req.query)
        const searchParams = {}

        if (queryParams.length !== 0) {
            queryParams.forEach(item => {
                searchParams[item[0]] = new RegExp(item[1], 'i')
            })
        }

        const films = await Film.find(searchParams).sort({ title: 1 })

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
                message: 'Project update error',
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

        if (!result) {
            return res.status(400).json({ message: 'Project delete error!' })
        }

        res.json({ message: 'Project delete success!' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const importFilm = async (req, res) => {
    try {

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