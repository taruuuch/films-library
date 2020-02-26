const { body, validationResult } = require('express-validator')

const filmValidationRules = () => [
    body('title', 'Film title minimum length 2').notEmpty().isLength({ min: 2 }),
    body('release_year', 'Release year need 4 number').notEmpty().isLength({ min: 4, max: 4 }),
    body('release_year', 'Release year only numbers').notEmpty().isNumeric(),
    body('format', 'Film format is required!').notEmpty().isLength({ min: 2 }),
    body('stars', 'Minimum stars length 2').notEmpty().isLength({ min: 2 })
]

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = []
    errors.array().map(error => extractedErrors.push({ [error.param]: error.msg }))

    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = {
    filmValidationRules,
    validate
}