const multer = require('multer')
const fs = require('fs')

const FOLDER_PATH = './uploads/'
const createDir = () => fs.mkdirSync(FOLDER_PATH, { recursive: true })

const config = multer.diskStorage({
  destination: (req, file, cb) => {
    createDir()
    cb(null, FOLDER_PATH)
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
  }
})

const filters = (req, file, cb) => {
  if (file.mimetype === 'text/plain') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

exports.uploadSingleFile = fieldName => multer({
  storage: config,
  fileFilter: filters
}).single(fieldName)