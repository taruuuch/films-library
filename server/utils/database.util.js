const mongoose = require('mongoose')
const { DB_URI } = require('../config/database.config')

exports.connect = async () => {
    try {
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }

        return await mongoose.connect(
            DB_URI,
            mongooseOptions
        ).then(resolved => {
            console.log(`Server connected to database`)

            mongoose.connection.on('error', error => console.error(`Connection error: ${error}`))

            return resolved
        })
    } catch (e) {
        console.error(`Database error: ${e.message}`)
        process.exit(1)
    }
}

exports.close = async () => await mongoose.connection.close()