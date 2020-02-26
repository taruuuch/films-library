const multer = require('multer')

const config = multer.diskStorage({
  destination: (req, file, cb) => {
    createDir()
    cb(null, 'public/upload')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const filters = (req, file, cb) => {
  if (file.mimetype === 'text/plain') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

exports.uploadSingleFile = fieldName => multer({
  storage: config,
  fileFilter: filters
}).single(fieldName)