import {} from 'dotenv/config'

export const SERVER_URI = `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}`