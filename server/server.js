require('dotenv').config()
const app = require('./app')
const { connect } = require('./utils/database.util')
const { PORT } = require('./config/base.config')

const start = async () => {
    try {
        connect()

        app.listen(
            PORT,
            () => {
                console.clear()
                console.log(`Server start on port ${PORT}`)
            }
        )
    } catch (e) {
        console.log(`Server start error ${e.message}`)
        process.exit(1)
    }
}

start()