const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`

module.exports = {
    DB_URI
}