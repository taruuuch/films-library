const { body, validationResult } = require('express-validator')

const filmValidationRules = () => [
    body('title', 'Film title minimum length 2').isLength({ min: 2 }),
    body('release_year').isLength({ min: 4, max: 4 }).withMessage('Release year need 4 number')
                        .isNumeric().withMessage('Release year only numbers')
                        .custom(checkReleaseYearInRange).withMessage('Release year in range 1850 to 2020'),
    body('format', 'Film format is required!').isLength({ min: 2 }),
    body('stars', 'Stars not empty').notEmpty()
]

const checkReleaseYearInRange = (value, { req }) => (value >= 1850 && value <= 2020)

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = []
    errors.array().map(error => extractedErrors.push({ [error.param]: error.msg }))

    return res.status(422).json({
        message: 'There was some errors with your submission',
        errors: extractedErrors
    })
}

module.exports = {
    filmValidationRules,
    validate
}