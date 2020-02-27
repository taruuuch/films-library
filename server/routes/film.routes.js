const { Router } = require('express')
const filmController = require('../controllers/film.controller')
const { filmValidationRules, validate } = require('../middlewares/validator.middleware')
const { uploadSingleFile } = require('../middlewares/upload.middleware')
const router = Router()

router.get(
    '/',
    filmController.get
)
router.post(
    '/',
    filmValidationRules(),
    validate,
    filmController.addFilm
)
router.post(
    '/import',
    uploadSingleFile('file'),
    filmController.importFilm
)
router.get(
    '/:filmId',
    filmController.getInfo
)
router.patch(
    '/:filmId',
    filmValidationRules(),
    validate,
    filmController.updateFilm
)
router.delete(
    '/:filmId',
    filmController.deleteFilm
)

module.exports = router