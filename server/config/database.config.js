const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

exports.DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOST}/${NAME}?retryWrites=true&w=majority`