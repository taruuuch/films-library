const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const morgan = require('morgan')
const setupRoutes = require('./utils/routes.util')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('[:method] :url :status :res[content-length] - :response-time ms'))
// Security setting
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE'
}))
app.use(helmet())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many accounts created from this IP, please try again after an hour'
}))

// Settuping RESP API routes
setupRoutes(app)

// Handling errors
app.use(async (req, res, next) => {
    const error = new Error(`API link not found!`)
    error.status = 404
    error.path = `${req.protocol}://${req.get('host')}${req.originalUrl}`

    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            code: error.status,
            path: error.path
        }
    })
})

module.exports = app