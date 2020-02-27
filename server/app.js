const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const setupRoutes = require('./utils/routes.util')
const { PORT } = require('./config/base.config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Security setting
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE'
}))
app.use(helmet())
// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
//     message: 'Too many accounts created from this IP, please try again after an hour'
// }))

// Settuping RESP API routes
setupRoutes(app)

// Handling errors
app.use(async (req, res, next) => {
    const error = new Error(`Api link not found! Go to localhost:${PORT} for check available links`)
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